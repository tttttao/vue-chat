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
    <div class="chat-body row-span-8 border-b"></div>
    <div class="chat-input row-span-3 flex h-full flex-col">
      <div class="input-tool w-full h-8 flex text-xl">
        <div>
          <a-button type="text" size="small" icon="smile"/>
        </div>
        <div>
          <a-button text="text" size="small" icon="picture"/>
        </div>
        <div>
          <a-button text="text" size="small" icon="folder"/>
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
export default {
  name: "ChatBody",
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
  @apply bg-blue-500 px-2 ;
}

.input-tool button {
  @apply border-none mx-3 text-lg;
}
</style>