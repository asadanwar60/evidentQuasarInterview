<template>
  <div class="column justify-center q-ma-xl q-gutter-y-md">
    <BaseInput
      v-model="name"
      label="Name"
      data-cy="name"
      placeholderValue="Name"
      inputId="userName"
    />
    <BaseInput
      v-model="email"
      label="Email"
      data-cy="email"
      placeholderValue="Email"
      inputType="email"
      inputId="userEmail"
    />
    <BaseInput
      data-cy="password"
      v-model="password"
      label="Password"
      placeholderValue="password"
      inputType="password"
    />
    <q-btn
      label="Add User"
      data-cy="add"
      no-caps
      @click="addUser"
      color="primary"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { notify } from "src/utils/notify";
import BaseInput from "src/components/BaseInput.vue";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

function addUser() {
  router.push({ name: "index" });
  notify({ success: true, message: "User Created Successfully" });
}
</script>

<style lang="scss" scoped></style>
