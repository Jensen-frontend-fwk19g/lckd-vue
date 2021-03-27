<template>
  <main id="passwords">
      <Top />
      <label>Stored passwords</label>
      <section class="list">
        <Password v-for="(lckd, index) in passwords" :key="index" :lckd="lckd" />
      </section>
      <section class="plain-view">
        <label for="#">plain view</label>
        <div class="plain-pw">
          <aside class="pw mono" ref="pw">
            {{ plainPassword.password }}
          </aside>
          <aside class="copy" @click="copyPassword">
            <img src="@/assets/copy.svg" alt="copy">
          </aside>
        </div>
      </section>
      <a href="#" class="btn" @click.prevent="$router.push('/new')">New LCKD</a>
  </main>
</template>

<script>
import Top from '@/components/Top';
import Password from '@/components/Password';

export default {
  name: 'Passwords',
  data(){
    return {
    }
  },
  components: {
    Top,
    Password
  },
  computed: {
    passwords() {
      return this.$store.state.passwords;
    },
    plainPassword() {
      return this.$store.state.plainView;
    }
  },
  beforeMount(){
    this.$store.dispatch('getLckd')
  },
  methods: {
    copyPassword(){
      this.$refs.pw.select();
      this.$refs.pw.setSelectionRange(0, 99999); /* For mobile devices */
      document.execCommand("copy");
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

#passwords {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: auto;

  .list {
    width: 100%;
    margin: 0 0 1rem 0;
    padding: .5rem .5rem 0 .5rem;
    border: 1px solid $yellow;
    border-radius: $radius * 2;
    border-top-left-radius: 0px;
  }

  .plain-view {
    margin-top: 2rem;
    width: 100%;
    
    label {
      background: white;
    }

    .plain-pw {
      border: 1px solid white;
      border-radius: $radius;
      border-top-left-radius: 0;
      height: 3rem;
      display: flex;
      align-items: center;
      margin-bottom: 2rem;


      .pw {
        flex: 1;
        padding: 1rem;
        font-size: 1rem;
        color: white;
      }

      .copy {
        width: 3rem;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
          width: 50%;
        }
      }
    }
  }

  .btn {
    margin-top: auto;
  }
}

</style>