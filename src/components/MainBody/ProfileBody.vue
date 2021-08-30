<template>
  <div class="w-full h-full py-32 px-48">
    <div class=" h-full w-full rounded p-4 bg-white shadow-sm flex flex-col">
      <div class="profile-header w-full h-24 flex">
        <div class="w-24 h-24 my-auto">
          <a-avatar shape="square" :size="96" :src="avatar"/>
        </div>

        <div class="flex-1 m-4">
          <div class="text-black text-xl">
            {{ name }}
          </div>
          <div class="py-2">
            {{ intro ? intro : '暂无简介' }}
          </div>
        </div>
      </div>
      <div class="profile-body w-full mt-4 flex-1 bg-red-400">

      </div>
    </div>
  </div>
</template>

<script>
const avatarTao = require("@/assets/avatar-tao.jpg")
export default {
  name: "ProfileBody"
  , data() {
    return {
      avatar: avatarTao,
      name: 'tttttao',
      account: '519767697',
      intro: '',
    }
  }
}
</script>

<style scoped>

</style>