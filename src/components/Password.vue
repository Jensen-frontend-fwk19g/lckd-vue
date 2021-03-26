<template>
  <article class="password" @click="getPassword" :class="{ selected: lckd.id === plainPassword.id }">
      <section class="url">
          {{ lckd.domain }}
      </section>
      <section class="view">
          <img src="@/assets/eye-off.svg" alt="hide" v-if="lckd.id !== plainPassword.id">
          <img src="@/assets/eye-on.svg" alt="hide" v-if="lckd.id === plainPassword.id">
      </section>
  </article>
</template>

<script>
export default {
    name: 'Password',
    props: {
        lckd: Object
    },
    methods: {
        getPassword(){
            this.$store.dispatch('viewPassword', this.lckd);
        }
    },
    computed: {
        plainPassword(){
            return this.$store.state.plainView;
        }
    }
}
</script>

<style lang="scss">
@import './../scss/variables';

.password {
    border: 1px solid $yellow;
    border-radius: $radius;
    margin-bottom: .5rem;
    height: 3rem;
    display: flex;
    align-items: center;

    &.selected {
        border-color: white;

        .view {
            border-color: white;
        }

        .url {
            color: white;
        }

    }

    .url {
        flex: 1;
        padding: 0 1rem;
        color: $yellow;
    }

    .view {
        width: 3rem;
        height: inherit;
        border-left: 1px solid $yellow;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 50%;
        }
    }
}
</style>