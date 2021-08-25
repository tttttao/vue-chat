<template>
  <div class="w-64">
    <div class="hover:bg-gray-100 chat-item py-3 px-3 grid grid-rows-2 grid-cols-5">
      <div class="avatar row-span-2 btn-border-none">
        <a-avatar shape="square" size="large" :src="friend.avatar"/>
      </div>
      <div class="date col-span-3">
        <div class="name text-black text-sm font-medium">
          {{ friend.name }}
        </div>
      </div>
      <div class="date col-span-1">{{ friend.date }}</div>
      <div class="message col-span-3 inline-block overflow-hidden text-xs break-normal truncate txt-gradient">
        {{ friend.isGroup ? friend.msgFrom + ':' + friend.msg : friend.msg }}
      </div>
      <div class="status-icon col-span-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendList",

  props: {
    friend: Object,
  }
}
</script>

<style scoped>

.chat-item {
  @apply relative cursor-pointer;
}

.chat-item::after {
  @apply absolute top-0 left-1/2 h-full w-1/4 pointer-events-none;
  content: "";
  background: linear-gradient(to left,
  rgba(255, 255, 255, 1) 20%,
  rgba(255, 255, 255, 0) 80%);
  /* so the text is still selectable */
}

.chat-item:hover::after {
  background: linear-gradient(to left,
  rgba(243, 244, 246, 1) 20%,
  rgba(243, 244, 246, 0) 80%);
}
</style>