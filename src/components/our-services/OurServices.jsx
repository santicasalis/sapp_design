import { component$ } from "@builder.io/qwik";

export const OurServices = component$(() => {
  return (
    <div class=" mx-6 flex w-full flex-col justify-between  sm:mx-1">
      <div class="mx-auto mb-2 mt-20 text-black">
        <h3>Nuestros Servicios</h3>
      </div>
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
        <div class=" mx-2 my-2 h-full  w-[350px] bg-cover bg-center p-5 text-xl text-black sm:mx-0">
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
        <div class="flex w-full justify-around">
          <a
            class="inline-block rounded-lg border-2 border-gray-700 bg-gray-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-gray-700"
            href="/homeideas"
          >
            Ideas para tu hogar
          </a>
          <a
            class="inline-block rounded-lg border-2 border-gray-700 bg-gray-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-gray-700"
            href="/office"
          >
            Reformas de oficinas
          </a>
          <a
            class="inline-block rounded-lg border-2 border-gray-700 bg-gray-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-gray-700"
            href=""
          >
            Ideas Hogares
          </a>
        </div>
      </div>
    </div>
  );
});
