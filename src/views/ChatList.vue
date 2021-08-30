<template>
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
</template>
<script>
import ChatList from "../components/MiddleList/ChatList";
import SearchInput from "../components/Search/SearchInput";
import ChatBody from "../components/MainBody/ChatBody";

export default {
  components: {
    'chat-list': ChatList,
    'SearchInput': SearchInput,
    'chat-body': ChatBody
  }
}
</script>
