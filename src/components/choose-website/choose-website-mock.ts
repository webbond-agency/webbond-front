export interface WebsiteType {
  id: 'landingpage' | 'hjemmeside' | 'webshop';
  fonImage: string;
  fonImageDesktop: string;
  phoneImage: string;
  bannerImage: string;
}

export const WEBSITE_TYPES_MOCK: WebsiteType[] = [
  {
    id: 'landingpage',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone.webp',
    bannerImage: '/banner-for-choose-list.webp',
  },
  {
    id: 'hjemmeside',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone-2.webp',
    bannerImage: '/banner-for-choose-list-2.webp',
  },
  {
    id: 'webshop',
    fonImage: '/choose-fon.webp',
    fonImageDesktop: '/choose-fon-desktop.webp',
    phoneImage: '/choose-iphone-3.webp',
    bannerImage: '/banner-for-choose-list-3.webp',
  },
];
