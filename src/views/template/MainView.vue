<template>
  <div id="chat-body" class="rounded-md bg-white m-auto shadow-xl flex overflow-hidden relative">
    <div class="chat-menu">
      <chat-menu></chat-menu>
    </div>

    <div class="flex flex-1">
      <div class="middle-body h-full w-64 pt-6 bg-yellow border-r flex flex-col border-grey">
        <div class="search px-3 flex-none">
          <search-input></search-input>
        </div>
        <div class="middle-list mt-2 overflow-scroll flex-1">
          <div class="w-64">
            <slot name="middle-list"></slot>
          </div>
        </div>
      </div>
      <div class="chat-window w-full h-full bg-gray-110">
        <slot name="left-window"></slot>
      </div>
    </div>

    <div class="top-tool-buttons right-0 top-0 flex justify-end text-gray-500 absolute">
      <div class="btn-border-none pr-2 pt-1">
        <a-button text="text" size="small" icon="close" @click.prevent="onCloseClick"/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/Search/SearchInput";
import ChatMenu from "@/components/ChatMenu/ChatMenu";
import {logout} from "@/tools/functions";

export default {
  name: "mainView",
  components: {
    'search-input': SearchInput,
    'chat-menu': ChatMenu,
  }, methods: {
    onCloseClick() {
      logout()
    }
  }
}
</script>

<style scoped>
.top-tool-buttons button {
  @apply bg-transparent;
}

</style>