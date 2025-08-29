export default {
  type: 'object',
  name: 'advantagesListItem',
  title: 'List Item',
  fields: [
    { 
      type: 'localeString', name: 'listItemTitleT', title: 'List item title' 
    },
    {
      type: 'localeText', name: 'listItemDescT', title: 'List item description',
    },
    {
      type: 'localeText', name: 'listItemDescT2', title: 'Test',
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
