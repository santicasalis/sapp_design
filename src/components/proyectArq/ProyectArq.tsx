import { component$ } from "@builder.io/qwik";

interface ItemProps {
  imgCard?: string;
  title?: string;
  description?: string;
  id?: number;
}

export const ProyectArq = component$<ItemProps>((props) => {
  return (
    <div
      class=" m-4 transition-transform hover:scale-105"
      style="width: 400px; height: 300px;"
      key={props.id}
    >
      <img
        width="1080"
        height="780"
        src={props.imgCard}
        alt="Descripción de la imagen"
        class="card-image h-50 w-50  object-cover"
      />
      <h3 class="card-title mt-2 text-lg font-bold">{props.title}</h3>
    </div>
  );
});
