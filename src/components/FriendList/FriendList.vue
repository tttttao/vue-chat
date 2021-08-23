<template>
  <div class="py-3 px-3 grid grid-cols-5 grid-rows-2 hover:bg-gray-100">
    <div class="avatar row-span-2">
      <a-avatar shape="square" size="large" :src="avatarUrl"/>

    </div>
    <div class="date col-span-3">
      <div class="name text-black font-semibold">
        严禁投机倒把
      </div>
    </div>
    <div class="date col-span-1">08-19</div>
    <div class="message col-span-3">杜杜杜:哦？</div>
    <div class="status-icon col-span-1"></div>
  </div>
</template>

<script>
export default {
  name: "FriendList",

  computed: {
    avatarUrl() {
      return require("@/assets/avatar.jpg")
    }
  }
}
</script>

<style scoped>

</style>