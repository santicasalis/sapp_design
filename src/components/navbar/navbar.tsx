import { component$ } from "@builder.io/qwik";
import { MobileNav } from "./mobileNav";
import { Link, useLocation } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  const headerNavLinks = [
    { href: "/", title: "Inicio" },
    { href: "/aboutus/", title: "Nosotros" },
    { href: "/proyects/", title: "Proyectos" },
    { href: "/office/", title: "Remodelaciones" },
    { href: "/contact/", title: "Contacto" },
  ];
  const location = useLocation();
  console.log(location.url.pathname);

  return (
    <header
      class="
     mx-8 flex items-center justify-between py-2"
    >
      <div>
        <Link href="/" aria-label="Sapp">
          <div class="flex items-center justify-between">
            <div class="mr-3">
              <img
                width="150"
                height="150"
                src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1709144302/sap_tigbut.png"
                alt="Logo Sapp"
              />
            </div>
          </div>
        </Link>
      </div>
      <div class="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              class={`rounded-md p-2 font-medium text-black  transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white sm:block ${
                location.url.pathname == link.href
                  ? "bg-slate-700 text-white"
                  : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        <MobileNav />
      </div>
    </header>
  );
});
