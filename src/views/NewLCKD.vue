<template>
  <main id="new-lckd">
    <Top />
    <h2>New secure credentials</h2>
    <section>
          <label for="domain">Domain</label>
          <input type="text" name="domain" v-model="domain" placeholder="domain">
          <label for="username">Username</label>
          <input type="text" name="username" v-model="username" placeholder="username">
          <label for="password">Secure password</label>
          <div class="pw">
            <input type="text" name="password" v-model="password" placeholder="password">
            <img src="@/assets/reload.svg" alt="generat new PW" @click="generatePW">
          </div>
           <PasswordStrength :password="password" />
    </section>
    <a href="#" class="btn" @click.prevent="newLCKD">Store LCKD</a>
  </main>
</template>

<script>
import Top from '@/components/Top';
import PasswordStrength from '@/components/PasswordStrength';

export default {
  name: 'NewLCKD',
  components: {
    Top,
    PasswordStrength
  },
  data(){
    return {
      domain: '',
      username: '',
      password: ''
    }
  },
  methods: {
    newLCKD(){

      this.$store.dispatch('newLckd', {
        domain: this.domain,
        username: this.username,
        password: this.password
      })

      // empty form
      this.domain = ''
      this.username = ''
      this.password = ''


    },
    generatePW(){

      const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,-./:;<=>?@^{|}`;

      let password = '';

      for(let i=0; i<10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let newCharacter = characters[randomIndex];
        password += newCharacter;
      }

      this.password = password;
      }
    }
}
</script>

<style lang="scss">
@import './../scss/variables';

#new-lckd {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    max-width: 10rem;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    color: white;
  }

  section {
    width: 100%;
    align-items: flex-start;

    .pw {
      border: 1px solid $yellow;
      width: 100%;
      background: none;
      margin-bottom: 0;
      border-radius: $radius;
      border-top-left-radius: 0px;
      display: flex;
      justify-items: center;

      > input {
        border: none;
        margin: 0;
      }

      > img {
        margin: 0 1rem;
      }
    }
  }

  .btn {
    margin-top: auto;
  }
}
</style>