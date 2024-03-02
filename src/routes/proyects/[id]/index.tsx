import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { projectos } from "../../../components/proyectArq/projectos";
interface ItemProps {
  imgCard?: string;
  title?: string;
  description?: string;
  id?: number;
  imgDetail?: string[];
}

export default component$<ItemProps>((props) => {
  const loc = useLocation();

  return (
    <div>
      <h1>{loc.params.id}</h1>
      <p>{loc.params.description}</p>
      <div class="flex flex-wrap">
        {props.imgDetail?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            class="m-2 h-32 w-32 object-cover"
          />
        ))}
      </div>
    </div>
  );
});
