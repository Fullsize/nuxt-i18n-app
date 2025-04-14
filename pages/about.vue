<template>
  <div>
    <h1>{{ $t("about") }}</h1>
    <p>{{ $t("about.content") }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const { t } = useI18n();

useHead({
  title: t("about"),
  meta: [
    { name: "description", content: t("about.content") },
    { property: "og:title", content: t("about") },
    { property: "og:description", content: t("about.content") },
  ],
});
</script>
