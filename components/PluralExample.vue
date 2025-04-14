<template>
  <div class="card">
    <h2>货币和时间格式化示例</h2>

    <!-- 货币格式化 -->
    <div class="example">
      <h3>货币格式化</h3>
      <p>价格：{{ formatCurrency(price) }}</p>
      <input type="number" v-model="price" min="0" step="0.01" />
    </div>

    <!-- 日期格式化 -->
    <div class="example">
      <h3>日期格式化</h3>
      <p>短格式：{{ formatDate(now, "short") }}</p>
      <p>长格式：{{ formatDate(now, "long") }}</p>
    </div>

    <!-- 时间格式化 -->
    <div class="example">
      <h3>时间格式化</h3>
      <p>短格式：{{ formatTime(now, "short") }}</p>
      <p>长格式：{{ formatTime(now, "long") }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const { locale, t } = useI18n();
const price = ref(1234.56);
const now = ref(new Date());
let timer;

// 格式化货币
const formatCurrency = (value) => {
  const options = t("currency.format");
  return new Intl.NumberFormat(locale.value, options).format(value);
};

// 格式化日期
const formatDate = (date, format) => {
  const formatString = t(`date.format.${format}`);
  return new Intl.DateTimeFormat(locale.value, {
    year: "numeric",
    month: format === "long" ? "long" : "2-digit",
    day: "2-digit",
  }).format(date);
};

// 格式化时间
const formatTime = (date, format) => {
  const formatString = t(`time.format.${format}`);
  return new Intl.DateTimeFormat(locale.value, {
    hour: "2-digit",
    minute: "2-digit",
    second: format === "long" ? "2-digit" : undefined,
    hour12: locale.value === "en",
  }).format(date);
};

// 更新时间
onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.example {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

input {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
