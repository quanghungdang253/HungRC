<template>
  <header class="bg-[#0b131a] relative z-50">
    <div class="flex items-center justify-between border-b border-gray-800 text-white px-6 py-4 max-w-[1280px] mx-auto">
      
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center space-x-3 select-none no-underline group">
        <div class="w-10 h-10 bg-[#f1a817] rounded-lg flex items-center justify-center shadow-lg shadow-yellow-600/20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0b131a] animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h1 class="text-xl font-black tracking-wider text-white flex items-center">
            HUNG <span class="text-[#f1a817] ml-1.5">DIY</span>
          </h1>
          <p class="text-[10px] text-white font-medium tracking-wide">Lắp ráp • Chế tạo • Điều khiển</p>
        </div>
      </RouterLink>

      <!-- Menu Desktop -->
      <nav class="hidden md:flex items-center space-x-10">
        <RouterLink 
          v-for="item in menuItems" 
          :key="item.id"
          :to="item.path"
          class="text-sm font-semibold transition-all duration-300 relative py-2 block tracking-wide no-underline"
          :class="[
            route?.path === item.path ? 'text-white' : 'text-gray-400 hover:text-white'
          ]"
        >
          {{ item.text }}
          <span 
            v-if="route?.path === item.path" 
            class="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f1a817] rounded-full"
          ></span>
        </RouterLink>
      </nav>

      <!-- Nút hành động và Hamburger Menu (Mobile) -->
      <div class="flex items-center space-x-3">
        <!-- Nút Liên hệ (Desktop và Mobile đều thấy) -->
        <button 
          @click="handleContactClick"
          class="bg-[#f1a817] hover:bg-[#d99210] text-[#0b131a] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center space-x-1.5 sm:space-x-2 transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-yellow-600/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
          </svg>
          <span class="hidden sm:inline">Liên hệ ngay</span>
          <span class="inline sm:hidden">Liên hệ</span>
        </button>

        <!-- Nút Hamburger Mở Menu (Chỉ hiện trên di động) -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
          aria-label="Open Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu Mobile Sidebar (Xổ từ phải sang trái) -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden flex justify-end">
      <!-- Lớp nền mờ phía sau, bấm vào sẽ đóng menu -->
      <div 
        @click="closeMobileMenu" 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      <!-- Khung chứa nội dung Menu chính -->
      <transition name="slide-left" appear>
        <div class="relative w-[280px] max-w-full bg-[#0e1922] h-full shadow-2xl flex flex-col justify-between border-l border-gray-800 z-10">
          
          <!-- Phần đầu của Sidebar (Gồm logo nhỏ và nút Close) -->
          <div>
            <div class="flex items-center justify-between px-6 py-5 border-b border-gray-800/60">
              <span class="text-xs font-bold uppercase tracking-widest text-[#f1a817]">Danh mục</span>
              <button 
                @click="closeMobileMenu" 
                class="p-2 text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
                aria-label="Close Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Danh sách Link điều hướng -->
            <nav class="px-4 py-4 space-y-2">
              <RouterLink 
                v-for="item in menuItems" 
                :key="item.id"
                :to="item.path"
                @click="closeMobileMenu"
                class="block px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide no-underline transition-all duration-200"
                :class="[
                  route?.path === item.path 
                    ? 'bg-[#f1a817]/10 text-[#f1a817] border-r-4 border-[#f1a817] pr-3' 
                    : 'text-gray-300 hover:bg-gray-800/40 hover:text-white'
                ]"
              >
                {{ item.text }}
              </RouterLink>
            </nav>
          </div>

          <!-- Phần chân của Sidebar (Thông tin bản quyền hoặc liên kết nhanh phụ) -->
          <div class="p-6 border-t border-gray-800/60 text-center">
            <p class="text-[10px] text-gray-500 tracking-wider">© 2026 HUNG DIY. All rights reserved.</p>
          </div>

        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Trạng thái menu mobile
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Cấu hình đường dẫn cho các mục
const menuItems = ref([
  { id: 'home', text: 'Trang chủ', path: '/' },
  { id: 'parts', text: 'Linh kiện', path: '/products' },
  { id: 'models', text: 'Mô hình', path: '/assembly-model' },
  { id: 'contact', text: 'Liên hệ', path: '/contact' }
])

// Hàm chuyển trang an toàn
const handleContactClick = () => {
  closeMobileMenu() // Đóng menu mobile nếu đang mở
  if (router) {
    router.push('/contact')
  } else {
    window.location.href = '#/contact' // Cách dự phòng nếu router lỗi
  }
}
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 12s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Hiệu ứng trượt từ phải sang trái (Slide Left) */
.slide-left-enter-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-left-leave-active {
  transition: transform 0.25s cubic-bezier(0.7, 0, 0.84, 0);
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(100%); /* Bắt đầu từ ngoài rìa phải màn hình */
}
</style>