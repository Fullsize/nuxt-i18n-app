<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">{{ $t("home") }}</NuxtLink>
        <NuxtLink to="/about">{{ $t("about") }}</NuxtLink>
        <NuxtLink to="/users/1">{{ $t("users") }}</NuxtLink>
        <div class="language-switcher">
          <button @click="setLocale('en')" :class="{ active: locale === 'en' }">
            EN
          </button>
          <button @click="setLocale('zh')" :class="{ active: locale === 'zh' }">
            中文
          </button>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>{{ $t("footer.copyright") }}</p>
    </footer>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
header {
  padding: 1rem;
  background-color: #f5f5f5;
}

nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.language-switcher {
  margin-left: auto;
}

.language-switcher button {
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.language-switcher button.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
}

main {
  padding: 2rem;
}

footer {
  padding: 1rem;
  text-align: center;
  background-color: #f5f5f5;
}
</style>
