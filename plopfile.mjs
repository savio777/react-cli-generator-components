// eslint-disable-next-line import/no-anonymous-default-export
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description: "generate component",
    prompts: [
      { type: "input", name: "name", message: "Name your component: " },
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/index.tsx",
        templateFile: "./src/templates/component.template.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{titleCase name}}/styles.ts",
        templateFile: "./src/templates/stylesComponent.template.hbs",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "generate page component",
    prompts: [
      { type: "input", name: "name", message: "Name your component: " },
    ],
    actions: [
      {
        type: "add",
        path: "./src/pages/{{titleCase name}}/index.tsx",
        templateFile: "./src/templates/component.template.hbs",
      },
      {
        type: "add",
        path: "./src/pages/{{titleCase name}}/styles.ts",
        templateFile: "./src/templates/stylesPage.template.hbs",
      },
    ],
  });

  plop.setHelper(
    "titleCase",
    (
      /** @type string */
      str
    ) =>
      str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.replace(word[0], word[0].toUpperCase());
        })
        .join("")
  );
}
