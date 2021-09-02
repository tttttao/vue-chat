export default {
    state: () => ({
        currentFriend: {},
        groupList: [
            {id: 'g-1', name: '同学'},
            {id: 'g-2', name: '同事'},
        ],
        friendList: [
            {
                id: '1',
                nickname: '严禁投机倒把',
                group_id: 'g-1',
                account: '1233412',
                intro: '',
                remark: '康康',
                remarkInfo: '',
                avatar: require("@/assets/avatar.jpg"),
            },
            {
                id: '2',
                nickname: 'kang',
                group_id: 'g-2',
                account: '1233412',
                intro: 'lala',
                remark: '阿飞',
                remarkInfo: '',
                avatar: require("@/assets/avatar-kang.jpg"),
            },
            {
                id: '3',
                nickname: 'kang',
                group_id: 'g-2',
                account: '1233412',
                intro: '',
                remark: '黄多多',
                remarkInfo: '',
                avatar: require("@/assets/avatar-tao.jpg"),
            },
        ]
    }),
    mutations: {
        setCurrentFriend(state, payload) {
            state.friendList.forEach((friend) => {
                if (friend.id === payload.id) state.currentFriend = friend
            })
        },
        deleteFriend(state, {id}) {
            state.friendList = state.friendList.filter(friend => friend.id !== id)
            if (state.currentFriend.id === id) state.currentFriend = {}
        },
        modifyFriend(state, {profile}) {
            state.friendList = state.friendList.map((friend) => friend.id === profile.id ? {...profile} : friend)
        }
    },
    actions: {},
    getters: {
        getFriendList({friendList}) {
            return friendList
        },
        getCurrentFriend({currentFriend}) {
            return currentFriend
        },
        getGroupList({groupList}) {
            return groupList
        },
    },
}