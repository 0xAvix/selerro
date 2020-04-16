const shopData = [
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
      'https://www.phonesinnepal.com/wp-content/uploads/2…/Honor-9i-with-Four-Cameras-launched-in-India.jpg',
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
      'https://www.phonebot.com.au/image/cache/catalog/re…shed/samsung/galaxy-s7/galaxy-s7-gold-650x650.jpg',
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
      'https://images.kogan.com/image/fetch/s--y5mqTm4I--…iles/product/etail/Samsung-/KHSGA60D1286BLU_1.jpg',
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
      'https://www.macpricesaustralia.com.au/wp-content/u…Boost-Up-Wireless-Charging-Pad-iPhone-7-Plus.jpeg',
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
      'https://ae01.alicdn.com/kf/HTB1jwU.XjvuK1Rjy0Faq6x…3-0-Large-Battery-Capacity-Three-USB-Charging.jpg',
    name: 'Universal 20000mAh Power Bank',
    price: 30,
  },
  {
    id: 5,
    imageUrl:
      'https://www.virginmegastore.ae/medias/sys_master/r…screen-protector-iPhone-X-1pc-s-326044-Detail.jpg',
    name: 'Protective Glass for iPhone X',
    price: 5,
  },
  {
    id: 6,
    imageUrl:
      'https://3gstore.rs/p/231/231746/tempered-glass-ful…-s9-plus-g965-transparent-127906-93554-118553.png',
    name: 'Protective Glass for Samsung Galaxy S9',
    price: 5,
  },
  {
    id: 7,
    imageUrl:
      'https://www.giztop.com/media/catalog/product/cache…5fb8d27136e95/h/o/honor_9x_screen_protector_2.jpg',
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
      'https://alfa.kz/files/alfa/messages/thumbnails_452…/14173170-iphone-11-pro-max-space-select-2019.png',
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
      'https://media-dtaconline.dtac.co.th/catalog/produc…57081d0b326a3dfa1f55e67/i/p/iphone_7_plus_1_2.png',
    name: 'iPhone 7 Plus',
    price: 440,
  },
  {
    id: 10,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1770/4703/produc…_Purple_Hero_500x500_crop_center.jpg?v=1572978326',
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
      'https://media.brandgsm.ro/media/catalog/product/ca…Flip_Cover_Samsung_Galaxy_A8_2018_Black_1.jpg.jpg',
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
      'https://images.samsung.com/is/image/samsung/latin_…35lbegww-000000001-front-black?$PD_GALLERY_L_JPG$',
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
      'https://img1.cgtrader.com/items/2057744/ddc605e2b8…-3d-model-max--obj-mtl-3ds-fbx-c4d-lwo-lw-lws.jpg',
    name: 'Honor 9X Pro Case',
    price: 12,
  },
];

export default shopData;
