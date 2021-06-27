<template>
  <div class="text-field">
    <BaseIcon v-if="magnifier" class="text-field__magnifier ic-size-20">magnifier</BaseIcon>
    <input
      class="text-field__input"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="inputHandle"
    />
    <BaseIcon v-if="needClear" class="text-field__clear ic-size-12" @click="clear">cross</BaseIcon>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";

export default {
  name: "BaseTextField",
  components:{
    BaseIcon
  },
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
    magnifier: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clear() {
      this.$emit('input', "");
    },
    inputHandle(e) {
      this.$emit('input', e.target.value);
    }
  },
  computed: {
    needClear() {
      return this.clearable && !!this.value;
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
      padding: 0 8px;
    }

    &__magnifier {
      margin-left: 8px;
    }

    &__clear {
      margin-right: 8px;
      cursor: pointer;
    }

  }
</style>