import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the navigation link (e.g., Home, About).',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      description: 'The link destination (e.g., /about, /contact).',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Set the display order of menu items (smaller numbers appear first).',
    }),
    defineField({
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
