import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const OurServices = component$(() => {
  return (
    <div>
      <div class="flex w-full flex-col justify-between ">
        <h2 class="text-lg font-semibold lg:text-2xl">Nuestros Servicios</h2>

        <div class="mx-4 my-1 flex flex-wrap  justify-center sm:mx-0">
          <div class="mx-2 my-2 h-full w-[350px] sm:mx-0 ">
            {" "}
            <img
              width="1200"
              height="960"
              src="https://res.cloudinary.com/dnkfzdayh/image/upload/v1709130954/ba%C3%B1os_1_vftrm1.jpg "
              alt=""
            />
          </div>
          <div class=" mx-2 my-2 h-full  w-[350px] bg-cover bg-center p-5 text-xl font-bold text-slate-700 sm:mx-0">
            En SAPP nos dedicamos a la remodelación de exteriores e interiores.
            Cada proyecto cuenta con un desarrollo previo que incluye
            anteproyecto, proyecto y dirección. Todos nuestros proyectos son
            entregados en una carpeta con planos e imágenes de fotos realistas.
          </div>
          <div class="mx-2 my-2 h-full w-[350px] sm:mx-0">
            {" "}
            <img
              width="600"
              height="562"
              src="https://res.cloudinary.com/dnkfzdayh/image/upload/v1709130953/cocinas_3_hgohng.jpg"
              alt=""
            />
          </div>
          <div class="mb-2 flex w-full flex-col  items-center sm:flex-row  sm:justify-around">
            <Link
              class=" mb-4  flex max-w-xs flex-1 items-center  justify-center rounded-lg border-2 border-gray-700 bg-slate-700 px-4 py-4 font-extrabold text-white transition duration-300 ease-in-out hover:bg-slate-400 "
              href="/homeideas"
            >
              Ideas para tu hogar
            </Link>
            <Link
              class="mb-2 flex max-w-xs flex-1 items-center justify-center rounded-lg border-2 border-gray-700 bg-slate-700 px-4 py-4 font-extrabold text-white transition duration-300 ease-in-out hover:bg-slate-400 "
              href="/office"
            >
              Reformas de oficinas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
