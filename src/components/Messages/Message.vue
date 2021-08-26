<template>
  <div>
    <div class="msg align-middle flex leading-none" :class="msgClass">
      <div class="msg-avatar">
        <a-avatar icon="user" shape="square" :src="msg.avatar"/>
      </div>
      <div class="msg-body" :class="msgBodyClass">
        <span class="" v-if="msg.type === 'txt'">
          {{ msg.msg }}
        </span>
        <img class="" v-else-if="msg.type === 'image'" :src="msg.msg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: Object,
  },
  computed: {
    msgClass() {
      return this.msg.isSelf ? ['flex-row-reverse'] : [];
    },
    msgBodyClass() {
      return this.msg.isSelf ? ['bg-blue-510', 'text-white'] : ['bg-white', 'text-black'];
    }
  },

}
</script>

<style scoped>
.msg-body {
  @apply mx-2 tracking-wide rounded font-normal
  mb-2.5 p-2 inline-block leading-relaxed align-middle max-w-lg break-words;
}

</style>