<template>
  <div id="app">
    <BaseLayout>
      <div class="head">
        <h2 class="head__title">JOB SEARCH</h2>
        <div class="head__tools">
          <BaseTextField
            v-model="searchText"
          />
        </div>
      </div>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";
import BaseTextField from "@/components/base/BaseTextField";

export default {
  name: 'App',
  components: {
    BaseLayout,
    BaseTextField
  },
  data() {
    return {
      searchText: ""
    }
  }
}
</script>
<style lang="scss">
  body {
    margin: 0;
  }

  .head {
    padding: 8px 0;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      text-transform: uppercase;
      color: #636363;
    }

  }

</style>
