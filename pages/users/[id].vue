<template>
  <div>
    <h1>{{ $t("users.detail", { id: route.params.id }) }}</h1>
    <p>{{ $t("users.content") }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const { t } = useI18n();

useHead({
  title: t("users.detail", { id: route.params.id }),
  meta: [
    { name: "description", content: t("users.content") },
    {
      property: "og:title",
      content: t("users.detail", { id: route.params.id }),
    },
    { property: "og:description", content: t("users.content") },
  ],
});
</script>
