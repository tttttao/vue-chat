<template>
  <a-locale-provider :locale="zh_CN">
    <div class="app h-screen flex bg-blue-100">
      <div id="chat-body" class="rounded-md bg-white m-auto shadow-xl flex overflow-hidden relative">
        <div class="chat-menu">
          <chat-menu></chat-menu>
        </div>

        <div class="middle-body h-full w-64 pt-6 bg-yellow border-r flex flex-col border-grey">
          <div class="search px-3 flex-none">
            <SearchInput></SearchInput>
          </div>
          <div class="middle-list mt-2 overflow-scroll flex-1">
            <div class="w-64">
              <router-view></router-view>
            </div>
          </div>
        </div>

        <div class="top-tool-buttons  gray-110-buttons right-0 top-0 flex justify-end text-gray-500 absolute">
          <div class="btn-border-none pr-2 pt-1">
            <a-button text="text" size="small" icon="close"/>
          </div>
        </div>

        <div class="chat-window w-full h-full bg-gray-110">
          <chat-body></chat-body>
        </div>
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import SearchInput from "./components/Search/SearchInput";
import ChatBody from "./components/MainBody/ChatBody";
import ChatMenu from "./components/ChatMenu/ChatMenu";

export default {
  name: 'app',
  data() {
    return {
      zh_CN,
    }
  },
  components: {
    ChatMenu,
    ChatBody,
    SearchInput,
  }
}
</script>

<style>
.btn-border-none button {
  @apply border-none shadow-none;
}

.gray-110-buttons button {
  @apply bg-gray-110;
}

.gray-110-buttons button:focus, button:hover, button:active {
  @apply bg-gray-110;
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
