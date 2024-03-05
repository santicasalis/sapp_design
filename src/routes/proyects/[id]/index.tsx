import { component$, useSignal, $, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { projectos } from "../../../components/proyectArq/projectos";

export default component$(() => {
  const loc = useLocation();
  const idFIlter = parseInt(loc.params.id);
  const proyectFiltered = useSignal(projectos);
  const filterImagesByCategory = $((id: number) => {
    const filtered = projectos.filter(
      (proyect: { id: number }) => proyect.id == id,
    );
    proyectFiltered.value = filtered;
    console.log("FAVORITE (isomorphic)", proyectFiltered.value);
    return filtered;
  });

  const filteredById = filterImagesByCategory(idFIlter);
  useTask$(({ track }) => {
    track(() => proyectFiltered.value);
  });
  console.log(filteredById);

  const images = proyectFiltered.value[0].imgDetail;
  return (
    <div class="mx-auto my-4 flex max-w-4xl flex-col items-center p-4">
      <h1 class=" mb-6 text-3xl font-bold text-slate-700">
        {" "}
        {proyectFiltered.value[0].title}
      </h1>
      <img
        width="1080"
        height="780"
        src={proyectFiltered.value[0].imgCard}
        alt={proyectFiltered.value[0].title}
        class="mb-4  w-full rounded-md object-cover"
      />

      <div class=" my-8 text-xl font-bold text-gray-700">
        {" "}
        {proyectFiltered.value[0].description}
      </div>

      <div class="grid grid-cols-1  gap-4  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Imagen ${index + 1}`}
            class="h-auto w-full"
            width="1080"
            height="780"
          />
        ))}
      </div>
    </div>
  );
});
