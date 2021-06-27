<template>
  <svg @click="$emit('click')">
    <use
        :xlink:href="require('@/assets/sprite.svg') + `#${$slots.default[0].text}`"
    ></use>
  </svg>
</template>
<style lang="scss" scoped>
  .ic {
    @for $s from 1 through 100 {
      &-size-#{$s} {
        width: #{$s}px;
        height: #{$s}px;

        min-width: #{$s}px;
      }
    }
  }
</style>
