
<template>
  <div class="w-full bg-[#f4f4f4] py-6 sm:py-12 px-3 sm:px-6 lg:px-12 font-sans flex flex-col gap-6 sm:gap-10 antialiased">
    
    <div 
      v-for="(category, catIndex) in categories" 
      :key="catIndex"
      class="max-w-7xl w-full mx-auto"
    >
      <!-- Tiêu đề danh mục -->
      <div class="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
        <div class="relative pl-3">
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-5 bg-[#f1a817] rounded-full"></div>
          <h2 class="text-base sm:text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <span>{{ category.icon }}</span>
            <span>{{ category.title }}</span>
          </h2>
        </div>
      </div>

      <!-- Khu vực Slider sản phẩm -->
      <div class="relative group/slider-container">
        
        <!-- Nút cuộn trái -->
        <button 
          @click="scroll(catIndex, 'left')"
          class="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/95 shadow-lg items-center justify-center text-gray-600 hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 opacity-0 group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang trái"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Nút cuộn phải -->
        <button 
          @click="scroll(catIndex, 'right')"
          class="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 bg-white/95 shadow-lg items-center justify-center text-gray-600 hover:text-[#f1a817] hover:border-[#f1a817] active:scale-95 transition-all duration-200 opacity-0 group-hover/slider-container:opacity-100"
          aria-label="Cuộn sang phải"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Khung chứa danh sách sản phẩm -->
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
            <!-- Ảnh sản phẩm -->
            <div class="w-full aspect-square bg-white border-b border-gray-100 overflow-hidden relative">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            <!-- Nội dung (Tên & Nút Mua) -->
            <div class="p-2 sm:p-3 flex flex-col justify-between flex-grow bg-white">
              
              <!-- ĐÃ KHẮC PHỤC: Xoá bỏ hoàn toàn line-clamp và overflow-hidden. Chữ dài tự động xuống dòng thoải mái -->
           <h3
  class="text-sm sm:text-base font-semibold text-gray-800 text-left leading-normal whitespace-normal break-words"
>
  {{ item.name }}
</h3>

              <!-- Nút mua ngay -->
              <div class="w-full bg-amber-500 text-white font-semibold text-[11px] sm:text-xs py-2 px-2 rounded-md flex items-center justify-center space-x-1 shadow-sm transition-colors duration-200 group-hover:bg-amber-600 mt-auto">
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
  },
  {
    title: 'Pin & Sạc',
    icon: '🔋',
    products: [
      { name: 'Hộp pin AA 2 cell siêu bền', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Hộp pin 18650 an toàn cao', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Mạch sạc pin dự phòng đa năng', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Pin Sạc Li-Po 3.7V 1200mAh', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Mạch Sạc Pin 1S TP4056 Type-C', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Đế Pin Đại C 2 Rãnh nối tiếp', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=80', link: '#' }
    ]
  },
  {
    title: 'Bánh xe & Truyền động',
    icon: '🚗',
    products: [
      { name: 'Bánh xe V1 điều hướng thông minh', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Trục nối đồng 4mm siêu chuẩn', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Khung xe robot Mica 3 bánh', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Bánh Xe Mecanum 65mm (Trái/Phải)', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Bánh Xe Cao Su V2 Bám Đường', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Bánh Xe Omni Đa Hướng Cực Mượt', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80', link: '#' }
    ]
  },
  {
    title: 'Bộ lắp ghép',
    icon: '🔩',
    products: [
      { name: 'Bộ lắp ghép mô hình kỹ thuật STEM', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Bộ lắp ghép mô hình kỹ thuật điện', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Thanh nhựa lắp ghép nhiều lỗ', image: 'https://images.unsplash.com/photo-1566679247071-8758d4a974f7?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Bánh răng lắp ghép đủ kích thước', image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Trục sắt lắp ghép chịu lực', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Khớp nối chữ U linh hoạt', image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=500&auto=format&fit=crop&q=80', link: '#' }
    ]
  },
  {
    title: 'Dụng cụ',
    icon: '🛠️',
    products: [
      { name: 'Tua vít 2 đầu đa năng gia đình', image: 'https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Máy vặn vít pin cầm tay chuyên dụng', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Bộ tua vít đa năng 64 trong 1', image: 'https://images.unsplash.com/photo-1608613375879-ccd32e5736e5?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Kìm cắt linh kiện điện tử chuyên nghiệp', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Kìm mũi nhọn gắp linh kiện', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Mỏ hàn nhiệt 60W điều chỉnh nhiệt độ', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Cuộn Thiếc hàn không độc hại', image: 'https://images.unsplash.com/photo-1601524909162-be87252be298?w=500&auto=format&fit=crop&q=80', link: '#' }
    ]
  },
  {
    title: 'Keo & Vật tư',
    icon: '🧴',
    products: [
      { name: 'Thanh Keo nến chịu nhiệt tốt', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Súng bắn keo nến 20W có công tắc', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Keo 502 siêu dính siêu nhanh', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Keo AB 2 thành phần siêu chịu lực', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format&fit=crop&q=80', link: '#' },
      { name: 'Cuộn Băng keo điện chống cháy', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=80', link: '#' }
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