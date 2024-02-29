import { component$ } from "@builder.io/qwik";
import { galleryIdeas } from "./homeIdeasPhoto";

export default component$(() => {
  return (
    <div class="mx-auto flex flex-col text-center">
      <h2 class="mb-4 text-3xl font-bold">Ideas para el Hogar</h2>
      <p class="mb-8 text-gray-600">
        Descubre inspiradoras ideas para mejorar tu hogar y transformar tus
        espacios. Explora nuestra galería de fotos para obtener más inspiración.
      </p>
      <div>
        <button class="mr-2 rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400 ">
          baños
        </button>
        <button class="mr-2 rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400 ">
          cocinas
        </button>
        <button class="mr-2 rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400 ">
          livings
        </button>
        <button class="mr-2 rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400 ">
          Habitaciones{" "}
        </button>
      </div>
      <div class="mx-2 flex flex-wrap">
        {galleryIdeas.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.category}
            class=" my-1 h-auto w-full    object-cover sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3"
            width="600"
            height="562"
          />
        ))}
      </div>
    </div>
  );
});
