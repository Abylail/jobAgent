<template>
  <div class="text-field">
    <input
      class="text-field__input"
      :class="{'padding-30': searchIcon}"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="inputHandle"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextField",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      required: true
    },
    clearable: {
      type: Boolean,
      default: false
    },
    searchIcon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clear() {
      this.$emit('input', "");
    },
    inputHandle(e) {
      console.log(e)
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-field {
    background: #EAEAEA;
    border-radius: 8px;
    height: 40px;

    display: flex;
    align-items: center;

    &__input {
      background: none;
      border: none;
      height: 35px;
      outline: none !important;
      width: 100%;
    }

  }
</style>