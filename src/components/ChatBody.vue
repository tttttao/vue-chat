<template>
  <div class="h-full grid grid-rows-12">
    <div class="chat-header border-b">
      <div class="btn-border-none flex justify-end text-gray-500">
        <div class="pr-2 pt-1">
          <a-button text="text" size="small" @click="onCloseClick" icon="close"/>
        </div>
      </div>
      <div class="text-xl font-normal  px-4 py-1 text-black">
        严禁投机倒把
      </div>
    </div>
    <div class="chat-body bg-gray-110 px-3 pt-1.5 row-span-8 border-b overflow-scroll">
      <message v-for="msg of messageList" :msg="msg" :key="msg.id"></message>
    </div>
    <div class="chat-input row-span-3 flex h-full flex-col">
      <div class="input-tool w-full h-8 flex text-xl">
        <div>
          <a-button type="text" size="small">
            <a-icon type="smile"></a-icon>
          </a-button>
        </div>
        <div>
          <a-button text="text" size="small">
            <a-icon type="picture"></a-icon>
          </a-button>
        </div>
        <div>
          <a-button text="text" size="small">
            <a-icon type="folder"></a-icon>
          </a-button>
        </div>
      </div>
      <div class="input w-full h-32 p-4">
        <textarea name="message-to-send" class="focus:outline-none w-full resize-none border-none" rows="5"></textarea>
      </div>
      <div class="input-footer w-full flex flex-row-reverse pr-3 py-0 mb-1">
        <a-button type="primary" size="small">发送(S)</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Messages/Message";

export default {
  name: "ChatBody",
  components: {
    'message': Message,
  },
  computed: {
    messageList() {
      const avatarTao = require("@/assets/avatar-tao.jpg")
      const avatarKang = require("@/assets/avatar-kang.jpg")
      const avatarFei = require("@/assets/avatar-fei.jpg")
      const avatarHe = require("@/assets/avatar-he.jpg")
      return [
        {id: 1, avatar: avatarTao, msg: '是啊', date: '2021-08-25 12:21:00', isSelf: true, msgFrom: 'Tao'},
        {id: 2, avatar: avatarKang, msg: '那个放冰箱里的', date: '2021-08-25 12:21:01', isSelf: false, msgFrom: 'Kang'},
        {id: 3, avatar: avatarHe, msg: '哈根达斯', date: '2021-08-25 12:22:02', isSelf: false, msgFrom: 'Tao'},
        {id: 4, avatar: avatarHe, msg: '涛哥买的', date: '2021-08-25 12:22:02', isSelf: false, msgFrom: 'Tao'},
        {
          id: 5,
          avatar: avatarTao,
          msg: '去年12.17买的，放到现在差不多20%',
          date: '2021-08-25 12:22:02',
          isSelf: true,
          msgFrom: 'Tao'
        },
        {
          id: 6,
          avatar: avatarTao,
          msg: 'All props form a one-way-down binding between the child property and the parent one: when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from accidentally mutating the parent\'s state, which can make your app\'s data flow harder to understand.\n' +
              '\n' +
              'In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means you should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console.',
          date: '2021-08-25 12:22:02',
          isSelf: true,
          msgFrom: 'Tao'
        },
        {id: 7, avatar: avatarFei, msg: '流美心心', date: '2021-08-25 12:22:02', isSelf: false, msgFrom: 'Tao'},
        {id: 8, avatar: avatarFei, msg: '周六晚上去酒吧吗', date: '2021-08-25 12:22:02', isSelf: false, msgFrom: 'Tao'},
        {id: 10, avatar: avatarFei, msg: '提肛了兄弟们', date: '2021-08-25 12:22:02', isSelf: false, msgFrom: 'Fei'},
        {id: 11, avatar: avatarTao, msg: '我想吃最早你买的那个月饼', date: '2021-08-25 12:22:02', isSelf: true, msgFrom: 'Tao'},
      ]
    }
  },
  methods: {
    handleMenuClick(e) {
      console.log(e)
    },
    onCloseClick() {
      console.log('close button click')
    }
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