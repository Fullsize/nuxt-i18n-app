<template>
  <div>
    <h1>User {{ $route.params.id }}</h1>
    <p>This is the user detail page</p>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
