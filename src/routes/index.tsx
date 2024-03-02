import { component$ } from "@builder.io/qwik";
import { OurServices } from "~/components/our-services/OurServices";
import { ProyectsArq } from "~/components/proyectArq/ProyectsArq";
import { SectionImg } from "~/components/section-img/SectionImg";

export default component$(() => {
  return (
    <>
      <SectionImg />
      <OurServices />
      <ProyectsArq />
    </>
  );
});
