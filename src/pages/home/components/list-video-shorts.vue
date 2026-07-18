<template>
  <div class="w-full max-w-7xl mx-auto p-4 bg-gray-50/50 rounded-3xl">
    
    <!-- Tiêu đề lớn -->
    <div class="flex items-center justify-between mb-6 px-2">
      <h2 class="text-2xl font-black text-gray-900 flex items-center gap-3">
        <span class="w-2.5 h-8 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]"></span>
        BỘ LINH KIỆN VÀ HƯỚNG DẪN LẮP RÁP
      </h2>
    </div>
    
    <!-- BỘ LỌC PHÂN LOẠI MÔ HÌNH -->
    <div class="flex flex-col items-center justify-center gap-3 mb-8 bg-gray-900/90 p-4 rounded-sm border border-white/10 w-full backdrop-blur-md shadow-xl">
      <span class="lg:text-xl font-black text-white uppercase tracking-widest text-center flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        Phân Loại Mô Hình
      </span>
      
      <div class="flex p-1.5 bg-black/40 rounded-xl border border-white/5 shadow-inner w-full">
        <button
          @click="switchType('with-motor')"
          :class="[
            'flex-1 px-5 py-3 text-xs font-black rounded-lg transition-all duration-300 cursor-pointer uppercase tracking-wider text-center select-none',
            currentType === 'with-motor'
              ? 'bg-red-600 text-white shadow-[0_4px_12px_rgba(220,38,38,0.3)] scale-[1.02]'
              : 'text-white hover:text-gray-200 hover:bg-white/5'
          ]"
        >
          Có động cơ điện
        </button>
        
        <button
          @click="switchType('without-motor')"
          :class="[
            'flex-1 px-5 py-3 text-xs font-black rounded-lg transition-all duration-300 cursor-pointer uppercase tracking-wider text-center select-none',
            currentType === 'without-motor'
              ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)] scale-[1.02]'
              : 'text-white hover:text-gray-200 hover:bg-white/5'
          ]"
        >
          Không động cơ điện
        </button>
      </div>
    </div>

    <!-- Hiệu ứng Loading nhẹ -->
    <div v-if="isLoading" class="flex justify-center items-center py-20 text-gray-500 font-bold gap-2">
      <div class="w-6 h-6 border-4 border-t-transparent border-green-600 rounded-full animate-spin"></div>
      Đang tải danh sách linh kiện...
    </div>

    <!-- KHU VỰC HIỂN THỊ DANH SÁCH MÔ HÌNH -->
    <div v-else class="w-full flex flex-col gap-4">
      
      <div class="relative group/slider w-full px-0 md:px-4">
        <!-- NÚT TRÁI -->
        <button 
          @click="scroll('left')" 
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 border border-gray-200 text-gray-800 rounded-full shadow-lg hover:bg-white active:scale-90 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 -translate-x-2 group-hover/slider:translate-x-0 backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <!-- Container list -->
        <div
          ref="scrollContainer"
          class="flex flex-nowrap gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory scroll-smooth w-full"
        >
          <div
            v-for="(item, index) in activeShortsList"
            :key="item.id || index"
            class="min-w-[85vw] sm:min-w-[400px] md:min-w-[calc((100%-48px)/3)] w-full bg-white border border-gray-100 rounded-[2rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 snap-start flex flex-col border-b-4 border-b-gray-200/50"
          >
            <div class="mb-5">
              <div :class="[
                'inline-block px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg mb-1',
                currentType === 'with-motor' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
              ]">
                MÔ HÌNH {{ index + 1 }}
              </div>
              <h3 class="text-base lg:text-lg font-extrabold text-gray-800 leading-tight break-words whitespace-normal">
                {{ item.title }}
              </h3>
            </div>

            <!-- Khung kích hoạt mở Modal Video -->
            <div
              @click="openVideoModal(item)"
              class="relative w-full aspect-[16/9] bg-gray-900 rounded-[0.5rem] overflow-hidden shadow-md cursor-pointer group/video border border-gray-200 mt-auto"
            >
              <!-- TỐI ƯU 1: Thêm loading="lazy" cho ảnh thumbnail danh sách -->
              <img 
                :src="item.thumbnail || item.image" 
                :alt="item.title"
                loading="lazy"
                class="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover/video:scale-110"
              />
              
              <div class="absolute inset-0 bg-black/40 group-hover/video:bg-black/50 transition-colors duration-300 z-10"></div>

              <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
                <div class="w-16 h-11 bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-lg group-hover/video:scale-110 group-hover/video:bg-red-500 transition-all duration-300 relative">
                  <div class="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1"></div>
                </div>
                <span class="text-white text-[10px] lg:text-xs font-black bg-black/40 px-3 lg:px-4 py-1.5 rounded-full backdrop-blur-md shadow-xs border border-white/10 transition-all">
                  Xem Video & Bộ Linh Kiện
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- NÚT PHẢI -->
        <button 
          @click="scroll('right')" 
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 border border-gray-200 text-gray-800 rounded-full shadow-lg hover:bg-white active:scale-90 transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100 translate-x-2 group-hover/slider:translate-x-0 backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <!-- HAI NÚT ĐIỀU HƯỚNG DƯỚI VIDEO (Mobile) -->
      <div class="flex md:hidden justify-center items-center gap-6 mt-2 pb-6">
        <button
          @click="scroll('left')"
          class="flex items-center justify-center gap-1.5 px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl active:bg-gray-100 active:scale-95 transition-all font-bold text-sm shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Mô hình trước
        </button>
        
        <button
          @click="scroll('right')"
          class="flex items-center justify-center gap-1.5 px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl active:bg-gray-100 active:scale-95 transition-all font-bold text-sm shadow-sm"
        >
          Mô hình tiếp
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Modal Video Pop-up chi tiết -->
    <div
      v-if="activeVideo"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click.self="closeVideoModal"
    >
      <div class="bg-white rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        <!-- Header của Modal -->
        <div class="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50 flex-shrink-0">
          <div class="pr-4 min-w-0">
            <h3 class="font-black text-gray-900 text-base md:text-lg break-words leading-tight">{{ activeVideo.title }}</h3>
            <p class="text-xs text-gray-500 mt-0.5">Hệ thống video kiểm thử mô hình và danh sách linh kiện đi kèm</p>
          </div>
          <button @click="closeVideoModal" class="p-2 text-gray-400 hover:text-gray-700 bg-white rounded-full border border-gray-200 shadow-xs cursor-pointer flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Nội dung bên trong Modal -->
        <div ref="modalContentContainer" class="p-4 md:p-6 bg-gray-900 overflow-y-auto flex-1 flex flex-col gap-6 scroll-smooth">
          
          <!-- KHU VỰC PHÁT VIDEO -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 flex-shrink-0 items-stretch">
            <div class="flex flex-col gap-3 md:col-span-2">
              <span class="text-xs text-blue-400 font-black uppercase tracking-wider">📺 Video dài hướng dẫn lắp ráp chi tiết</span>
              <div class="relative w-full aspect-[16/9] bg-black rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-inner">
                <iframe class="absolute inset-0 w-full h-full" :src="getEmbedUrl(activeVideo.longVideoUrl)" frameborder="0" allowfullscreen></iframe>
              </div>

              <button
                @click="scrollToComponents"
                class="w-full py-3.5 px-4 bg-green-600 hover:bg-green-500 active:scale-[0.99] text-white rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg border border-green-500/30 cursor-pointer group text-sm font-black uppercase tracking-wider"
              >
                <span> Linh Kiện Lắp Ráp</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </button>
            </div>

            <div class="flex flex-col gap-2 md:col-span-1">
              <span class="text-xs text-red-400 font-black uppercase tracking-wider flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span> ⚡ Video Shorts / Test Máy
              </span>
              <div class="w-full md:h-[calc(100%-24px)] min-h-[320px] md:min-w-0 bg-black rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-inner flex items-center justify-center">
                <div class="h-full aspect-[9/16] max-w-full">
                  <iframe class="w-full h-full" :src="getEmbedUrl(activeVideo.url)" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>

          <!-- TỐI ƯU 2: Khu vực linh kiện áp dụng trì hoãn Render để mở Modal siêu mượt -->
          <div id="components-section" class="flex flex-col gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 w-full mt-2">
            <div class="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              Danh sách linh kiện để làm mô hình này
              <span class="flex-1 h-[1px] bg-white/10"></span>
            </div>

            <!-- Trạng thái đang chuẩn bị vẽ linh kiện -->
            <div v-if="!isComponentsRendered" class="text-center py-6 text-gray-500 text-xs font-bold animate-pulse">
              Đang đồng bộ danh sách linh kiện...
            </div>

            <!-- Chỉ vẽ danh sách khi biến isComponentsRendered = true -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                v-for="(comp, compIdx) in activeVideo.components"
                :key="compIdx"
                :href="comp.shopUrl"
                target="_blank"
                class="group flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-transparent hover:border-green-500 hover:bg-white/10 transition-all duration-300"
              >
                <div class="relative w-14 h-14 rounded-lg overflow-hidden bg-white flex-shrink-0">
                  <!-- TỐI ƯU 3: Ảnh trong modal cũng dùng lazy load -->
                  <img :src="comp.componentImage" :alt="comp.componentName" loading="lazy" class="w-full h-full object-cover" />
                </div>

                <div class="flex-1 min-w-0">
                  <h4 class="text-[12px] font-bold text-gray-200 leading-tight break-words mb-2.5">
                    {{ comp.componentName }}
                  </h4>
                  <div class="flex items-center justify-between gap-1 flex-wrap">
                    <span class="text-xs font-black text-red-400"> Số Lượng: {{ comp.componentPrice }}</span>
                    <div class="text-[9px] bg-green-600 text-white px-2.5 py-1 rounded-full font-bold tracking-wider group-hover:bg-green-500 transition-colors">
                      MUA NGAY
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentType = ref('with-motor');
const activeShortsList = ref([]);
const activeVideo = ref(null);
const scrollContainer = ref(null);
const modalContentContainer = ref(null);
const isLoading = ref(false);

// Biến kiểm soát việc vẽ linh kiện để giảm tải DOM lúc mở Modal
const isComponentsRendered = ref(false); 
let renderTimeout = null;

const loadData = async (type) => {
  isLoading.value = true;
  try {
    const module = await import('../data/rcWithMotor');
    activeShortsList.value = module.mockModelsData[type] || [];
  } catch (error) {
    console.error("Lỗi khi tải linh kiện mô hình:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadData(currentType.value);
});

const switchType = (type) => {
  currentType.value = type;
  loadData(type);
};

const scrollToComponents = () => {
  const target = document.getElementById('components-section');
  if (target && modalContentContainer.value) {
    modalContentContainer.value.scrollTo({
      top: target.offsetTop - 16,
      behavior: 'smooth'
    });
  }
};

const getEmbedUrl = (url) => {
  if (!url) return '';
  let videoId = '';
  if (url.includes('shorts/')) {
    videoId = url.split('shorts/')[1]?.split('?')[0];
  } else if (url.includes('v=')) {
    videoId = url.split('v=')[1]?.split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

// TỐI ƯU HOÁ KHI MỞ MODAL:
const openVideoModal = (video) => {
  activeVideo.value = video;
  isComponentsRendered.value = false;
  
  // Trì hoãn 250ms - 300ms nhằm đợi modal mở ra mượt mà hoàn tất rồi mới dựng List Linh Kiện
  renderTimeout = setTimeout(() => {
    isComponentsRendered.value = true;
  }, 250);
};

const closeVideoModal = () => {
  activeVideo.value = null;
  isComponentsRendered.value = false;
  if (renderTimeout) clearTimeout(renderTimeout);
};

const scroll = (direction) => {
  if (!scrollContainer.value) return;
  const scrollAmount = window.innerWidth > 640 ? 420 : window.innerWidth * 0.85;
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>  