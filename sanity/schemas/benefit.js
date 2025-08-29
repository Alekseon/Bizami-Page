export default {
  // Computer Name
  name: 'benefit',
  // visible title
  title: 'Benefit',
  type: 'object',
  fields: [
    {
      name: 'brackets',
      title: 'Text in brackets',
      type: 'string',
    },
    {
      name: 'descriptionT',
      title: 'Description',
      type: 'localeText',
    },
    {
      name: 'imageIcon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
