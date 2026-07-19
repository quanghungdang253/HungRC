


<template>
  <div class="w-full bg-[#f5f5f5] py-6 sm:py-10 px-3 sm:px-6 lg:px-10">

    <div
      v-for="(category, catIndex) in categories"
      :key="catIndex"
      class="max-w-7xl mx-auto mb-8"
    >

      <!-- Tiêu đề -->
      <div class="flex items-center justify-between mb-5">

        <div class="flex items-center gap-3">

          <div class="w-1.5 h-7 rounded-full bg-amber-400"></div>

          <h2 class="text-lg sm:text-2xl font-bold text-gray-800">
            {{ category.icon }}
            {{ category.title }}
          </h2>

        </div>

      </div>

      <!-- Slider -->
      <div class="relative group">

        <!-- Left -->
     
<button
  @click="scroll(catIndex,'left')"
  class="flex absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20
         w-8 h-8 sm:w-10 sm:h-10
         rounded-full
         bg-white/90 backdrop-blur
         shadow-lg
         items-center justify-center
         text-gray-700
         hover:bg-amber-400 hover:text-white
         active:scale-95
         transition-all duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-4 h-4 sm:w-5 sm:h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2.5"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
  </svg>
</button>


        <!-- Right -->
     
<button
  @click="scroll(catIndex,'right')"
  class="flex absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20
         w-8 h-8 sm:w-10 sm:h-10
         rounded-full
         bg-white/90 backdrop-blur
         shadow-lg
         items-center justify-center
         text-gray-700
         hover:bg-amber-400 hover:text-white
         active:scale-95
         transition-all duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-4 h-4 sm:w-5 sm:h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2.5"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
  </svg>
</button>


        <div
          :ref="el => sliderRefs[catIndex] = el"
          class="flex gap-4 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory custom-scrollbar"
        >

          <!-- Product -->

         


<!-- Product -->
<a
  v-for="(item,index) in category.products"
  :key="index"
  :href="item.link"
  target="_blank"
  class="group
         flex flex-col
         flex-shrink-0
         w-[45vw]
         sm:w-[220px]
         lg:w-[230px]
         h-[430px]
         bg-white
         rounded-2xl
         border border-gray-200
         hover:border-amber-400
         hover:shadow-xl
         hover:-translate-y-1
         transition-all duration-300
         overflow-hidden
         snap-start"
>

  <!-- Ảnh -->
  <div class="relative h-[190px] sm:h-[220px] bg-white flex items-center justify-center">

    <!-- Badge -->
    <div class="absolute top-0 left-0 z-20 flex flex-col gap-1">

      <span
   
        class="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow"
      >
        🔥 HOT
      </span>



  

    </div>

    <img
      :src="item.image"
      :alt="item.name"
      loading="lazy"
      class="max-w-full max-h-full object-contain p-4 group-hover:scale-110 transition duration-500"
    >

  </div>

  <!-- Thông tin -->
  <div class="flex flex-col flex-1 p-3">

    <!-- Tên -->

<h3
  class="font-bold
         text-gray-800
         text-[14px]
         sm:text-[15px]
         leading-[1.5]
         min-h-[68px]
         max-h-[68px]
         overflow-hidden
         break-words
         text-left"
>
  {{ item.name }}
</h3>

    <!-- Đánh giá -->
    <div class="flex items-center mt-2">
      <span class="text-yellow-400 text-lg tracking-wide">
        ★★★★★
      </span>
    </div>

    <!-- Nút -->
    <div
      class="mt-auto
             bg-gradient-to-r
             from-amber-400
             to-orange-500
             hover:from-amber-500
             hover:to-orange-600
             text-white
             font-bold
             rounded-lg
             py-2.5
             flex
             justify-center
             items-center
             gap-2
             shadow-md
             group-hover:shadow-xl
             transition-all"
    >
      🛒
      <span>Mua ngay</span>
    </div>

  </div>

</a>


        </div>

      </div>

    </div>

    <!-- Xem thêm -->

    <div class="flex justify-center mt-8">

      <router-link

        to="/product"

        class="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black hover:text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all"

      >

        Xem thêm sản phẩm

        <svg xmlns="http://www.w3.org/2000/svg"

          class="w-5 h-5"

          fill="none"

          viewBox="0 0 24 24"

          stroke="currentColor"

          stroke-width="2">

          <path stroke-linecap="round"

                stroke-linejoin="round"

                d="M9 5l7 7-7 7"/>

        </svg>

      </router-link>

    </div>

  </div>
</template>


<!-- Phần script và style giữ nguyên như cũ -->
<script setup>
import dataCategories from '../data/list-products-data';
import { ref, onBeforeUpdate } from 'vue'

const sliderRefs = ref([])

onBeforeUpdate(() => {
  sliderRefs.value = []
})

const categories = ref(dataCategories);

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