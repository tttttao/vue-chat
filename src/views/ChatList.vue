<template>
  <main-view>
    <template #middle-list>
      <chat-list></chat-list>
    </template>
    <template #left-window>
      <chat-body></chat-body>
    </template>
  </main-view>
</template>

<script>
import ChatList from "../components/MiddleList/ChatList";
import ChatBody from "../components/MainBody/ChatBody";
import MainView from "./template/MainView";

export default {
  components: {
    MainView,
    'chat-list': ChatList,
    'chat-body': ChatBody
  }
}
</script>
