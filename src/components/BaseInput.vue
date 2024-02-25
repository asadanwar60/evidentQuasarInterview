<template>
  <div class="text-caption" v-if="label" :for="inputId">{{ label }}</div>
  <q-input
    v-bind="$attrs"
    outlined
    :id="inputId"
    :type="inputType"
    :placeholder="placeholderValue"
    :class="inputClass"
    :style="inputStyle"
  />
  <div v-if="errorMessage" class="text-red">{{ errorMessage }}</div>
</template>

<script setup>
defineProps({
  label: String,
  inputType: { type: String, default: "text" },
  placeholderValue: String,
  inputId: String,
  inputClass: [String, Object, Array],
  inputStyle: [String, Object, Array],
  errorMessage: [Object, String, Array],
});
</script>
