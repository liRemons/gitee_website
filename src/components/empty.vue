<template>
  <div style="margin-top: 50px; color: #fff">
    <a-empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      :image-style="{
        height: '200px',
      }"
    >
      <template #description> 开发中...... </template>
      <a-button type="primary">
        <router-link to="/">回首页</router-link>
      </a-button>
    </a-empty>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>