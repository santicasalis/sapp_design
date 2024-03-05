import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h2 class="font-madimi-one">Nosotros</h2>
      <div class="  mx-6 my-4 flex flex-col  items-center justify-center">
        <div class=" mx-6 my-6   font-bold text-slate-700">
          Descubre cómo en SAPP convertimos tu visión en realidad. Nuestra
          pasión por el diseño nos impulsa a crear espacios excepcionales,
          fusionando creatividad e innovación. Únete a la experiencia SAPP y
          transforma tus ambientes con un toque distintivo.
        </div>

        <div class="  mx-6  mb-4   font-bold text-slate-700">
          ¡Revitaliza tus espacios, refleja tu estilo, y haz del diseño una
          experiencia única!
        </div>
        <img
          width="640"
          height="360"
          src="https://media.istockphoto.com/id/1447581973/es/foto/vista-superior-trabajadores-de-la-construcci%C3%B3n-o-planificaci%C3%B3n-de-planos-en-la-casa-el-hogar-o.jpg?s=612x612&w=0&k=20&c=yhmZFqPsGGfkcf3-l3zLo7l1Ij-rB5dGLzHBxPE7158="
          alt=""
        />
      </div>{" "}
    </>
  );
});
