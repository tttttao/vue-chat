<template>
  <div class=" hover:bg-gray-100 w-64">
    <div class="chat-item py-3 px-3 grid grid-rows-2 grid-cols-5">
      <div class="avatar row-span-2 btn-border-none">
        <a-avatar shape="square" size="large" :src="avatarUrl"/>
      </div>

      <div class="date col-span-3">
        <div class="name text-black font-semibold">
          严禁投机倒把
        </div>
      </div>
      <div class="date col-span-1">08-19</div>
      <div class="message col-span-3 inline-block overflow-hidden truncate">杜杜杜:哦？？？？？？？？？</div>
      <div class="status-icon col-span-1"></div>
    </div>
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