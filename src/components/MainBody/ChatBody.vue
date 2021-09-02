<template>
  <div class="h-full grid grid-rows-12">
    <div class="chat-header border-b">
      <div class="text-xl h-full font-normal px-3 pt-7 text-black">
        {{ currentChat.name }}
      </div>
    </div>
    <div class="chat-body bg-gray-110 px-3 pt-1.5 row-span-8 border-b overflow-scroll" ref="chat-body">
      <message v-for="msg of messageList" :imageList="imageList" :msg="msg" :key="msg.id"></message>
    </div>
    <div class="chat-input row-span-3 flex h-full flex-col">
      <div class="input-tool gray-110-buttons w-full h-8 flex text-xl">
        <div>
          <a-button type="text" size="small">
            <a-icon type="smile"></a-icon>
          </a-button>
        </div>
        <div>
          <a-upload
              :fileList="fileList"
              name="file"
              :show-upload-list="false"
              @change="handleChange"
          >
            <a-button text="text" size="small">
              <a-icon type="picture"></a-icon>
            </a-button>
          </a-upload>
        </div>
        <div>
          <a-button text="text" size="small">
            <a-icon type="folder"></a-icon>
          </a-button>
        </div>
      </div>
      <div class="input w-full h-32 p-4">
        <textarea name="message-to-send" v-model="toSend" @keydown.enter.exact.prevent="onSend"
                  @keydown.ctrl.enter.exact.prevent="doWrap"
                  class="focus:outline-none w-full resize-none border-none"
                  rows="5"></textarea>
      </div>
      <div class="input-footer w-full flex flex-row-reverse pr-3 py-0 mb-1">
        <a-button type="primary" size="small" @click="onSend">发送</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "../Messages/Message";
import {getBase64} from "../../tools/file";
import {mapGetters} from "vuex";

const avatarTao = require("@/assets/avatar-tao.jpg")

export default {
  name: "ChatBody",
  components: {
    'message': Message,
  },
  data() {
    return {
      toSend: '',
      fileList: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.doScrollDown()
    })
  },
  computed: {
    ...mapGetters({'currentChat': 'getCurrentChat'}),
    messageList() {
      return this.currentChat.messages
    },
    imageList() {
      let list = []
      this.messageList.forEach(item => {
        if (item.type === 'image') {
          list.push(item.msg)
        }
      })
      console.log(list)
      return list
    },
  },
  methods: {
    handleChange(info) {
      console.log(info)
      let {fileList} = info
      fileList.forEach((item) => {
        getBase64(item.originFileObj).then((data) => {
          this.toSend = data
          this.doSend('image')
        })
      })
      this.fileList = []
    },
    doWrap() {
      console.log('do wrap')
      this.toSend = this.toSend + '\r\n'
    },
    doScrollDown() {
      this.$refs["chat-body"].scrollTop = this.$refs["chat-body"].scrollHeight
    },
    onSend() {
      this.doSend()
    },
    doSend(type = 'txt') {
      if (this.toSend === '') return
      const id = this.messageList.length + 1;
      const msg = {
        id: id,
        avatar: avatarTao,
        type: type,
        msg: this.toSend,
        date: '2021-08-25 12:22:02',
        isSelf: true,
        msgFrom: 'Tao'
      }
      console.log(msg)

      this.$store.dispatch('sendMessage', {message: msg})
      this.toSend = ''
    },

  }, watch: {
    messageList() {
      this.$nextTick(() => {
        this.doScrollDown()
      })
    },
  }
}
</script>

<style scoped>
.input-footer button {
  @apply bg-blue-500 px-2;
}

button, textarea {
  @apply bg-transparent;
}

.input-tool button {
  @apply border-none mx-2 text-lg h-full leading-none shadow-none;
}
</style>