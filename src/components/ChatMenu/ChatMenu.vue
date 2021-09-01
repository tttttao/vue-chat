<template>
  <div class="left-menu pt-8 pb-4 w-12 h-full px-2 border-r border-grey">
    <div class="avatar w-8 h-8 rounded-sm">
      <a-avatar shape="square" size="large" :src="avatarUrl" :style="{height:'100%', width:'100%'}"/>
    </div>
    <div class="row-span-16 h-5/6 pt-8 space-y-4">
      <div v-for="(menu,index) in menus" :key="index" @click="check(menu)"
           :class="{'checked':menu.to === checkedMenu}"
           class=" menu-button btn-border-none">
        <a-button text="text">
          <a-icon :type="menu.iconType"/>
        </a-button>
      </div>
    </div>
    <div class="menu-button mt-10 btn-border-none">
      <a-popover title="菜单" trigger="click" placement="rightBottom">
        <template slot="content">
          <ul>
            <li @click.prevent="onLogout">退出</li>
          </ul>
        </template>
        <a-button text="text">
          <a-icon type="menu"/>
        </a-button>
      </a-popover>

    </div>
  </div>
</template>

<script>
import {logout} from "@/tools/functions";

export default {
  name: "ChatMenu",
  computed: {
    avatarUrl() {
      return require('@/assets/avatar-tao.jpg');
    },
    checkedMenu() {
      for (let item of this.menus) {
        if (this.$router.history.current.name === item.to) return item.to;
      }
      return '';
    }
  },
  data() {
    return {
      menus: [
        {to: 'chatList', iconType: 'message', isChecked: true},
        {to: 'friendList', iconType: 'team', isChecked: false},
      ]
    }
  }, methods: {
    onLogout() {
      logout();
    },
    check(item) {
      if (this.$router.history.current.name !== item.to) {
        this.$router.push({name: item.to})
      }
    }
  }
}
</script>

<style>
.chat-menu button {
  @apply w-full p-0;
}

.checked i {
  color: #5bbaf5;
  border-color: #5bbaf5;
}

.menu-button {
  @apply w-8 h-8;
}

.left-menu i {
  @apply text-lg !important;
}
</style>