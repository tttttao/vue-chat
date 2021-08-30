<template>
  <div>
    <div class="msg align-middle flex leading-none" :class="msgClass">
      <div class="msg-avatar">
        <a-avatar icon="user" shape="square" :src="msg.avatar"/>
      </div>
      <div class="msg-body" :class="msgBodyClass">
        <div v-if="msg.type === 'txt'" class="leading-normal">
          <span v-html="message"></span>
        </div>
        <el-image v-else-if="msg.type=== 'image'" :preview-src-list="imageList" :src="msg.msg" fit="contain"
                  :lazy="true"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: Object,
    imageList: [],
  },
  computed: {
    message() {
      return this.msg.msg.replace(/\n/g, '<br>')
    },
    msgClass() {
      return this.msg.isSelf ? ['flex-row-reverse'] : [];
    },
    msgBodyClass() {
      return this.msg.isSelf ? ['bg-blue-510', 'text-white'] : ['bg-white', 'text-black'];
    }
  },
}
</script>

<style>
.msg-body {
  @apply mx-2 tracking-wide rounded font-normal
  mb-2.5 p-2 inline-block align-middle max-w-lg break-words;
}
</style>