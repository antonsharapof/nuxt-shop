<template>
  <b-container class="popup_template">
    <div>
      <b-form @submit="onSubmit" v-if="true">
        <b-form-group id="input-group-1"
                      label="Email адрес:"
                      label-for="input-1"
                      description="Введите cвой email">
          <b-form-input id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1"
                      label="Телефон:"
                      label-for="input-1"
                      description="Введите свой телефон">
          <b-form-input id="input-1"
                        v-model="form.phone"
                        type="phone"
                        required
                        placeholder="Enter phone"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" @click="al">Купить</b-button>
        <b-button type="reset" variant="danger" @click="close">Закрыть</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          phone: '',
        },
      };
    },
    methods: {
      al() {
        alert(this.form.email);
      },
      close() {
        this.$emit('close_popup', false);
      },
    }
  }
</script>

<style lang="scss">
  .popup_template {
    width: 40rem;
    height: 20rem;
    background-color: rgb(244, 248, 250);
    margin-left: -20rem;
    margin-top: -10rem;
    padding: 2rem;
  }
</style>
