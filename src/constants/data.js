import images from './images';

const wines = [
  {
    title: 'Dosa',
    price: 'Rs 100',
    tags: 'Medium | Masala',
  },
  {
    title: 'Chicken Dry fry',
    price: 'Rs 90',
    tags: 'Full | Spicy',
  },
  {
    title: 'Paneer tikka',
    price: 'Rs 100',
    tags: 'Full | Spicy',
  },
  {
    title: 'Chana badam',
    price: 'Rs 10',
    tags: 'Full | Salty',
  },
  {
    title: 'Chole bhature',
    price: 'Rs 50',
    tags: 'Half | 2-piece',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'RS 300',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Rs 200',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Rs 500',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'Rs 250',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Rs 800',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
