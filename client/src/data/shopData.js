const items = [
  {
    id: 23,
    imageUrl:
      'https://mobimania.ua/users/images/items_phone_mobil/big/note-8-white3.png',
    name: 'Xiaomi Redmi Note 8',
    price: 275,
  },
  {
    id: 24,
    imageUrl:
      'https://i.gadgets360cdn.com/products/large/1551344291_635_redmi_note_7.jpg',
    name: 'Xiaomi Redmi Note 7',
    price: 205,
  },
  {
    id: 25,
    imageUrl:
      'https://cdn.gsmarena.com/imgroot/news/17/10/huawei-honor-9i/-728w3/gsmarena_001.jpg',
    name: 'Honor 9i',
    price: 150,
  },
  {
    id: 26,
    imageUrl:
      'https://www.benchmark.rs/assets/img/news/big_thumb/9a8fd2319ddec0cd02d404ecb97abfa1.jpg',
    name: 'Honor 9X Pro',
    price: 400,
  },
  {
    id: 27,
    imageUrl:
      'https://phone4u.rs/wp-content/uploads/2019/08/samsung-s7-edge-poklopac.jpg',
    name: 'Samsung Galaxy S7 Edge',
    price: 300,
  },
  {
    id: 28,
    imageUrl:
      'https://i.gadgets360cdn.com/products/large/1519585124_635_samsung_galaxy_s9_blue.jpg',
    name: 'Samsung Galaxy S9 Edge',
    price: 625,
  },
  {
    id: 29,
    imageUrl:
      'https://www.gizmochina.com/wp-content/uploads/2019/06/Galaxy-A60-featured-546x546.jpg',
    name: 'Samsung Galaxy A60',
    price: 340,
  },
  {
    id: 1,
    imageUrl:
      'https://apollo-singapore.akamaized.net/v1/files/zkh7df7w1aqj2-PK/image',
    name: 'Wireless Charger for Samsung',
    price: 20,
  },
  {
    id: 2,
    imageUrl:
      'https://cnet4.cbsistatic.com/img/TM-sLvvuDYT6G6AY7A00M-e37To=/940x0/2017/09/29/3fbc678a-6585-4d80-8896-0b6bd2a168d4/mophie-wireless-charging-base.jpg',
    name: 'Wireless Charger for iPhone',
    price: 20,
  },
  {
    id: 3,
    imageUrl: 'https://www.iclick.ae/wp-content/uploads/2018/11/solit-5-1.jpg',
    name: 'Universal 10000mAh Power Bank',
    price: 25,
  },
  {
    id: 4,
    imageUrl:
      'data:image/jpeg;base64,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',
    name: 'Universal 20000mAh Power Bank',
    price: 30,
  },
  {
    id: 5,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0906/8654/products/jcpal-screen-protector-3d-armor-glass-screen-protector-for-iphone-x-1560504991778.jpg?v=1523913977',
    name: 'Protective Glass for iPhone X',
    price: 5,
  },
  {
    id: 6,
    imageUrl:
      'https://ukeyy.com/wp-content/uploads/2018/04/melkco-3d-curvy-9h-tempered-glass-screen-protector-for-samsung-galaxy-s9-plus-black-1.jpg',
    name: 'Protective Glass for Samsung Galaxy S9',
    price: 5,
  },
  {
    id: 7,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41x4PxPhJbL.jpg',
    name: 'Protective Glass for Honor 9X Pro',
    price: 5,
  },
  {
    id: 8,
    imageUrl: 'https://hotline.ua/img/tx/208/2085794135.jpg',
    name: 'Protective Glass for Xiaomi Redmi Note 8',
    price: 5,
  },
  {
    id: 9,
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/A59U_131741963573264438xBK50oASXT.jpg',
    name: 'Universal Waterproof Phone Pouch',
    price: 15,
  },
  {
    id: 18,
    imageUrl:
      'https://www.mytrendyphone.eu/images2/Xiaomi-Mi-A1-Redmi-Note-5A-Battery-BN31-06022018-01-p.jpg',
    name: 'Xiaomi Battery 2910mAh for Redmi 5A',
    price: 15,
  },
  {
    id: 19,
    imageUrl:
      'https://phoneshopbd.com/9761-large_default/samsung…te-3-3200mah-phone-replacement-battery-b800be.jpg',
    name: 'Samsung Battery 3200mAh for Note 3',
    price: 20,
  },
  {
    id: 20,
    imageUrl:
      'https://multimedia.bbycastatic.ca/multimedia/products/500x500/134/13483/13483317.jpg',
    name: 'Huawei Battery 3000mAh for Honor P9-Lite',
    price: 15,
  },
  {
    id: 21,
    imageUrl:
      'https://wooshop.info/images/1buycart/5aa2f2d33e8af634fb22b3c48c42a6ca.jpg',
    name: 'SIM Card Reader',
    price: 5,
  },
  {
    id: 22,
    imageUrl:
      'https://samsungoutlet.com.pk/955-large_default/gal…grand-prime-battery-15-days-checking-warranty.jpg',
    name: 'Samsung Battery 2600mAh for Grand Prime',
    price: 20,
  },
  {
    id: 30,
    imageUrl:
      'https://www.puro.it/media/catalog/product/cache/5/thumbnail/480x/17f82f742ffe127f42dca9de82fb58b1/c/o/cover-03-nude-iphone-11-pro-max_02_4.jpg',
    name: 'iPhone 11 Pro',
    price: 1190,
  },
  {
    id: 31,
    imageUrl: 'https://cdn.store-assets.com/s/262210/i/11481232.jpeg',
    name: 'iPhone 11',
    price: 855,
  },
  {
    id: 32,
    imageUrl:
      'https://mobileleb.com/5730-large_default/apple-iphone-x-256gb.jpg',
    name: 'iPhone X',
    price: 790,
  },
  {
    id: 33,
    imageUrl:
      'https://www.mrphonedeals.com/20364-large_default/a…plus-s-256-gb-zolotoj-vosstanovlennyj-diamond.jpg',
    name: 'iPhone 8 Plus',
    price: 550,
  },
  {
    id: 34,
    imageUrl:
      'https://x-phone.rs/wp-content/uploads/2018/07/apple-iphone-8-crna-64gb.jpg',
    name: 'iPhone 8',
    price: 500,
  },
  {
    id: 35,
    imageUrl:
      'https://dijaspora.shop/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/1/5/1520244092-1.jpg',
    name: 'iPhone 7 Plus',
    price: 440,
  },
  {
    id: 10,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0808/0067/products/title_ipxi_silicone_fit_03_ce4c8565-cfa0-4e4a-8004-d3dca05152de.jpg?v=1584135097',
    name: 'iPhone 11 Silicone Case',
    price: 15,
  },
  {
    id: 11,
    imageUrl:
      'https://mstatic.re-store.ru/upload/iblock/7a0/7a0b466ddddf90cafe0147c3090adbd4.jpg',
    name: 'iPhone X Silicone Case',
    price: 15,
  },
  {
    id: 12,
    imageUrl:
      'https://media.brandgsm.ro/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/1/3/13206_24295_Samsung_Husa_Neon_Flip_Cover_Samsung_Galaxy_A8_2018_Black_1.jpg.jpg',
    name: 'Samsung Galaxy S9 Edge Case',
    price: 15,
  },
  {
    id: 13,
    imageUrl:
      'https://www.mobilonline.sk/files/photo/2019-11-03/2c993c/518242/1200x800.png',
    name: 'Xiaomi Redmi Note 8 Case',
    price: 12,
  },
  {
    id: 14,
    imageUrl:
      'https://www.mcsteve.com/wp-content/uploads/2017/10/S7-Edge-Black-Main.jpg',
    name: 'Samsung Galaxy S7 Edge Case',
    price: 12,
  },
  {
    id: 15,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61TmUVua4XL._SX466_.jpg',
    name: 'Xiaomi Redmi Note 7 Case',
    price: 10,
  },
  {
    id: 16,
    imageUrl:
      'https://www.gizmochina.com/wp-content/uploads/2018/06/Huawei-Honor-9i.jpeg',
    name: 'Honor 9i Case',
    price: 10,
  },
  {
    id: 17,
    imageUrl:
      'https://www.mytrendyphone.eu/images/Brushed-TPU-Case-for-Huawei-Honor-9X-Honor-9X-Pro-Carbon-Fiber-Black-02082019-01-p.jpg',
    name: 'Honor 9X Pro Case',
    price: 12,
  },
];

export default items;
