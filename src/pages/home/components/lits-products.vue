<template>
  <div class="w-full bg-[#fafafa] py-12 px-4 sm:px-8 lg:px-16 font-sans">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <div class="relative">
          <h2 class="text-xl sm:text-2xl font-black text-[#0b131a] tracking-wide uppercase">
            Linh kiện Chế Tạo
          </h2>
          <span class="absolute bottom-[-17px] left-0 w-12 h-[3px] bg-[#f1a817]"></span>
        </div>
      </div>

      <div class="relative group/slider-container px-4">
        
        <button 
          @click="scroll('left')"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/90 shadow-md flex items-center justify-center text-gray-600 hover:bg-white hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 md:opacity-0 md:group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang trái"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          @click="scroll('right')"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/90 shadow-md flex items-center justify-center text-gray-600 hover:bg-white hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 md:opacity-0 md:group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang phải"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div 
          ref="sliderContainer"
          class="flex overflow-x-auto gap-3 sm:gap-4 pb-4 pt-2 scrollbar-hide scroll-smooth"
          style="-webkit-overflow-scrolling: touch;"
        >
          <a 
            v-for="(item, index) in products" 
            :key="index"
            :href="item.link || '#'"
            target="_blank"
            class="flex-shrink-0 w-[calc(50%-6px)] sm:w-[200px] bg-white rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between group cursor-pointer decoration-none"
          >
            <div class="w-full h-24 sm:h-32 flex items-center justify-center overflow-hidden mb-3 rounded-t-lg">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 class="text-xs sm:text-sm font-bold text-gray-800 text-center mb-4 min-h-[40px] flex items-center justify-center line-clamp-2 group-hover:text-[#f1a817] transition-colors duration-200">
              {{ item.name }}
            </h3>

            <div class="w-full bg-[#f1a817] group-hover:bg-[#d99210] text-[#0b131a] font-bold text-[10px] sm:text-xs py-2 px-3 rounded-md flex items-center justify-center space-x-1 transition-colors duration-200">
              <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
              </svg>
              <span class="truncate">Mua Ngay</span>
            </div>
          </a>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import imgBoLapGhepMoHinh from '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgHopPin from '../../../assets/img-electronic-components/pin-li-on.png';
import imgMotorMini from '../../../assets/img-electronic-components/motor-mini.png';
import imgDongCoGiamToc from '../../../assets/img-electronic-components/dong-co-giam-toc.png';
import imgKeo from '../../../assets/img-electronic-components/keo-502.png';
import imgCongtac from '../../../assets/img-electronic-components/cong-tac-6-chan.png';

const sliderContainer = ref(null)

const products = ref([
  { name: 'Bộ lắp ghép mô hình kỹ thuật', image: imgBoLapGhepMoHinh, link: 'https://s.shopee.vn/5L9peGlPv9' },
  { name: 'Pin Sạc Li-on 18650', image: imgHopPin, link: 'https://shopee.vn' },
  { name: 'Motor mini', image: imgMotorMini, link: 'https://shopee.vn' },
  { name: 'Động Cơ Giảm Tốc', image: imgDongCoGiamToc, link: 'https://shopee.vn' },
  { name: 'Công Tắc 6 Chân', image: imgCongtac, link: 'https://shopee.vn' },
  { name: 'Keo 502', image: imgKeo, link: 'https://shopee.vn' },
])

const scroll = (direction) => {
  if (sliderContainer.value) {
    // Trên mobile, lấy luôn nửa chiều rộng của container để cuộn mượt theo từng cụm 2 sản phẩm
    const scrollAmount = window.innerWidth < 640 ? sliderContainer.value.clientWidth / 2 : 220 
    if (direction === 'left') {
      sliderContainer.value.scrollLeft -= scrollAmount
    } else {
      sliderContainer.value.scrollLeft += scrollAmount
    }
  }
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>