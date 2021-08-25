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
            <friend-list v-for="item in friendList" :friend="item" :key="item.id"/>
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
      friendList: [
        {
          id: 1,
          name: '全面建设小康社会',
          msg: '哦？？？？？？？',
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
  @apply w-0 h-0;
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
