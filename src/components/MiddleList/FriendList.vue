<template>
  <div class="friend-list px-2">
    <a-tree>
      <a-tree-node v-for="group in treeData" :key="group.key" :title="group.title">
        <a-tree-node v-for="friend in group.children" :key="friend.key" class="friend-item">
          <template slot="title">
            <div class="friend-li-title">
              <a-avatar shape="square" :src="friend.avatar"></a-avatar>
              <a-dropdown :trigger="['contextmenu']">
                <span>{{ friend.title }}</span>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="1">1st menu item</a-menu-item>
                    <a-menu-item key="2">2nd menu item</a-menu-item>
                    <a-menu-item key="3">3rd menu item</a-menu-item>
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
    return {
      treeData: [
        {
          title: '同学',
          key: 'g-1',
          children: [
            {
              title: 'kang',
              key: '1',
              avatar: require("@/assets/avatar.jpg"),
            },
            {
              title: 'fei',
              key: '2',
              avatar: require("@/assets/avatar.jpg"),
            },
          ],
        },
        {
          title: '同事',
          key: 'g-2',
          children: [
            {
              title: '小张',
              key: '3',
              avatar: require("@/assets/avatar.jpg")
            },
            {
              title: '老王',
              key: '4',
              avatar: require("@/assets/avatar.jpg")
            },
          ],
        },
      ]
    }
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
.friend-list .ant-tree-switcher {
  line-height: 1.2 !important;
}

.friend-list .ant-tree li ul {
  @apply p-0;
}

.friend-item span {
  @apply h-9 my-0.5 !important;
}

.friend-item .ant-tree-switcher {
  @apply w-0 !important;
}
</style>