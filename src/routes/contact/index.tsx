import { $, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { reset } from "@modular-forms/qwik";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";

import { email, minLength, object, string } from "valibot";

const LoginSchema = object({
  email: string([
    minLength(1, "Por favor ingrese un email."),
    email("Por favor ingrese un email correcto."),
  ]),
  name: string([minLength(1, "Por favor ingrese su nombre completo.")]),

  message: string([minLength(10, "Por favor ingrese su consulta.")]),
});

export const useFormLoader = routeLoader$(() => ({
  email: "",
  name: "",
  message: "",
}));

export const useFormAction = formAction$(() => {
  // Runs on server
}, valiForm$(LoginSchema));

export default component$(() => {
  const [loginForm, { Form, Field }] = useForm({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(LoginSchema),
  });

  const handleSubmit = $(() => {
    // Runs on client
    //utilizar values
    reset(loginForm);
  });

  return (
    <>
      <h2 class="text-lg font-semibold lg:text-2xl">Dejame tu consulta</h2>

      <div class="mt-10 flex flex-col justify-center sm:flex-row">
        <Form
          onSubmit$={handleSubmit}
          class="my-2 flex flex-1 flex-col  items-center "
        >
          <Field name="name">
            {(field, props) => (
              <div>
                <input
                  class=" font-madimi-one my-4 w-80 border border-solid border-gray-300 bg-slate-700  p-4  text-white"
                  {...props}
                  type="text"
                  value={field.value}
                  placeholder="Nombre completo"
                />
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <Field name="email">
            {(field, props) => (
              <div>
                <input
                  {...props}
                  type="email"
                  value={field.value}
                  class="font-madimi-one my-4 w-80 border border-solid border-gray-300 bg-slate-700 p-4  text-white"
                  placeholder="Correo electrónico"
                />
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <Field name="message">
            {(field, props) => (
              <div>
                <textarea
                  {...props}
                  value={field.value}
                  class="h-55 font-madimi-one  my-4 w-80 border border-solid border-gray-300 bg-slate-700 p-4 text-white"
                  placeholder="Mensaje"
                />
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <div class="flex justify-center">
            <button
              type="submit"
              class="font-madimi-one mx-auto inline-block items-center rounded-lg border-2 border-gray-700 bg-slate-700 px-8  py-3 text-white transition  duration-300 ease-in-out hover:bg-slate-400"
            >
              Enviar
            </button>
          </div>
        </Form>
        <div class="   flex-1 ">
          <img
            width="600"
            height="562"
            class=" my-1 h-80 object-cover "
            src="https://res.cloudinary.com/dnkfzdayh/image/upload/v1709244560/IMG_8950_nqrwbe.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
});
