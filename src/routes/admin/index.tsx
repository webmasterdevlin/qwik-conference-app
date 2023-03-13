import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import useAuth from "~/hooks/useAuth";

export default component$(() => {
  const nav = useNavigate();
  const { user } = useAuth();

  useVisibleTask$(() => {
    if (!user.value.employee) {
      nav("/auth");
    }
  });

  return (
    <div>
      {!user.value.employee ? <h1>Authenticating</h1> : <h1>Authenticated</h1>}
    </div>
  );
});
