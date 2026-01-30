export interface Case {
  id: string;
  title: string;
  description: string;
  image: string;
  services: string[];
}

export const CASES_MOCK_DATA: Case[] = [
  {
    id: '1',
    title: 'Hjemmeside for et byggefirma',
    description:
      'Hjemmesidens struktur er udviklet, så potentielle kunder hurtigt forstår virksomhedens ekspertise, kan se gennemførte projekter og nemt indsende en forespørgsel...',
    image: '/cases-1.webp',
    services: [
      'UI/UX Design',
      'SEO',
      'Udvikling af hjemmeside',
      'Marketingstruktur',
    ],
  },
  {
    id: '2',
    title: 'Website for et Fransk Fotostudie',
    description:
      'Vores opgave var at udvikle en hjemmeside for et marketingfirma.',
    image: '/cases-2.webp',
    services: [
      'Website for et Fransk Fotostudie',
      'WebShop & integrationer',
      'UX/UI redesign',
      'Booking-og betalingssystemer',
    ],
  },
  {
    id: '3',
    title: 'Website for en Fencing Academy (USA)',
    description:
      'Vores opgave var at udvikle en hjemmeside for et marketingfirma.',
    image: '/cases-3.webp',
    services: ['Nøglefærdig hjemmeside', 'Markedsføring', 'SEO promovering'],
  },
  {
    id: '4',
    title: 'Landingpage for et revisionsfirma',
    description:
      'Bilingval landingpage til et revisionsfirma med integreret e-mail marketing og Telegram-bot til hurtig modtagelse af forespørgsler...',
    image: '/cases-4.webp',
    services: [
      'Marketingstruktur',
      'Kalkulator',
      'Udvikling af hjemmeside',
      'UX/UI design',
    ],
  },
  {
    id: '5',
    title: 'Landingpage for et børnecenter',
    description:
      'Landingpagen er udviklet med et komplet redesign og en opdateret visuel identitet. Der er opbygget en marketingstruktur med integreret betalingssystem til billetkøb, mulighed for booking af barnepige, Telegram-bot samt email-marketing...',
    image: '/cases-5.webp',
    services: [
      'Marketingstruktur',
      'SEO',
      'Udvikling af hjemmeside',
      'UX/UI design',
    ],
  },
  {
    id: '6',
    title: 'WebShop',
    description:
      'Vi har skabt en WebShop, der ikke blot sælger, men fungerer som et fuldt forretningsværktøj. Forskellige leveringsmetoder og betalingsmuligheder, optimerede købsprocesser, e-mail marketing og chatbot sikrer en komfortabel rejse for kunden fra første besøg til køb.',
    image: '/cases-6.webp',
    services: ['Marketingstruktur', 'Udvikling af WebShop', 'UX/UI design'],
  },
  {
    id: '7',
    title: 'Website for an IT company',
    description:
      'Der er udviklet en flersidet hjemmeside til en IT-virksomhed med kreativt UX/UI design og en klar marketingstruktur...',
    image: '/cases-7.webp',
    services: ['SEO', 'Marketingstruktur', 'Website development', 'UX Design'],
  },
  {
    id: '8',
    title: 'Website til bilauktion og import fra USA',
    description:
      'Der er integreret prisberegnere, kontaktformularer og automatiske e-mailbeskeder for hurtig håndtering af forespørgsler. Ren kode, høj indlæsningshastighed og en tilkoblet blog gør hjemmesiden klar til fremtidig SEO og skalering af forretningen.',
    image: '/cases-8.webp',
    services: ['Websiteudvikling', 'Prisberegnere', 'Moderne design'],
  },
  {
    id: '9',
    title: 'Website til tandlæge og medicinsk center',
    description:
      'Moderne flersidet website med stilrent design og integrerede kontaktformularer. Website præsenterer tjenester, priser og muligheder klart og tillidsvækkende, hvilket øger konverteringen.',
    image: '/cases-9.webp',
    services: ['SEO', 'Marketingstruktur', 'Udvikling af website', 'UX Design'],
  },
  {
    id: '10',
    title: 'Logo til et medicinsk MR-center',
    description:
      'Logo og komplet brandidentitet til et medicinsk MR-center er implementeret på alle medier: skilte, lokaler, medicinsk tøj, papirvarer, poser, masker, visitkort og mere. Brandstil sikrer, at virksomheden skiller sig ud og skaber tillid hos patienterne.',
    image: '/cases-10.webp',
    services: [
      'Logo & brandidentitet',
      'Implementering på alle medier',
      'Konkurrenceanalyse & branding',
      'Visitkort',
    ],
  },
  {
    id: '11',
    title: 'Logo til American Wheels – bilimport og salg',
    description:
      'Logoet er tilpasset alle medier: firmatøj (t-shirts, hoodies), udendørs og indendørs skiltning, kontorelementer, hjemmeside og trykt materiale...',
    image: '/cases-11.webp',
    services: [
      'Logo & brandidentitet',
      'Firmatøj',
      'Implementering på alle medier',
      'Redesign',
    ],
  },
];
