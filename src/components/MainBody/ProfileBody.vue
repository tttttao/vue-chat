<template>
  <div class="w-full h-full py-32 px-48">
    <div v-show="profile.id" class=" h-full w-full rounded p-4 bg-white shadow-sm flex flex-col">
      <div class="profile-header w-full h-24 flex">
        <div class="w-24 h-24 my-auto">
          <a-avatar shape="square" :size="96" :src="profile.avatar"/>
        </div>

        <div class="flex-1 m-4">
          <div class="text-black text-xl">
            {{ profile.nickname }}
          </div>
          <div class="py-2">
            {{ profile.intro ? profile.intro : '暂无简介' }}
          </div>
        </div>
      </div>
      <a-divider/>
      <div class="profile-body w-full flex-1">
        <a-form-model :colon="formConfig.showColon"
                      :labelAlign="formConfig.labelAlign"
                      :label-col="formConfig.formItemLayout.labelCol"
                      :wrapper-col="formConfig.formItemLayout.wrapperCol">
          <a-form-model-item label="账号">
            <div class="px-2">
              {{ profile.account }}
            </div>
          </a-form-model-item>
          <a-form-model-item label="备注">
            <a-input v-model="profile.remark"/>
          </a-form-model-item>
          <a-form-model-item label="分组">
            <a-select v-model="profile.group_id" placeholder="分组">
              <a-select-option v-for="group in groupList" :key="group.id" :value="group.id">
                {{ group.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="备注">
            <a-input v-model="profile.remarkInfo" type="textarea" :auto-size="{ minRows:7, maxRows: 7 }"/>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 2, offset: 20 }">
            <a-button type="primary" @click="onSaveClick" html-type="submit">保存</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ProfileBody",
  data() {
    return {
      formConfig: {
        labelAlign: 'left',
        showColon: false,
        formItemLayout: {
          labelCol: {span: 3},
          wrapperCol: {span: 21},
        },
        formTailLayout: {
          labelCol: {span: 3},
          wrapperCol: {span: 9, offset: 1},
        },
      },
      profile: {}
    }
  },
  methods: {
    onSaveClick() {
      this.$store.commit('modifyFriend', {profile: this.profile});
    }
  },
  watch: {
    currentFriend(newVer) {
      this.profile = {...newVer}
    }
  },
  computed: {
    ...mapGetters({
      'groupList': 'getGroupList',
      'currentFriend': 'getCurrentFriend',
    }),
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