/* empty css                              */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { L as Loading, $ as $$Layout } from './_id_user__CIw5aT3j.mjs';

function NewUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    nombres: "",
    apellidos: "",
    edad: ""
  });
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: formValues.nombres,
      last_name: formValues.apellidos,
      age: formValues.edad
    };
    try {
      const response = await fetch("https://api-mysql-test.vercel.app/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      alert("Usuario creado con éxito:", data);
      window.location.href = "/";
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "py-3", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleModal,
        className: "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        type: "button",
        children: "Crear Usuario"
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx(
      "div",
      {
        id: "crud-modal",
        tabIndex: "-1",
        "aria-hidden": "true",
        className: "fixed inset-0 flex items-center justify-center bg-black/65 z-50",
        children: /* @__PURE__ */ jsx("div", { className: "relative p-4 w-full max-w-md max-h-full", children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white rounded-lg shadow dark:bg-gray-700", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Crear Nuevo Usuario" }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",
                onClick: toggleModal,
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "w-3 h-3",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 14 14",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Cerrar modal" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("form", { className: "p-4 md:p-5", onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-4 mb-4 grid-cols-1", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "nombres",
                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                    children: "Nombres"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "nombres",
                    id: "nombres",
                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                    placeholder: "Ingresa tus nombres",
                    required: true,
                    value: formValues.nombres,
                    onChange: handleChange
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "apellidos",
                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                    children: "Apellidos"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "apellidos",
                    id: "apellidos",
                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                    placeholder: "Ingresa tus apellidos",
                    required: true,
                    value: formValues.apellidos,
                    onChange: handleChange
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "edad",
                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                    children: "Edad"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "number",
                    name: "edad",
                    id: "edad",
                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                    placeholder: "Ingresa tu edad",
                    required: true,
                    value: formValues.edad,
                    onChange: handleChange
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                className: "text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "me-1 -ms-1 w-5 h-5",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  "Crear Usuario"
                ]
              }
            )
          ] })
        ] }) })
      }
    )
  ] });
}

const Crud = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-mysql-test.vercel.app/api/data"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://api-mysql-test.vercel.app/api/data/${userId}`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }
      setData(data.filter((item) => item.id_user !== userId));
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx(Loading, {});
  }
  return /* @__PURE__ */ jsx("section", { className: "w-9/12 mx-auto pt-10", children: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NewUser, {}),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "ID" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Nombres" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Apellidos" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: "Edad" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: /* @__PURE__ */ jsx("span", { className: "flex justify-end", children: "Acciones" }) })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: data.map((item) => /* @__PURE__ */ jsxs(
        "tr",
        {
          className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
          children: [
            /* @__PURE__ */ jsx(
              "th",
              {
                scope: "row",
                className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                children: item.id_user
              }
            ),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: item.name }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: item.last_name }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: item.age }),
            /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 text-right flex gap-4 justify-end", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/${item.id_user}`,
                  className: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                  children: "Editar"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => deleteUser(item.id_user),
                  className: "font-medium text-red-600 dark:text-red-500 hover:underline",
                  children: "Eliminar"
                }
              )
            ] })
          ]
        },
        item.id_user
      )) })
    ] }) })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crud de Usuarios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Crud", Crud, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/barro/OneDrive/Escritorio/Hostinger-test/astro/crud-hostinger - copia/src/components/Crud", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/barro/OneDrive/Escritorio/Hostinger-test/astro/crud-hostinger - copia/src/pages/index.astro", void 0);

const $$file = "C:/Users/barro/OneDrive/Escritorio/Hostinger-test/astro/crud-hostinger - copia/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
