import { component$ } from "@builder.io/qwik";
import { OurServices } from "~/components/our-services/OurServices";
import { SectionImg } from "~/components/section-img/SectionImg";

export default component$(() => {
  return (
    <>
      <SectionImg />
      <OurServices />
    </>
  );
});
