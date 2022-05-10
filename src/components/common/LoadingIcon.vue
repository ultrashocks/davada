<template>
  <div class="logo-ani">
    <svg :width="width" :height="height" viewBox="0 0 75 75">
      <path
        class="path-ani"
        fill="none"
        stroke="#1942F4"
        stroke-width="8"
        d="M24.89,68H20A16,16,0,0,1,4,52H4A16,16,0,0,1,20,36H52A16,16,0,0,0,68,20h0A16,16,0,0,0,52,4h0A16,16,0,0,0,36,20V57.09"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 60,
    },
    height: {
      type: Number,
      default: 60,
    },
  },
};
</script>

<style></style>
