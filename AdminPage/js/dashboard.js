// dashboard.js - Dashboard page template with Surabaya data
const dashboardPage = `
<div class="space-y-6">
  <!-- Header -->
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Dashboard Wisata Surabaya</h1>
      <p class="text-gray-600">Ringkasan statistik dan aktivitas terkini</p>
    </div>
    <div class="flex gap-3">
      <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition flex items-center gap-2">
        📥 Ekspor Laporan
      </button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
        🔄 Refresh
      </button>
    </div>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Total Tiket -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Total Tiket Terjual</p>
          <p class="text-2xl font-bold mt-1">2,847</p>
        </div>
        <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
          <span class="text-2xl">🎫</span>
        </div>
      </div>
      <div class="mt-4 flex items-center text-sm">
        <span class="text-green-600 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          +18.5%
        </span>
        <span class="text-gray-500 ml-2">vs bulan lalu</span>
      </div>
    </div>

    <!-- Total Pendapatan -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Total Pendapatan</p>
          <p class="text-2xl font-bold mt-1">Rp 156.8JT</p>
        </div>
        <div class="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
          <span class="text-2xl">💰</span>
        </div>
      </div>
      <div class="mt-4 flex items-center text-sm">
        <span class="text-green-600 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          +22.3%
        </span>
        <span class="text-gray-500 ml-2">vs bulan lalu</span>
      </div>
    </div>

    <!-- Destinasi Aktif -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Destinasi Aktif</p>
          <p class="text-2xl font-bold mt-1">14</p>
        </div>
        <div class="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
          <span class="text-2xl">📍</span>
        </div>
      </div>
      <div class="mt-4 flex items-center text-sm">
        <span class="text-green-600 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          +2 baru
        </span>
        <span class="text-gray-500 ml-2">30 hari terakhir</span>
      </div>
    </div>

    <!-- Rating Pengunjung -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Rating Pengunjung</p>
          <p class="text-2xl font-bold mt-1">4.7</p>
        </div>
        <div class="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
          <span class="text-2xl">⭐</span>
        </div>
      </div>
      <div class="mt-4 flex items-center text-sm">
        <span class="text-green-600 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          +0.3
        </span>
        <span class="text-gray-500 ml-2">dari 5.0</span>
      </div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Revenue Chart -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between mb-6">
        <h3 class="font-semibold text-lg">Grafik Pendapatan 30 Hari</h3>
        <select class="text-sm border border-gray-300 rounded-lg px-3 py-1">
          <option>30 Hari Terakhir</option>
          <option>Bulan Ini</option>
          <option>Tahun Ini</option>
        </select>
      </div>
      <div class="h-72">
        <canvas id="revenueChart"></canvas>
      </div>
    </div>

    <!-- Popular Destinations in Surabaya -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <h3 class="font-semibold text-lg mb-6">Destinasi Populer Surabaya</h3>
      <div class="space-y-4">
        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
              ⭐
            </div>
            <div>
              <p class="font-medium">Tugu Pahlawan</p>
              <p class="text-sm text-gray-500">Monumen Sejarah</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold">485 tiket</p>
            <p class="text-sm text-green-600">+25%</p>
          </div>
        </div>
        
        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white">
              🐯
            </div>
            <div>
              <p class="font-medium">Kebun Binatang Surabaya</p>
              <p class="text-sm text-gray-500">Wisata Keluarga</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold">392 tiket</p>
            <p class="text-sm text-green-600">+18%</p>
          </div>
        </div>
        
        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
              🏛️
            </div>
            <div>
              <p class="font-medium">House of Sampoerna</p>
              <p class="text-sm text-gray-500">Museum Heritage</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold">347 tiket</p>
            <p class="text-sm text-green-600">+15%</p>
          </div>
        </div>

        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white">
              🚤
            </div>
            <div>
              <p class="font-medium">Monumen Kapal Selam</p>
              <p class="text-sm text-gray-500">Wisata Edukasi</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-semibold">298 tiket</p>
            <p class="text-sm text-green-600">+12%</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Recent Orders Surabaya -->
  <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
    <div class="p-6 border-b">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold text-lg">Pemesanan Terbaru</h3>
        <button class="text-sm text-brand hover:text-brand-dark font-medium">
          Lihat Semua →
        </button>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="text-left p-4 text-sm font-medium text-gray-500">ID Pesanan</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Nama</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Destinasi</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Tanggal</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Status</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Total</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">#SBY001589</td>
            <td class="p-4">
              <div class="font-medium">Ahmad Wijaya</div>
              <div class="text-sm text-gray-500">ahmad@email.com</div>
            </td>
            <td class="p-4">Tugu Pahlawan + Monkasel</td>
            <td class="p-4">15 Mar 2025</td>
            <td class="p-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Selesai
              </span>
            </td>
            <td class="p-4 font-medium">Rp 75,000</td>
            <td class="p-4">
              <button class="text-sm text-brand hover:text-brand-dark font-medium">
                Detail
              </button>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">#SBY001588</td>
            <td class="p-4">
              <div class="font-medium">Siti Rahayu</div>
              <div class="text-sm text-gray-500">siti@email.com</div>
            </td>
            <td class="p-4">Kebun Binatang Surabaya</td>
            <td class="p-4">14 Mar 2025</td>
            <td class="p-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Pending
              </span>
            </td>
            <td class="p-4 font-medium">Rp 45,000</td>
            <td class="p-4">
              <button class="text-sm text-brand hover:text-brand-dark font-medium">
                Detail
              </button>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">#SBY001587</td>
            <td class="p-4">
              <div class="font-medium">Budi Santoso</div>
              <div class="text-sm text-gray-500">budi@email.com</div>
            </td>
            <td class="p-4">House of Sampoerna</td>
            <td class="p-4">14 Mar 2025</td>
            <td class="p-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Dikonfirmasi
              </span>
            </td>
            <td class="p-4 font-medium">Rp 0</td>
            <td class="p-4">
              <button class="text-sm text-brand hover:text-brand-dark font-medium">
                Detail
              </button>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">#SBY001586</td>
            <td class="p-4">
              <div class="font-medium">Maya Indah</div>
              <div class="text-sm text-gray-500">maya@email.com</div>
            </td>
            <td class="p-4">Ciputra Waterpark</td>
            <td class="p-4">13 Mar 2025</td>
            <td class="p-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Selesai
              </span>
            </td>
            <td class="p-4 font-medium">Rp 240,000</td>
            <td class="p-4">
              <button class="text-sm text-brand hover:text-brand-dark font-medium">
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Quick Stats -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Visitor Demographics -->
    <div class="bg-white rounded-xl border shadow-sm p-6">
      <h3 class="font-semibold text-lg mb-4">Demografi Pengunjung</h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Domestik</span>
          <span class="font-medium">85%</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Mancanegara</span>
          <span class="font-medium">15%</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Pelajar</span>
          <span class="font-medium">42%</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Keluarga</span>
          <span class="font-medium">38%</span>
        </div>
      </div>
    </div>

    <!-- Top Month -->
    <div class="bg-white rounded-xl border shadow-sm p-6">
      <h3 class="font-semibold text-lg mb-4">Bulan Terbaik</h3>
      <div class="flex items-center justify-center h-32">
        <div class="text-center">
          <div class="text-3xl font-bold text-brand">Juli</div>
          <div class="text-gray-600 mt-2">+45% dari rata-rata</div>
          <div class="text-sm text-gray-500">Liburan sekolah</div>
        </div>
      </div>
    </div>

    <!-- Satisfaction Rate -->
    <div class="bg-white rounded-xl border shadow-sm p-6">
      <h3 class="font-semibold text-lg mb-4">Tingkat Kepuasan</h3>
      <div class="flex items-center justify-center h-32">
        <div class="text-center">
          <div class="text-3xl font-bold text-yellow-500">92%</div>
          <div class="text-gray-600 mt-2">Sangat Puas</div>
          <div class="text-sm text-gray-500">Berdasarkan 500 review</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
