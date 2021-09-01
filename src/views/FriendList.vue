<template>
  <main-view>
    <template #middle-list>
      <friend-list></friend-list>
    </template>
    <template #left-window>
      <profile-body></profile-body>
    </template>
  </main-view>
</template>

<script>
import FriendList from "../components/MiddleList/FriendList";
import ProfileBody from "../components/MainBody/ProfileBody";
import MainView from "./template/MainView";

export default {
  components: {
    'main-view': MainView,
    'friend-list': FriendList,
    'profile-body': ProfileBody
  }
}
</script>
