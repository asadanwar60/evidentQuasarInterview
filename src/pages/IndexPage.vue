<template>
  <q-layout>
    <q-page-container>
      <div class="row justify-end q-mt-md q-mr-md">
        <q-btn
          class="float-right"
          label="Create User"
          color="primary"
          no-caps
          @click="$router.push({ name: 'add-user' })"
        />
      </div>
      <UserTable class="q-pa-md q-mt-lg" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import UserTable from "src/pages/UserTable.vue";
</script>
