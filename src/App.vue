<template>
  <div id="app">
    <BaseLayout>

      <div class="tools">
        <h2 class="tools__title">JOB SEARCH</h2>
        <div class="tools__container">
          <BaseTextField
            class="tools__text-field"
            v-model="searchText"
            placeholder="Search"
            magnifier
            clearable
          />
          <button class="tools__filter" :class="{'tools__filter--opened': filterOpened}" @click="toggleFilter">
            <BaseIcon class="ic-size-15">filter</BaseIcon>
          </button>
        </div>
        <div class="tools__container">
          <span class="tools__text--bolder">Sort by:</span>
          <span class="tools__text">Views <BaseIcon class="ic-size-14">arrow</BaseIcon></span>
        </div>
      </div>


      <div class="list">
        
      </div>

    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";
import BaseTextField from "@/components/base/BaseTextField";
import BaseIcon from "@/components/base/BaseIcon";

export default {
  name: 'App',
  components: {
    BaseLayout,
    BaseTextField,
    BaseIcon
  },
  data() {
    return {
      searchText: "",
      filterOpened: false
    }
  },
  methods: {
    toggleFilter() {
      this.filterOpened = !this.filterOpened;
    }
  }
}
</script>
<style lang="scss">
  body {
    margin: 0;
  }
  button {
    cursor: pointer;
    &:focus {outline:0;}
  }
  

  .tools {
    padding: 8px 0;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #636363;
    }

    &__container {
      display: flex;
      justify-content: space-between;

      margin-top: 9px;
    }

    &__text {
      color: #636363;
      font-size: 14px;
      &--bolder {
        @extend .tools__text;
        font-weight: bolder;
      }
    }

    &__text-field {
      width: 100%;
    }

    &__filter {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 8px;
      transition: .3s;

      background: #FFC803;
      border: none;
      border-radius: 8px;

      &--opened {
        background: chocolate;
      }

      &:hover {
        opacity: .7;
      }
    }

  }

</style>
