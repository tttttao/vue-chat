<template>
  <div class="search-bar justify-between w-full h-8 border-grey mt-2 flex">
    <a-input ref="searchInput" placeholder="搜索">
      <a-icon slot="prefix" type="search" />
    </a-input>
    <div class="pl-4">
      <a-button text="text">
        <a-icon type="plus"/>
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput"
}
</script>

<style scoped>
button {
  @apply border-none shadow-none h-full leading-none !important;
}

input {
  @apply h-full w-4/5 border rounded-sm border-gray-200 !important;
}

.search-bar button {
  @apply w-full px-2 text-base;
}
</style>