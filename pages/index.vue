<template>
  <div>
    <h1>{{ $t("welcome") }}</h1>
    <p>This is the home page content</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const { t } = useI18n();

useHead({
  title: t("welcome"),
  meta: [
    { name: "description", content: t("home") },
    { property: "og:title", content: t("welcome") },
    { property: "og:description", content: t("home") },
  ],
});
</script>
