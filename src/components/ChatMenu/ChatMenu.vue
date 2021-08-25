<template>
  <div class="left-menu pt-8 pb-4 w-12 h-full px-2 border-r border-grey">
    <div class="avatar w-8 h-8 bg-blue-400 rounded block row-span">
      <a-avatar shape="square" size="large" :src="avatarUrl" :style="{height:'100%', width:'100%'}"/>
    </div>
    <div class="row-span-16 h-5/6 pt-8 space-y-4">
      <div class="menu-button btn-border-none">
        <a-button text="text">
          <a-icon type="message" theme="twoTone" two-tone-color="#287DFE"/>
        </a-button>
      </div>
      <div class="menu-button btn-border-none">
        <a-button text="text">
          <a-icon type="team"/>
        </a-button>
      </div>
    </div>
    <div class="menu-button mt-10 btn-border-none">
      <a-button text="text">
        <a-icon type="menu"/>
      </a-button>
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
.chat-menu button {
  @apply w-full p-0;
}

.menu-button {
  @apply w-8 h-8;
}

.left-menu i {
  @apply text-lg !important;
}
</style>