export default {
  name: "category",
  title: "Категория",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
    },
    {
      name: "slug",
      title: "ЧПУ",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Описание",
      type: "text",
    },
    {
      name: "parents",
      title: "Родительские категории",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "image",
      title: "Фото категории",
      type: "image",
    },
  ],
};
