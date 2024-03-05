import { component$ } from "@builder.io/qwik";

export const SectionImg = component$(() => {
  return (
    <>
      <div
        class="h-80vh flex w-full flex-col justify-between bg-cover bg-center "
        style="background-image: url('https://res.cloudinary.com/dnkfzdayh/image/upload/v1709131036/COCINA_1_wrisas.jpg');  height: 80vh;"
      >
        <div class=" mx-auto mt-20  text-white">
          <h3 class="font-madimi-one text-xxl">Renovamos tus espacios!</h3>
        </div>

        <div class="bg-blur-md w-90 mx-auto hidden bg-gray-900 bg-opacity-50 bg-cover bg-center p-8 text-xl font-bold text-white sm:block">
          En SAPP, la pasión por el diseño nos impulsa a superar los límites en
          cada proyecto. Nuestro compromiso es ofrecer ideas creativas e
          innovadoras que conviertan tus espacios en algo realmente excepcional.
          Unite a la experiencia SAPP y dale un nuevo y emocionante giro a tus
          ambientes. ¡Descubrí cómo podemos revitalizar tus espacios y reflejar
          tu estilo personal con un toque de distinción!
        </div>
      </div>

      <div class="bg-blur-md w-90 mx-auto bg-cover bg-center p-8 text-xl font-bold text-slate-700 sm:hidden">
        En SAPP, la pasión por el diseño nos impulsa a superar los límites en
        cada proyecto. Nuestro compromiso es ofrecer ideas creativas e
        innovadoras que conviertan tus espacios en algo realmente excepcional.
        Unite a la experiencia SAPP y dale un nuevo y emocionante giro a tus
        ambientes. ¡Descubrí cómo podemos revitalizar tus espacios y reflejar tu
        estilo personal con un toque de distinción!
      </div>
    </>
  );
});
