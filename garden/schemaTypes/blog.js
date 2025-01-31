import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
      initialValue: true,
      description: 'Mark if the blog is published',
      
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'The category of the blog (e.g., Food & Drink)',
      hidden: ({ document }) => !document?.isPublished, 
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the blog post',
      hidden: ({ document }) => !document?.isPublished, 
    }),

    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      description: 'A short description or excerpt for the blog post',
      hidden: ({ document }) => !document?.isPublished,
    }),

    defineField({
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image of the blog author',
      hidden: ({ document }) => !document?.isPublished, 
      
    }),

    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      description: 'Name of the blog post author',
      hidden: ({ document }) => !document?.isPublished, 
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Publication date of the blog post',
      hidden: ({ document }) => !document?.isPublished, 
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL-friendly identifier for the blog post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      hidden: ({ document }) => !document?.isPublished, 
    }),

   
  ],
});
