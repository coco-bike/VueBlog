<template>
  <el-row type="flex" justify="center">
    <el-form ref="registerForm" :model="user" :rules="rules" status-icon label-width="80px">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="user.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vcode">
        <el-input v-model="user.vcode" placeholder="验证码"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-upload" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>
<script>

export default {
  methods: {
    register: function(){
            let that = this;
            this.$refs.registerForm.validate(valid=>{
                if(valid){
                    this.$api.get("Login/Register",{email:that.user.email,password:that.user.password,vcode:that.user.vcode},
                    r=>{
                        if(r.data.success){
                            this.$notify({
                                type:"success",
                                message:r.data.data,
                                duration:3000
                            });
                            this.$emit("registerEvent","true");
                        }else{
                            this.$message({
                                type:"error",
                                message:r.data.data,
                                showClose:true
                            });
                            this.$emit("registerEvent","false");
                        }
                      this.$router.replace("/home");
                    })
                }else{
                    return false;
                }
            })
        },
  },
  data() {
    return {
      user: {},
      rules: {
        email: [{ required: true, message: "用户不能为空", trigger: "blur" }],
        vcode: [{ required: true, message: "验证码不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  }
};
</script>
