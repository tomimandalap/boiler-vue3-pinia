<script>
import { useRouter } from "vue-router";
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  setup() {
    const router = useRouter();
    const form = reactive({
      email: "",
      password: "",
    });

    const validations = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(8) },
      };
    });

    const v$ = useVuelidate(validations, form);

    return { form, router, v$ };
  },
  methods: {
    Login() {
      this.v$.$validate();
      if (this.v$.$error) return;

      localStorage.setItem("auth", true);
      this.router.push("/admin");
    },
  },
};
</script>

<template>
  <div class="login">
    <h2>Login</h2>
    <hr />
    <br />

    <div class="form-group">
      <label for="email">Email</label>
      <input
        id="email"
        ref="email"
        v-model="form.email"
        type="text"
        placeholder="example@mail.com"
        maxlength="50"
      />
      <span v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message }}
      </span>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        ref="email"
        v-model="form.password"
        type="password"
        placeholder="Password"
        maxlength="30"
      />
      <span v-if="v$.password.$error">
        {{ v$.password.$errors[0].$message }}
      </span>
    </div>
    <button type="submit" @click="Login">Login</button>
  </div>
</template>
<style scoped>
.login {
  background: white;
  color: black;
  width: 400px;
  text-align: left;
  padding: 12px;
}

label {
  font-weight: 500;
}
div.form-group input {
  width: 100%;
  height: 38px;
}

div.form-group span {
  font-size: 12px;
  color: red;
  margin: 8px 0;
}

button {
  width: 100%;
  height: 38px;
  background: teal;
  border: none;
  color: white;
  margin: 8px 0;
}

button:hover {
  cursor: pointer;
  background: rgb(20, 147, 147);
  transition: all 100ms ease-in-out;
}
</style>
