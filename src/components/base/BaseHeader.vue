<template>
  <header class="head">
    <h1 class="head__title"><span class="head__title-yellow">job</span>Agent</h1>
    <img src="@/assets/images/avatar.svg" alt="Avatar" />
  </header>
</template>

<script>
export default {
  name: "BaseHeader",
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .head {
    display: flex;
    align-items: center;
    margin: 12px 0;

    &__title {
      flex: 1;
      text-align: center;
      margin: 0;
      padding-left: 15px;

      font-style: italic;
      font-weight: 300;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: -0.24px;
      text-transform: none;

      &-yellow {
        @extend .head__title;
        color: #EEAB02;
        font-weight: 800;
        font-style: normal;
      }
    }

  }
</style>