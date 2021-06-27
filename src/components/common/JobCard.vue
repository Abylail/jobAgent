<template>
  <div class="card">

    <!--  image  -->
    <div class="card__image">
      <img :src="data.imageName" alt="logo"/>
    </div>

    <!--  all info  -->
    <div class="card__main">

      <!--   main info   -->
      <div class="card__main__top">
        <h2 class="card__title">{{data.name}}</h2>
        <div class="card__info">
          <span>Company:</span>
          <a class="card__info__link">{{ data.company }}</a>
        </div>
        <div class="card__info">
          <span>Locations:</span>
          <a class="card__info__link">{{ data.location.city }}, {{ data.location.country }}</a>
        </div>
      </div>

      <!--  bottom info    -->
      <div class="card__main__bottom card__extra">
        <span class="card__extra__wrapper">
          <BaseIcon class="ic-size-15">clock</BaseIcon>
          <span class="card__extra__text">Posted {{ data.postedDaysAgo }} days ago</span>
        </span>
        <BaseIcon class="ic-size-5">dot</BaseIcon>

        <span class="card__extra__wrapper">
          <BaseIcon class="ic-size-15">eye</BaseIcon>
          <span class="card__extra__text">{{ data.views }} Views</span>
        </span>
      </div>


    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";

export default {
  name: "JobCard",
  components: {
    BaseIcon
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
  %text {
    font-size: 14px;
    line-height: 14px;
    color: #636363;
  }
  %center {
    display: flex;
    justify-content: center;
    align-items: center;

    &-row {
      @extend %center;
      flex-direction: row
    }
  }

  .card {
    display: grid;
    grid-template-areas: "image space main";
    grid-auto-columns: 40px 16px 1fr;
    padding: 16px;

    height: 120px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(33, 33, 33, 0.16);

    margin-bottom: 16px;


    &__image {
      grid-area: image;
    }


    &__main {
      grid-area: main;
      display: grid;
      grid-template-areas: "top"
                           "bottom";
      grid-auto-rows: 1fr 20px;

      &__top { grid-area: top; }
      &__bottom { grid-area: bottom; }

    }


    &__title {
      color: #636363;
      font-weight: bolder;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      margin: 0 0 8px 0;
      height: 30px;
    }


    &__info {
      @extend %text;
      display: flex;
      justify-content: space-between;

      &__link {
        color: #E06D06;
        text-decoration-line: underline;
      }
    }


    &__extra {
      @extend %text;

      display: flex;
      justify-content: space-between;
      align-items: center;

      &__wrapper {
        @extend %center;
      }

      &__text {
        @extend %center;
        margin-left: 8px;
      }
    }

  }
</style>