<template>
  <div id="login-body" class="rounded-md bg-white m-auto shadow-xl w-144 flex overflow-hidden relative">
    <div class="bg-gray-50 p-16 w-full">
      <a-form-model ref="ruleForm"
                    :model="ruleForm" :rules="rules"
                    v-bind="layout">
        <a-form-model-item has-feedback label="账号" prop="账号">
          <a-input v-model="ruleForm.username"/>
        </a-form-model-item>
        <a-form-model-item has-feedback label="密码" prop="密码">
          <a-input v-model="ruleForm.pass" type="password" autocomplete="off"/>
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 24, offset: 8 }">
          <a-button type="primary" @click="submitForm('ruleForm')">
            Submit
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('/')
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