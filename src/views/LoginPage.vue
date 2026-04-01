<template>
<div>
    <!-- <div class="logo-container">
        <img src="@/assets/logo.png" class="logo"/>
    </div> -->
    <!-- <InputField :type="'text'" :placeholder="'Email'" :modelValue="email" @update:model-value="email = $event"/> -->
    <InputField :type="'text'" :placeholder="'Email'" v-model="email" errorMsg="이메일을 입력하세요"/>
    <InputField :type="'password'" :placeholder="'Password'" v-model="password" errorMsg="비밀번호를 입력하세요"/>

    <button class="login-button" @click="login">로그인하기</button>

    <div>
        계정이 없으신가요?
        <RouterLink class="signup-button" to="/signup">SignUp</RouterLink>
    </div>
</div>
</template>

<script>
import InputField from '@/components/InputField.vue'
export default {
    name: "LoginPage",
    components: { InputField },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            if (!this.email || !this.password) {
                alert("모든 필드를 입력해주세요.")
                return
            }
            this.$router.push("/main")
        }
    },
}
</script>

<style scoped>
.login-button {
    border-radius: 20px;
    border: 1px solid white;
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
}

.signup-button {
    color: aqua;
    cursor: pointer;
}

</style>