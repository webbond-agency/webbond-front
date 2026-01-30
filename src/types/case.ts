// Базові типи для мультимовності
export type LocaleText = {
  da: string
  en: string
}

export type LocaleTextArea = {
  da: string
  en: string
}

// Portable Text блок для testimonial description
export type PortableTextBlock = {
  _key: string
  _type: 'block'
  style?: string
  children: Array<{
    _key: string
    _type: 'span'
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: 'textColor'
    color: 'white' | 'gray'
  }>
}

export type LocalePortableText = {
  da: PortableTextBlock[]
  en: PortableTextBlock[]
}

// Sanity Image типи
export type SanityImageAsset = {
  _id: string
  url: string
}

export type SanityImageCrop = {
  top: number
  bottom: number
  left: number
  right: number
}

export type SanityImageHotspot = {
  x: number
  y: number
  height: number
  width: number
}

export type SanityImage = {
  asset: SanityImageAsset
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
  alt?: string
}

// Slug тип
export type Slug = {
  _type: 'slug'
  current: string
}

// Hero блок
export type CaseHero = {
  description: LocaleText
  tags?: Array<LocaleText>
  image?: SanityImage
}

// Services блок
export type CaseService = {
  title: LocaleText
  description: Array<{
    text: LocaleText
  }>
}

// Image Block
export type CaseImageBlock = {
  imageDesktop: SanityImage
  imageMobile: SanityImage
  button: {
    text: LocaleText
    link: string
  }
}

// Testimonial блок
export type CaseTestimonial = {
  description: LocalePortableText
  clientName: LocaleText
  clientPosition: LocaleText
  clientPhoto: SanityImage
  testimonialText: LocaleText
  imageDesktop: SanityImage
  imageMobile: SanityImage
}

// SEO блок
export type CaseSEO = {
  metaTitle?: LocaleText
  metaDescription?: LocaleTextArea
  keywords?: Array<LocaleText>
  opengraphImage?: SanityImage
  schemaJson?: {
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

// Основний тип Case
export type Case = {
  _id: string
  _type: 'case'
  _createdAt?: string
  _updatedAt?: string
  _rev?: string
  title: LocaleText
  slug: Slug
  showOnHomepage: boolean
  homepageImage?: SanityImage
  homepageOrder?: number
  hero: CaseHero
  services?: CaseService[]
  imageBlock?: CaseImageBlock
  testimonial?: CaseTestimonial
  seo?: CaseSEO
}

// Тип для запиту з мовою (після обробки запиту)
export type CaseWithLanguage = Omit<
  Case,
  | 'title'
  | 'hero'
  | 'services'
  | 'imageBlock'
  | 'testimonial'
  | 'seo'
  | 'slug'
> & {
  id: string
  title: string
  slug: string
  homepageImage?: SanityImage
  homepageOrder?: number
  hero: Omit<CaseHero, 'description' | 'tags' | 'image'> & {
    description: string
    tags?: Array<string | { text: string }>
    image?: SanityImage
  }
  services?: Array<{
    title: string
    description: Array<{
      text: string
    }>
  }>
  imageBlock?: Omit<CaseImageBlock, 'button'> & {
    button: {
      text: string
      link: string
    }
  }
  testimonial?: Omit<
    CaseTestimonial,
    | 'description'
    | 'clientName'
    | 'clientPosition'
    | 'testimonialText'
  > & {
    description: PortableTextBlock[]
    clientName: string
    clientPosition: string
    testimonialText: string
  }
  seo?: Omit<
    CaseSEO,
    'metaTitle' | 'metaDescription' | 'keywords'
  > & {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

