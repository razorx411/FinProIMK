// app.js - SPA router + logout handler
(function(){
  'use strict';

  const main = document.getElementById('main-container');
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  const breadcrumb = document.getElementById('breadcrumb');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const logoutBtn = document.getElementById('logoutBtn');
  const logoutModal = document.getElementById('logoutModal');
  const cancelLogout = document.getElementById('cancelLogout');
  const confirmLogout = document.getElementById('confirmLogout');

  // Page templates
  const pageTemplates = {
    dashboard: dashboardPage,
    pemesanan: pemesananPage,
    destinasi: destinasiPage,
    promosi: promosiPage,
    reports: reportsPage,
    settings: settingsPage
  };

  // Chart instances storage
  window.chartInstances = {};

  // Set active page
  function setActive(page){
    try {
      // Update active nav item
      navItems.forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === page) {
          a.classList.add('active');
        }
      });

      // Update breadcrumb
      const activeNav = navItems.find(a => a.dataset.page === page);
      if (activeNav) {
        const pageTitle = activeNav.querySelector('.nav-text').textContent;
        breadcrumb.textContent = pageTitle;
      }

      // Show loading
      if (loadingOverlay) {
        loadingOverlay.classList.add('show');
      }

      // Render page after delay
      setTimeout(function() {
        renderPage(page);
        if (loadingOverlay) {
          loadingOverlay.classList.remove('show');
        }
        
        // Save to localStorage
        try { 
          localStorage.setItem('lastPage', page); 
        } catch(e) {
          console.warn('localStorage not available');
        }
      }, 300);
      
    } catch (error) {
      console.error('Error setting active page:', error);
      if (loadingOverlay) {
        loadingOverlay.classList.remove('show');
      }
    }
  }

  // Render page content
  function renderPage(page) {
    let html = '';
    
    if (pageTemplates[page] && typeof pageTemplates[page] === 'string') {
      html = pageTemplates[page];
    } else {
      html = `
        <div class="p-6 bg-white rounded-lg border shadow-sm">
          <div class="text-center py-8">
            <div class="text-4xl mb-4">🚧</div>
            <h2 class="text-xl font-semibold mb-2">Halaman dalam Pengembangan</h2>
            <p class="text-sm text-gray-600">Fitur "${page}" sedang dalam proses pengembangan.</p>
          </div>
        </div>
      `;
    }
    
    main.innerHTML = html;
    
    // Initialize page-specific components
    initPageComponents(page);
  }

  // Initialize page-specific components
  function initPageComponents(page) {
    // Destroy existing charts
    if (window.chartInstances.revenueChart) {
      window.chartInstances.revenueChart.destroy();
    }
    if (window.chartInstances.monthlyRevenueChart) {
      window.chartInstances.monthlyRevenueChart.destroy();
    }
    
    switch(page) {
      case 'dashboard':
        setTimeout(renderDashboardChart, 100);
        break;
      case 'reports':
        setTimeout(renderReportsCharts, 100);
        break;
    }
  }

  // Navigation click events
  navItems.forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      const page = this.dataset.page;
      if (page) {
        setActive(page);
      }
    });
  });

  // Logout functionality
  function initLogout() {
    if (!logoutBtn || !logoutModal || !cancelLogout || !confirmLogout) return;
    
    logoutBtn.addEventListener('click', function() {
      logoutModal.classList.add('show');
    });
    
    cancelLogout.addEventListener('click', function() {
      logoutModal.classList.remove('show');
    });
    
    confirmLogout.addEventListener('click', function() {
      if (loadingOverlay) {
        loadingOverlay.classList.add('show');
      }
      
      setTimeout(function() {
        try {
          sessionStorage.clear();
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
          localStorage.removeItem('lastPage');
          localStorage.removeItem('sidebarCollapsed');
        } catch(e) {
          console.warn('Storage clear failed');
        }
        
        window.location.href = '../htmlPage/index.html';
      }, 1000);
    });
    
    // Close modal on outside click
    logoutModal.addEventListener('click', function(e) {
      if (e.target === logoutModal) {
        logoutModal.classList.remove('show');
      }
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Load last page or default to dashboard
    let lastPage = 'dashboard';
    try {
      const savedPage = localStorage.getItem('lastPage');
      if (savedPage && navItems.some(item => item.dataset.page === savedPage)) {
        lastPage = savedPage;
      }
    } catch(e) {
      console.warn('Failed to load last page from localStorage');
    }
    
    setActive(lastPage);
    initLogout();
    
    console.log('App initialized, current page:', lastPage);
  });

})();

// Dashboard chart function
function renderDashboardChart() {
  const ctx = document.getElementById("revenueChart");
  if (!ctx) return;
  
  window.chartInstances.revenueChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1 Mar", "5 Mar", "10 Mar", "15 Mar", "20 Mar", "25 Mar", "30 Mar"],
      datasets: [{
        label: "Pendapatan (JT)",
        data: [12, 18, 15, 22, 28, 25, 32],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { 
        legend: { display: false }
      },
      scales: { 
        y: { 
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return 'Rp ' + value + 'JT';
            }
          }
        }
      }
    }
  });
}

// Reports charts function
function renderReportsCharts() {
  // Monthly Revenue Chart
  const monthlyCtx = document.getElementById("monthlyRevenueChart");
  if (monthlyCtx) {
    window.chartInstances.monthlyRevenueChart = new Chart(monthlyCtx, {
      type: "bar",
      data: {
        labels: ["Okt 24", "Nov 24", "Des 24", "Jan 25", "Feb 25", "Mar 25"],
        datasets: [{
          label: "Pendapatan (JT)",
          data: [85, 92, 128, 98, 112, 156],
          backgroundColor: [
            'rgba(59, 130, 246, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(16, 185, 129, 0.7)'
          ],
          borderColor: [
            'rgb(59, 130, 246)',
            'rgb(59, 130, 246)',
            'rgb(59, 130, 246)',
            'rgb(59, 130, 246)',
            'rgb(59, 130, 246)',
            'rgb(16, 185, 129)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
          legend: { display: false }
        },
        scales: { 
          y: { 
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return 'Rp ' + value + 'JT';
              }
            }
          }
        }
      }
    });
  }
}
