<template>
  <div class="navigation-buttons-container">
    <div class="nav-buttons-grid">
      
      <!-- NÚT 1: LINH KIỆN -->
      <button class="mega-btn component-btn" @click="navigateTo('/products')">
        <div class="btn-icon">🛠️</div>
        <div class="btn-content">
          <span class="btn-title">Linh Kiện</span>
          <span class="btn-subtitle">Động cơ, mô hình, phụ kiện</span>
        </div>
        <div class="btn-arrow">➔</div>
      </button>

      <!-- NÚT 2: MÔ HÌNH -->
      <button class="mega-btn model-btn" @click="navigateTo('/assembly-model')">
        <div class="btn-icon">🧩</div>
        <div class="btn-content">
          <span class="btn-title">Mô Hình</span>
          <span class="btn-subtitle">Xem các mẫu xe lắp ráp chế tạo hoàn chỉnh</span>
        </div>
        <div class="btn-arrow">➔</div>
      </button>

      <button class="mega-btn model-btn" @click="navigateTo('/product')">
        <div class="btn-icon">🧩</div>
        <div class="btn-content">
      <span class="btn-title">Sản Phẩm Khác</span>
<span class="btn-subtitle">Đa dạng sản phẩm cho cuộc sống</span>
        </div>
        <div class="btn-arrow">➔</div>
      </button>


      <!-- NÚT 3: LIÊN HỆ -->
 

    </div>
  </div>
</template>

<script setup>
// Nếu dự án của bạn dùng Vue Router, hãy uncomment 2 dòng dưới:
// import { useRouter } from 'vue-router';
// const router = useRouter();
import router from '../router/router.js';

const navigateTo = (path) => {
  console.log(`Đang điều hướng tới: ${path}`);
  
  // Cách 1: Sử dụng Vue Router (Khuyên dùng cho Single Page App)
  // router.push(path);
  
  // Cách 2: Chuyển trang truyền thống (Dùng tạm nếu chưa cài Vue Router)
  window.location.href = path;
};
</script>

<style scoped>
/* Container bọc bên ngoài */


.navigation-buttons-container {
  width: 100%;
  max-width: 1400px;
  margin: 20px auto;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: sans-serif;
}

/* Bố cục Grid 3 cột trên PC và Tablet */
.nav-buttons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}

/* Style chung cho nút bấm lớn */
.mega-btn {
  display: flex;
  align-items: center;
  background: rgba(17, 28, 38, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 24px 20px;
  color: #fff;
  cursor: pointer;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Hiệu ứng Hover chung */
.mega-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.mega-btn:active {
  transform: translateY(-1px);
}

/* Style viền Hover riêng cho từng loại nút để đồng bộ với theme xe */
.component-btn:hover {
  border-color: #f1c40f;
  background: rgba(241, 196, 15, 0.05);
}
.model-btn:hover {
  border-color: #3498db;
  background: rgba(52, 152, 219, 0.05);
  
}
.contact-btn:hover {
  border-color: #2ecc71;
  background: rgba(46, 204, 113, 0.05);
}

/* Thành phần bên trong nút */
.btn-icon {
  font-size: 2.2rem;
  margin-right: 18px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}
.mega-btn:hover .btn-icon {
  transform: scale(1.15) rotate(-5deg);
}

.btn-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.btn-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 6px;
  color: #fff;
  transition: color 0.3s;
}

/* Đổi màu chữ Title khi hover sinh động */
.component-btn:hover .btn-title { color: #000000; }
.model-btn:hover .btn-title { color: #3498db; }
.contact-btn:hover .btn-title { color: #2ecc71; }

.btn-subtitle {
  font-size: 0.85rem;
  color: #ffffff;
  line-height: 1.4;
  /* Thêm transition giúp hiệu ứng đổi màu mượt mà hơn, không bị giật giật */
  transition: color 0.3s ease; 
}

/* KHI HOVER VÀO NÚT LỚN (.mega-btn), CHỮ PHỤ BÊN TRONG SẼ ĐỔI SANG MÀU ĐEN */
.mega-btn:hover .btn-subtitle {
  color: #000000;
}

/* Mũi tên chỉ hướng bên phải nút */
.btn-arrow {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  margin-left: 10px;
  transition: all 0.3s ease;
}
.mega-btn:hover .btn-arrow {
  color: #000000;
  transform: translateX(5px);
}

/* =======================================================
   RESPONSIVE (ĐIỀU CHỈNH GIAO DIỆN THEO MÀN HÌNH)
   ======================================================= */

/* Trên Laptop nhỏ và Tablet lớn (Dưới 1024px) */
@media (max-width: 1024px) {
  .mega-btn {
    padding: 20px 16px;
  }
  .btn-title {
    font-size: 1.15rem;
  }
  .btn-icon {
    font-size: 1.8rem;
    margin-right: 14px;
  }
}

/* Trên Điện thoại di động (Dưới 768px) */
@media (max-width: 768px) {
  .navigation-buttons-container {
    padding: 0 12px;
  }
  
  /* Chuyển từ Grid 3 cột thành 1 cột xếp chồng lên nhau */
  .nav-buttons-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .mega-btn {
    padding: 16px;
  }
  
  .btn-subtitle {
    font-size: 0.8rem;
  }
}
</style>