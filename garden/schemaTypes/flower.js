import { defineField, defineType } from "sanity";

export default defineType({
  name: "flower",
  title: "Flower",
  type: "document",
  fields: [
    defineField({
      name: "isPublished",
      title: "Is Published",
      type: "boolean",
      initialValue: true,
      description: "Mark if the product is published",
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Set the display order of menu items (smaller numbers appear first).',
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the product",
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => !document?.isPublished,
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      description: "The text of the product",
      hidden: ({ document }) => !document?.isPublished,
    }),

   
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "A short description of the image for accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
      description: "Primary product image",
      hidden: ({ document }) => !document?.isPublished,
    }),

    

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Regular price of the product",
      hidden: ({ document }) => !document?.isPublished,
    }),

    

    defineField({
      name: "pricePerCent",
      title: "Discount Percentage",
      type: "number",
      description: "Discount percentage calculated from price & discountPrice",
      validation: (Rule) => Rule.min(0).max(100),
      hidden: ({ document }) => !document?.isPublished,
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The URL-friendly identifier for the product",
      options: {
        source: (doc) => `${doc.title}-${Math.floor(Math.random() * 10000)}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => !document?.isPublished,
    }),
    
  ],
});
