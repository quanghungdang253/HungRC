<template>
  <div class="product-showcase-container">
    
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
    </div>

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

      <button class="mobile-toggle-btn" @click="toggleExpand">
        <span v-if="!isExpanded">Xem chi tiết  {{ vehicleData[currentIndex].name }} ▾</span>
        <span v-else>Thu gọn thông tin ▴</span>
      </button>
    </div>

    <div class="parts-panel-right" :class="{ 'mobile-hidden': !isExpanded }">
      <h3 class="parts-title">🛠️ Linh Kiện Lắp Ráp</h3>
      <div class="parts-grid">
        <div 
          v-for="(part, idx) in vehicleData[currentIndex].parts" 
          :key="idx" 
          class="part-item-wrapper"
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
          
          <button 
            class="buy-part-btn" 
            @click.stop="buyProduct(part.name, part.purchaseUrl)"
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// --- Import ảnh sản phẩm (Xe) ---
import xeBaGac from '../../../assets/img-products/xe-ba-gac.jpg';
import xeBenBanhXich from '../../../assets/img-products/xe-ben-banh-xich.jpg';
import xeBenDauKeo  from '../../../assets/img-products/xe-ben-dau-keo.jpg';
import xeBen from '../../../assets/img-products/xe-ben.png';
import xeCuuHo from '../../../assets/img-products/xe-cuu-ho.jpg';
import xeF1 from '../../../assets/img-products/xe-f1.jpg';
import xeoto from '../../../assets/img-products/xe-oto.jpg';
import xeXangCap from '../../../assets/img-products/xe-xang-cap.jpg';

// --- Import ảnh linh kiện ---
import imgDongCoYellow from '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgBanhXe from   '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgKhungNha from   '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgBangXich from   '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgMachRC from   '../../../assets/img-electronic-components/bo-lap-ghep.png';

const vehicleData = ref([
  {
    name: 'Xe Ba Gác DIY',
    image: xeBaGac,
    description: 'Mô hình xe ba gác chở hàng tự chế với hệ thống truyền động trục đơn giản.',
    features: ['Động cơ DC giảm tốc mạnh mẽ', 'Thùng xe lật tay linh hoạt'],
    purchaseUrl: '/cart/add/xe-ba-gac',
    parts: [
      { name: 'Động cơ giảm tốc yellow', qty: 1, img: imgDongCoYellow, purchaseUrl: '/cart/add/dc-yellow' },
      { name: 'Bánh xe mô hình', qty: 3, img: imgBanhXe, purchaseUrl: '/cart/add/banh-xe' },
      { name: 'Khung nhựa phẳng/Gỗ nhẹ', qty: 1, img: imgKhungNha, purchaseUrl: '/cart/add/khung-nhua' }
    ]
  },
  {
    name: 'Xe Ben Bánh Xích',
    image: xeBenBanhXich,
    description: 'Dòng xe tải ben vượt địa hình vượt trội nhờ hệ thống bánh xích cao su.',
    features: ['Hệ xích chuyển động độc lập kép', 'Leo dốc nghiêng tới 35 độ'],
    purchaseUrl: '/cart/add/xe-ben-xich',
    parts: [
      { name: 'Băng xích cao su mini', qty: 2, img: imgBangXich, purchaseUrl: '/cart/add/bang-xich' },
      { name: 'Động cơ giảm tốc đôi', qty: 2, img: imgDongCoYellow, purchaseUrl: '/cart/add/dc-yellow-doi' },
      { name: 'Bộ mạch thu phát điều khiển', qty: 1, img: imgMachRC, purchaseUrl: '/cart/add/mach-rc' }
    ]
  },
  {
    name: 'Xe Ben Đầu Kéo',
    image: xeBenDauKeo,
    description: 'Sự kết hợp giữa đầu kéo cơ bắp và rơ-moóc ben tự đổ cỡ lớn.',
    features: ['Khớp nối đầu kéo linh hoạt', 'Trục truyền động kim loại lực kéo lớn'],
    purchaseUrl: '/cart/add/xe-ben-dau-keo',
    parts: [
      { name: 'Động cơ Coreless momen lớn', qty: 1, img: imgDongCoYellow, purchaseUrl: '/cart/add/coreless' },
      { name: 'Lốp cao su gai lớn', qty: 6, img: imgBanhXe, purchaseUrl: '/cart/add/lop-gai' },
      { name: 'Khớp nối Cardan', qty: 2, img: imgKhungNha, purchaseUrl: '/cart/add/cardan' }
    ]
  },
  {
    name: 'Xe Ben Thủy Lực',
    image: xeBen,
    description: 'Mô hình xe ben tự đổ cơ bản sử dụng cơ cấu nâng hạ cơ khí thông minh.',
    features: ['Cơ cấu nâng hạ chữ A lực đẩy cao', 'Khung gầm chịu lực gia cố thép góc'],
    purchaseUrl: '/cart/add/xe-ben-thuy-luc',
    parts: [
      { name: 'Cơ cấu thanh nâng chữ A', qty: 1, img: imgKhungNha, purchaseUrl: '/cart/add/thanh-chu-a' },
      { name: 'Động cơ trục vít servo', qty: 1, img: imgDongCoYellow, purchaseUrl: '/cart/add/truc-vit-servo' },
      { name: 'Khung gầm đục lỗ', qty: 1, img: imgKhungNha, purchaseUrl: '/cart/add/khung-duc-lo' }
    ]
  },
  {
    name: 'Xe Cứu Hộ Giao Thông',
    image: xeCuuHo,
    description: 'Mô hình xe cứu hộ chuyên dụng được trang bị cần cẩu và tời kéo cáp.',
    features: ['Cần cẩu xoay góc 180 độ', 'Tời cuộn dây cáp tự động'],
    purchaseUrl: '/cart/add/xe-cuu-ho',
    parts: [
      { name: 'Động cơ tời cáp mini', qty: 1, img: imgDongCoYellow, purchaseUrl: '/cart/add/toi-cap' },
      { name: 'Cần cẩu cơ khí đa khớp', qty: 1, img: imgKhungNha, purchaseUrl: '/cart/add/can-cau' },
      { name: 'Bánh xe cao su đặc', qty: 4, img: imgBanhXe, purchaseUrl: '/cart/add/banh-dac' }
    ]
  },
  {
    name: 'Xe Đua Công Thức F1',
    image: xeF1,
    description: 'Mô hình khí động học siêu tốc mô phỏng xe đua F1 thực tế.',
    features: ['Khung gầm carbon siêu nhẹ', 'Hệ thống lái visai bánh sau tốc độ cao'],
    purchaseUrl: '/cart/add/xe-f1',
    parts: [
      { name: 'Động cơ siêu tốc 130', qty: 1, img: imgDongCoYellow, purchaseUrl: '/cart/add/dc-130' },
      { name: 'Bộ vi sai mini', qty: 1, img: imgMachRC, purchaseUrl: '/cart/add/vi-sai' },
      { name: 'Bánh xe bám đường trơn', qty: 4, img: imgBanhXe, purchaseUrl: '/cart/add/banh-f1' }
    ]
  },
  {
    name: 'Xe Ô Tô Gia Đình',
    image: xeoto,
    description: 'Mô hình ô tô 4 chỗ cơ bản tinh giản, ứng dụng xuất sắc để học cấu trúc lái Ackermann.',
    features: ['Hệ thống lái Ackermann chuẩn xác', 'Giảm xóc lò xo độc lập'],
    purchaseUrl: '/cart/add/xe-oto',
    parts: [
      { name: 'Lò xo phuộc giảm chấn', qty: 4, img: imgBangXich, purchaseUrl: '/cart/add/lo-xo' },
      { name: 'Hệ lái Servo 9g', qty: 1, img: imgDongCoYellow, purchaseUrl: '/cart/add/servo-9g' },
      { name: 'Khung mica cắt CNC', qty: 1, img: imgKhungNha, purchaseUrl: '/cart/add/khung-mica' }
    ]
  },
  {
    name: 'Xe Xăng Cấp Kỹ Thuật',
    image: xeXangCap,
    description: 'Mô hình xe bồn chở nhiên liệu phối hợp hệ thống bơm hút chất lỏng mini.',
    features: ['Bồn chứa chất lỏng chống rò rỉ', 'Hệ thống bơm nước mini 3-6V'],
    purchaseUrl: '/cart/add/xe-xang-cap',
    parts: [
      { name: 'Bơm nước mini chìm', qty: 1, img: imgDongCoYellow, purchaseUrl: '/cart/add/bom-chim' },
      { name: 'Ống dẫn silicon trong suốt', qty: 2, img: imgBangXich, purchaseUrl: '/cart/add/ong-silicon' },
      { name: 'Bình chứa hình trụ', qty: 1, img: imgKhungNha, purchaseUrl: '/cart/add/binh-chua' }
    ]
  }
]);

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
</script>

<style scoped>
/* Khung chứa chia bố cục 3 cột chính trên PC */
.product-showcase-container {
  display: grid;
  grid-template-columns: 280px 1fr 310px;
  gap: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-family: sans-serif;
}

.center-flow {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px; /* Tạo khoảng cách giữa Slider và Nút phía dưới */
}

/* ==================== 1. STYLE BÊN TRÁI ==================== */
.info-panel-left {
  background: rgba(17, 28, 38, 0.75);
  border: 1px solid rgba(241, 196, 15, 0.2);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: fit-content;
}
.meta-tag {
  color: #f1c40f;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
  font-weight: bold;
}
.model-title {
  font-size: 1.6rem;
  margin: 0 0 12px 0;
  color: #fff;
  font-weight: bold;
}
.model-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #bdc3c7;
  margin-bottom: 20px;
}
.feature-box {
  background: rgba(0, 0, 0, 0.25);
  padding: 12px;
  border-radius: 8px;
}
.feature-title {
  font-size: 0.85rem;
  color: #f1c40f;
  font-weight: bold;
}
.feature-list {
  padding-left: 18px;
  margin: 6px 0 0 0;
  font-size: 0.85rem;
  color: #ecf0f1;
}

/* ==================== 2. STYLE Ở GIỮA (SLIDER) ==================== */
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
  user-select: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease;
}
.purchase-clickable { cursor: pointer; }
.purchase-clickable:hover { border-color: rgba(241, 196, 15, 0.5); }

.slider-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #0b1116;
  overflow: hidden;
}
.slider-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.buy-now-overlay {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
}
.buy-now-btn {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 0.85rem;
  font-weight: bold;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.4);
  transition: all 0.3s ease;
}
.slider-container:hover .buy-now-btn {
  transform: scale(1.05);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}
.nav-btn:hover { background: #f1c40f; color: #000; }
.prev-btn { left: 15px; }
.next-btn { right: 15px; }

.dots-container {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
}
.dot.active { background: #f1c40f; transform: scale(1.2); }

/* Mặc định ẩn nút toggle chi tiết trên PC */
.mobile-toggle-btn {
  display: none;
}

/* ==================== 3. STYLE BÊN PHẢI (LINH KIỆN) ==================== */
.parts-panel-right {
  background: rgba(17, 28, 38, 0.75);
  border: 1px solid rgba(241, 196, 15, 0.2);
  padding: 20px;
  border-radius: 12px;
  height: fit-content;
}
.parts-title {
  font-size: 1.1rem;
  margin: 0 0 15px 0;
  color: #f1c40f;
  font-weight: bold;
  border-bottom: 1px solid rgba(241, 196, 15, 0.2);
  padding-bottom: 8px;
}
.parts-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.part-item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}
.part-item-wrapper:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(241, 196, 15, 0.3);
}
.part-item-main {
  display: flex;
  align-items: center;
  gap: 12px;
}
.part-img-box {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  overflow: hidden;
  background: #000;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.part-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.part-info {
  flex-grow: 1;
}
.part-name {
  font-size: 0.85rem;
  margin: 0;
  color: #ecf0f1;
  font-weight: bold;
  line-height: 1.3;
}
.part-qty {
  font-size: 0.75rem;
  margin: 4px 0 0 0;
  color: #bdc3c7;
}
.buy-part-btn {
  background: #f1c40f;
  color: #0b1116;
  border: none;
  border-radius: 6px;
  padding: 6px 0;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: background 0.2s ease, transform 0.1s ease;
}
.buy-part-btn:hover { background: #f39c12; }
.buy-part-btn:active { transform: scale(0.98); }

.fade-enter-active, .fade-leave-active { transition: all 0.4s ease; }
.fade-enter-from { opacity: 0; transform: scale(0.97); }
.fade-leave-to { opacity: 0; transform: scale(1.03); }

/* =======================================================
   RESPONSIVE DÀNH CHO MÀN HÌNH DI ĐỘNG & TABLET (Dưới 1024px)
   ======================================================= */
@media (max-width: 1024px) {
  .product-showcase-container {
    grid-template-columns: 1fr;
    padding: 12px;
    gap: 12px;
  }
  .center-flow { 
    order: -1; 
  }
  .slider-wrapper { aspect-ratio: 4 / 3; }
  .nav-btn { width: 38px; height: 38px; font-size: 1.5rem; }
  
  .buy-now-overlay { top: 12px; left: 12px; }
  .buy-now-btn { padding: 6px 12px; font-size: 0.75rem; }

  /* HIỂN THỊ NÚT: Đã mang xuống dưới ảnh, thiết kế rộng rãi, dễ bấm */
  .mobile-toggle-btn {
    display: block;
    width: 100%;
    padding: 12px;
    background: #f1c40f;
    color: #0b1116;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(241, 196, 15, 0.2);
    transition: background 0.2s;
    text-align: center;
  }
  .mobile-toggle-btn:active {
    background: #f39c12;
  }
  
  .mobile-hidden { display: none !important; }
}
</style>