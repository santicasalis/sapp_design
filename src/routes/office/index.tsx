import { component$ } from "@builder.io/qwik";
import { galleryIdeas } from "./officePhoto";

export default component$(() => {
  return (
    <div class="mx-4 my-2 flex flex-col text-center">
      <h2 class="mb-4 text-3xl font-bold">Remodelación Estudio jurídico</h2>
      <p class="mb-8 text-gray-600">
        En esta increíble transformación, buscamos lograr un estilo moderno que
        combine lo serio y lo acogedor. ¡Usamos una paleta de colores que se
        complementan a la perfección y le dan ese toque especial que tanto
        buscábamos! El estudio ahora cuenta con tres oficinas, una sala de
        reuniones y una recepción. Si estás buscando remodelar tus espacios no
        dudes en contactarnos.
      </p>

      <div class="mx-2 flex flex-wrap">
        {galleryIdeas.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="Imagen oficinas"
            class=" my-1 h-auto w-full    object-cover sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3"
            width="600"
            height="562"
          />
        ))}
      </div>
    </div>
  );
});
