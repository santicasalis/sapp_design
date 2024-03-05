import { component$, useSignal, $, useTask$ } from "@builder.io/qwik";
import { galleryIdeas } from "./homeIdeasPhoto";

export default component$(() => {
  const filteredImages = useSignal(galleryIdeas);

  const filterImagesByCategory = $((category: string) => {
    const filtered =
      category === "Todos"
        ? galleryIdeas
        : galleryIdeas.filter((image) => image.category === category);
    filteredImages.value = filtered;
  });

  useTask$(({ track }) => {
    track(() => filteredImages.value);
  });

  return (
    <div class="mx-auto flex flex-col text-center">
      <h2 class="font-madimi-one mb-4 text-3xl font-bold">
        Ideas para el Hogar
      </h2>
      <p class="w-50  mx-2 my-8 font-bold text-slate-700">
        Descubre inspiradoras ideas para mejorar tu hogar y transformar tus
        espacios. Explora nuestra galería de fotos para obtener más inspiración.
      </p>
      <div class="mb-4">
        {["Todos", "Baños", "Cocinas", "Livings", "Habitaciones"].map(
          (category) => (
            <button
              key={category}
              class={`mr-2  rounded-lg border-2 px-5 py-3 text-white transition  duration-300 ease-in-out  ${
                (filteredImages.value.length === 0 && category === "Todos") ||
                (filteredImages.value.length > 0 &&
                  category === filteredImages.value[0].category)
                  ? "bg-slate-400"
                  : "bg-slate-700"
              } hover:bg-slate-400`}
              onClick$={() => filterImagesByCategory(category)}
            >
              {category}
            </button>
          ),
        )}
      </div>

      <div class="mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filteredImages.value.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.category}
            class="m-1 h-auto object-cover sm:h-[300px] md:h-[500px] lg:h-[500px]"
            width="600"
            height="562"
          />
        ))}
      </div>
    </div>
  );
});
