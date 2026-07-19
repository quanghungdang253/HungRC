<template>
  <div class="slider-component">
    <!-- 1. Thanh Menu Tên Sản Phẩm -->
<div
  ref="tabsContainer"
  class="product-tabs"
>    
<button
  v-for="(item, index) in slides"
  :key="index"
  :ref="el => tabRefs[index] = el"
  :class="['tab-btn', { active: currentIndex === index }]"
  @click="currentIndex = index"
>

        {{ item.title }}
      </button>
    </div>

    <!-- 2. Slider Ảnh -->
  
<div
  class="slider-wrapper"
  @mouseenter="pauseSlider"
  @mouseleave="startSlider"
  @touchstart="touchStart"
  @touchend="touchEnd"
>

   <transition name="fade" mode="out-in">
  <a
    :key="slides[currentIndex].src"
    :href="slides[currentIndex].link"
    target="_blank"
    class="slider-link"
  >
    <img
      :src="slides[currentIndex].src"
      alt="Slide"
      class="slider-image"
    />

    <!-- Nút Mua ngay -->



  </a>
</transition>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import img1 from "../../../assets/slide-img/xe1.png";
import img2 from "../../../assets/slide-img/xe2.png";

import img3 from "../../../assets/slide-img/xe3.png";

import img4 from "../../../assets/slide-img/xe4.png";

import img5 from "../../../assets/slide-img/xe5.png";


// Cấu trúc dữ liệu mới
const slides = ref([
  { title: "Xe địa hình điều khiển từ xa", src: img1, link: 'https://s.shopee.vn/4qE7Ftrz9u' },
  { title: "Xe điều khiển từ xa drift tốc độ cao", src: img2, link: 'https://s.shopee.vn/9fJN1PwwoS' },
  { title: "Máy xúc điều khiển từ xa", src: img3, link: 'https://s.shopee.vn/1VxfJa8F5o' },
  { title: "Xe ben - Điều khiển từ xa (RC), nâng hạ thùng ben", src: img4, link: 'https://s.shopee.vn/30mT6wHUSl' },
  { title: "Xe tải chở hàng - Điều khiển từ xa (RC)", src: img5, link: 'https://s.shopee.vn/9zwDSFtUEj' }

]);
const touchStartX = ref(0);
const touchEndX = ref(0);
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) %
    slides.value.length;
};

const touchStart = (e) => {
  touchStartX.value = e.changedTouches[0].clientX;
};

const touchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].clientX;

  const distance = touchStartX.value - touchEndX.value;

  if (Math.abs(distance) < 50) return;

  pauseSlider();

  if (distance > 0) {
    nextSlide(); // Vuốt sang trái
  } else {
    prevSlide(); // Vuốt sang phải
  }

  startSlider();
};
const currentIndex = ref(0);
const tabsContainer = ref(null);
const tabRefs = ref([]);
let timer = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

watch(currentIndex, async () => {
  await nextTick();

  const container = tabsContainer.value;
  const btn = tabRefs.value[currentIndex.value];

  if (!container || !btn) return;

  const left =
    btn.offsetLeft - (container.clientWidth - btn.clientWidth) / 2;

  container.scrollTo({
    left,
    behavior: "smooth",
  });
});
// Hàm điều khiển timer

const startSlider = () => {
  pauseSlider();
  timer = setInterval(nextSlide, 5000);
};

const pauseSlider = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

onMounted(startSlider);
onUnmounted(pauseSlider);


</script>

  <style scoped>
  .slider-component {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 12px 12px;
  }

  /* ==========================
    Thanh tên sản phẩm
  ========================== */

  .product-tabs {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    gap: 10px;

    padding: 10px;
    margin-bottom: 15px;

    background: #fff;
    border-radius: 10px;

    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
  }

  /* Chrome */
  .product-tabs::-webkit-scrollbar {
    height: 6px;
  }

  .product-tabs::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 999px;
  }

  .product-tabs::-webkit-scrollbar-track {
    background: transparent;
  }

  .tab-btn {
    flex: 0 0 auto;

    padding: 10px 18px;

    border: none;
    border-radius: 999px;

    background: #f5f5f5;

    cursor: pointer;

    font-size: 14px;
    font-weight: 600;

    color: #555;

    transition: .25s;
  }

  .tab-btn:hover {
    background: #ffe9e9;
    color: red;
  }

  .tab-btn.active {
    background: red;
    color: white;
  }

  /* ==========================
        Slider
  ========================== */

  .slider-wrapper {
    position: relative;

    width: 100%;

    aspect-ratio: 16/9;

    max-height: 520px;

    overflow: hidden;

    border-radius: 14px;

    background: #f2f2f2;
  }

.slider-link {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
  .slider-image {
    width: 100%;
    height: 100%;

    object-fit: contain;

    display: block;

    transition: transform .4s;
  }

  .slider-link:hover .slider-image {
    transform: scale(1.03);
  }

  /* ==========================
        Fade
  ========================== */

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .35s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* ==========================
        Tablet
  ========================== */

  @media (max-width: 992px) {

    .slider-wrapper {
      aspect-ratio: 16/10;
    }

  }

  /* ==========================
        Mobile
  ========================== */

  @media (max-width:768px){

    .slider-component{
        padding:0 8px;
    }

    .product-tabs{

        gap:8px;

        padding:8px;

        margin-bottom:10px;
    }

    .tab-btn{

        font-size:13px;

        padding:8px 14px;
    }

    .slider-wrapper{

        aspect-ratio:16/11;

        border-radius:10px;
    }

  }
  </style>


<style scoped>
.slider-component {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 12px;
}

/* ==========================
   Thanh tên sản phẩm
========================== */

.product-tabs {
  display: flex;
  align-items: center;
  gap: 10px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  padding: 10px;
  margin-bottom: 15px;

  background: #fff;
  border-radius: 10px;

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
}

.product-tabs::-webkit-scrollbar {
  height: 6px;
}

.product-tabs::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 999px;
}

.product-tabs::-webkit-scrollbar-track {
  background: transparent;
}

.tab-btn {
  flex-shrink: 0;

  padding: 10px 18px;

  border: none;
  border-radius: 999px;

  background: #f5f5f5;
  color: #555;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: all .25s ease;
}

.tab-btn:hover {
  background: #ffe8e8;
  color: #e60000;
}

.tab-btn.active {
  background: #e60000;
  color: #fff;
}

/* ==========================
        Slider
========================== */

.slider-wrapper {
  position: relative;
  width: 100%;

  aspect-ratio: 3 / 1;

  overflow: hidden;

  border-radius: 14px;
  background: #f2f2f2;
}

.slider-link {
  display: block;
  width: 100%;
  height: 100%;
}

.slider-image {
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;

  transition: transform .35s ease;
}

.slider-link:hover .slider-image {
  transform: scale(1.03);
}

/* ==========================
        Hiệu ứng Fade
========================== */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ==========================
        Tablet
========================== */

@media (max-width: 992px) {

  .slider-component {
    padding: 0 10px;
  }

  .slider-wrapper {
    aspect-ratio: 3 / 1;
  }

  .tab-btn {
    font-size: 13px;
    padding: 9px 16px;
  }

}

/* ==========================
        Mobile
========================== */

@media (max-width: 768px) {

  .slider-component {
    padding: 8px 8px;
  }

  .product-tabs {
    gap: 8px;
    padding: 8px;
    margin-bottom: 10px;
  }

  .tab-btn {
    font-size: 12px;
    padding: 8px 14px;
  }

  .slider-wrapper {
    aspect-ratio: 3 / 1;
    border-radius: 10px;
  }

}

/* ==========================
        Điện thoại nhỏ
========================== */

@media (max-width: 480px) {

  .tab-btn {
    font-size: 11px;
    padding: 7px 12px;
  }

}
</style>