<template>
  <div class="flex flex-1">
    <div class="middle-body h-full w-64 pt-6 bg-yellow border-r flex flex-col border-grey">
      <div class="search px-3 flex-none">
        <SearchInput></SearchInput>
      </div>
      <div class="middle-list mt-2 overflow-scroll flex-1">
        <div class="w-64">
          <friend-list></friend-list>
        </div>
      </div>
    </div>
    <div class="chat-window w-full h-full bg-gray-110">
      <profile-body></profile-body>
    </div>
  </div>
</template>
<script>
import FriendList from "../components/MiddleList/FriendList";
import SearchInput from "../components/Search/SearchInput";
import ProfileBody from "../components/MainBody/ProfileBody";

export default {
  components: {
    'friend-list': FriendList,
    'SearchInput': SearchInput,
    'profile-body': ProfileBody
  }
}
</script>
