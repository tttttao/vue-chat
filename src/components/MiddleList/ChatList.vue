<template>
  <div class="w-full select-none">
    <div v-for="chat of chats" :key="chat.id">
      <div class="hover:bg-gray-100 chat-item py-3 px-3 grid grid-rows-2 grid-cols-5">
        <div class="avatar row-span-2 btn-border-none">
          <a-avatar shape="square" size="large" :src="chat.avatar"/>
        </div>
        <div class="date col-span-3">
          <div class="name text-black text-sm font-medium">
            {{ chat.name }}
          </div>
        </div>
        <div class="date col-span-1">{{ chat.date }}</div>
        <div class="message col-span-3 inline-block overflow-hidden text-xs break-normal truncate txt-gradient">
          {{ chat.isGroup ? chat.msgFrom + ':' + chat.msg : chat.msg }}
        </div>
        <div class="status-icon col-span-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendList",

  data() {
    return {
      chats: [
        {
          id: 1,
          name: '全面建设小康社会',
          msg: '👨‍💻哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: true,
          avatar: require("@/assets/avatar.jpg")
        },
        {
          id: 2,
          name: '贾祥康',
          msg: '属实拉跨',
          msgFrom: '杜杜杜',
          date: '08:12',
          isGroup: false,
          avatar: require("@/assets/avatar-kang.jpg")
        },
        {
          id: 3,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar-bo.jpg")
        },
        {
          id: 4,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar-fei.jpg")
        },
        {
          id: 5,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar-kang.jpg")
        },
        {
          id: 6,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar-peng.jpg")
        },
        {
          id: 7,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar.jpg")
        },
        {
          id: 8,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar.jpg")
        },
        {
          id: 9,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar-kang.jpg")
        },
        {
          id: 10,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar-fei.jpg")
        },
        {
          id: 11,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '10-12',
          isGroup: false,
          avatar: require("@/assets/avatar.jpg")
        },
        {
          id: 12,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
          msgFrom: '杜杜杜',
          date: '08-12',
          isGroup: false,
          avatar: require("@/assets/avatar.jpg")
        },
      ],

    }
  },
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