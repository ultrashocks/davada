<template>
  <div class="accordion-row">
    <button
      @click="toggleAccordion()"
      class="accordion-title"
      :class="{ active: isOpen }"
    >
      <slot name="title" />
      <i class="icon"></i>
    </button>
    <div v-show="isOpen" class="accordion-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
