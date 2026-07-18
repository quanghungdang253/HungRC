<template>
  <div class="models-showcase-wrapper">
    
    <div class="sidebar-menu">
      <div class="category-section">
        <h3 class="category-title">🎮 Mô Hình Có Điều Khiển</h3>
        <ul class="series-list">
          <li v-for="series in remoteControlledSeries" :key="series.seriesId" class="series-item">
            <div 
              class="series-header" 
              :class="{ 'expanded': activeSeriesId === series.seriesId }"
              @click="toggleSeries(series.seriesId)"
            >
              <span class="bullet">⚡</span> {{ series.seriesName }}
              <span class="arrow-indicator">{{ activeSeriesId === series.seriesId ? '▴' : '▾' }}</span>
            </div>

            <transition name="slide">
              <ul v-if="activeSeriesId === series.seriesId" class="sub-model-list">
                <li 
                  v-for="model in series.items" 
                  :key="model.id"
                  :class="{ active: selectedModel?.id === model.id }"
                  @click="selectModel(model)"
                >
                  🔹 {{ model.name }}
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>

      <div class="category-section">
        <h3 class="category-title">⚙️ Mô Hình Cơ Khí / Không Điều Khiển</h3>
        <ul class="series-list">
          <li v-for="series in manualSeries" :key="series.seriesId" class="series-item">
            <div 
              class="series-header" 
              :class="{ 'expanded': activeSeriesId === series.seriesId }"
              @click="toggleSeries(series.seriesId)"
            >
              <span class="bullet">🔧</span> {{ series.seriesName }}
              <span class="arrow-indicator">{{ activeSeriesId === series.seriesId ? '▴' : '▾' }}</span>
            </div>

            <ul v-if="activeSeriesId === series.seriesId" class="sub-model-list">
              <li 
                v-for="model in series.items" 
                :key="model.id"
                :class="{ active: selectedModel?.id === model.id }"
                @click="selectModel(model)"
              >
                🔸 {{ model.name }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="detail-panel" ref="detailPanelRef">
      <div v-if="selectedModel" class="detail-content">
        <h2 class="detail-title">{{ selectedModel.name }}</h2>
        <p class="detail-desc">{{ selectedModel.description }}</p>

        <div class="video-container">
          <iframe 
            v-if="isIframeRendered"
            :src="`https://www.youtube.com/embed/${selectedModel.youtubeId}?autoplay=1`" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          ></iframe>

          <div 
            v-else 
            class="video-cover-placeholder"
            :style="{ backgroundImage: `url(https://img.youtube.com/vi/${selectedModel.youtubeId}/hqdefault.jpg)` }"
            @click="loadAndPlayVideo"
          >
            <div class="custom-play-button">
              <span class="play-icon">▶</span>
            </div>
            <span class="play-text">Bấm để xem video chế tạo</span>
          </div>
        </div>

        <div class="model-parts-section">
          <h4 class="parts-section-title">🛠️ Linh kiện cần thiết cho mô hình này:</h4>
          <div class="parts-horizontal-grid">
            <div v-for="(part, pIdx) in selectedModel.parts" :key="pIdx" class="part-mini-card">
              <div class="part-img-box">
                <img :src="part.image" :alt="part.name" loading="lazy" />
              </div>
              
              <div class="part-mini-info">
                <span class="part-mini-name" :title="part.name">{{ part.name }}</span>
                <span class="part-mini-qty">Số lượng: {{ part.qty }}</span>
                
                <a :href="part.link" target="_blank" class="part-buy-btn">
                  🛒 Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>

    
      </div>

      <div v-else class="no-selection-placeholder">
        <div class="placeholder-content">
          <span class="placeholder-icon">👈</span>
          <p>
            Chọn mô hình ở menu 
            <span class="text-desktop">bên trái</span>
            <span class="text-mobile">phía trên</span> 
            để xem chi tiết
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';

const detailPanelRef = ref(null);
const activeSeriesId = ref(null);    
const selectedModel = ref(null);      
const isIframeRendered = ref(false);

const modelCategories = ref([
  {
    seriesId: 'series-rc-ben',
    seriesName: 'Dòng Xe Ben Tự Đổ RC',
    type: 'remote',
    items: [
      {
        id: 'rc-ben-standard',
        name: 'Xe Ben Huina 573 Cầu Sau',
        description: 'Phiên bản tiêu chuẩn sử dụng hệ dẫn động cầu sau vi sai, thùng ben nâng hạ bằng trục động cơ giảm tốc bước, tải trọng nâng 1.5kg.',
        youtubeId: 'dQw4w9WgXcQ', 
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Động cơ giảm tốc 1:90', qty: 2, image: 'https://picsum.photos/id/101/80/80', link: 'https://shopee.vn' },
          { name: 'Bánh xe mô hình cao su', qty: 4, image: 'https://picsum.photos/id/102/80/80', link: 'https://shopee.vn' },
          { name: 'Mạch điều khiển 4 kênh', qty: 1, image: 'https://picsum.photos/id/103/80/80', link: 'https://shopee.vn' },
          { name: 'Cơ cấu nâng hạ trục vít', qty: 1, image: 'https://picsum.photos/id/104/80/80', link: 'https://shopee.vn' }
        ]
      },
      {
        id: 'rc-ben-thuy-luc',
        name: 'Xe Ben Siêu Tải Trọng Thủy Lực 6x6',
        description: 'Mô hình xe ben ba cầu dẫn động toàn phần, sử dụng hệ thống bơm thủy lực áp lực cao để nâng thùng ben nặng tới 5kg.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Bơm thủy lực mini 12V', qty: 1, image: 'https://picsum.photos/id/201/80/80', link: 'https://shopee.vn' },
          { name: 'Ty ben thủy lực kim loại', qty: 1, image: 'https://picsum.photos/id/202/80/80', link: 'https://shopee.vn' },
          { name: 'Trục các-đăng truyền động', qty: 3, image: 'https://picsum.photos/id/203/80/80', link: 'https://shopee.vn' },
          { name: 'Động cơ không chổi than ESC', qty: 1, image: 'https://picsum.photos/id/204/80/80', link: 'https://shopee.vn' }
        ]
      },
      {
        id: 'rc-ben-xich',
        name: 'Xe Tải Ben Bánh Xích Địa Hình',
        description: 'Sự kết hợp giữa xe ben tự đổ và hệ thống chuyển động xích giúp xe dễ dàng vượt qua bùn lầy, bãi cát trơn trượt.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Băng xích cao su đúc', qty: 2, image: 'https://picsum.photos/id/301/80/80', link: 'https://shopee.vn' },
          { name: 'Hộp số giảm tốc đôi', qty: 1, image: 'https://picsum.photos/id/302/80/80', link: 'https://shopee.vn' },
          { name: 'Khung gầm sắt CNC', qty: 1, image: 'https://picsum.photos/id/303/80/80', link: 'https://shopee.vn' }
        ]
      }
    ]
  },
  {
    seriesId: 'series-rc-dau-keo',
    seriesName: 'Dòng Xe Đầu Kéo Container RC',
    type: 'remote',
    items: [
      {
        id: 'rc-dau-keo-tamiya',
        name: 'Xe Đầu Kéo Mỹ 3 Trục Scania',
        description: 'Mô hình xe đầu kéo container cao cấp, có hộp số 3 cấp chuyển số từ xa, mô phỏng tiếng máy và hệ thống khói xả độc đáo.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Hộp số cơ khí 3 cấp', qty: 1, image: 'https://picsum.photos/id/401/80/80', link: 'https://shopee.vn' },
          { name: 'Mạch giả lập âm thanh & đèn', qty: 1, image: 'https://picsum.photos/id/402/80/80', link: 'https://shopee.vn' },
          { name: 'Servo lái chịu lực 20kg', qty: 1, image: 'https://picsum.photos/id/403/80/80', link: 'https://shopee.vn' },
          { name: 'Lốp cao su bám đường', qty: 10, image: 'https://picsum.photos/id/404/80/80', link: 'https://shopee.vn' }
        ]
      },
      {
        id: 'rc-ro-mooc',
        name: 'Rơ-Moóc (Trailer) Sàn Phẳng',
        description: 'Moóc kéo độc lập gắn sau xe đầu kéo, tích hợp hệ thống chân chống tự động bằng điện điều khiển từ xa.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Trục bánh xe Moóc', qty: 3, image: 'https://picsum.photos/id/501/80/80', link: 'https://shopee.vn' },
          { name: 'Động cơ chân chống điện', qty: 2, image: 'https://picsum.photos/id/502/80/80', link: 'https://shopee.vn' },
          { name: 'Đèn led hậu moóc', qty: 2, image: 'https://picsum.photos/id/503/80/80', link: 'https://shopee.vn' }
        ]
      }
    ]
  },
  {
    seriesId: 'series-rc-cau-cuoc',
    seriesName: 'Dòng Xe Cuốc / Múc Đất RC',
    type: 'remote',
    items: [
      {
        id: 'rc-cuoc-servo',
        name: 'Xe Cuốc Máy Xúc Động Cơ Servo',
        description: 'Mô hình xe cuốc tiết kiệm chi phí, sử dụng các động cơ servo góc quay lớn để điều khiển các khớp cánh tay múc.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Servo MG996R cốt kim loại', qty: 4, image: 'https://picsum.photos/id/601/80/80', link: 'https://shopee.vn' },
          { name: 'Bộ khung tay múc bằng nhựa PETG', qty: 1, image: 'https://picsum.photos/id/602/80/80', link: 'https://shopee.vn' },
          { name: 'Mạch Arduino Uno R3', qty: 1, image: 'https://picsum.photos/id/603/80/80', link: 'https://shopee.vn' }
        ]
      },
      {
        id: 'rc-cuoc-thuy-luc',
        name: 'Xe Xúc Đất Thủy Lực Toàn Phần',
        description: 'Dòng xe cơ giới hạng nặng mô phỏng 100% xe thật, gầu xúc bằng thép cứng lực múc cực mạnh, múc được đất đá thật.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Van chia dầu thủy lực 3 cổng', qty: 1, image: 'https://picsum.photos/id/701/80/80', link: 'https://shopee.vn' },
          { name: 'Gầu múc thép CNC', qty: 1, image: 'https://picsum.photos/id/702/80/80', link: 'https://shopee.vn' },
          { name: 'Động cơ quay toa 360 độ', qty: 1, image: 'https://picsum.photos/id/703/80/80', link: 'https://shopee.vn' }
        ]
      }
    ]
  },
  {
    seriesId: 'series-manual-ba-gac',
    seriesName: 'Dòng Xe Ba Gác STEM',
    type: 'manual',
    items: [
      {
        id: 'manual-bagac-formex',
        name: 'Xe Ba Gác Tự Chế Bằng Formex',
        description: 'Bộ kit học tập đơn giản cắt sẵn bằng tấm Formex, kết nối bằng keo 502, dùng pin và công tắc gạt để tiến lùi cơ bản.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Tấm Formex cắt sẵn 5mm', qty: 1, image: 'https://picsum.photos/id/801/80/80', link: 'https://shopee.vn' },
          { name: 'Động cơ đồ chơi 3V-6V', qty: 1, image: 'https://picsum.photos/id/802/80/80', link: 'https://shopee.vn' },
          { name: 'Đế pin AA 2 viên', qty: 1, image: 'https://picsum.photos/id/803/80/80', link: 'https://shopee.vn' },
          { name: 'Công tắc gạt 6 chân bập bênh', qty: 1, image: 'https://picsum.photos/id/804/80/80', link: 'https://shopee.vn' }
        ]
      },
      {
        id: 'manual-bagac-tre',
        name: 'Mô Hình Xe Lôi Ba Gác Gỗ Tre',
        description: 'Sản phẩm thủ công mỹ nghệ mô phỏng xe lôi nam bộ làm từ các thanh tre, gỗ tăm đan cài tinh xảo.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Tăm tre phân loại cỡ', qty: 100, image: 'https://picsum.photos/id/901/80/80', link: 'https://shopee.vn' },
          { name: 'Keo nến siêu dính', qty: 5, image: 'https://picsum.photos/id/902/80/80', link: 'https://shopee.vn' }
        ]
      }
    ]
  },
  {
    seriesId: 'series-manual-f1',
    seriesName: 'Dòng Xe Đua F1 Động Học',
    type: 'manual',
    items: [
      {
        id: 'manual-f1-daycot',
        name: 'Xe Đua F1 Chạy Bằng Dây Cót',
        description: 'Mô hình cơ khí lắp ráp gỗ 3D chuyển động bằng hệ thống bánh răng và dây cót thép bền bỉ, không cần dùng điện.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Mảnh ghép gỗ Laser 3D', qty: 3, image: 'https://picsum.photos/id/910/80/80', link: 'https://shopee.vn' },
          { name: 'Cụm bánh răng cót thép', qty: 1, image: 'https://picsum.photos/id/911/80/80', link: 'https://shopee.vn' },
          { name: 'Trục sắt truyền lực', qty: 2, image: 'https://picsum.photos/id/912/80/80', link: 'https://shopee.vn' }
        ]
      },
      {
        id: 'manual-f1-phanquang',
        name: 'Xe Đua F1 Năng Lượng Mặt Trời',
        description: 'Mô hình xe F1 siêu nhẹ ứng dụng pin mặt trời truyền điện trực tiếp cho động cơ lõi từ mini chạy khi có nắng.',
        youtubeId: 'dQw4w9WgXcQ',
        shopeeUrl: 'https://shopee.vn',
        parts: [
          { name: 'Tấm pin mặt trời mini 5V', qty: 1, image: 'https://picsum.photos/id/920/80/80', link: 'https://shopee.vn' },
          { name: 'Động cơ coreless siêu nhẹ', qty: 1, image: 'https://picsum.photos/id/921/80/80', link: 'https://shopee.vn' },
          { name: 'Khung gầm nhựa ABS đúc', qty: 1, image: 'https://picsum.photos/id/922/80/80', link: 'https://shopee.vn' }
        ]
      }
    ]
  }
]);

const remoteControlledSeries = computed(() => modelCategories.value.filter(s => s.type === 'remote'));
const manualSeries = computed(() => modelCategories.value.filter(s => s.type === 'manual'));

const toggleSeries = (seriesId) => {
  activeSeriesId.value = activeSeriesId.value === seriesId ? null : seriesId;
};

const selectModel = async (model) => {
  isIframeRendered.value = false; 
  selectedModel.value = model;

  await nextTick();

  if (detailPanelRef.value && window.innerWidth <= 900) {
    detailPanelRef.value.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const loadAndPlayVideo = () => {
  isIframeRendered.value = true;
};
</script>

<style scoped>
/* --- TỐI ƯU HÓA THANH CUỘN TOÀN TRANG --- */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #080d11;
}
::-webkit-scrollbar-thumb {
  background: #203142;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #f1c40f;
}

/* --- WRAPPER CHÍNH --- */
.models-showcase-wrapper { 
  display: grid; 
  grid-template-columns: 320px 1fr; 
  gap: 30px; 
  max-width: 1400px; 
  margin: 30px auto; 
  padding: 24px; 
  background: radial-gradient(circle at top left, #121b22 0%, #080d11 100%); 
  color: #f5f6f7; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
  box-sizing: border-box; 
}

/* --- SIDEBAR MENU (MÀN TRÁI) --- */
.sidebar-menu { 
  background: rgba(13, 22, 31, 0.7); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  border-radius: 16px; 
  padding: 20px; 
  height: fit-content; 
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
.category-section { margin-bottom: 24px; }
.category-section:last-child { margin-bottom: 0; }
.category-title { 
  font-size: 0.95rem; 
  color: #f1c40f; 
  margin: 0 0 16px 0; 
  padding-bottom: 8px; 
  border-bottom: 2px solid rgba(241, 196, 15, 0.15); 
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.series-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.series-header { 
  padding: 14px 16px; 
  background: rgba(255, 255, 255, 0.02); 
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 10px; 
  cursor: pointer; 
  font-size: 0.9rem; 
  font-weight: 600; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
}
.series-header:hover { 
  background: rgba(255, 255, 255, 0.06); 
  border-color: rgba(241, 196, 15, 0.3);
  color: #fff;
}
.series-header.expanded { 
  background: rgba(241, 196, 15, 0.05); 
  border-color: rgba(241, 196, 15, 0.4);
  color: #f1c40f;
}
.arrow-indicator {
  font-size: 0.75rem;
  opacity: 0.7;
  transition: transform 0.3s ease;
}

/* --- MENU CON (SUB MODEL LIST) --- */
.sub-model-list { 
  list-style: none; 
  padding: 6px 0 6px 14px; 
  margin: 6px 0 0 4px; 
  display: flex; 
  flex-direction: column; 
  gap: 6px; 
  border-left: 1px dashed rgba(255, 255, 255, 0.1);
}
.sub-model-list li { 
  padding: 11px 14px; 
  background: transparent; 
  border-radius: 8px; 
  font-size: 0.85rem; 
  cursor: pointer; 
  color: #a0aec0; 
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
}
.sub-model-list li:hover { 
  color: #f1c40f; 
  background: rgba(255, 255, 255, 0.03);
  padding-left: 18px;
}
.sub-model-list li.active { 
  background: linear-gradient(90deg, rgba(241, 196, 15, 0.15) 0%, rgba(241, 196, 15, 0.02) 100%); 
  color: #f1c40f; 
  font-weight: 700; 
  border-left: 3px solid #f1c40f; 
  padding-left: 16px;
  box-shadow: inset 5px 0 15px rgba(241, 196, 15, 0.05);
}

/* --- KHU VỰC CHI TIẾT (BÊN PHẢI) --- */
.detail-panel { 
  background: rgba(13, 22, 31, 0.4); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  border-radius: 16px; 
  padding: 30px; 
  min-height: 550px; 
  display: flex; 
  flex-direction: column; 
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  scroll-margin-top: 30px; 
}
.detail-title { 
  font-size: 1.8rem; 
  font-weight: 800;
  margin: 0 0 12px 0; 
  color: #ffffff; 
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #ffffff 0%, #f1c40f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.detail-desc { 
  font-size: 0.98rem; 
  color: #a0aec0; 
  line-height: 1.6; 
  margin-bottom: 26px; 
}

/* --- VIDEO PLAYER & COVER --- */
.video-container { 
  position: relative; 
  width: 100%; 
  aspect-ratio: 16 / 9; 
  background: #05080c; 
  border-radius: 14px; 
  overflow: hidden; 
  margin-bottom: 30px; 
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}
.video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

.video-cover-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: all 0.4s ease;
}
/* Overlay làm mờ tối hình ảnh cover */
.video-cover-placeholder::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(8, 13, 17, 0.5);
  transition: background 0.3s ease;
}
.video-cover-placeholder:hover::before {
  background: rgba(8, 13, 17, 0.3);
}

.custom-play-button { 
  position: relative;
  width: 80px; 
  height: 80px; 
  background: #f1c40f; 
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
  box-shadow: 0 0 30px rgba(241, 196, 15, 0.4); 
  z-index: 1;
}
.play-icon { 
  color: #0b1116; 
  font-size: 1.8rem; 
  margin-left: 6px; 
}
/* Sóng lan tỏa khi hover vào video cover */
.video-cover-placeholder:hover .custom-play-button { 
  background: #ffffff;
  transform: scale(1.1); 
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
}
.play-text { 
  position: relative;
  z-index: 1;
  font-size: 0.9rem; 
  font-weight: bold;
  color: #fff; 
  background: rgba(13, 22, 31, 0.85); 
  padding: 8px 16px; 
  border-radius: 30px; 
  backdrop-filter: blur(4px); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* --- LINH KIỆN COMPONENT GRID --- */
.model-parts-section { margin-bottom: 10px; }
.parts-section-title { 
  font-size: 1rem; 
  font-weight: bold;
  color: #f1c40f; 
  margin: 0 0 18px 0; 
  letter-spacing: 0.3px;
}
.parts-horizontal-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); 
  gap: 16px; 
}

.part-mini-card { 
  display: flex; 
  gap: 14px; 
  background: rgba(255, 255, 255, 0.02); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  padding: 14px; 
  border-radius: 12px; 
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.part-mini-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(241, 196, 15, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.part-img-box { 
  width: 76px; 
  height: 76px; 
  background: #080d11; 
  border-radius: 8px; 
  overflow: hidden; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.3s;
}
.part-mini-card:hover .part-img-box {
  border-color: rgba(241, 196, 15, 0.3);
}
.part-img-box img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.part-mini-info { 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  flex: 1; 
  min-width: 0; 
}
.part-mini-name { 
  font-size: 0.85rem; 
  font-weight: 700; 
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}
.part-mini-qty { 
  font-size: 0.8rem; 
  color: #718096; 
}
.part-buy-btn { 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  background: rgba(241, 196, 15, 0.08); 
  color: #f1c40f; 
  text-decoration: none; 
  font-size: 0.75rem; 
  font-weight: bold; 
  padding: 6px 12px; 
  border-radius: 6px; 
  border: 1px solid rgba(241, 196, 15, 0.2);
  width: fit-content;
  margin-top: 6px;
  transition: all 0.25s ease;
}
.part-buy-btn:hover {
  background: #f1c40f;
  color: #080d11;
  border-color: #f1c40f;
  box-shadow: 0 4px 12px rgba(241, 196, 15, 0.2);
}

/* --- TRẠNG THÁI TRỐNG (NO SELECTION PLACEHOLDER) --- */
.no-selection-placeholder { 
  display: flex; 
  flex: 1; 
  align-items: center; 
  justify-content: center; 
  border: 2px dashed rgba(255, 255, 255, 0.05); 
  border-radius: 16px; 
  padding: 40px; 
}
.placeholder-content { text-align: center; color: #a0aec0; max-width: 400px; }
.placeholder-icon { 
  font-size: 3.5rem; 
  display: inline-block; 
  margin-bottom: 20px; 
  filter: drop-shadow(0 5px 15px rgba(241, 196, 15, 0.3));
  animation: floatDesktop 2s ease-in-out infinite; 
}
.placeholder-content p { 
  font-size: 1.05rem; 
  line-height: 1.6; 
  margin: 0; 
}

.text-desktop { display: inline; color: #f1c40f; font-weight: 600;}
.text-mobile { display: none; }

/* --- HIỆU ỨNG CHUYỂN CẢNH (TRANSITION SLIDE) --- */
.slide-enter-active, .slide-leave-active { 
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
  max-height: 350px; 
  overflow: hidden; 
}
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; }

@keyframes floatDesktop { 
  0%, 100% { transform: translateX(0); } 
  50% { transform: translateX(-10px); } 
}

/* --- THIẾT KẾ ĐÁP ỨNG (RESPONSIVE) --- */
@media (max-width: 900px) {
  .models-showcase-wrapper { 
    grid-template-columns: 1fr; 
    gap: 20px;
    padding: 12px; 
    margin: 10px auto;
  }
  .sidebar-menu {
    padding: 16px;
  }
  .detail-panel {
    padding: 20px;
  }
  .text-desktop { display: none; }
  .text-mobile { display: inline; color: #f1c40f; font-weight: bold; }
  .placeholder-icon { transform: rotate(90deg); animation: floatMobile 2s ease-in-out infinite; }
  .parts-horizontal-grid { grid-template-columns: 1fr; }
}

@keyframes floatMobile { 
  0%, 100% { transform: rotate(90deg) translateY(0); } 
  50% { transform: rotate(90deg) translateY(-10px); } 
}
</style>