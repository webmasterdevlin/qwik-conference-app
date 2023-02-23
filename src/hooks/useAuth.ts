import { useSignal } from "@builder.io/qwik";
import type { User } from "~/routes/admin/user";

export default function useAuth() {
  const user = useSignal<User>({ employee: null });

  return {
    user,
  };
}
