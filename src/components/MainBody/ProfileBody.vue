<template>
  <div class="w-full h-full py-32 px-48">
    <div class=" h-full w-full rounded p-4 bg-white shadow-sm flex flex-col">
      <div class="profile-header w-full h-24 flex">
        <div class="w-24 h-24 my-auto">
          <a-avatar shape="square" :size="96" :src="profile.avatar"/>
        </div>

        <div class="flex-1 m-4">
          <div class="text-black text-xl">
            {{ profile.name }}
          </div>
          <div class="py-2">
            {{ profile.intro ? profile.intro : '暂无简介' }}
          </div>
        </div>
      </div>
      <a-divider/>
      <div class="profile-body w-full flex-1">
        <a-form>
          <a-form-item label="账号" :labelAlign="formConfig.labelAlign" :colon="formConfig.showColon"
                       :label-col="formConfig.formItemLayout.labelCol"
                       :wrapper-col="formConfig.formItemLayout.wrapperCol">
            <a-input v-model="profile.account"/>
          </a-form-item>
          <a-form-item label="昵称"
                       :labelAlign="formConfig.labelAlign" :colon="formConfig.showColon"
                       :label-col="formConfig.formItemLayout.labelCol"
                       :wrapper-col="formConfig.formItemLayout.wrapperCol">
            <a-input v-model="profile.nickname"/>
          </a-form-item>
          <a-form-item
              :labelAlign="formConfig.labelAlign" :colon="formConfig.showColon"
              :label-col="formConfig.formItemLayout.labelCol"
              :wrapper-col="formConfig.formItemLayout.wrapperCol"
              label="分组">
            <a-select v-model="profile.group" placeholder="分组">
              <a-select-option v-for="group in groupList" :key="group.id" :value="group.id">
                {{ group.name }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="备注" :labelAlign="formConfig.labelAlign" :colon="formConfig.showColon"
                       :label-col="formConfig.formItemLayout.labelCol"
                       :wrapper-col="formConfig.formItemLayout.wrapperCol">
            <a-input v-model="profile.remark" type="textarea" :auto-size="{ minRows:7, maxRows: 7 }"/>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 2, offset: 20 }">
            <a-button type="primary" html-type="submit">保存</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

const avatarTao = require("@/assets/avatar-tao.jpg")
const formItemLayout = {
  labelCol: {span: 3},
  wrapperCol: {span: 21},
};
const formTailLayout = {
  labelCol: {span: 3},
  wrapperCol: {span: 9, offset: 1},
};
const showColon = false
const labelAlign = 'left'
export default {
  name: "ProfileBody"
  , data() {
    return {
      formConfig: {
        labelAlign,
        showColon,
        formItemLayout,
        formTailLayout,
      },
      profile: {
        group: 'g-1',
        avatar: avatarTao,
        name: 'tttttao',
        account: '519767697',
        nickname: '敲代码的',
        intro: '',
        remark: 'xx',
      }
    }
  },
  computed: {
    ...mapGetters({'groupList':'getGroup'}),
  }
}
</script>

<style>

.profile-body .ant-form-item label {
  @apply tracking-widest text-gray-500;
}

.profile-body .ant-form-item {
  @apply mb-2;
}

.profile-body .ant-input {
  @apply border-none bg-transparent text-black resize-none;
}

.profile-body .ant-input:focus {
  @apply border-none;
}
</style>