<template>
  <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
  >
    <slot :animationClass="'slideToggleAnimation'" />
  </transition>
</template>
<script>
export default {
  methods: {
    beforeEnter: function (el) {
      el.style.height = "0";
      el.style.overflow = "hidden";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    afterEnter: function (el) {
      el.style.height = "auto";
      el.style.overflow = "initial";
    },
    beforeLeave: function (el) {
      el.style.overflow = "hidden";
      el.style.height = el.scrollHeight + "px";
      el.scrollHeight;
    },
    leave: function (el) {
      el.style.height = "0";
    },
    afterLeave: function (el) {
      el.style.height = "auto";
      el.style.overflow = "initial";
    },
  },
};
</script>
<style scoped>
.slideToggleAnimation {
  transition: 0.3s all;
}
</style>
