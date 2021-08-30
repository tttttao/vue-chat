<template>
  <div class="friend-list">
    <a-tree @select="onSelect" :blockNode="true">
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
          title: '👌',
          key: 'g-1',
          children: [
            {
              title: 'kang',
              key: '1',
              avatar: require("@/assets/avatar.jpg"),
            },
            {
              title: '阿飞',
              key: '2',
              avatar: require("@/assets/avatar-tao.jpg"),
            },
            {
              title: 'fei',
              key: '3',
              avatar: require("@/assets/avatar.jpg"),
            },
            {
              title: '👮‍♂️',
              key: '4',
              avatar: require("@/assets/avatar-kang.jpg"),
            },
            {
              title: '康康',
              key: '5',
              avatar: require("@/assets/avatar-he.jpg"),
            }, {
              title: '康康',
              key: '6',
              avatar: require("@/assets/avatar-peng.jpg"),
            }, {
              title: '康康',
              key: '7',
              avatar: require("@/assets/avatar-fei.jpg"),
            }, {
              title: '康康',
              key: '8',
              avatar: require("@/assets/avatar.jpg"),
            }, {
              title: '贺贺',
              key: '9',
              avatar: require("@/assets/avatar-fei.jpg"),
            },
            {
              title: '康康',
              key: '10',
              avatar: require("@/assets/avatar-peng.jpg"),
            }, {
              title: '康康',
              key: '11',
              avatar: require("@/assets/avatar-kang.jpg"),
            }, {
              title: '💻👩‍🚀',
              key: '12',
              avatar: require("@/assets/avatar-he.jpg"),
            }, {
              title: '康康',
              key: '13',
              avatar: require("@/assets/avatar-kang.jpg"),
            },
          ],
        },
        {
          title: '🐸',
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
              avatar: require("@/assets/avatar-kang.jpg")
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
  @apply bg-gray-110 !important;
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