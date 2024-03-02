import { component$ } from "@builder.io/qwik";

import { ProyectsArq } from "~/components/proyectArq/ProyectsArq";

export default component$(() => {
  return (
    <div class="mx-auto flex flex-col items-center justify-center">
      <ProyectsArq />
    </div>
  );
});
