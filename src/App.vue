<template>
  <div id="app">
    <BaseLayout>

      <!--   TOOLS   -->
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
          <button class="tools__filter" :class="{'tools__filter--opened': filterOpened}" @click="filterOpened = !filterOpened">
            <BaseIcon class="ic-size-15">{{ filterOpened ? "cross" : "filter"  }}</BaseIcon>
          </button>
        </div>
        <div class="tools__container">
          <span class="tools__text--bolder">Sort by:</span>
          <button class="tools__text" @click="sortViewsTop = !sortViewsTop">Views <BaseIcon class="tools__ic ic-size-14" :class="{reverse: !sortViewsTop}">arrow</BaseIcon></button>
        </div>
      </div>

      <!--   FILTER   -->
      <SlideToggle v-slot={animationClass}>
        <FakeFilter
          v-if="filterOpened"
          :class="animationClass"
        />
      </SlideToggle>

      <!--  LIST    -->
      <BaseLoader v-if="isLoading"/>
      <div class="list" v-else>
        <JobCard
          v-for="(job, i) in readyMeat"
          :key="i"
          :data="job"
        />
      </div>

    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";
import BaseTextField from "@/components/base/BaseTextField";
import BaseIcon from "@/components/base/BaseIcon";
import BaseLoader from "@/components/base/BaseLoader";

import FakeFilter from "@/components/common/FakeFilter";
import JobCard from "@/components/common/JobCard";

import SlideToggle from "@/components/common/SlideToggle";

import { mapActions, mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    BaseLayout,
    BaseTextField,
    BaseIcon,
    BaseLoader,
    FakeFilter,
    SlideToggle,
    JobCard
  },
  data() {
    return {
      searchText: "",
      filterOpened: false,
      isLoading: true,
      sortViewsTop: true,
    }
  },
  computed: {
    ...mapGetters({
      rawMeat: "getJobList"
    }),
    readyMeat() {
      let list = [];
      if(this.searchText) list = this.searchLogic(this.rawMeat, this.searchText);
      else list = this.rawMeat;
      return this.sortLogic(list);
    }
  },
  methods: {
    ...mapActions({
      fetchJobs: "fetchJobs"
    }),
    searchLogic(list, text) {
      const searchText = text.toUpperCase();
      return list.filter(item => item.name.toUpperCase().includes(searchText))
    },
    sortLogic(list) {
      if(this.sortViewsTop) return list.sort((a, b) => b.views - a.views);
      else return list.sort((a, b) => a.views - b.views);
    }
  },
  async mounted() {
    await this.fetchJobs();
    this.isLoading = false;
  }
}
</script>
<style lang="scss">
  body {
    margin: 0;
  }
  a, button {
    border: none;
    background: none;
    cursor: pointer;
    &:focus {outline:0;}
  }

  .reverse {
    transform: rotate(180deg);
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
      transition: .3s;
      color: #636363;
      &--bolder {
        @extend .tools__text;
        font-weight: bolder;
      }
    }

    &__ic { transition: .3s }

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

  .list {
    margin-top: 30px;
  }

</style>
