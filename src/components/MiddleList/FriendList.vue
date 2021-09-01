<template>
  <div class="friend-list">
    <a-tree @select="onSelect" :blockNode="true">
      <a-tree-node v-for="group in treeData" :key="group.key" :title="group.title">
        <a-tree-node v-for="friend in group.children" :key="friend.key" class="friend-item text-gradient-parent">
          <template slot="title">
            <div class="friend-li-title flex">
              <a-avatar shape="square" :src="friend.avatar"></a-avatar>
              <a-dropdown :trigger="['contextmenu']">
                <div class=" flex items-center text-gradient">{{ friend.title }}</div>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="1">修改备注</a-menu-item>
                    <a-menu-item key="2">删除好友</a-menu-item>
                    <a-menu-item key="3">移动分组</a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </div>
</template>

<script>

export default {
  name: "FriendList",
  data() {
    return {}
  },
  computed: {
    treeData() {
     return this.$store.state.friendList.friendList
    },
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onCheck(checkedKeys, info) {
      console.log('onCheck', checkedKeys, info);
    },
  },
}
</script>

<style>

.friend-item .text-gradient::after {
  @apply right-0 w-full left-0;
}


.friend-list .ant-tree-switcher {
  line-height: 1.2 !important;
}

.friend-item .ant-dropdown-trigger {
  @apply break-normal overflow-hidden w-40 leading-none truncate;
}

.friend-list .ant-tree li ul {
  @apply p-0 relative;
}

.friend-item {
  @apply p-1.5 !important;
}

.friend-item:hover {
  @apply bg-gray-110;
}

.ant-tree li .ant-tree-node-selected {
  @apply bg-transparent !important
}

.ant-tree li .ant-tree-treenode-selected {
  @apply bg-none !important;
}

.ant-tree li .ant-tree-node-content-wrapper:hover {
  @apply bg-transparent !important;
}

.friend-item span:hover, span:checked {
  @apply bg-transparent !important;
}

.friend-item span {
  height: 36px !important;
  @apply my-0.5 text-black !important;
}

.friend-item .ant-avatar {
  @apply mr-2 my-auto;
  width: 36px;
}

.friend-item .ant-tree-switcher {
  @apply w-0 !important;
}
</style>