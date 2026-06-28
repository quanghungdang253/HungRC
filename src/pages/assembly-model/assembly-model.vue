<template>
  <div class="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen space-y-16">
    
    <div 
      v-for="model in modelList" 
      :key="model.id"
      class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
    >
      <h2 class="text-xl font-bold uppercase tracking-wider mb-6 text-gray-800 border-l-4 border-yellow-500 pl-3">
        Chi tiết mô hình: {{ model.name }}
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-7 w-full">
          <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-md bg-black">
            <iframe 
              class="absolute top-0 left-0 w-full h-full border-0"
              :src="getEmbedUrl(model.youtubeId)"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="lg:col-span-5 w-full space-y-6">
          
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Chức năng</h3>
            <div class="flex flex-wrap gap-x-6 gap-y-2">
              <div 
                v-for="(feature, index) in model.features" 
                :key="index"
                class="flex items-center text-sm font-medium text-gray-700"
              >
                <svg class="w-4 h-4 text-yellow-500 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
                {{ feature }}
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Linh kiện sử dụng</h3>
            <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
              
              <div 
                v-for="part in model.components" 
                :key="part.id"
                class="p-3 sm:p-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <div class="flex items-center gap-3 flex-1 min-w-0">
                  <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 border border-gray-200">
                    <img :src="part.image" :alt="part.name" class="max-w-[85%] max-h-[85%] object-contain" />
                  </div>
                  <span class="text-sm font-semibold text-gray-700 truncate">{{ part.name }}</span>
                </div>

                <div class="text-sm font-bold text-gray-500 px-2">
                  {{ part.quantity }}
                </div>

                <a 
                  :href="part.shopeeUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-500 bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white text-xs font-bold transition-all duration-200 shadow-sm whitespace-nowrap"
                >
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 16H5V8h14v11z"/>
                  </svg>
                  Mua trên Shopee
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Danh sách tất cả mô hình (Bạn có thể thoải mái dán link YouTube bất kỳ vào đây)
const modelList = ref([
  {
    id: 1,
    name: 'Xe ben điều khiển',
    youtubeId: 'https://youtu.be/_tlHf2NREpA', // Định dạng link rút gọn di động
    features: ['Điều khiển tiến / lùi', 'Đánh lái trái / phải', 'Nâng hạ thùng ben'],
    components: [
      { id: 101, name: 'Động cơ DC 3-6V', quantity: 2, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' },
      { id: 102, name: 'Hộp pin 3xAA', quantity: 1, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' },
      { id: 103, name: 'Công tác gạt', quantity: 1, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' },
      { id: 104, name: 'Bánh xe cao su', quantity: 6, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' },
      { id: 105, name: 'Bộ lắp ghép kỹ thuật', quantity: 1, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' }
    ]
  },
  {
    id: 2,
    name: 'Xe cứu hộ',
    youtubeId: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk', // Định dạng link đầy đủ trên máy tính
    features: ['Hệ thống tời kéo dây', 'Nâng hạ tay cẩu', 'Đèn báo khẩn cấp'],
    components: [
      { id: 201, name: 'Động cơ giảm tốc vàng', quantity: 1, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' },
      { id: 202, name: 'Mạch điều khiển từ xa', quantity: 1, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' },
      { id: 203, name: 'Bánh xe lớn', quantity: 4, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' }
    ]
  },
  {
    id: 3,
    name: 'Xe cần cẩu',
    youtubeId: 'dQw4w9WgXcQ', // Hoặc chỉ cần truyền mỗi ID video vẫn chạy tốt
    features: ['Xoay mâm 360 độ', 'Cần cẩu vươn dài', 'Chân trụ vững chắc'],
    components: [
      { id: 301, name: 'Động cơ servo 9g', quantity: 3, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' },
      { id: 302, name: 'Dây cước siêu bền', quantity: 1, image: 'https://via.placeholder.com/50', shopeeUrl: 'https://shopee.vn' }
    ]
  }
]);

// Hàm Helper: Tự động tách ID từ link YouTube bất kỳ để chuyển thành link Embed chuẩn
const getEmbedUrl = (urlOrId) => {
  if (!urlOrId) return '';
  
  // Nếu đã là link embed sẵn, trả về luôn
  if (urlOrId.includes('youtube.com/embed/')) return urlOrId;
  
  let videoId = urlOrId;
  
  try {
    if (urlOrId.includes('youtu.be/')) {
      // Xử lý loại link: https://youtu.be/_tlHf2NREpA
      videoId = urlOrId.split('youtu.be/')[1]?.split(/[?#]/)[0];
    } else if (urlOrId.includes('youtube.com/watch')) {
      // Xử lý loại link: https://www.youtube.com/watch?v=kJQP7kiw5Fk
      const urlParams = new URLSearchParams(urlOrId.split('?')[1]);
      videoId = urlParams.get('v');
    }
  } catch (e) {
    console.error("Lỗi xử lý link YouTube:", e);
  }
  
  return `https://www.youtube.com/embed/${videoId}`;
};
</script>