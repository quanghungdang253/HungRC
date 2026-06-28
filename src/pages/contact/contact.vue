```vue
<template>
  <footer class="w-full bg-[#031221] text-white">
    <div class="max-w-[1350px] mx-auto px-6 lg:px-16 py-14">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- Giới thiệu -->
        <div>
          <h2
            class="text-2xl font-bold uppercase tracking-wide border-l-4 border-yellow-500 pl-4 mb-6"
          >
            Giới Thiệu 
          </h2>

          <p class="text-gray-300 leading-8 text-[15px]">
            Xin chào! Mình là
            <span class="text-yellow-400 font-semibold">Quang Hùng</span>,
            một người đam mê chế tạo, lắp ráp và thiết kế các mô hình điều
            khiển từ xa.

            <br /><br />

            Website <span class="font-semibold text-white">Hùng DIY</span>
            được mình xây dựng với mong muốn chia sẻ những mô hình đã thực
            hiện, các loại linh kiện, kinh nghiệm lắp ráp, mẹo kỹ thuật và
            những dự án DIY mà mình đã học hỏi trong quá trình sáng tạo.

            <br /><br />

            Hy vọng những nội dung trên website sẽ giúp các bạn có thêm kiến
            thức, ý tưởng mới và cùng nhau lan tỏa niềm đam mê chế tạo mô
            hình đến nhiều người hơn.
          </p>
        </div>

        <!-- Liên hệ -->
        <div>
          <h2
            class="text-2xl font-bold uppercase tracking-wide border-l-4 border-yellow-500 pl-4 mb-6"
          >
            Liên hệ
          </h2>

          <div class="flex flex-col gap-5">

            <a
              :href="`https://zalo.me/${contactInfo.zaloPhone}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 bg-[#2f82fb] hover:bg-[#1f73ea] rounded-xl p-4 transition duration-300 shadow-lg"
            >
              <div
                class="w-12 h-12 rounded-lg bg-white text-[#2f82fb] flex items-center justify-center font-bold"
              >
                Zalo
              </div>

              <div>
                <p class="font-bold text-white">Liên hệ qua Zalo</p>
                <p class="text-blue-100 text-sm">
                  {{ contactInfo.zaloDisplay }}
                </p>
              </div>
            </a>

            <a
              :href="contactInfo.facebookUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 bg-[#2d529f] hover:bg-[#21458c] rounded-xl p-4 transition duration-300 shadow-lg"
            >
              <div
                class="w-12 h-12 rounded-lg bg-white flex items-center justify-center"
              >
                <svg
                  class="w-7 h-7 text-[#2d529f]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"
                  />
                </svg>
              </div>

              <div>
                <p class="font-bold text-white">Facebook</p>
                <p class="text-blue-100 text-sm">
                  {{ contactInfo.facebookDisplay }}
                </p>
              </div>
            </a>


<!-- YouTube --> <a href="https://www.youtube.com/@HungCheTao" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 bg-[#ff0000] hover:bg-[#d90000] rounded-xl p-4 transition duration-300 shadow-lg" > <div class="w-12 h-12 rounded-lg bg-white flex items-center justify-center" > <svg class="w-7 h-7 text-[#ff0000]" fill="currentColor" viewBox="0 0 24 24" > <path d="M23.5 6.2a3.05 3.05 0 0 0-2.15-2.15C19.46 3.5 12 3.5 12 3.5s-7.46 0-9.35.55A3.05 3.05 0 0 0 .5 6.2 31.66 31.66 0 0 0 0 12a31.66 31.66 0 0 0 .5 5.8 3.05 3.05 0 0 0 2.15 2.15c1.89.55 9.35.55 9.35.55s7.46 0 9.35-.55a3.05 3.05 0 0 0 2.15-2.15A31.66 31.66 0 0 0 24 12a31.66 31.66 0 0 0-.5-5.8zM9.75 15.5v-7L16 12l-6.25 3.5z" /> </svg> </div> <div> <p class="font-bold text-white">YouTube</p> <p class="text-red-100 text-sm"> {{ contactInfo.youtubeDisplay }} </p> </div> </a>
            
          </div>
        </div>

        <!-- Hình ảnh -->
        <div>
          <h2
            class="text-2xl font-bold uppercase tracking-wide border-l-4 border-yellow-500 pl-4 mb-6"
          >
            Hùng DIY
          </h2>

          <div
            class="rounded-xl overflow-hidden border border-gray-700 shadow-xl"
          >
            <img
              src="../../assets/img/hung-che-tao.png"
              alt="Hùng DIY"
              class="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="border-t border-gray-800 py-6 text-center bg-[#020b14]"
    >
      <p class="text-sm text-gray-400">
        © {{ currentYear }} <span class="text-yellow-400">Hùng DIY</span>.
        Chia sẻ đam mê chế tạo - Lắp ráp - Điều khiển.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());

const contactInfo = ref({
  zaloPhone: "0388985737",
  zaloDisplay: "0388985737",

  facebookUrl: "https://facebook.com/DIYModel",
  facebookDisplay: "facebook.com/DIYModel",

  // Thay bằng ảnh của bạn
  decorImage: "https://via.placeholder.com/700x500?text=HUNG+DIY",
});
</script>
```
