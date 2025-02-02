import { defineField, defineType } from "sanity";

export default defineType({
  name: "card",
  title: "Card",
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
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the product",
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => !document?.isPublished,
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Category of the product",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Old", value: "old" },
          
        ],
      },
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
      name: "hoverImage",
      title: "Hover Image",
      type: "image",
      options: { hotspot: true },
      description: "Secondary image that appears on hover",
      hidden: ({ document }) => !document?.isPublished,
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Regular price of the product",
      validation: (Rule) => Rule.required().min(0),
      hidden: ({ document }) => !document?.isPublished,
    }),

    defineField({
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
      description: "Discounted price (if applicable)",
      validation: (Rule) => Rule.min(0),
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
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => !document?.isPublished,
    }),
  ],
});
