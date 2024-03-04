import { $, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { reset } from "@modular-forms/qwik";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import swal from "sweetalert";
import { email, type Input, minLength, object, string } from "valibot";

const LoginSchema = object({
  email: string([
    minLength(1, "Por favor ingrese un email."),
    email("Por favor ingrese un email correcto."),
  ]),
  name: string([minLength(1, "Por favor ingrese su nombre completo.")]),

  message: string([minLength(10, "Por favor ingrese su consulta.")]),
});

type LoginForm = Input<typeof LoginSchema>;

export const useFormLoader = routeLoader$<LoginForm>(() => ({
  email: "",
  name: "",
  message: "",
}));

export const useFormAction = formAction$<LoginForm>(() => {
  // Runs on server
}, valiForm$(LoginSchema));

export default component$(() => {
  const [loginForm, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(LoginSchema),
  });

  const handleSubmit = $((values: any) => {
    // Runs on client
    console.log(values);
    reset(loginForm);
    swal("Gracias", "Consulta enviada correctamente", "success");
  });

  return (
    <>
      <h2>Contactame</h2>
      <div class=" flex flex-col items-center justify-center">
        <Form
          onSubmit$={handleSubmit}
          class="border border-solid border-slate-700  p-8"
        >
          <Field name="name">
            {(field, props) => (
              <div>
                <input
                  class=" my-4 w-80 border border-solid border-gray-300 bg-slate-700 p-4  text-white "
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
                  class="my-4 w-80 border border-solid border-gray-300 bg-slate-700 p-4 text-white  "
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
                  class="h-55 my-4  w-80 border border-solid border-gray-300 bg-slate-700 p-4 text-white"
                  placeholder="Mensaje"
                />
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <div class="flex justify-center">
            <button
              type="submit"
              class=" mx-auto inline-block items-center rounded-lg border-2 border-gray-700 bg-slate-700 px-8  py-3 text-white transition  duration-300 ease-in-out hover:bg-slate-400"
            >
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </>
  );
});
