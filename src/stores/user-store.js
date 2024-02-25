import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "src/boot/axios";
import { notify } from "src/utils/notify";

export const useUserStore = defineStore("UserStore", () => {
  const users = ref([]);
  const loading = ref(false);

  async function fetchUsers() {
    try {
      loading.value = true;
      const response = await api.get("users");
      users.value = response.data;
      loading.value = false;
      notify({ success: true, message: "Users Fetched Successfully" });
    } catch (err) {
      loading.value = false;
      notify({ success: false, message: err.message });
    }
  }

  return {
    users,
    loading,
    fetchUsers,
  };
});
