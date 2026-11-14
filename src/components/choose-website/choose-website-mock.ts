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
    fonImage: '/choose-fon-n.webp',
    fonImageDesktop: '/choose-fon-desktop-n.webp',
    phoneImage: '/choose-iphone-n.webp',
    bannerImage: '/banner-for-choose-list-n.webp',
  },
  {
    id: 'hjemmeside',
    fonImage: '/choose-fon-n.webp',
    fonImageDesktop: '/choose-fon-desktop-n.webp',
    phoneImage: '/choose-iphone-2-n.webp',
    bannerImage: '/banner-for-choose-list-2-n.webp',
  },
  {
    id: 'webshop',
    fonImage: '/choose-fon-n.webp',
    fonImageDesktop: '/choose-fon-desktop-n.webp',
    phoneImage: '/choose-iphone-3-n.webp',
    bannerImage: '/banner-for-choose-list-3-n.webp',
  },
];
