// destinasi.js - Template dengan data Surabaya
const destinasiPage = `
<div class="space-y-6">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Destinasi Surabaya</h1>
      <p class="text-gray-600">Kelola tempat wisata di Surabaya</p>
    </div>
    <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition">
      + Tambah Destinasi
    </button>
  </div>

  <!-- Form Tambah Destinasi -->
  <div class="bg-white rounded-xl border shadow-sm p-6">
    <h3 class="text-lg font-semibold mb-4">Tambah Destinasi Baru</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nama Destinasi</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Contoh: Tugu Pahlawan">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
        <select class="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option value="">Pilih Kategori</option>
          <option value="sejarah">Sejarah & Monumen</option>
          <option value="taman">Taman Kota</option>
          <option value="hiburan">Hiburan & Keluarga</option>
          <option value="religi">Wisata Religi</option>
          <option value="kuliner">Kuliner & Belanja</option>
        </select>
      </div>
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Contoh: Jl. Pahlawan, Surabaya">
      </div>
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
        <textarea class="w-full border border-gray-300 rounded-lg px-3 py-2 h-32" placeholder="Deskripsi singkat destinasi"></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Harga Tiket (Rp)</label>
        <input type="number" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="15000">
      </div>
      <div class="md:col-span-2 flex justify-end gap-3 mt-4">
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
          Batal
        </button>
        <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition">
          Simpan Destinasi
        </button>
      </div>
    </div>
  </div>

  <!-- Daftar Destinasi -->
  <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
    <div class="p-6 border-b">
      <h3 class="text-lg font-semibold">Daftar Destinasi Surabaya</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Nama Destinasi</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Kategori</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Lokasi</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Harga Tiket</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Status</th>
            <th class="text-left p-4 text-sm font-medium text-gray-500">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">Tugu Pahlawan</td>
            <td class="p-4">Sejarah & Monumen</td>
            <td class="p-4">Jl. Pahlawan</td>
            <td class="p-4">Gratis</td>
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
                <button class="text-sm text-red-600 hover:text-red-800 font-medium">
                  Hapus
                </button>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">Kebun Binatang Surabaya</td>
            <td class="p-4">Hiburan & Keluarga</td>
            <td class="p-4">Jl. Setail</td>
            <td class="p-4">Rp 15,000</td>
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
                <button class="text-sm text-red-600 hover:text-red-800 font-medium">
                  Hapus
                </button>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-4 font-medium">House of Sampoerna</td>
            <td class="p-4">Sejarah & Museum</td>
            <td class="p-4">Jl. Taman Sampoerna</td>
            <td class="p-4">Gratis</td>
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
                <button class="text-sm text-red-600 hover:text-red-800 font-medium">
                  Hapus
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="p-4 border-t text-center">
      <button class="text-sm text-brand hover:text-brand-dark font-medium">
        Lihat Semua Destinasi →
      </button>
    </div>
  </div>
</div>
`;
