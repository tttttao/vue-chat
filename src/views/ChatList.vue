<template>
  <div id="chat-body" class="rounded-md bg-white m-auto shadow-xl flex overflow-hidden relative">
    <div class="chat-menu">
      <chat-menu></chat-menu>
    </div>

    <div class="flex flex-1">
      <div class="middle-body h-full w-64 pt-6 bg-yellow border-r flex flex-col border-grey">
        <div class="search px-3 flex-none">
          <SearchInput></SearchInput>
        </div>
        <div class="middle-list mt-2 overflow-scroll flex-1">
          <div class="w-64">
            <chat-list></chat-list>
          </div>
        </div>
      </div>
      <div class="chat-window w-full h-full bg-gray-110">
        <chat-body></chat-body>
      </div>
    </div>

    <div class="top-tool-buttons  right-0 top-0 flex justify-end text-gray-500 absolute">
      <div class="btn-border-none bg-transparent pr-2 pt-1">
        <a-button text="text" size="small" icon="close"/>
      </div>
    </div>
  </div>


</template>
<script>
import ChatMenu from "../components/ChatMenu/ChatMenu";
import ChatList from "../components/MiddleList/ChatList";
import SearchInput from "../components/Search/SearchInput";
import ChatBody from "../components/MainBody/ChatBody";

export default {
  components: {
    'chat-menu': ChatMenu,
    'chat-list': ChatList,
    'SearchInput': SearchInput,
    'chat-body': ChatBody
  }
}
</script>
