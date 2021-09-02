const avatarKang = require("@/assets/avatar-kang.jpg")
const avatarFei = require("@/assets/avatar-fei.jpg")
const avatarHe = require("@/assets/avatar-he.jpg")
const avatarTao = require("@/assets/avatar-tao.jpg")
const avatarBo = require("@/assets/avatar-bo.jpg")
const avatarGroup = require("@/assets/avatar.jpg")
export default {
    state: () => ({
        currentChatId: 1,
        chats: {
            1: {
                id: 1,
                name: '全面建设小康社会',
                msg: '',
                msgFrom: '',
                date: '',
                isGroup: true,
                messages: [
                    {
                        id: 1,
                        avatar: avatarTao,
                        type: 'txt',
                        msg: '是啊',
                        date: '2021-08-25 12:21:00',
                        isSelf: true,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 2,
                        avatar: avatarKang,
                        type: 'txt',
                        msg: '那个放冰箱里的',
                        date: '2021-08-25 12:21:01',
                        isSelf: false,
                        msgFrom: 'Kang'
                    },
                    {
                        id: 3,
                        avatar: avatarHe,
                        type: 'txt',
                        msg: '哈根达斯',
                        date: '2021-08-25 12:22:02',
                        isSelf: false,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 4,
                        avatar: avatarHe,
                        type: 'txt',
                        msg: '涛哥买的',
                        date: '2021-08-25 12:22:02',
                        isSelf: false,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 5,
                        avatar: avatarTao, type: 'txt',
                        msg: '去年12.17买的，放到现在差不多20%',
                        date: '2021-08-25 12:22:02',
                        isSelf: true,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 6,
                        avatar: avatarTao,
                        type: 'txt',
                        msg: 'All props form a one-way-down binding between the child property and the parent one: when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from accidentally mutating the parent\'s state, which can make your app\'s data flow harder to understand.\n' +
                            '\n' +
                            'In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means you should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console.',
                        date: '2021-08-25 12:22:02',
                        isSelf: true,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 7,
                        avatar: avatarFei,
                        type: 'txt',
                        msg: '流美心心',
                        date: '2021-08-25 12:22:02',
                        isSelf: false,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 8,
                        avatar: avatarFei,
                        type: 'txt',
                        msg: '周六晚上去酒吧吗',
                        date: '2021-08-25 12:22:02',
                        isSelf: false,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 9,
                        avatar: avatarFei,
                        type: 'txt',
                        msg: '提肛了兄弟们',
                        date: '2021-08-25 12:22:02',
                        isSelf: false,
                        msgFrom: 'Fei'
                    },
                    {
                        id: 10,
                        avatar: avatarFei,
                        type: 'txt',
                        msg: '提肛了兄弟们',
                        date: '2021-08-25 12:22:02',
                        isSelf: false,
                        msgFrom: 'Fei'
                    },
                    {
                        id: 11,
                        avatar: avatarTao,
                        type: 'txt',
                        msg: '我想吃最早你买的那个月饼',
                        date: '2021-08-25 12:22:02',
                        isSelf: true,
                        msgFrom: 'Tao'
                    },
                    {
                        id: 12,
                        avatar: avatarTao,
                        type: 'image',
                        msg: 'http://image.codes51.com/Article/image/20171113/20171113192033_1230.png',
                        date: '2021-08-25 12:22:02',
                        isSelf: true,
                        msgFrom: 'Tao'
                    },
                ],
                avatar: avatarGroup,
            },
            2: {
                id: 2,
                name: '贾祥康',
                msg: '',
                msgFrom: '',
                date: '',
                isGroup: false,
                messages: [],
                avatar: avatarKang,
            },
            3: {
                id: 3,
                name: '炮哥',
                msg: '',
                msgFrom: '',
                date: '',
                isGroup: false,
                messages: [],
                avatar: avatarBo
            },
            4: {
                id: 4,
                name: '阿飞',
                msg: '',
                msgFrom: '',
                date: '',
                isGroup: false,
                messages: [],
                avatar: avatarFei
            },
            5: {
                id: 5,
                name: '全面建设小康社会',
                msg: '',
                msgFrom: '',
                date: '',
                isGroup: false,
                messages: [],
                avatar: avatarHe,
            },
        },
    }),
    mutations: {
        updateCurrentChat(state, payload) {
            state.currentChatId = payload.id
        },
        pushMessage({chats, currentChatId}, {message}) {
            const msgDate = '09-02'
            let currentChat = chats[currentChatId]
            currentChat.msg = message.type === 'txt' ? message.msg : '[图片]'
            currentChat.msgFrom = message.msgFrom
            currentChat.date = msgDate
            currentChat.messages.push(message)
        }
    },
    actions: {
        sendMessage(context, payload) {
            context.commit('pushMessage', payload)
        }
    },
    getters: {
        getChats(state) {
            return state.chats
        },
        getCurrentChat({chats, currentChatId}) {
            return chats[currentChatId]
        }
    },
}