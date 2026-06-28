<template>
  <footer class="w-full bg-[#031221] text-white">
    <div class="max-w-6xl mx-auto px-6 py-10 md:py-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        <div class="md:col-span-4 space-y-3 text-center md:text-left">
          <h2 class="text-xl font-bold uppercase tracking-wider border-l-4 border-yellow-500 pl-3 inline-block md:block">
            Liên hệ với mình
          </h2>
          <p class="text-sm text-gray-300 font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
            Hỗ trợ lắp ráp mô hình theo yêu cầu<br class="hidden sm:inline"/>
            giải đáp thắc mắc, tư vấn linh kiện
          </p>
        </div>

        <div class="md:col-span-5 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            :href="`https://zalo.me/${contactInfo.zaloPhone}`" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full sm:w-auto min-w-[200px] flex items-center gap-3 bg-[#2f82fb] hover:bg-[#1a6edb] text-white p-3 rounded-xl transition-all duration-200 shadow-md group"
          >
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-[#2f82fb] font-bold text-lg group-hover:scale-105 transition-transform">
              Zalo
            </div>
            <div class="flex flex-col items-start">
              <span class="text-sm font-bold">Liên hệ Zalo</span>
              <span class="text-xs text-blue-a100"> 0388985737 </span>
            </div>
          </a>

          <a 
            :href="contactInfo.facebookUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full sm:w-auto min-w-[200px] flex items-center gap-3 bg-[#2d529f] hover:bg-[#1e3d7a] text-white p-3 rounded-xl transition-all duration-200 shadow-md group"
          >
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-[#2d529f] group-hover:scale-105 transition-transform">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </div>
            <div class="flex flex-col items-start">
              <span class="text-sm font-bold">Facebook</span>
              <span class="text-xs text-blue-100">{{ contactInfo.facebookDisplay }}</span>
            </div>
          </a>
        </div>

        <div class="md:col-span-3 hidden md:flex justify-end">
          <div class="relative w-full max-w-[220px] aspect-[16/10] overflow-hidden rounded-lg shadow-sm border border-gray-800">
            <img 
              :src="contactInfo.decorImage" 
              alt="Mô hình trang trí" 
              class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

      </div>
    </div>

    <div class="w-full bg-[#020b14] py-4 border-t border-gray-900 text-center text-xs text-gray-400 font-medium tracking-wide">
      © {{ currentYear }} DIY Model – Chia sẻ đam mê, kết nối sáng tạo!
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Lấy năm hiện tại tự động cho phần Copyright
const currentYear = ref(new Date().getFullYear());

// Cấu hình thông tin liên hệ của bạn tại đây
const contactInfo = ref({
  zaloPhone: '0381234567',        // Số điện thoại để kích hoạt link zalo.me
  zaloDisplay: '038xxx5678',      // Chữ hiển thị trên nút Zalo giống ảnh mẫu
  facebookUrl: 'https://fb.com/DIYModel', // Link dẫn tới Fanpage/Trang cá nhân
  facebookDisplay: 'fb.com/DIYModel',     // Chữ hiển thị trên nút Facebook
  decorImage: 'https://via.placeholder.com/400x250?text=DIY+Model' // Thay bằng link ảnh xe ben thật của bạn
});
</script>