import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="mx-auto  mt-4 w-full  p-2 text-black">
      <div>
        <img
          width="150"
          height="150"
          src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709144302/sap_tigbut.png"
          alt="Logo Sapp"
          class="mx-auto"
        />
      </div>
    </footer>
  );
});
