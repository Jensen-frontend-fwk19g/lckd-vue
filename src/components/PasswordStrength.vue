<template>
  <section id="strength">
      <p :class="{valid : validator.length}">#</p>
      <p :class="{valid : validator.char}">@</p>
      <p :class="{valid : validator.numbers}">123</p>
      <p :class="{valid : validator.mixed}">Aa</p>
      <p :class="{valid : validator.pwnd}">pwnd</p>
  </section>
</template>

<script>
export default {
    name: 'PasswordStrength',
    props: {
        password: String
    },
    data(){
        return {
            validator: {
                length: false,
                char: false,
                numbers: false,
                mixed: false,
                pwnd: false
            }
        }
    },
    watch: {
        password(oldPW, newPW) {

            this.validator.length =  (newPW.length > 9) ? true : false;
            this.validator.mixed =   (newPW.match(/^[A-Z]/)) ? true : false;
            this.validator.numbers = (newPW.match(/^[0-9]$/)) ? true : false;
        
        }
    }
}
</script>

<style lang="scss">
@import './../scss/variables';

#strength {
    display: flex;
    margin-top: .25rem;

    p {
        margin: 0 .5rem 0 0;
        padding: 0;
        color: $red;
        font-size: .8rem;

        &.valid {
            color: $yellow;
        }
    }
}

</style>