import { component$, useBrowserVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import useAuth from "~/hooks/useAuth";

export default component$(() => {
  const nav = useNavigate();

  // custom hook to get user
  const { user } = useAuth();

  // useBrowserVisibleTask$ is a hook that runs when the browser is visible
  // while useTask$ runs in the server
  useBrowserVisibleTask$(() => {
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
