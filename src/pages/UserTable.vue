<template>
  <BaseTable
    row-key="name"
    :loading="userStore.loading"
    :rows="userStore.users"
    :columns="columns"
    :pagination="initialPagination"
    search
  />
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "src/stores/user-store";
import BaseTable from "src/components/BaseTable.vue";

const userStore = useUserStore();
const initialPagination = ref({
  rowsPerPage: 7,
});

async function fetchUsers() {
  await userStore.fetchUsers();
}

fetchUsers();

const columns = [
  {
    name: "id",
    required: true,
    label: "Sr No",
    align: "left",
    field: "id",
    sortable: true,
  },

  {
    name: "name",
    align: "left",
    label: "Name",
    field: "name",
    sortable: true,
  },
  {
    name: "username",
    align: "left",
    label: "User Name",
    field: "username",
    sortable: true,
  },
  {
    name: "email",
    align: "left",
    label: "Email",
    field: "email",
    sortable: true,
  },
  {
    name: "phone",
    align: "left",
    label: "Phone",
    field: "phone",
    sortable: true,
  },
  {
    name: "address",
    align: "left",
    label: "Address",
    field: (row) =>
      `${row.address.suite}, ${row.address.street},  ${row.address.city}, ${row.address.zipcode}`,
    sortable: true,
  },
  {
    name: "company",
    align: "left",
    label: "Company",
    field: (row) => `${row.company.name}`,
    sortable: true,
  },
  {
    name: "website",
    align: "left",
    label: "Website",
    field: "website",
    sortable: true,
  },
];
</script>
