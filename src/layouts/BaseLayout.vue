<template>
  <div class="base">
    <BaseHeader/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";

export default {
  name: "BaseLayout",
  components: {
    BaseHeader
  }
}
</script>

<style lang="scss" scoped>
  .base {
    padding: 0 24px;
  }
</style>