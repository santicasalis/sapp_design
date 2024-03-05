import { component$ } from "@builder.io/qwik";
import { galleryIdeas } from "./officePhoto";

export default component$(() => {
  return (
    <div class=" my-2 flex flex-col text-center">
      <h2 class="font-madimi-one mb-4 text-lg lg:text-2xl">
        Remodelación Estudio jurídico
      </h2>
      <p class="w-50 mx-6  my-8 mb-8 font-bold text-slate-700">
        En esta increíble transformación, buscamos lograr un estilo moderno que
        combine lo serio y lo acogedor. ¡Usamos una paleta de colores que se
        complementan a la perfección y le dan ese toque especial que tanto
        buscábamos! El estudio ahora cuenta con tres oficinas, una sala de
        reuniones y una recepción. Si estás buscando remodelar tus espacios no
        dudes en contactarnos.
      </p>

      <div class="mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {galleryIdeas.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="Imagen oficinas"
            class=" my-1 h-auto w-full object-cover "
            width="600"
            height="562"
          />
        ))}
      </div>
    </div>
  );
});
