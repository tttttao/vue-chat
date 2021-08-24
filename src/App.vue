<template>
  <a-locale-provider :locale="zh_CN">
    <div class="app h-screen flex bg-blue-100">
      <div id="chat-body" class="rounded-md bg-white m-auto shadow-xl flex">
        <div class="chat-menu">
          <chat-menu></chat-menu>
        </div>

        <div class="middle-list h-full w-64 py-6 bg-yellow border-r border-grey ">
          <div class="search px-3">
            <SearchInput></SearchInput>
          </div>
          <div class="friend-list mt-4 overflow-scroll">
            <friend-list v-for="item in friendList" :key="item"/>
          </div>
        </div>

        <div class="chat-window w-full h-full">
          <chat-body></chat-body>
        </div>
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import SearchInput from "./components/Search/SearchInput";
import FriendList from "./components/FriendList/FriendList";
import ChatBody from "./components/ChatBody";
import ChatMenu from "./components/ChatMenu/ChatMenu";

export default {
  name: 'app',
  data() {
    return {
      zh_CN,
      friendList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    }
  },
  computed: {},
  components: {
    ChatMenu,
    ChatBody,
    FriendList,
    SearchInput,
  }
}
</script>

<style>
.btn-border-none button {
  @apply border-none shadow-none;
}

.friend-list {
  height: 95%;
}

#chat-body {
  vertical-align: middle;
  height: 780px;
  width: 1150px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply border-2 rounded-2xl border-gray-300 border-opacity-25;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-100;
}
</style>
