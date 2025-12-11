// pemesanan.js - Manage Ticket page template with Surabaya data
const pemesananPage = `
<div class="space-y-6">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Manajemen Pemesanan</h1>
      <p class="text-gray-600">Kelola semua pemesanan tiket wisata Surabaya</p>
    </div>
    <div class="flex gap-3">
      <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition flex items-center gap-2">
        ➕ Buat Pemesanan
      </button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
        📋 Filter
      </button>
    </div>
  </div>

  <!-- Filter Section -->
  <div class="bg-white p-6 rounded-xl border shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select class="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option value="">Semua Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Dikonfirmasi</option>
          <option value="completed">Selesai</option>
          <option value="cancelled">Dibatalkan</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
        <input type="date" class="w-full border border-gray-300 rounded-lg px-3 py-2">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir</label>
        <input type="date" class="w-full border border-gray-300 rounded-lg px-3 py-2">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Destinasi</label>
        <select class="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option value="">Semua Destinasi</option>
          <option value="tugu">Tugu Pahlawan</option>
          <option value="kbs">Kebun Binatang Surabaya</option>
          <option value="hos">House of Sampoerna</option>
          <option value="monkasel">Monumen Kapal Selam</option>
          <option value="snq">Surabaya North Quay</option>
          <option value="ciputra">Ciputra Waterpark</option>
          <option value="kenjeran">Pantai Kenjeran</option>
        </select>
      </div>
      <div class="flex items-end">
        <button class="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
          Terapkan Filter
        </button>
      </div>
    </div>
  </div>

  <!-- Quick Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-white p-4 rounded-xl border shadow-sm">
      <div class="text-center">
        <div class="text-2xl font-bold text-blue-600">42</div>
        <div class="text-sm text-gray-600">Pending</div>
      </div>
    </div>
    <div class="bg-white p-4 rounded-xl border shadow-sm">
      <div class="text-center">
        <div class="text-2xl font-bold text-green-600">156</div>
        <div class="text-sm text-gray-600">Dikonfirmasi</div>
      </div>
    </div>
    <div class="bg-white p-4 rounded-xl border shadow-sm">
      <div class="text-center">
        <div class="text-2xl font-bold text-purple-600">2,489</div>
        <div class="text-sm text-gray-600">Selesai</div>
      </div>
    </div>
    <div class="bg-white p-4 rounded-xl border shadow-sm">
      <div class="text-center">
        <div class="text-2xl font-bold text-red-600">18</div>
        <div class="text-sm text-gray-600">Dibatalkan</div>
      </div>
    </div>
  </div>

  <!-- Orders Table -->
  <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
    <div class="p-6">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="text-left p-4 text-sm font-medium text-gray-500">ID Pemesanan</th>
              <th class="text-left p-4 text-sm font-medium text-gray-500">Customer</th>
              <th class="text-left p-4 text-sm font-medium text-gray-500">Destinasi</th>
              <th class="text-left p-4 text-sm font-medium text-gray-500">Jumlah</th>
              <th class="text-left p-4 text-sm font-medium text-gray-500">Tanggal</th>
              <th class="text-left p-4 text-sm font-medium text-gray-500">Total</th>
              <th class="text-left p-4 text-sm font-medium text-gray-500">Status</th>
              <th class="text-left p-4 text-sm font-medium text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <!-- Order 1 -->
            <tr class="hover:bg-gray-50">
              <td class="p-4 font-medium">#SBY001589</td>
              <td class="p-4">
                <div class="font-medium">Ahmad Wijaya</div>
                <div class="text-sm text-gray-500">+62 812-3456-7890</div>
              </td>
              <td class="p-4">
                <div class="font-medium">Tugu Pahlawan</div>
                <div class="text-sm text-gray-500">Paket Kombo</div>
              </td>
              <td class="p-4">3 dewasa, 2 anak</td>
              <td class="p-4">15 Mar 2025</td>
              <td class="p-4 font-medium">Rp 75,000</td>
              <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Selesai
                </span>
              </td>
              <td class="p-4">
                <div class="flex gap-2">
                  <button class="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                    Detail
                  </button>
                  <button class="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                    Cetak
                  </button>
                </div>
              </td>
            </tr>
            
            <!-- Order 2 -->
            <tr class="hover:bg-gray-50">
              <td class="p-4 font-medium">#SBY001588</td>
              <td class="p-4">
                <div class="font-medium">Siti Rahayu</div>
                <div class="text-sm text-gray-500">siti.rahayu@email.com</div>
              </td>
              <td class="p-4">
                <div class="font-medium">Kebun Binatang Surabaya</div>
                <div class="text-sm text-gray-500">Tiket Reguler</div>
              </td>
              <td class="p-4">2 dewasa</td>
              <td class="p-4">14 Mar 2025</td>
              <td class="p-4 font-medium">Rp 30,000</td>
              <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </td>
              <td class="p-4">
                <div class="flex gap-2">
                  <button class="px-3 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200">
                    Konfirmasi
                  </button>
                  <button class="px-3 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200">
                    Tolak
                  </button>
                </div>
              </td>
            </tr>
            
            <!-- Order 3 -->
            <tr class="hover:bg-gray-50">
              <td class="p-4 font-medium">#SBY001587</td>
              <td class="p-4">
                <div class="font-medium">Budi Santoso</div>
                <div class="text-sm text-gray-500">+62 823-9876-5432</div>
              </td>
              <td class="p-4">
                <div class="font-medium">House of Sampoerna</div>
                <div class="text-sm text-gray-500">Gratis</div>
              </td>
              <td class="p-4">1 dewasa</td>
              <td class="p-4">14 Mar 2025</td>
              <td class="p-4 font-medium">Gratis</td>
              <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Dikonfirmasi
                </span>
              </td>
              <td class="p-4">
                <div class="flex gap-2">
                  <button class="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                    Detail
                  </button>
                  <button class="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                    QR Code
                  </button>
                </div>
              </td>
            </tr>
            
            <!-- Order 4 -->
            <tr class="hover:bg-gray-50">
              <td class="p-4 font-medium">#SBY001586</td>
              <td class="p-4">
                <div class="font-medium">Maya Indah</div>
                <div class="text-sm text-gray-500">maya.indah@email.com</div>
              </td>
              <td class="p-4">
                <div class="font-medium">Ciputra Waterpark</div>
                <div class="text-sm text-gray-500">Weekend Pass</div>
              </td>
              <td class="p-4">2 dewasa, 1 anak</td>
              <td class="p-4">13 Mar 2025</td>
              <td class="p-4 font-medium">Rp 360,000</td>
              <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Selesai
                </span>
              </td>
              <td class="p-4">
                <div class="flex gap-2">
                  <button class="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                    Detail
                  </button>
                  <button class="px-3 py-1 text-xs bg-purple-100 text-purple-800 rounded hover:bg-purple-200">
                    Invoice
                  </button>
                </div>
              </td>
            </tr>
            
            <!-- Order 5 -->
            <tr class="hover:bg-gray-50">
              <td class="p-4 font-medium">#SBY001585</td>
              <td class="p-4">
                <div class="font-medium">Rudi Hartono</div>
                <div class="text-sm text-gray-500">+62 811-2233-4455</div>
              </td>
              <td class="p-4">
                <div class="font-medium">Monumen Kapal Selam</div>
                <div class="text-sm text-gray-500">Tiket Pelajar</div>
              </td>
              <td class="p-4">1 pelajar</td>
              <td class="p-4">12 Mar 2025</td>
              <td class="p-4 font-medium">Rp 15,000</td>
              <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Dibatalkan
                </span>
              </td>
              <td class="p-4">
                <div class="flex gap-2">
                  <button class="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                    Riwayat
                  </button>
                  <button class="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                    Buat Ulang
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Pagination -->
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-sm text-gray-500">
          Menampilkan 1-5 dari 2,705 pemesanan
        </div>
        <div class="flex gap-2">
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
            ← Sebelumnya
          </button>
          <button class="px-3 py-1 bg-brand text-white rounded-lg">1</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">4</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">5</button>
          <button class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">
            Selanjutnya →
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Export Options -->
  <div class="bg-white rounded-xl border shadow-sm p-6">
    <h3 class="text-lg font-semibold mb-4">Ekspor Data</h3>
    <div class="flex flex-wrap gap-4">
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
        📄 CSV
      </button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
        📊 Excel
      </button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
        🖨️ PDF
      </button>
      <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
        📧 Kirim Email
      </button>
    </div>
  </div>
</div>
`;
