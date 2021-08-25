<template>
  <div>
    <div class="msg align-middle flex leading-none" :class="msgClass">
      <div class="msg-avatar">
        <a-avatar icon="user" shape="square" :src="msg.avatar"/>
      </div>
      <div
          class="msg-body mx-2 tracking-wide rounded-sm font-normal
           mb-2.5 px-3 py-1.5 inline-block leading-relaxed align-middle max-w-lg"
          :class="msgBodyClass">
        {{ msg.msg }}
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
</style>