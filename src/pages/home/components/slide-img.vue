<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8 relative group">
    <h2 class="text-xl font-bold uppercase tracking-wider mb-6 text-gray-800 border-l-4 border-yellow-500 pl-3">
      Mô hình nổi bật
    </h2>

    <div class="relative overflow-hidden rounded-xl bg-gray-50 p-4 shadow-sm">
      <div 
        class="flex transition-transform duration-500 ease-out gap-4"
        :style="{ transform: `translateX(calc(-${currentIndex * (100 / displayCount)}% - ${currentIndex * (16 / displayCount)}px))` }"
      >
        <div 
          v-for="(item, index) in items" 
          :key="item.id"
          class="w-full flex-shrink-0 flex flex-col items-center justify-between bg-white rounded-lg border p-3 transition-all duration-300 hover:shadow-md"
          :style="{ width: `calc((100% - ${(displayCount - 1) * 16}px) / ${displayCount})` }"
          :class="item.active ? 'border-yellow-500 ring-1 ring-yellow-500' : 'border-gray-200'"
        >
          <div class="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-700 text-center line-clamp-2">
            {{ item.title }}
          </h3>
        </div>
      </div>
    </div>

    <button 
      @click="prevSlide"
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white hover:bg-yellow-500 hover:text-white text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all z-10 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700"
      :disabled="currentIndex === 0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>

    <button 
      @click="nextSlide"
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white hover:bg-yellow-500 hover:text-white text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all z-10 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700"
      :disabled="currentIndex >= items.length - displayCount"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <div class="flex justify-center items-center gap-2 mt-6">
      <button
        v-for="(_, index) in (items.length - displayCount + 1)"
        :key="index"
        @click="currentIndex = index"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'w-6 bg-yellow-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 1. Import trực tiếp các file ảnh cục bộ từ thư mục src/assets/images/
import xeBenBanhXich from '../../../assets/img-products/xe-ben-banh-xich.jpg';
import xeOto3V from '../../../assets/img-products/xe-oto.jpg';
import xeBenDauKeo from '../../../assets/img-products/xe-ben-dau-keo.jpg';
import xeCuuHo from '../../../assets/img-products/xe-cuu-ho.jpg';
import xeDuaF1 from '../../../assets/img-products/xe-f1.jpg';
import xeXangCap from '../../../assets/img-products/xe-xang-cap.jpg';

// Dữ liệu danh sách xe sử dụng biến ảnh đã import
const items = ref([
  { id: 1, title: 'Xe ben bánh xích 12V ', image: xeBenBanhXich, active: true },
  { id: 2, title: 'Xe ô tô 3V', image: xeOto3V, active: false },
  { id: 3, title: 'Xe ben đầu kéo', image: xeBenDauKeo, active: false },
  { id: 4, title: 'Xe cần cẩu ', image: xeCuuHo, active: false },
  { id: 5, title: 'Xe đua F1 ', image: xeDuaF1, active: false },
  { id: 6, title: 'Xe xáng Cạp', image: xeXangCap, active: false },
]);

const currentIndex = ref(0);
const displayCount = ref(4);

const updateDisplayCount = () => {
  if (window.innerWidth < 640) {
    displayCount.value = 1;
  } else if (window.innerWidth < 1024) {
    displayCount.value = 2;
  } else {
    displayCount.value = 4;
  }
};

const nextSlide = () => {
  if (currentIndex.value < items.value.length - displayCount.value) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

onMounted(() => {
  updateDisplayCount();
  window.addEventListener('resize', updateDisplayCount);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDisplayCount);
});
</script>