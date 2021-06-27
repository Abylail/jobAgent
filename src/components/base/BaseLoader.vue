<template>
  <div class="loader"/>
</template>

<script>
export default {
  name: "BaseLoader",
}
</script>

<style lang="scss" scoped>
  .loader {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-right: 4px solid #FFC803;
    border-left: 4px solid #FFC803;
    animation: spin 0.7s linear infinite;

    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>