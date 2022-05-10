<template>
  <div class="tabs">
    <div class="tabs-list">
      <div class="tabs-scroll">
        <div class="tab-item" v-for="(tab, index) in tabList" :key="index">
          <input
            :id="`${_uid}${index}`"
            type="radio"
            :name="`${_uid}-tab`"
            :value="index + 1"
            :checked="index + 1 === value ? true : false"
            @input="$emit('input', Number($event.target.value))"
          />
          <label class="tab-label" :for="`${_uid}${index}`" v-text="tab" />
        </div>
      </div>
    </div>

    <template v-for="(tab, index) in tabList">
      <template v-if="mode === 'if'">
        <div
          class="tab-content"
          :key="index"
          v-if="index + 1 === value ? true : false"
        >
          <slot :name="`tabPanel-${index + 1}`" />
        </div>
      </template>
      <template v-else>
        <div
          class="tab-content"
          :key="index"
          v-show="index + 1 === value ? true : false"
        >
          <slot :name="`tabPanel-${index + 1}`" />
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      default: 1,
    },
    mode: {
      type: String,
      default: 'if',
    },
  },
};
</script>
