<template>
  <q-table
    v-bind="$attrs"
    flat
    bordered
    :loading="loading"
    :rows="rows"
    :columns="columns"
    :row-key="rowKey"
    class="base-table"
    :filter="filter"
    :no-data-label="noDataLabel"
    :pagination="pagination"
  >
    <template v-if="loading" v-slot:loading>
      <q-inner-loading
        size="50px"
        label="Please wait..."
        showing
        color="primary"
      />
    </template>
    <template v-if="search" v-slot:top-left>
      <q-input
        outlined
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  loading: { type: Boolean, default: false },
  rows: [Array, Object],
  columns: [Array, Object],
  pagination: Object,
  rowKey: String,
  search: { type: Boolean, default: false },
  noDataLabel: { type: String, default: "No Data Found" },
});

const filter = ref("");
</script>
