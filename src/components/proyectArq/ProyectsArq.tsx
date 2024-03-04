import { component$ } from "@builder.io/qwik";
import { projectos } from "./projectos";
import { ProyectArq } from "./ProyectArq";
import { Link } from "@builder.io/qwik-city";

export const ProyectsArq = component$(() => {
  return (
    <div>
      <h2 class="my-4 ">Proyectos</h2>
      <div class="flex flex-wrap justify-center">
        {projectos.map((item) => (
          <Link href={`/proyects/${item.id}`} key={item.id}>
            <ProyectArq
              key={item.id}
              imgCard={item.imgCard}
              title={item.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
});
