export default {
  name: "address",
  title: "Адрес",
  type: "object",
  fields: [
    {
      name: "street",
      type: "string",
      title: "Название улицы",
      validation: (Rule) =>
        Rule.required().error("Поле обязательно для заполнения."),
    },
    {
      name: "streetNo",
      type: "string",
      title: "Номер дома",
      validation: (Rule) =>
        Rule.required().error("Поле обязательно для заполнения."),
    },
    {
      name: "city",
      type: "string",
      title: "Город",
      validation: (Rule) =>
        Rule.required().error("Поле обязательно для заполнения."),
    },
    { name: "location", type: "geopoint", title: "Координаты" },
  ],
  preview: {
    select: {
      street: "street",
      streetNo: "streetNo",
      city: "city",
      location: "location",
    },
    prepare({ street, streetNo, city, location }) {
      return {
        title: `${street} ${streetNo}`,
        subtitle: `Город: ${city}, Координаты: ${location.lat}, ${location.lng}`,
      };
    },
  },
};
