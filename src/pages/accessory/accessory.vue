<template>
  <div class="w-full bg-[#fafafa] py-12 px-4 sm:px-8 lg:px-16 font-sans flex flex-col gap-12">
    
    <div 
      v-for="(category, catIndex) in categories" 
      :key="catIndex"
      class="max-w-7xl w-full mx-auto"
    >
      
      <div class="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <div class="relative">
          <h2 class="text-xl sm:text-2xl font-black text-[#0b131a] tracking-wide uppercase">
            {{ category.title }}
          </h2>
          <span class="absolute bottom-[-17px] left-0 w-12 h-[3px] bg-[#f1a817]"></span>
        </div>
      </div>

      <div class="relative group/slider-container px-4">
        
        <button 
          @click="scroll(catIndex, 'left')"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/90 shadow-md flex items-center justify-center text-gray-600 hover:bg-white hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 md:opacity-0 md:group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang trái"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          @click="scroll(catIndex, 'right')"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/90 shadow-md flex items-center justify-center text-gray-600 hover:bg-white hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 md:opacity-0 md:group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang phải"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div 
          :ref="el => sliderRefs[catIndex] = el"
          class="flex overflow-x-auto gap-4 pb-4 pt-2 scrollbar-hide scroll-smooth"
          style="-webkit-overflow-scrolling: touch;"
        >
          <a 
            v-for="(item, index) in category.products" 
            :key="index"
            :href="item.link || '#'"
            target="_blank"
            class="flex-shrink-0 w-[180px] sm:w-[200px] bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between group cursor-pointer no-underline"
          >
            <div class="w-full h-32 flex items-center justify-center overflow-hidden mb-3">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="max-w-[85%] max-h-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 class="text-sm font-bold text-gray-800 text-center mb-4 min-h-[40px] flex items-center justify-center line-clamp-2 group-hover:text-[#f1a817] transition-colors duration-200">
              {{ item.name }}
            </h3>

            <div class="w-full bg-[#f1a817] group-hover:bg-[#d99210] text-[#0b131a] font-bold text-xs py-2 px-3 rounded-md flex items-center justify-center space-x-1.5 transition-colors duration-200">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
              </svg>
              <span>Mua trên Shopee</span>
            </div>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onBeforeUpdate } from 'vue'

// Quản lý danh sách các DOM element của slider theo dạng mảng
const sliderRefs = ref([])

// Đảm bảo mảng refs được làm sạch trước mỗi lần cập nhật UI
onBeforeUpdate(() => {
  sliderRefs.value = []
})

// Dữ liệu được tổ chức lại theo Danh mục (Mỗi danh mục có mảng sản phẩm riêng)
const categories = ref([
  {
    title: 'Động cơ & Động lực',
    products: [
      { name: 'Động cơ DC 5V', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=200&auto=format&fit=crop&q=60', link: '#' },
      { name: 'Động cơ Servo SG90', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=200&auto=format&fit=crop&q=60', link: '#' },
      { name: 'Động cơ Bước Giảm Tốc', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=200&auto=format&fit=crop&q=60', link: '#' },
      { name: 'Động cơ Coreless', image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=200&auto=format&fit=crop&q=60', link: '#' },
    ]
  },
  {
    title: 'Nguồn & Phụ kiện Pin',
    products: [
      { name: 'Hộp pin AA 2 cell', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=200&auto=format&fit=crop&q=60', link: '#' },
      { name: 'Hộp pin 18650', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=200&auto=format&fit=crop&q=60', link: '#' },
      { name: 'Mạch sạc pin dự phòng', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=200&auto=format&fit=crop&q=60', link: '#' },
    ]
  },
  {
    title: 'Cơ khí & Lắp ghép',
    products: [
      { name: 'Bánh xe V1 điều hướng', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&auto=format&fit=crop&q=60', link: '#' },
      { name: 'Trục nối đồng 4mm', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?w=200&auto=format&fit=crop&q=60', link: '#' },
      { name: 'Khung xe robot Mica', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200&auto=format&fit=crop&q=60', link: '#' },
    ]
  }
])

// Hàm cuộn nhận thêm `index` để xác định chính xác hàng nào đang được nhấn nút cuộn
const scroll = (index, direction) => {
  const container = sliderRefs.value[index]
  if (container) {
    const scrollAmount = 220
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