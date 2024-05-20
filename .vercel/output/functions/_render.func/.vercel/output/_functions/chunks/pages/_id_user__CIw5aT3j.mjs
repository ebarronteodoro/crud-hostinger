/* empty css                              */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, g as createAstro, h as renderComponent, m as maybeRenderHead } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/barro/OneDrive/Escritorio/Hostinger-test/astro/crud-hostinger - copia/src/layouts/Layout.astro", void 0);

function Loading() {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full max-h-full absolute flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { className: "size-44 md:size-60", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className: "text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
      strokeWidth: "1",
      viewBox: "0 0 100 101",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }
        )
      ]
    }
  ) }) });
}

function EditUser({ userId }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function fetchUser() {
    try {
      const response = await fetch(
        `https://api-mysql-test.vercel.app/api/data/${userId}`
      );
      const userData = await response.json();
      setName(userData.name);
      setLastName(userData.last_name);
      setAge(userData.age);
    } catch (error2) {
      setError("Error fetching user data: " + error2.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUser();
  }, [userId]);
  function handleInput(event) {
    const target = event.target;
    if (target.id === "name") {
      setName(target.value);
    } else if (target.id === "lastName") {
      setLastName(target.value);
    } else if (target.id === "age") {
      setAge(parseInt(target.value, 10));
    }
  }
  async function handleSave(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api-mysql-test.vercel.app/api/data/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, last_name: lastName, age })
        }
      );
      if (response.ok) {
        alert("User updated successfully");
        window.location.href = "/";
      } else {
        alert("Failed to update user: " + response.statusText);
      }
    } catch (error2) {
      alert("Failed to update user: " + error2.message);
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsx(Loading, {});
  }
  if (error) {
    return /* @__PURE__ */ jsx("p", { children: error });
  }
  return /* @__PURE__ */ jsx("section", { className: "w-9/12 mx-auto mt-10", children: /* @__PURE__ */ jsxs("form", { className: "max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-5 group", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "userId",
            value: userId,
            readOnly: true,
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "userId",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "User ID"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-5 group", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "name",
            value: name,
            onChange: handleInput,
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-5 group", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "lastName",
            value: lastName,
            onChange: handleInput,
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "lastName",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Last Name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-5 group", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            id: "age",
            value: age,
            onChange: handleInput,
            className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
            placeholder: " ",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "age",
            className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
            children: "Age"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        onClick: handleSave,
        className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        children: "Save"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => history.back(),
        className: "ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
        children: "Cancel"
      }
    )
  ] }) });
}

const $$Astro = createAstro();
const $$idUser = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idUser;
  const userId = Astro2.params.id_user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Editar Usuario" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "EditUser", EditUser, { "userId": userId, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/barro/OneDrive/Escritorio/Hostinger-test/astro/crud-hostinger - copia/src/components/EditUser.jsx", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/barro/OneDrive/Escritorio/Hostinger-test/astro/crud-hostinger - copia/src/pages/[id_user].astro", void 0);

const $$file = "C:/Users/barro/OneDrive/Escritorio/Hostinger-test/astro/crud-hostinger - copia/src/pages/[id_user].astro";
const $$url = "/[id_user]";

const _id_user_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$idUser,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Loading as L, _id_user_ as _ };
