import { MdSettings } from "react-icons/md"

export default {
  name: "siteSettings",
  title: "Настройки сайта",
  type: "document",
  icon: MdSettings,
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Поле обязательно для заполениня."),
    },
    {
      name: "description",
      title: "Описание",
      type: "text",
    },
    {
      name: "keywords",
      title: "Ключевые слова",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "emails",
      title: "Адреса электронной почты",
      type: "string",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => [
        Rule.unique().error("Такой email уже добавлен."),
        Rule.min(1).error("Добавьте хотя бы один email."),
      ],
    },
    {
      name: "phoneNumbers",
      title: "Номера телефонов",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => [
        Rule.unique().error("Такой номер телефона уже добавлен."),
        Rule.min(1).error("Добавьте хотя бы один номер телефона."),
      ],
    },
    {
      name: "addresses",
      title: "Адреса",
      type: "array",
      of: [{ type: "address" }],
      validation: (Rule) => [
        Rule.unique().error("Такой адрес уже добавлен."),
        Rule.min(1).error("Добавьте хотя бы один адрес магазина."),
      ],
    },
  ],
}
