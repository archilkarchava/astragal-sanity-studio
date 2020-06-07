import { IoIosBed } from "react-icons/io";

export default {
  name: "product",
  title: "Товар",
  type: "document",
  icon: IoIosBed,
  // initialValue: () => {
  //   return { slug: { _type: "slug", current: "yo" } };
  // },
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .error("Поле обязательно для заполнения.")
          .min(2)
          .error("Название товара должно состоять минимум из двух символов."),
        Rule.max(40).warning("Краткие названия товаров обычно лучше."),
        Rule.max(54).error("Слишком длинное название товара."),
      ],
    },
    {
      name: "slug",
      title: "ЧПУ",
      description:
        'Нужен для отображения товара в аддресной строке браузера на сайте. При нажатии на "Generate" генерируется из названия товара.',
      type: "slug",
      // hidden: true,
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error("Поле обязательно для заполнения."),
    },
    {
      title: "Цена (₽)",
      name: "price",
      type: "number",
      validation: (Rule) =>
        Rule.required().error("Поле обязательно для заполнения."),
    },
    {
      title: "Старая цена (₽)",
      description:
        "Цена товара до скидки. Заполнять только если товар продаётся со скидкой.",
      name: "oldPrice",
      type: "number",
      validation: (Rule) =>
        Rule.min(Rule.valueOfField("price")).error(
          "Цена до скидки должна быть больше цены со скидкой."
        ),
    },
    {
      name: "images",
      title: "Фото товара",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) =>
        Rule.min(1).error("Добавьте хотя бы одно фото товара."),
    },
    {
      title: "Размеры товара (см)",
      name: "sizes",
      type: "productSizes",
    },
    // {
    //   title: "Цвет",
    //   description: "Цвет товара на фото, заполнять не обязательно.",
    //   name: "color",
    //   type: "string",
    // },
    {
      name: "materials",
      title: "Материалы",
      description: "Материалы из которых изготовлен товар.",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "material" },
        },
      ],
    },
    // {
    //   title: "Тэги",
    //   name: "tags",
    //   type: "array",
    //   of: [
    //     {
    //       type: "string",
    //     },
    //   ],
    //   options: {
    //     layout: "tags",
    //   },
    //   validation: (Rule) => Rule.unique(),
    // },
    // {
    //   name: "blurb",
    //   title: "Краткое описание",
    //   type: "string",
    // },
    {
      name: "categories",
      title: "Категории",
      description: "Категории к которым принадлежит товар. Например «стол»",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "body",
      title: "Описание",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      price: "price",
      media: "images",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle:
          selection.price &&
          new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0,
          }).format(selection.price),
        ...(selection.media &&
          selection.media.length && { media: selection.media[0] }),
      };
    },
  },
};
