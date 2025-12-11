// promosi.js - Template dengan data Surabaya
const promosiPage = `
<div class="space-y-6">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Promosi Wisata</h1>
      <p class="text-gray-600">Kelola diskon dan penawaran khusus</p>
    </div>
    <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition">
      + Buat Promosi
    </button>
  </div>

  <!-- Form Promosi -->
  <div class="bg-white rounded-xl border shadow-sm p-6">
    <h3 class="text-lg font-semibold mb-4">Buat Promosi Baru</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nama Promosi</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Contoh: Diskon Liburan Surabaya">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Kode Promo</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Contoh: SBYHOLIDAY25">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
        <input type="date" class="w-full border border-gray-300 rounded-lg px-3 py-2">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Berakhir</label>
        <input type="date" class="w-full border border-gray-300 rounded-lg px-3 py-2">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Diskon</label>
        <select class="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option value="percentage">Persentase (%)</option>
          <option value="fixed">Potongan Tetap (Rp)</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nilai Diskon</label>
        <input type="number" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Contoh: 20">
      </div>
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-1">Destinasi Terkait</label>
        <select class="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option value="">Semua Destinasi</option>
          <option value="tugu">Tugu Pahlawan</option>
          <option value="kbs">Kebun Binatang Surabaya</option>
          <option value="hos">House of Sampoerna</option>
          <option value="monkasel">Monumen Kapal Selam</option>
        </select>
      </div>
      <div class="md:col-span-2 flex justify-end gap-3 mt-4">
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          Batal
        </button>
        <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition">
          Simpan Promosi
        </button>
      </div>
    </div>
  </div>

  <!-- Daftar Promosi Aktif -->
  <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
    <div class="p-6 border-b">
      <h3 class="text-lg font-semibold">Promosi Aktif</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Nama Promosi</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Kode</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Periode</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Diskon</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Status</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">Weekend Surabaya</td>
            <td class="p-4 font-mono">WEEKEND20</td>
            <td class="p-4">01-07-2025 s/d 31-07-2025</td>
            <td class="p-4">20%</td>
            <td class="p-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Aktif
              </span>
            </td>
            <td class="p-4">
              <div class="flex gap-2">
                <button class="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Edit
                </button>
                <button class="text-sm text-yellow-600 hover:text-yellow-800 font-medium">
                  Nonaktif
                </button>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">Pelajar Surabaya</td>
            <td class="p-4 font-mono">PELAJAR30</td>
            <td class="p-4">01-06-2025 s/d 31-12-2025</td>
            <td class="p-4">30%</td>
            <td class="p-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Aktif
              </span>
            </td>
            <td class="p-4">
              <div class="flex gap-2">
                <button class="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Edit
                </button>
                <button class="text-sm text-yellow-600 hover:text-yellow-800 font-medium">
                  Nonaktif
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`;