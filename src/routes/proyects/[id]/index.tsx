import { component$ } from "@builder.io/qwik";

interface ItemProps {
  imgCard?: string;
  title?: string;
  description?: string;
  id?: number;
  imgDetail?: string[];
}

export default component$<ItemProps>((props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
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
