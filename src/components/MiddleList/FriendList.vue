<template>
  <div class="friend-list">
    <div>
      <a-collapse accordion :bordered="false" class="collapse">
        <a-collapse-panel v-for="group in treeData" :key="group.key" :header="group.title" class="collapse-panel">
          <div v-for="friend in group.children" :key="friend.id" @click="onFriendClick(friend)"
               class="py-2 px-3 flex hover:bg-gray-110">
            <a-dropdown :trigger="['contextmenu']">
              <div class="w-full flex space-x-2">
                <div class="friend-avatar">
                  <a-avatar shape="square" :src="friend.avatar"></a-avatar>
                </div>
                <div class="friend-remark flex-1 self-center">
                  {{ friend.remark }}
                </div>
              </div>
              <a-menu slot="overlay">
                <a-menu-item @click="onDeleteClick(friend)">删除好友</a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
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
      let friendList = this.$store.getters.getFriendList
      let groupList = this.$store.getters.getGroupList
      let friendGroup = {}

      for (let friend of friendList) {
        let groupId = friend.group_id
        if (friendGroup[groupId]) {
          friendGroup[groupId].push(friend)
        } else {
          friendGroup[groupId] = [friend]
        }
      }

      let res = []
      for (let group of groupList) {
        res.push({
          'key': group.id,
          'title': group.name,
          'children': friendGroup[group.id]
        })
      }
      return res
    },
  },
  methods: {
    onDeleteClick({id}) {
      this.$store.commit('deleteFriend', {id})
    },
    onFriendClick({id}) {
      this.$store.commit('setCurrentFriend', {id})
    },
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
.friend-list .collapse {
  @apply bg-transparent;
}

.friend-list .collapse .collapse-panel .ant-collapse-content-box {
  @apply py-0.5 px-0;

}

.friend-list .collapse .collapse-panel {
  @apply bg-transparent p-0 border-none;
}
</style>