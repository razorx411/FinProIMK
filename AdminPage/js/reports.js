// reports.js - Reports page template with Surabaya data
const reportsPage = `
<div class="space-y-6">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Laporan & Analitik</h1>
      <p class="text-gray-600">Analisis lengkap performa wisata Surabaya</p>
    </div>
    <div class="flex gap-3">
      <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition flex items-center gap-2">
        📊 Generate Report
      </button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
        ⚙️ Settings
      </button>
    </div>
  </div>

  <!-- Report Period Selector -->
  <div class="bg-white p-6 rounded-xl border shadow-sm">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h3 class="text-lg font-semibold">Pilih Periode Laporan</h3>
        <p class="text-sm text-gray-600">Pilih rentang waktu untuk analisis</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <select class="border border-gray-300 rounded-lg px-3 py-2">
          <option>Bulan Ini (Maret 2025)</option>
          <option>Januari 2025</option>
          <option>Februari 2025</option>
          <option>Kuarter 1 2025</option>
          <option>Tahun 2024</option>
        </select>
        <input type="date" class="border border-gray-300 rounded-lg px-3 py-2" value="2025-03-01">
        <input type="date" class="border border-gray-300 rounded-lg px-3 py-2" value="2025-03-31">
        <button class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
          Terapkan
        </button>
      </div>
    </div>
  </div>

  <!-- Key Metrics -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      <div class="mt-4">
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-green-500" style="width: 85%"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500 mt-1">
          <span>Target: Rp 180JT</span>
          <span>85%</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Pengunjung</p>
          <p class="text-2xl font-bold mt-1">8,942</p>
        </div>
        <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
          <span class="text-2xl">👥</span>
        </div>
      </div>
      <div class="mt-4">
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-blue-500" style="width: 72%"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500 mt-1">
          <span>Target: 12,500</span>
          <span>72%</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Destinasi Teratas</p>
          <p class="text-2xl font-bold mt-1">Tugu Pahlawan</p>
        </div>
        <div class="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
          <span class="text-2xl">🏆</span>
        </div>
      </div>
      <div class="mt-4">
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-purple-500" style="width: 65%"></div>
        </div>
        <div class="text-xs text-gray-500 mt-1">
          <span>485 tiket (+25%)</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Rating Rata-rata</p>
          <p class="text-2xl font-bold mt-1">4.7/5.0</p>
        </div>
        <div class="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
          <span class="text-2xl">⭐</span>
        </div>
      </div>
      <div class="mt-4">
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-yellow-500" style="width: 94%"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500 mt-1">
          <span>Berdasarkan 500 review</span>
          <span>94%</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Revenue Trend -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between mb-6">
        <h3 class="font-semibold text-lg">Trend Pendapatan Bulanan</h3>
        <select class="text-sm border border-gray-300 rounded-lg px-3 py-1">
          <option>6 Bulan Terakhir</option>
          <option>1 Tahun</option>
          <option>2 Tahun</option>
        </select>
      </div>
      <div class="h-72">
        <canvas id="monthlyRevenueChart"></canvas>
      </div>
      <div class="mt-4 text-sm text-gray-600">
        <p>📈 Peningkatan pendapatan terlihat signifikan pada bulan Juli (liburan sekolah) dan Desember (akhir tahun).</p>
      </div>
    </div>

    <!-- Destination Performance -->
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <div class="flex items-center justify-between mb-6">
        <h3 class="font-semibold text-lg">Performa Destinasi</h3>
        <select class="text-sm border border-gray-300 rounded-lg px-3 py-1">
          <option>Berdasarkan Tiket</option>
          <option>Berdasarkan Pendapatan</option>
          <option>Berdasarkan Rating</option>
        </select>
      </div>
      <div class="space-y-4">
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">Tugu Pahlawan</span>
            <span class="text-sm font-medium">485</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500" style="width: 100%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">Kebun Binatang Surabaya</span>
            <span class="text-sm font-medium">392</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-green-500" style="width: 81%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">House of Sampoerna</span>
            <span class="text-sm font-medium">347</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-purple-500" style="width: 72%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">Monumen Kapal Selam</span>
            <span class="text-sm font-medium">298</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-red-500" style="width: 61%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">Ciputra Waterpark</span>
            <span class="text-sm font-medium">215</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-yellow-500" style="width: 44%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Visitor Demographics -->
  <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
    <div class="p-6 border-b">
      <h3 class="font-semibold text-lg">Demografi Pengunjung</h3>
    </div>
    <div class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Age Distribution -->
        <div>
          <h4 class="font-medium mb-4">Distribusi Usia</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm">Anak-anak (0-12)</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-400" style="width: 25%"></div>
                </div>
                <span class="text-sm font-medium">25%</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">Remaja (13-19)</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-green-400" style="width: 35%"></div>
                </div>
                <span class="text-sm font-medium">35%</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">Dewasa (20-40)</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-purple-400" style="width: 28%"></div>
                </div>
                <span class="text-sm font-medium">28%</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">Lansia (41+)</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-yellow-400" style="width: 12%"></div>
                </div>
                <span class="text-sm font-medium">12%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Visitor Origin -->
        <div>
          <h4 class="font-medium mb-4">Asal Pengunjung</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm">Surabaya & Sekitarnya</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-400" style="width: 45%"></div>
                </div>
                <span class="text-sm font-medium">45%</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">Jawa Timur Lainnya</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-green-400" style="width: 30%"></div>
                </div>
                <span class="text-sm font-medium">30%</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">Luar Jawa Timur</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-purple-400" style="width: 20%"></div>
                </div>
                <span class="text-sm font-medium">20%</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm">Mancanegara</span>
              <div class="flex items-center gap-2">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-yellow-400" style="width: 5%"></div>
                </div>
                <span class="text-sm font-medium">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Report Actions -->
  <div class="bg-white rounded-xl border shadow-sm p-6">
    <h3 class="text-lg font-semibold mb-4">Generate & Export Laporan</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
        <div class="text-3xl mb-2">📄</div>
        <h4 class="font-medium mb-2">Laporan Bulanan</h4>
        <p class="text-sm text-gray-600 mb-3">Ringkasan performa bulanan lengkap dengan analisis</p>
        <button class="w-full px-3 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark text-sm">
          Generate
        </button>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
        <div class="text-3xl mb-2">📊</div>
        <h4 class="font-medium mb-2">Analisis Destinasi</h4>
        <p class="text-sm text-gray-600 mb-3">Performa detail setiap destinasi wisata</p>
        <button class="w-full px-3 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark text-sm">
          Generate
        </button>
      </div>
      <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
        <div class="text-3xl mb-2">👥</div>
        <h4 class="font-medium mb-2">Laporan Pengunjung</h4>
        <p class="text-sm text-gray-600 mb-3">Demografi dan preferensi pengunjung</p>
        <button class="w-full px-3 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark text-sm">
          Generate
        </button>
      </div>
    </div>
  </div>
</div>
`;
