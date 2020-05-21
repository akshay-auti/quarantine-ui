<template>
  <div id="__next">
         <div style="margin-top: 20px">
            <!-- WML IT Solutions Pvt Ltd. (https://www.wmltech.com/) * Author: Srikanth Chundi * Licensed to Govt. of Maharashtra for Covid Apps-->
         </div>
         <div class="ui container">
            <div class="ui grid">
               <div class="centered row">
                  <div class="ten wide computer sixteen wide mobile twelve wide tablet column">
                     <div class="ui segment">
                        <div class="ui grid">
                           <div class="middle aligned row">
                              <div class="three wide computer four wide mobile three wide tablet column">
                              	<img src="https://covid-19.maharashtra.gov.in/static/images/GoM.png" class="ui tiny image"/></div>
                              <div class="thirteen wide computer twelve wide mobile thirteen wide tablet column">
                                 <div style="color:#8cc63f" class="ui large header">Government of Maharashtra</div>
                              </div>
                              <div style="margin-top:.5em" class="sixteen wide column">
                                 <div class="ui fitted divider"></div>
                                 <div style="color:#8cc63f;margin-top:.5em" class="ui center aligned header">
                                 	COVID-19 (Coronavirus) - Self-Assessment Dashboard
                         		 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <!-- Middle Content -->

                     <div class="ui segment">
                        <!-- <div class="ui active centered inline loader"></div> -->
                        	<form class="ui form" @submit.prevent="handleLogin">
							   <div class="required field">
							      <label>Username</label>
							      <div class="ui fluid input"><input id="username" type="text" v-model="username" required autofocus></div>
							   </div>
							   <div class="required field">
							      <label>Password</label>
							      <div class="ui fluid input"><input id="password" type="password" v-model="password" required></div>
							   </div>
							   <div class="required field">
							   	  <button class="ui primary left button" type="submit">Login</button>	
							   </div>
							</form>
                     </div>
                     <p style="text-align:center;margin-top:1em">© Government of Maharashtra Initiative. All Rights Reserved.</p>
                  </div>
               </div>
            </div>
         </div>
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
     async handleLogin(){
        await this.$store.dispatch("covid/login", {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push("/dashboard");
      });
      }
  }
};
</script>