<template>
  <div>
    <h4>Login</h4>
    <form @submit.prevent="handleLogin">
      <label for="name">Username</label>
      <div>
        <input id="username" type="text" v-model="username" required autofocus />
      </div>
      <div>
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" v-model="password" required />
        </div>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    loginStatus() {
       return this.$store.state.loggedIn;
    }
  },

  created() {
    if (this.loginStatus) {
      this.$router.push('/dashboard');
    }
  },

  methods: {
      handleLogin(){
          this.$store.dispatch("covid/login", {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push("/dashboard");
      });
      }
  }
};
</script>