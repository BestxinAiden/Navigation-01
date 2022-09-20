<template>
  <svg
      :class="svgClass"
      aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: { // 这里就是svg文件的名称
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName () { // 利用计算属性拼接生成svg名称
      return `#icon-${this.iconClass}`;
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className;
      } else {
        return 'svg-icon';
      }
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
