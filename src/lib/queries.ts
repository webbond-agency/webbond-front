export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0]{
    "id": _id,
    _type,
    _createdAt,
    _updatedAt,
    "slug": slug.current,
    publishedAt,
    "heroTitle": heroTitle[$lang],
    "heroDescription": heroDescription[$lang],
    "author": author[$lang],
    "heroDesktopImage": heroDesktopImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      "alt": alt[$lang]
    },
    "heroMobileImage": heroMobileImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      "alt": alt[$lang]
    },
    "content": content[$lang][]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    "faq": faq[]{
      "question": question[$lang],
      "answer": answer[$lang]
    },
    "seo": {
      "metaTitle": seo.metaTitle[$lang],
      "metaDescription": seo.metaDescription[$lang]
    }
  }
`;

/** Усі опубліковані пости блогу — сторінка /blog. */
export const blogPostsAllQuery = `
  *[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) {
    "id": _id,
    "slug": slug.current,
    publishedAt,
    "heroTitle": heroTitle[$lang],
    "heroDescription": heroDescription[$lang],
    "author": author[$lang],
    "heroDesktopImage": heroDesktopImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      "alt": alt[$lang]
    },
    "heroMobileImage": heroMobileImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      "alt": alt[$lang]
    }
  }
`;

/** Усі пости блогу, крім поточного slug — для рекомендацій на сторінці статті. */
export const blogPostsRecommendedQuery = `
  *[_type == "blogPost" && slug.current != $excludeSlug && defined(publishedAt)] | order(publishedAt desc) [0..11] {
    "id": _id,
    "slug": slug.current,
    publishedAt,
    "heroTitle": heroTitle[$lang],
    "heroDescription": heroDescription[$lang],
    "author": author[$lang],
    "heroDesktopImage": heroDesktopImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      "alt": alt[$lang]
    },
    "heroMobileImage": heroMobileImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      "alt": alt[$lang]
    }
  }
`;
