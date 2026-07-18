<script setup>
import Header from "./common/header.vue";
import Footer from "./common/footer.vue";
</script>

<template> 
  <!-- Thay đổi: Thêm flex và flex-col để kích hoạt hộp bố cục dọc -->
  <div class="flex flex-col min-h-screen">     
    <Header />

    <!-- Thay đổi: Bọc phần nội dung bằng thẻ main có class flex-grow để tự giãn ra -->
    <main class="flex-grow">
      <router-view />
    </main>

    <Footer />
  </div>
</template>