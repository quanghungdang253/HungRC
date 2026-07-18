<template>
  <!-- Thay đổi nền tổng thể thành xám rất đậm (slate-950) -->
  <footer class="w-full bg-slate-950 text-white">
    <div class="max-w-6xl mx-auto px-6 py-10 md:py-12">
      <!-- Grid chia layout: 9 cột cho phần chữ và 3 cột cho phần hình ảnh -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        <!-- Phần thông tin giới thiệu (Chiếm 9 cột trên màn hình lớn) -->
        <div class="md:col-span-9 space-y-3">
          <!-- Thay đổi màu chữ Hùng RC thành xanh dương nhạt (sky-400) để nổi bật trên nền tối -->
          <h2 class="text-xl font-bold uppercase tracking-wide text-sky-400">
            Hùng RC
          </h2>
          <!-- Thay đổi màu chữ mô tả thành xám nhạt (slate-300) -->
          <p class="text-slate-300 leading-relaxed text-sm max-w-3xl">
            Không gian chia sẻ đam mê chế tạo, lắp ráp mô hình điều khiển từ xa (RC) cùng các sản phẩm công nghệ, công cụ hữu ích cho cuộc sống. Chúng tôi mang đến những kiến thức kỹ thuật thực tế và thông tin sản phẩm chất lượng giúp bạn tối ưu hóa mô hình của mình.
          </p>

          <!-- Thêm lời cảm ơn chân thành đến người xem/khách hàng -->
          <p class="text-emerald-400 text-xs italic font-medium pt-1">
            * Cảm ơn bạn đã ghé thăm và đồng hành cùng Hùng RC trên hành trình sáng tạo này!
          </p>
        </div>

        <!-- Phần hình ảnh trang trí (Chiếm 3 cột trên màn hình lớn, ẩn trên mobile) -->
        <div class="md:col-span-3 hidden md:flex justify-end">
          <!-- Thay đổi màu border khung ảnh thành xám nhẹ hơn (slate-700) -->
          <div class="relative w-full max-w-[220px] aspect-[16/10] overflow-hidden rounded-lg shadow-md border border-slate-700 bg-slate-900/50 p-1">
            <img 
              :src="img" 
              alt="DIY Model" 
              class="w-full h-full object-contain hover:scale-105 transition duration-500"
              @error="handleImageError"
            />
          </div>
        </div>

      </div>
    </div>

    <!-- Thanh Bản quyền dưới cùng: Màu nền đen tuyền (black), chữ xám (slate-500) -->
    <div class="w-full bg-black py-4 border-t border-slate-800 text-center text-xs text-white font-medium tracking-wide">
      © {{ currentYear }} Hùng RC – Chia sẻ đam mê, kết nối sáng tạo!
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
// Giả định file ảnh tồn tại theo đường dẫn cũ
import img from "../assets/img/hung-che-tao.png";

// Tự động cập nhật năm hiện tại cho Copyright
const currentYear = ref(new Date().getFullYear());

// Xử lý nếu link ảnh bị lỗi không hiển thị được
const handleImageError = (e) => {
  // Thay đổi placeholder text sang HUNG RC cho phù hợp
  e.target.src = "https://via.placeholder.com/400x250/1e293b/fff?text=HUNG+RC";
};
</script>

<style scoped>
/* Không cần CSS bổ sung vì đã dùng Tailwind */
</style>