<template>
  <!-- Thay đổi: Chuyển thành thẻ section, tùy biến lại background thích hợp cho một block nội dung -->
  <section class="w-full bg-[#031221] text-white py-16 lg:py-20">
    <div class="max-w-[1350px] mx-auto px-6 lg:px-16">
      
      <!-- Bạn có thể thêm một tiêu đề lớn cho toàn trang giới thiệu nếu muốn -->
      <div class="text-center mb-14">
        <h1 class="text-3xl lg:text-4xl font-extrabold uppercase tracking-widest text-yellow-400">
          Về Chúng Tôi
        </h1>
        <div class="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        <!-- Cột 1: Giới thiệu ngắn gọn -->
        <div>
          <h2 class="text-2xl font-bold uppercase tracking-wide border-l-4 border-yellow-500 pl-4 mb-6">
            Giới Thiệu
          </h2>
          <p class="text-gray-300 leading-7 text-[15px]">
            Chào mừng bạn đến với <span class="text-yellow-400 font-semibold">Hùng RC</span> – website chuyên giới thiệu mô hình xe lắp ráp điều khiển, linh kiện, phụ kiện cùng nhiều sản phẩm công nghệ, công cụ và đồ dùng hữu ích cho cuộc sống hằng ngày. Chúng tôi chia sẻ thông tin, kinh nghiệm và giúp bạn dễ dàng lựa chọn sản phẩm phù hợp.
          </p>
        </div>

        <!-- Cột 2: Hoạt động chính -->
        <div>
          <h2 class="text-2xl font-bold uppercase tracking-wide border-l-4 border-yellow-500 pl-4 mb-6">
            Hoạt Động
          </h2>
          <div class="flex flex-col gap-4">
            <div class="bg-[#071b2e] border border-gray-800 rounded-xl p-5 shadow-md">
              <div class="flex items-center gap-3 mb-1">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                <p class="font-bold text-white text-base">Cập Nhật Liên Tục</p>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                Tổng hợp thông tin sản phẩm, link tham khảo và mẹo kỹ thuật hữu ích hàng ngày.
              </p>
            </div>

            <div class="bg-[#071b2e] border border-gray-800 rounded-xl p-5 shadow-md">
              <p class="font-bold text-white text-base mb-2">Sản Phẩm Cung Cấp</p>
              <ul class="text-gray-400 text-sm space-y-2 list-disc list-inside">
                <li>Mô hình RC đa dạng chủng loại</li>
                <li>Linh kiện, phụ kiện nâng cấp</li>
                <li>Dụng cụ và đồ chế tạo DIY</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Cột 3: Hình ảnh đại diện thương hiệu -->
        <div>
          <h2 class="text-2xl font-bold uppercase tracking-wide border-l-4 border-yellow-500 pl-4 mb-6">
            Hùng RC
          </h2>
          <div class="rounded-xl overflow-hidden border border-gray-700 shadow-xl bg-[#071b2e]">
            <img
              src="../../assets/img/hung-che-tao.png"
              alt="Hùng RC"
              class="w-full h-[240px] object-cover hover:scale-105 transition duration-500"
              @error="handleImageError"
            />
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
// Thay đổi: Đã gỡ bỏ logic tính currentYear do không còn dùng phần Copyright chung của Footer nữa

const handleImageError = (e) => {
  e.target.src = "https://via.placeholder.com/700x500?text=HUNG+RC";
};
</script>

<style scoped>
</style>