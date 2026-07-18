<template>
  <div class="product-showcase-container">
    
    <!-- ==================== BÊN TRÁI: THÔNG TIN MÔ HÌNH ==================== -->
    <div class="info-panel-left" :class="{ 'mobile-hidden': !isExpanded }">
      <div class="meta-tag">Mô Hình Chế Tạo</div>
      <h2 class="model-title">{{ vehicleData[currentIndex].name }}</h2>
      <p class="model-description">{{ vehicleData[currentIndex].description }}</p>
      
      <div class="feature-box">
        <span class="feature-title">⚙️ Tính năng nổi bật:</span>
        <ul class="feature-list">
          <li v-for="(feat, idx) in vehicleData[currentIndex].features" :key="idx">
            {{ feat }}
          </li>
        </ul>
      </div>

      <!-- Nút xem video trên bản PC (Ẩn trên Mobile để đưa vào cụm nút chính) -->
      <button 
        class="video-btn pc-video-btn"
        @click.stop="watchVideo(vehicleData[currentIndex].name, vehicleData[currentIndex].videoUrl)"
      >
        ▶️ Xem video hướng dẫn
      </button>
    </div>

    <!-- ==================== Ở GIỮA: SLIDER HÌNH ẢNH ==================== -->
    <div class="center-flow">
      <div 
        class="slider-container purchase-clickable" 
        @click="buyProduct(vehicleData[currentIndex].name, vehicleData[currentIndex].purchaseUrl)"
        title="Click để mua ngay xe nguyên chiếc"
      >
        <div class="slider-wrapper">
          <transition name="fade" mode="out-in">
            <img 
              :key="currentIndex" 
              :src="vehicleData[currentIndex].image" 
              :alt="vehicleData[currentIndex].name" 
              class="slider-image" 
            />
          </transition>
        </div>

        <button class="nav-btn prev-btn" @click.stop="prevSlide">‹</button>
        <button class="nav-btn next-btn" @click.stop="nextSlide">›</button>

        <div class="dots-container" @click.stop>
          <span 
            v-for="(item, index) in vehicleData" 
            :key="index" 
            class="dot" 
            :class="{ active: index === currentIndex }"
            @click.stop="goToSlide(index)"
          ></span>
        </div>
      </div>

      <!-- Cụm nút điều khiển linh hoạt trên Mobile -->
      <div class="mobile-action-group">
        <button 
          class="video-btn mobile-video-btn"
          @click.stop="watchVideo(vehicleData[currentIndex].name, vehicleData[currentIndex].videoUrl)"
        >
          ▶️ Xem video hướng dẫn
        </button>
        
        <button class="mobile-toggle-btn" @click="toggleExpand">
          <span v-if="!isExpanded">Xem chi tiết {{ vehicleData[currentIndex].name }} ▾</span>
          <span v-else>Thu gọn thông tin ▴</span>
        </button>
      </div>
    </div>

    <!-- ==================== BÊN PHẢI: LINH KIỆN LẮP RÁP ==================== -->
 <div class="parts-panel-right" :class="{ 'mobile-hidden': !isExpanded }">
  <h3 class="parts-title">🛠️ Linh Kiện Lắp Ráp</h3>
  <div class="parts-grid">
    <!-- Thay đổi thẻ bọc ngoài cùng từ div thành thẻ a -->
    <a 
      v-for="(part, idx) in vehicleData[currentIndex].parts" 
      :key="idx" 
      :href="part.purchaseUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="part-item-wrapper"
      style="text-decoration: none; color: inherit; display: block;"
    >
      <div class="part-item-main">
        <div class="part-img-box">
          <img :src="part.img" :alt="part.name" class="part-img" />
        </div>
        <div class="part-info">
          <p class="part-name">{{ part.name }}</p>
          <p class="part-qty">Số lượng: {{ part.qty }}</p>
        </div>
      </div>
      
      <!-- Nút bấm cũ chuyển thành thẻ div/span để giữ nguyên giao diện cũ nếu cần -->
      <div class="buy-part-btn">
        Mua ngay
      </div>
    </a>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../../router/router'; 

import data from '../data/list-img-data-';


const vehicleData = ref(data);

const currentIndex = ref(0);
const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % vehicleData.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + vehicleData.value.length) % vehicleData.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const buyProduct = (name, url) => {
  console.log(`Tiến hành xử lý URL: ${url}`);
  alert(`🛒 Đã thêm vào giỏ hàng: "${name}"`);
};

const watchVideo = (name, url) => {
  console.log(`Đang điều hướng xem video của: ${name} tới ${url}`);
  if (router && typeof router.push === 'function') {
    router.push(url);
  } else {
    window.location.href = url;
  }
};
</script>

<style scoped src="../assets/css/list-img.css">
/* Khung chứa chia bố cục 3 cột chính trên PC */

</style>