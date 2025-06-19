import ItemCard from './Itemcards/ItemCard/'
import React from 'react';
import itemImage from './assets/01.jpg';

import './App.css'; // Assuming you have some styles in App.css

const items = [
  {
    name: 'SULPHO - 50',
    price: 250,
    technicalName: 'Sulphate of Potash - 0:0:50',
    description: 'Chloride-free nature of Sulpho-50 makes it preferred potasiium fertiliser for chloride sensitive high value crops as fruit crops, vegetable crops, field crops, coffee and flowers.',
    skus: '50 kg',
    image: itemImage,
  },
  {
    name: 'COPPER SULPHATE (Crystal and Powder)',
    price: 240,
    description: 'Copper(Cu) activates many enzymes in plants which are involved in lignin synthesis and it is essential in several enzyme systems.',
    skus: '1 & 25 kg pack',
    image: itemImage
  },
  {
    name: 'Urea',
    price: 120,
    technicalName: 'Urea Fertilizer',
    description: 'It is used for nitrogen fertilization',
    skus: '50 kg',
    image: itemImage
  },
  {
    name: 'MAGNESIUM SULPHATE',
    price: 250,
    description: 'Magnesium Sulphate is a widely used and affordable fertilizer source of Magnesium which is very much essential for plants.',
    skus: '50 kg',
    image: itemImage
  },
  {
    name: 'ZINC 21',
    price: 410,
    technicalName: 'Zinc Sulphate Heptahydrate',
    description: 'Zinc (Zn) is an essential micronutrient for energy production, protein synthesis, and growth regulation.',
    skus: '',
    image: itemImage
  },
  {
    name: 'BIO GOLD PLUS',
    price: 275,
    description: '',
    skus: '100 kg per acre',
    image: itemImage
  },
  {
    name: 'FARM GOLD',
    price: 300,
    technicalName: 'Humic Substance Granules',
    description: 'Farm Gold is a granular end product having humic substances from aerobic decomposition of organic matter as basic ingredient.',
    skus: '25 kg per acre',
    image: itemImage
  },
  {
    name: 'VegGro',
    price: 400,
    technicalName: 'NPK - 16:08:24',
    skus: 'Available in 1,10 and 25 kg bags',
    image: itemImage
  },
  {
    name: 'POORNA ADVANCED',
    price: 560,
    description: '100% water soluble NPK fertilizer containing all the three major plant nutrients viz., Nitrogen.',
    skus: '1-3kg/acre',
    image: itemImage
  },
  {
    name: 'SATEJ',
    price: 300,
    technicalName: 'NPK - 6:12:36',
    description: 'High K fertilizer suitable for fruit fattening and hastening maturity.',
    skus: 'Available in 25 kg bags',
    image: itemImage
  },
];

function App() {
  return (
    <>
      <h1 className='header'>ITEM CATALOG</h1>
      <div className='Items'>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
    </>
    
  );
}

export default App;

