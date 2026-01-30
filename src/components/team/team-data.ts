export interface TeamMember {
  id: string;
  name: string;
  lastName: string;
  position: string;
  image: string;
}

export const TEAM_DATA: TeamMember[] = [
  {
    id: '1',
    name: 'Fedor',
    lastName: 'Alpatov',
    position: 'Со-Оwner & Developer',
    image: '/team-1.webp',
  },
  {
    id: '2',
    name: 'Christina',
    lastName: 'Bondarenko',
    position: 'Со-Оwner & Marketing',
    image: '/team-2.png',
  },
  {
    id: '3',
    name: 'Diana',
    lastName: 'Merkotun',
    position: 'Lead Designer',
    image: '/team-3.png',
  },
  {
    id: '4',
    name: 'Anastasiia',
    lastName: 'Mazarchuk',
    position: 'Graphic Designer',
    image: '/team-4.png',
  },
  {
    id: '5',
    name: 'Ruslan',
    lastName: 'Verdiev',
    position: 'SEO Specialist',
    image: '/team-5.png',
  },
  {
    id: '6',
    name: 'Andrii',
    lastName: 'Mykytiuk',
    position: 'Motion Designer',
    image: '/team-6.png',
  },
  {
    id: '7',
    name: 'Andrii',
    lastName: 'Deleniv',
    position: 'Designer',
    image: '/team-7.png',
  },
  {
    id: '8',
    name: 'Bohdan',
    lastName: 'Hrabovets',
    position: 'FB & Insta Ads',
    image: '/team-8.png',
  },
];
