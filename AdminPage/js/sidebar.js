// sidebar.js - Fixed version
(function() {
  'use strict';
  
  const sidebar = document.getElementById('sidebar');
  const toggleDesktopBtn = document.getElementById('toggleSidebarDesktop');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  
  let isMobile = window.innerWidth < 768;
  let sidebarCollapsed = false;
  let mobileMenuOpen = false;
  
  // Initialize sidebar state
  function initSidebar() {
    isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Mobile mode - hidden by default
      sidebar.classList.remove('collapsed');
      sidebar.classList.add('mobile-hidden');
      mobileOverlay.classList.remove('show');
      document.body.style.overflow = '';
      mobileMenuOpen = false;
      sidebarCollapsed = false;
      
      console.log('Sidebar: Mobile mode initialized');
    } else {
      // Desktop mode - load saved state
      sidebar.classList.remove('mobile-hidden', 'mobile-open');
      mobileOverlay.classList.remove('show');
      document.body.style.overflow = '';
      mobileMenuOpen = false;
      
      try {
        const savedState = localStorage.getItem('sidebarCollapsed');
        sidebarCollapsed = savedState === 'true';
        if (sidebarCollapsed) {
          sidebar.classList.add('collapsed');
        } else {
          sidebar.classList.remove('collapsed');
        }
      } catch(e) {
        console.warn('Cannot access localStorage');
      }
      
      console.log('Sidebar: Desktop mode initialized, collapsed:', sidebarCollapsed);
    }
  }
  
  // Desktop toggle functionality
  if (toggleDesktopBtn) {
    toggleDesktopBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (!isMobile) {
        sidebarCollapsed = !sidebarCollapsed;
        sidebar.classList.toggle('collapsed');
        
        // Update arrow icon
        const icon = this.querySelector('svg path');
        if (sidebarCollapsed) {
          // Show right arrow (collapsed)
          icon.setAttribute('d', 'M13 5l7 7-7 7M5 5l7 7-7 7');
        } else {
          // Show left arrow (expanded)
          icon.setAttribute('d', 'M11 19l-7-7 7-7m8 14l-7-7 7-7');
        }
        
        // Save state
        try {
          localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
        } catch(e) {
          console.warn('Cannot save sidebar state');
        }
      }
    });
  }
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (isMobile) {
        mobileMenuOpen = !mobileMenuOpen;
        sidebar.classList.toggle('mobile-open');
        mobileOverlay.classList.toggle('show');
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
      }
    });
  }
  
  // Close mobile menu when overlay clicked
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function() {
      if (isMobile && mobileMenuOpen) {
        mobileMenuOpen = false;
        sidebar.classList.remove('mobile-open');
        mobileOverlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Close mobile menu when nav item clicked
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (isMobile && mobileMenuOpen) {
        mobileMenuOpen = false;
        sidebar.classList.remove('mobile-open');
        mobileOverlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      initSidebar();
    }, 250);
  });
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
  } else {
    initSidebar();
  }
  
})();
