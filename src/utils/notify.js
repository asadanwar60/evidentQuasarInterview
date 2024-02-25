import { Notify } from "quasar";

export function notify({
  success = true,
  message = "Successfully",
  position = "bottom-right",
  errors = [],
  timeout = 1000,
}) {
  if (!success) {
    console.warn(message);
  }

  const notifyMessages = message ?? errors?.[0]?.message;
  Notify.create({
    message: notifyMessages,
    position,
    type: success ? "positive" : "negative",
    timeout,
    actions: [{ icon: "close", color: "white" }],
  });
}
