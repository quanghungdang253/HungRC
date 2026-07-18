<template>
  <div class="w-full bg-[#f4f4f4] py-6 sm:py-12 px-3 sm:px-6 lg:px-12 font-sans flex flex-col gap-6 sm:gap-10 antialiased">
    
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
        
        <button 
          @click="scroll(catIndex, 'left')"
          class="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/95 shadow-lg items-center justify-center text-gray-600 hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 opacity-0 group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang trái"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          @click="scroll(catIndex, 'right')"
          class="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/95 shadow-lg items-center justify-center text-gray-600 hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 opacity-0 group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang phải"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div 
          :ref="el => sliderRefs[catIndex] = el"
          class="flex overflow-x-auto gap-2 sm:gap-3 pb-4 pt-1 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style="-webkit-overflow-scrolling: touch;"
        >
          <a 
            v-for="(item, index) in category.products" 
            :key="index"
            :href="item.link || '#'"
            target="_blank"
            class="flex-shrink-0 w-[calc(50%-4px)] sm:w-[210px] snap-start bg-white rounded-lg border border-gray-200 hover:border-amber-400 transition-all duration-200 flex flex-col justify-between group cursor-pointer no-underline overflow-hidden"
          >
            <div class="w-full aspect-square bg-white border-b border-gray-100 overflow-hidden relative">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            <div class="p-2 sm:p-3 flex flex-col justify-between flex-grow bg-white">
              <h3 class="text-xs sm:text-sm font-medium text-gray-800 text-left mb-3 min-h-[32px] sm:min-h-[40px] line-clamp-2 group-hover:text-amber-600 leading-tight">
                {{ item.name }}
              </h3>

              <div class="w-full bg-amber-500 text-white font-semibold text-[11px] sm:text-xs py-2 px-2 rounded-md flex items-center justify-center space-x-1 shadow-sm transition-colors duration-200 group-hover:bg-amber-600">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
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
import { ref, onBeforeUpdate } from 'vue'

const sliderRefs = ref([])

onBeforeUpdate(() => {
  sliderRefs.value = []
})

// Dữ liệu danh mục và ĐÃ THÊM ĐẦY ĐỦ RẤT NHIỀU SẢN PHẨM KHÁC
const categories = ref([
  {
    title: 'Động cơ',
    icon: '⚙️',
    products: [
      { name: 'Động cơ DC 5V siêu mạnh', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Động cơ Servo SG90 chính hãng', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Động cơ Bước Giảm Tốc GA25', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Động cơ Coreless siêu tốc độ', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Động cơ Giảm Tốc Vàng 1:48', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Động cơ Bước Stepper Motor 42', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Động cơ Rung mini 3V', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Động cơ Bơm Nước Chìm mini', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=500&auto=format&fit=crop&q=80', link: '#' }
    ]
  }
 
])

const scroll = (index, direction) => {
  const container = sliderRefs.value[index]
  if (container) {
    const firstCard = container.querySelector('a')
    const scrollAmount = firstCard ? firstCard.offsetWidth + 8 : 220
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
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