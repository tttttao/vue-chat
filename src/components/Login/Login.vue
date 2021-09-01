<template>
  <div id="login-body" class="rounded-md bg-gray-110 m-auto shadow-xl flex overflow-hidden relative">
    <div class="body-bg">
      <img class="w-96" :src="loginBg"/>
    </div>
    <div class="body-form  w-144 p-16 self-center">
      <a-form-model ref="ruleForm"
                    :model="ruleForm" :rules="rules"
                    v-bind="layout">
        <a-form-model-item has-feedback class="tracking-widest" label="账号" prop="账号">
          <a-input v-model="ruleForm.username"/>
        </a-form-model-item>
        <a-form-model-item has-feedback class="tracking-widest" label="密码" prop="密码">
          <a-input v-model="ruleForm.pass" type="password" autocomplete="off"/>
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 24, offset: 18 }">
          <a-button type="primary" @click="submitForm('ruleForm')">
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import {shuffleArray} from "@/tools/functions";


export default {
  name: "Login",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.username !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        username: '',
      },
      rules: {
        pass: [{validator: validatePass, trigger: 'change'}],
      },
      layout: {
        wrapperCol: {span: 16},
        labelCol: {span: 4, offset: 2},
        colon: false,
        labelAlign: 'left',
      },
    };
  }, computed: {
    loginBg() {
      const bgArr = shuffleArray([
        require('@/assets/login-bg.jpg'),
        require('@/assets/login-bg-1.jpg'),
        require('@/assets/login-bg-2.jpg'),
        require('@/assets/login-bg-3.jpg'),
        require('@/assets/login-bg-4.jpg'),
      ]);
      console.log(bgArr)
      return bgArr[0]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch('userLogin', true)
          this.$router.push({name: 'chatList'})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
}
</script>

<style scoped>

</style>