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
            
            for(let i = 0; i < newPW.length; i++ ) {

                if(newPW[i].match(/^[A-Z]/)) {
                    this.validator.mixed = true;
                } else {
                    this.validator.mixed = false;
                }

            }

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