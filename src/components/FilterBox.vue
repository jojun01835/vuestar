<template>
  <div @click="fire" class="filter-item" :class="filter" :style="`background-image:url(${url})`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FilterBox",

  props: {
    url: String,
    filter: Object,
  },
  methods: {
    fire() {
      this.emitter.emit("filter2", this.filter);
    },
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
