<template>
  <main id="login">
      <img src="@/assets/logo.svg" alt="LCKD logo">
      <h1>LCKD</h1>
      <h2>Keeping your passwords safe</h2>
      <section>
          <label for="username">Username</label>
          <input type="text" name="username" v-model="username">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password">
          <a href="#" class="btn" @click.prevent="login">Let me in</a>
      </section>
  </main>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            username: 'johankivi',
            password: 'qwerty'
        }
    },
    methods: {
        login(){
            this.$store.dispatch('login', { username: this.username, password: this.password })
        }
    }
}
</script>

<style lang="scss">
@import './../scss/variables';

#login {
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        margin-top: auto;
    }

    h1 {
        font-size: 3rem;
        color: white;
        margin: .5rem 0;
    }

    h2 {
        margin: 0;
        color: $yellow;
        font-size: 1.3rem;
        text-transform: uppercase;
        max-width: 16rem;
        text-align: center;
    }

    section {
        width: 100%;
        margin-top: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>