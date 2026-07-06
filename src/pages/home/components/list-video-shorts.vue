



<template>
  <div class="w-full max-w-7xl mx-auto p-4 bg-gray-50/50 rounded-3xl">
    
    <div class="flex items-center justify-between mb-6 px-2">
      <h2 class="text-2xl font-black text-gray-900 flex items-center gap-3">
        <span class="w-2.5 h-8 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]"></span> BỘ LINK KIỆN VÀ HƯỚNG DẪN LẮP RÁP     </h2>

      <div class="hidden md:flex gap-2">
        <button @click="scroll('left')" class="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 active:scale-90 transition-all cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button @click="scroll('right')" class="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 active:scale-90 transition-all cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
    
    <div class="flex flex-col items-center justify-center gap-2 mb-8 bg-green-600 p-3 rounded-xl border border-gray-200/30 w-full max-w-md mx-auto">
      <span class="text-[16px] font-black text-white uppercase tracking-widest text-center">
        Phân Loại Mô Hình
      </span>
      
      <div class="flex p-1 rounded-xl border border-gray-100 shadow-inner">
        <button 
          @click="currentType = 'with-motor'" 
          :class="[
            'px-5 py-2 text-xs font-black rounded-lg transition-all cursor-pointer uppercase tracking-wider',
            currentType === 'with-motor' ? 'bg-white text-red-500 shadow-md' : 'text-gray-500 hover:text-gray-900'
          ]"
        >
          Có động cơ điện
        </button>
        <button 
          @click="currentType = 'without-motor'" 
          :class="[
            'px-5 py-2 text-xs font-black rounded-lg transition-all cursor-pointer uppercase tracking-wider',
            currentType === 'without-motor' ? 'bg-white text-blue-600 shadow-md' : 'text-white hover:text-gray-900'
          ]"
        >
          Không động cơ điện
        </button>
      </div>
    </div>

    <div 
      ref="scrollContainer"
      class="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scrollbar-none pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth"
    >
      <div 
        v-for="(item, index) in activeShortsList" 
        :key="currentType + index"
        class="min-w-[85vw] sm:min-w-[350px] md:min-w-0 w-full bg-white border border-gray-100 rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 snap-start flex flex-col border-b-4 border-b-gray-200/50"
      >
        <div class="mb-4">
          <div :class="[
            'inline-block px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg mb-1',
            currentType === 'with-motor' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
          ]">
            Mô Hình {{ index + 1 }}
          </div>
          <h3 class="text-lg font-extrabold text-gray-800 leading-tight line-clamp-1">
            {{ item.title }}
          </h3>
        </div>

        <div class="flex-1 flex flex-col gap-2.5 mb-5 max-h-[240px] overflow-y-auto pr-1 scrollbar-thin">
          <div class="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            Linh kiện sử dụng
            <span class="flex-1 h-[1px] bg-gray-100"></span>
          </div>

          <a 
            v-for="(comp, compIdx) in item.components"
            :key="compIdx"
            :href="comp.shopUrl" 
            target="_blank"
            class="group flex items-center gap-3 bg-gray-50 p-2 rounded-2xl border border-transparent transition-all duration-300"
          >
            <div class="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-gray-100 flex-shrink-0">
              <img :src="comp.componentImage" :alt="comp.componentName" class="w-full h-full object-cover" />
            </div>

            <div class="flex-1 min-w-0">
              <h4 class="text-[11px] font-bold text-gray-700 line-clamp-1 mb-0.5">
                {{ comp.componentName }}
              </h4>
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-red-600">{{ comp.componentPrice }}</span>
                
                <div class="text-[9px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold shadow-xs">
                  MUA NGAY
                </div>
              </div>
            </div>
          </a>
        </div>

        <div 
          @click="openVideoModal(item)"
          class="relative w-full aspect-[16/9] md:aspect-[9/16] bg-gray-900 rounded-[1.5rem] overflow-hidden shadow-md cursor-pointer group/video border border-gray-100"
        >
          <img 
            :src="item.thumbnail" 
            alt="Video Thumbnail" 
            class="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-700 brightness-95"
          >
          <div class="absolute inset-0 bg-black/30 group-hover/video:bg-black/40 flex flex-col items-center justify-center gap-2 transition-colors z-20">
            <div :class="[
              'w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg group-hover/video:scale-110 transition-all duration-300',
              currentType === 'with-motor' ? 'bg-red-600 group-hover/video:bg-red-500' : 'bg-blue-600 group-hover/video:bg-blue-500'
            ]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span class="text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
              Xem Video Hướng Dẫn
            </span>
          </div>
        </div>

      </div>
    </div>

    <div 
      v-if="activeVideo" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click.self="closeVideoModal"
    >
      <div class="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div class="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <div>
            <h3 class="font-black text-gray-900 text-lg">{{ activeVideo.title }}</h3>
            <p class="text-xs text-gray-500">Chọn chế độ xem video hướng dẫn bên dưới</p>
          </div>
          <button @click="closeVideoModal" class="p-2 text-gray-400 hover:text-gray-700 bg-white rounded-full border border-gray-200 shadow-xs cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6 bg-gray-900 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col gap-2 md:col-span-1">
            <span class="text-xs text-red-400 font-black uppercase tracking-wider">⚡ Video Shorts / Test</span>
            <div class="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden ring-1 ring-white/10">
              <iframe
                class="absolute inset-0 w-full h-full"
                :src="getEmbedUrl(activeVideo.url)"
                title="Shorts Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="flex flex-col gap-2 md:col-span-2">
            <span class="text-xs text-blue-400 font-black uppercase tracking-wider">📺 Video dài hướng dẫn chi tiết</span>
            <div class="relative w-full aspect-[16/9] bg-black rounded-2xl overflow-hidden ring-1 ring-white/10">
              <iframe
                class="absolute inset-0 w-full h-full"
                :src="getEmbedUrl(activeVideo.longVideoUrl)"
                title="Long Tutorial Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            
            <div class="mt-4 text-gray-300 text-xs bg-white/5 p-3 rounded-xl border border-white/5">
              <p class="font-bold text-white mb-1">💡 Mẹo lắp ráp:</p>
              Hãy xem video chi tiết bên phải để hiểu rõ quy trình phân tách lắp ghép cấu trúc kỹ thuật cho dòng xe này.
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { shortsWithMotor } from '../data/rcWithMotor'
import { shortsWithoutMotor } from '../data/rcWithoutMotor'

const currentType = ref('with-motor')
const scrollContainer = ref(null)
const activeVideo = ref(null)

const activeShortsList = computed(() => {
  return currentType.value === 'with-motor' ? shortsWithMotor : shortsWithoutMotor
})

const scroll = (direction) => {
  if (!scrollContainer.value) return
  const scrollAmount = 380
  scrollContainer.value.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
}

const openVideoModal = (item) => {
  activeVideo.value = item
}
const closeVideoModal = () => {
  activeVideo.value = null
}

const getEmbedUrl = (url) => {
  if (!url) return ''
  let videoId = ''
  if (url.includes('/shorts/')) videoId = url.split('/shorts/')[1]?.split('?')[0]
  else if (url.includes('v=')) videoId = url.split('v=')[1]?.split('&')[0]
  else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1]?.split('?')[0]
  return `https://www.youtube.com/embed/${videoId}`
}
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}

.hover\:shadow-xl:hover {
  transform: translateY(-5px);
}
</style>