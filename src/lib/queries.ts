export const casesOnHomepageQuery = `
  *[_type == "case" && showOnHomepage == true] | order(homepageOrder asc, _createdAt desc) {
    "id": _id,
    "title": title[$lang],
    "slug": slug.current,
    "homepageImage": homepageImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      alt
    },
    "homepageOrder": homepageOrder,
    "hero": {
      "description": hero.description[$lang],
      "tags": hero.tags[]{
        "text": select($lang == "en" => en, $lang == "da" => da, en)
      },
      "image": hero.image{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      }
    },
    "services": services[]{
      "title": title[$lang],
      "description": description[]{
        "text": text[$lang]
      }
    },
    "imageBlock": imageBlock{
      "imageDesktop": imageDesktop{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "imageMobile": imageMobile{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "button": {
        "text": button.text[$lang],
        "link": button.link
      }
    },
    "testimonial": testimonial{
      "description": testimonial.description[$lang],
      "clientName": clientName[$lang],
      "clientPosition": clientPosition[$lang],
      "clientPhoto": clientPhoto{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "testimonialText": testimonialText[$lang],
      "imageDesktop": imageDesktop{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "imageMobile": imageMobile{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      }
    }
  }
`;

export const caseBySlugQuery = `
  *[_type == "case" && slug.current == $slug][0]{
    "id": _id,
    _type,
    _createdAt,
    _updatedAt,
    "title": title[$lang],
    "slug": slug.current,
    showOnHomepage,
    "homepageOrder": homepageOrder,

    "homepageImage": homepageImage{
      asset->{
        _id,
        url
      },
      crop,
      hotspot,
      alt
    },

    "hero": {
      "description": hero.description[$lang],
      "tags": hero.tags[]{
        "text": select($lang == "en" => en, $lang == "da" => da, en)
      },
      "image": hero.image{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      }
    },

    "services": services[]{
      "title": title[$lang],
      "description": description[]{
        "text": text[$lang]
      }
    },

    "imageBlock": imageBlock{
      "imageDesktop": imageDesktop{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "imageMobile": imageMobile{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "button": {
        "text": button.text[$lang],
        "link": button.link
      }
    },

    "testimonial": testimonial{
      "description": description[$lang],
      "clientName": clientName[$lang],
      "clientPosition": clientPosition[$lang],
      "testimonialText": testimonialText[$lang],
      "clientPhoto": clientPhoto{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "imageDesktop": imageDesktop{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "imageMobile": imageMobile{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      }
    },

    "seo": seo{
      "metaTitle": metaTitle[$lang],
      "metaDescription": metaDescription[$lang],
      "keywords": keywords[][$lang],
      "opengraphImage": opengraphImage{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      },
      "schemaJson": schemaJson{
        asset->{
          _ref,
          _type
        }
      }
    }
  }
`;
