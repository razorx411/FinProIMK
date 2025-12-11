// settings.js - Settings page template with Surabaya data
const settingsPage = `
<div class="space-y-6">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Pengaturan Sistem</h1>
      <p class="text-gray-600">Konfigurasi sistem dan preferensi admin</p>
    </div>
    <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition">
      💾 Simpan Semua Perubahan
    </button>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Left Column -->
    <div class="lg:col-span-2 space-y-6">
      <!-- Account Settings -->
      <div class="bg-white p-6 rounded-xl border shadow-sm">
        <h3 class="text-lg font-semibold mb-6">Akun Admin</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" value="Admin Wisata Surabaya">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2" value="admin@wisatasurabaya.id">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">No. Telepon</label>
            <input type="tel" class="w-full border border-gray-300 rounded-lg px-3 py-2" value="+62 31 123 4567">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50" value="Super Admin" readonly>
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
            <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" value="Jl. Taman Sampoerna No. 6, Surabaya">
          </div>
        </div>
      </div>

      <!-- Password Change -->
      <div class="bg-white p-6 rounded-xl border shadow-sm">
        <h3 class="text-lg font-semibold mb-6">Ubah Password</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password Saat Ini</label>
            <input type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password Baru</label>
            <input type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password Baru</label>
            <input type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2">
          </div>
          <button class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition">
            Ubah Password
          </button>
        </div>
      </div>

      <!-- System Settings -->
      <div class="bg-white p-6 rounded-xl border shadow-sm">
        <h3 class="text-lg font-semibold mb-6">Pengaturan Sistem</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium">Notifikasi Email</p>
              <p class="text-sm text-gray-600">Kirim notifikasi via email untuk pemesanan baru</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
            </label>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium">Mode Maintenance</p>
              <p class="text-sm text-gray-600">Nonaktifkan sementara sistem untuk maintenance</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
            </label>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium">Auto Backup Data</p>
              <p class="text-sm text-gray-600">Backup otomatis setiap hari pukul 02:00</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
            </label>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Zona Waktu</label>
            <select class="w-full border border-gray-300 rounded-lg px-3 py-2">
              <option value="WIB" selected>WIB (UTC+7) - Jakarta, Surabaya</option>
              <option value="WITA">WITA (UTC+8) - Bali, Makassar</option>
              <option value="WIT">WIT (UTC+9) - Papua</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Bahasa</label>
            <select class="w-full border border-gray-300 rounded-lg px-3 py-2">
              <option value="id" selected>Bahasa Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column -->
    <div class="space-y-6">
      <!-- System Info -->
      <div class="bg-white p-6 rounded-xl border shadow-sm">
        <h3 class="text-lg font-semibold mb-4">Informasi Sistem</h3>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-600">Versi Aplikasi</span>
            <span class="font-medium">v3.2.1</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Total Destinasi</span>
            <span class="font-medium">14</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Total Pemesanan</span>
            <span class="font-medium">2,847</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Pengguna Aktif</span>
            <span class="font-medium">3</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Database Size</span>
            <span class="font-medium">48.2 MB</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Terakhir Update</span>
            <span class="font-medium">15 Mar 2025</span>
          </div>
        </div>
        <div class="mt-6 pt-6 border-t">
          <button class="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition">
            🔄 Periksa Update
          </button>
        </div>
      </div>

      <!-- Backup & Restore -->
      <div class="bg-white p-6 rounded-xl border shadow-sm">
        <h3 class="text-lg font-semibold mb-4">Backup & Restore</h3>
        <div class="space-y-3">
          <button class="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition flex items-center justify-between">
            <span>💾 Backup Sekarang</span>
            <span>→</span>
          </button>
          <button class="w-full px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition flex items-center justify-between">
            <span>📥 Restore Data</span>
            <span>→</span>
          </button>
          <button class="w-full px-4 py-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition flex items-center justify-between">
            <span>📋 Riwayat Backup</span>
            <span>→</span>
          </button>
        </div>
        <div class="mt-4 text-sm text-gray-600">
          <p>Backup terakhir: <span class="font-medium">14 Mar 2025, 02:00 WIB</span></p>
        </div>
      </div>

      <!-- Danger Zone -->
      <div class="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
        <h3 class="text-lg font-semibold mb-4 text-red-700">Zona Berbahaya</h3>
        <div class="space-y-3">
          <button class="w-full px-4 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition">
            🗑️ Hapus Data Testing
          </button>
          <button class="w-full px-4 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition">
            🔄 Reset Pengaturan
          </button>
          <button class="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            ⚠️ Hapus Semua Data
          </button>
        </div>
        <div class="mt-4 text-sm text-red-600">
          <p>⚠️ Tindakan ini tidak dapat dibatalkan. Pastikan Anda sudah backup data penting.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- API Settings -->
  <div class="bg-white p-6 rounded-xl border shadow-sm">
    <h3 class="text-lg font-semibold mb-6">Pengaturan API</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">API Key</label>
        <div class="flex gap-2">
          <input type="text" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 bg-gray-50" value="sb_sk_test_51KjHx2LsiOqGeR4T7w9xYz8aBcDeFgH" readonly>
          <button class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            Salin
          </button>
        </div>
        <p class="text-xs text-gray-500 mt-1">Gunakan untuk integrasi dengan sistem eksternal</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Webhook URL</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" value="https://api.wisatasurabaya.id/webhook">
      </div>
      <div class="md:col-span-2">
        <button class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          🔑 Generate API Key Baru
        </button>
      </div>
    </div>
  </div>
</div>
`;
