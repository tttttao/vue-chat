<template>
  <div class="left-menu grid grid-rows-18 pt-8 pb-4 w-12 h-full px-2 border-r border-grey">
    <div class="avatar w-8 h-8 bg-blue-400 rounded block row-span">
      <a-avatar shape="square" size="large" :src="avatarUrl" :style="{height:'100%', width:'100%'}"/>
    </div>
    <div class="row-span-16 ">
      <div class="w-8 h-8 btn-border-none mt-4">
        <a-button text="text" icon="message"/>
      </div>
      <div class="w-8 h-8 btn-border-none mt-4">
        <a-button text="text" icon="team"/>
      </div>
    </div>
    <div class="w-8 h-8 items-end btn-border-none">
      <a-button text="text" icon="menu"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMenu",
  computed: {
    avatarUrl() {
      return require('@/assets/avatar-tao.jpg');
    }
  }
}
</script>

<style>
.left-menu i {
  @apply text-lg !important;
}
</style>