<template>
  <div class="column justify-center q-ma-xl q-gutter-y-md">
    <BaseInput
      v-model="name"
      label="Name"
      placeholderValue="Name"
      inputId="userName"
    />
    <BaseInput
      v-model="email"
      label="Email"
      placeholderValue="Email"
      inputType="email"
      inputId="userEmail"
    />
    <BaseInput
      v-model="password"
      label="Password"
      placeholderValue="password"
      inputType="password"
    />
    <q-btn label="Add User" no-caps @click="addUser" color="primary" />
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
