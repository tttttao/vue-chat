<template>
  <div class="search-bar justify-between w-full h-8 border-grey mt-2 flex">
    <a-input placeholder="搜索"/>
    <div class="pl-4">
      <a-button type="default" icon="plus"> </a-button>
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
  @apply border-none shadow-none !important;
}
input {
  @apply h-full w-4/5 border rounded-sm border-gray-200 !important;
}
</style>