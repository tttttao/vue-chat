<template>
  <div class="w-full select-none">
    <div v-for="chat of chats" :key="chat.id" class="text-gradient-parent">
      <div class="hover:bg-gray-100 text-gradient py-3 px-3 grid grid-rows-2 grid-cols-5" @click="onChatClick(chat.id)">
        <div class="avatar row-span-2 btn-border-none">
          <a-avatar shape="square" size="large" :src="chat.avatar"/>
        </div>
        <div class="date col-span-3">
          <div class="name text-black text-sm font-medium">
            {{ chat.name }}
          </div>
        </div>
        <div class="date col-span-1">{{ chat.date }}</div>
        <div class="message col-span-3 inline-block overflow-hidden text-xs break-normal truncate">
          {{ chat.msgFrom !== '' ? (chat.isGroup ? chat.msgFrom + ':' + chat.msg : chat.msg) : '' }}
        </div>
        <div class="status-icon col-span-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "FriendList",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({chats: 'getChats'}),
  },
  methods: {
    onChatClick(id) {
      this.$store.commit('updateCurrentChat', {id})
    }
  },

}
</script>

<style scoped>
</style>