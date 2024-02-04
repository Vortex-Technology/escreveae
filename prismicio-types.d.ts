// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ContactDocumentDataSlicesSlice =
  | ContactButtonSlice
  | FooterSlice
  | HeaderSlice;

/**
 * Content for contact documents
 */
interface ContactDocumentData {
  /**
   * Slice Zone field in *contact*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactDocumentDataSlicesSlice> /**
   * Meta Description field in *contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contact.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *contact*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contact.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | FindTagsSlice
  | FooterSlice
  | BannerSlice
  | HeaderSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *post → tags*
 */
export interface PostDocumentDataTagsItem {
  /**
   * tag field in *post → tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.tags[].tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;
}

/**
 * Content for post documents
 */
interface PostDocumentData {
  /**
   * title field in *post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * image field in *post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * tags field in *post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: post.tags[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tags: prismic.GroupField<Simplify<PostDocumentDataTagsItem>>;

  /**
   * content field in *post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;

/**
 * Content for tag documents
 */
interface TagDocumentData {
  /**
   * name field in *tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * icon field in *tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;

  /**
   * description field in *tag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tag.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * tag document from Prismic
 *
 * - **API ID**: `tag`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TagDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TagDocumentData>, "tag", Lang>;

export type AllDocumentTypes =
  | ContactDocument
  | HomeDocument
  | PostDocument
  | TagDocument;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceDefaultPrimary {
  /**
   * hero field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<never>;

  /**
   * title field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *Banner → Items*
 */
export interface BannerSliceDefaultItem {
  /**
   * button field in *Banner → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.items[].button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button: prismic.KeyTextField;
}

/**
 * Hero Right variation for Banner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BannerSliceDefaultPrimary>,
  Simplify<BannerSliceDefaultItem>
>;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceHeroLeftPrimary {
  /**
   * hero field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<never>;

  /**
   * title field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *Banner → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *Banner → Items*
 */
export interface BannerSliceHeroLeftItem {
  /**
   * button field in *Banner → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.items[].button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button: prismic.KeyTextField;
}

/**
 * Hero Left variation for Banner Slice
 *
 * - **API ID**: `heroLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceHeroLeft = prismic.SharedSliceVariation<
  "heroLeft",
  Simplify<BannerSliceHeroLeftPrimary>,
  Simplify<BannerSliceHeroLeftItem>
>;

/**
 * Slice variation for *Banner*
 */
type BannerSliceVariation = BannerSliceDefault | BannerSliceHeroLeft;

/**
 * Banner Shared Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Banner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSlice = prismic.SharedSlice<"banner", BannerSliceVariation>;

/**
 * Primary content in *ContactButton → Primary*
 */
export interface ContactButtonSliceDefaultPrimary {
  /**
   * label field in *ContactButton → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_button.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *ContactButton → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_button.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * icon field in *ContactButton → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_button.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  icon: prismic.KeyTextField;
}

/**
 * Default variation for ContactButton Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactButton*
 */
type ContactButtonSliceVariation = ContactButtonSliceDefault;

/**
 * ContactButton Shared Slice
 *
 * - **API ID**: `contact_button`
 * - **Description**: ContactButton
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactButtonSlice = prismic.SharedSlice<
  "contact_button",
  ContactButtonSliceVariation
>;

/**
 * Primary content in *FindTags → Primary*
 */
export interface FindTagsSliceDefaultPrimary {
  /**
   * title field in *FindTags → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: find_tags.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for FindTags Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FindTagsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FindTagsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FindTags*
 */
type FindTagsSliceVariation = FindTagsSliceDefault;

/**
 * FindTags Shared Slice
 *
 * - **API ID**: `find_tags`
 * - **Description**: FindTags
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FindTagsSlice = prismic.SharedSlice<
  "find_tags",
  FindTagsSliceVariation
>;

/**
 * Primary content in *Footer → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * copyright field in *Footer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.copyright
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;
}

/**
 * Unfixed variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Footer → Primary*
 */
export interface FooterSliceFixedPrimary {
  /**
   * copyright field in *Footer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.copyright
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;
}

/**
 * Fixed variation for Footer Slice
 *
 * - **API ID**: `fixed`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceFixed = prismic.SharedSliceVariation<
  "fixed",
  Simplify<FooterSliceFixedPrimary>,
  never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault | FooterSliceFixed;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Header → Primary*
 */
export interface HeaderSliceDefaultPrimary {
  /**
   * logo field in *Header → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * name field in *Header → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;
}

/**
 * Primary content in *Header → Items*
 */
export interface HeaderSliceDefaultItem {
  /**
   * button field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button: prismic.KeyTextField;
}

/**
 * Fixed variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  Simplify<HeaderSliceDefaultItem>
>;

/**
 * Primary content in *Header → Primary*
 */
export interface HeaderSliceUnfixedPrimary {
  /**
   * logo field in *Header → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * name field in *Header → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;
}

/**
 * Primary content in *Header → Items*
 */
export interface HeaderSliceUnfixedItem {
  /**
   * button field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button: prismic.KeyTextField;
}

/**
 * Unfixed variation for Header Slice
 *
 * - **API ID**: `unfixed`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceUnfixed = prismic.SharedSliceVariation<
  "unfixed",
  Simplify<HeaderSliceUnfixedPrimary>,
  Simplify<HeaderSliceUnfixedItem>
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault | HeaderSliceUnfixed;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ContactDocument,
      ContactDocumentData,
      ContactDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      PostDocument,
      PostDocumentData,
      PostDocumentDataTagsItem,
      TagDocument,
      TagDocumentData,
      AllDocumentTypes,
      BannerSlice,
      BannerSliceDefaultPrimary,
      BannerSliceDefaultItem,
      BannerSliceHeroLeftPrimary,
      BannerSliceHeroLeftItem,
      BannerSliceVariation,
      BannerSliceDefault,
      BannerSliceHeroLeft,
      ContactButtonSlice,
      ContactButtonSliceDefaultPrimary,
      ContactButtonSliceVariation,
      ContactButtonSliceDefault,
      FindTagsSlice,
      FindTagsSliceDefaultPrimary,
      FindTagsSliceVariation,
      FindTagsSliceDefault,
      FooterSlice,
      FooterSliceDefaultPrimary,
      FooterSliceFixedPrimary,
      FooterSliceVariation,
      FooterSliceDefault,
      FooterSliceFixed,
      HeaderSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceDefaultItem,
      HeaderSliceUnfixedPrimary,
      HeaderSliceUnfixedItem,
      HeaderSliceVariation,
      HeaderSliceDefault,
      HeaderSliceUnfixed,
    };
  }
}
