<template>
  <!-- Đổi min-h-screen để đảm bảo nền xám phủ kín toàn bộ màn hình -->
  <div class="w-full min-h-screen bg-[#f4f4f4] py-6 sm:py-12 px-3 sm:px-6 lg:px-12 font-sans flex flex-col gap-6 sm:gap-10 antialiased">
    
    <div 
      v-for="(category, catIndex) in categories" 
      :key="catIndex"
      class="max-w-7xl w-full mx-auto"
    >
      <div class="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
        <div class="relative pl-3">
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-5 bg-[#f1a817] rounded-full"></div>
          <h2 class="text-base sm:text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <span>{{ category.icon }}</span>
            <span>{{ category.title }}</span>
          </h2>
        </div>
      </div>

      <div class="relative group/slider-container">
        
        <!-- NÚT TRÁI -->
        <button 
          @click="scroll(catIndex, 'left')"
          class="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/95 shadow-lg items-center justify-center text-gray-600 hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 opacity-0 group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang trái"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- NÚT PHẢI -->
        <button 
          @click="scroll(catIndex, 'right')"
          class="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/95 shadow-lg items-center justify-center text-gray-600 hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 opacity-0 group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang phải"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Khay chứa sản phẩm -->
        <div 
          :ref="el => sliderRefs[catIndex] = el"
          class="flex overflow-x-auto items-stretch gap-3 pb-4 pt-1 custom-scrollbar scroll-smooth snap-x snap-mandatory"
          style="-webkit-overflow-scrolling: touch;"
        >
          <a 
            v-for="(item, index) in category.products" 
            :key="index"
            :href="item.link || '#'"
            target="_blank"
            class="flex-shrink-0 w-[44vw] sm:w-[210px] snap-start bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer no-underline overflow-hidden h-auto relative"
          >
            <!-- Phần hình ảnh sản phẩm & Nhãn Tag Sống Động -->
            <div class="w-full aspect-square bg-white border-b border-gray-100 overflow-hidden relative flex-shrink-0">
              
              <!-- Tag Sống Động (Tự động hiển thị dựa vào dữ liệu hoặc ngẫu nhiên) -->
              <div v-if="item.badge" class="absolute top-2 left-2 z-10 flex flex-col gap-1">
                <span 
                  :class="[
                    'text-[9px] sm:text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded shadow-sm text-white tracking-wider ',
                    item.badgeType === 'danger' ? 'bg-red-500' : 
                    item.badgeType === 'warning' ? 'bg-amber-500' : 'bg-gradient-to-r from-purple-600 to-pink-500'
                  ]"
                >
                  {{ item.badge }}
                </span>
              </div>

              <img 
                :src="item.image" 
                :alt="item.name"
                loading="lazy"
                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            <!-- Nội dung dưới hình -->
            <div class="p-2 sm:p-3 flex flex-col justify-between flex-grow bg-white">
              <h3 class="text-sm sm:text-base font-semibold text-gray-800 text-left mb-3 group-hover:text-amber-600 leading-normal min-h-[3em] whitespace-normal break-words">
                {{ item.name }}
              </h3>
              <!-- Nút mua hàng hiệu ứng bắt mắt hơn -->
              <div class="w-full bg-amber-500 text-white font-semibold text-[11px] sm:text-xs py-2 px-2 rounded-md flex items-center justify-center space-x-1 shadow-sm transition-all duration-200 group-hover:bg-amber-600 group-hover:shadow mt-auto active:scale-[0.98]">
                <svg class="w-3.5 h-3.5 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
                </svg>
                <span>Mua ngay</span>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import data from './data/data';
import { ref, onBeforeUpdate, onMounted } from 'vue' // Thêm onMounted từ vue

const sliderRefs = ref([])

onBeforeUpdate(() => {
  sliderRefs.value = []
})

// Khi component được gắn (render) thành công vào DOM, đưa trang lên top
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'instant' // Dùng 'instant' để nhảy thẳng lên đầu ngay lập tức khi load, hoặc 'smooth' nếu muốn cuộn mượt
  })
})

const categories = ref(data);

const scroll = (index, direction) => {
  const container = sliderRefs.value[index]
  if (container) {
    const firstCard = container.querySelector('a')
    const scrollAmount = firstCard ? firstCard.offsetWidth + 12 : 180
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
    }
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #ebeeef;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a1a1aa;
}
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #ebeeef;
}
</style>