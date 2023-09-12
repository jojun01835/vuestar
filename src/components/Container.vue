<template lang="">
  <div>
    <Post :data="data" />
  </div>
</template>
<script>
import Post from "./Post.vue";
export default {
  name: "ContainerView",

  props: {
    data: Object,
  },
  components: {
    Post,
  },
};
</script>
<style lang=""></style>
