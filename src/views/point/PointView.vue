<template>
  <div class="wrap">
    <div class="point">
      <div class="content-wrap bottom-nav">
        <h3
          style="
            position: absolute;
            width: 100%;
            text-align: center;
            left: 0;
            top: calc(50% - 57px);
          "
        >
          포인트
        </h3>
      </div>
      <Navigation />
    </div>
  </div>
</template>

<script>
import { metaUrl } from '@/utils/meta';
import Navigation from '@/components/common/Navigation.vue';
export default {
  components: { Navigation },
  metaInfo: metaUrl['/notice'],
};
</script>

<style></style>
