export interface ICard { image: string;
  price: number;
  rating: { rate: number; count: number };
  description: string;
  id: number;
  title: string;
  category: string;
  link: string
}

export const cards: ICard[] = [
  {
    id: 1,
    title: 'Smartphone Samsung Galaxy A23 6 GB/128 GB black',
    price: 104675,
    description: 'Discover more possibilities.' +
      ' Take amazing selfies with an 8 MP front camera and a bokeh effect — less background, more of you!' +
      ' Meals for the whole day. Stay one step ahead with a reliable battery.' +
      ' Do anything without worrying about the charge, with a 5000 mAh battery.' +
      ' Galaxy A23 with super-fast charging up to 25 watts will help you keep the usual rhythm of life. ',
    category: 'Smartphones',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    rating: {
      rate: 4.7,
      count: 120
    },
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item'
  },
  {
    id: 2,
    title: 'Smart ring iQibla Zikr1 white ',
    price: 11995,
    description: 'Built-in bluetooth, Zikr ring is easy to connect with Qibla watch and smartphone.' +
      ' You can receive 5 prayer times reminder by Zikr ring, Qibla watch or smart phone.',
    category: 'Smart-Rings',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h02/52322910470174/zikr1-105729890-1.jpg',
    rating: {
      rate: 4.1,
      count: 109
    },
    link: 'https://kaspi.kz/shop/p/smart-kol-tso-iqibla-zikr1-belyi-105729890/?c=750000000#!/item'
  },
  {
    id: 3,
    title: ' Battery SVC AV9-12/S ',
    price: 10020,
    description: ' The batteries of this series are maintenance-free, do not require refilling of water,' +
      ' are designed to operate in cyclic mode (withstand up to 600 cycles).' +
      ' The low level of self-discharge ensures a service life of 2 to 4 years in standby (buffer) mode.' +
      ' The sealed design allows the battery to be used in any position. ',
    category: ' Accumulator ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/hed/47641112215582/svc-av9-12-s-103102030-1.jpg',
    rating: {
      rate: 3.8,
      count: 89
    },
    link: 'https://kaspi.kz/shop/p/svc-av9-12-s-103102030/?c=750000000#!/item'
  },
  {
    id: 4,
    title: ' Sibshnur jute rope d 06 mm, 20 m, load 150 KGF ',
    price: 2500,
    description: ' The jute rope Ø 6mm is made of jute, a natural vegetable fiber, by torsion. ',
    category: ' Sibshnur ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/he7/50132433272862/sibsnur-4870144181141-20-m-dzut-104513082-2.jpg',
    rating: {
      rate: 4.5,
      count: 103
    },
    link: 'https://kaspi.kz/shop/p/sibshnur-dzhutovaja-d-06-mm-20-m-nagruzka-150-kgs-104513082/?c=750000000#!/item'
  },
  {
    id: 5,
    title: ' Lump soap household Spring Classic Household 72% 140 g ',
    price: 339,
    description: ' Soap household solid 72%. The storage temperature is not lower than minus 5 C.' +
      ' Restores its properties after defrosting. Natural household soap is made from high-quality raw materials.' +
      ' It has a high washing capacity, lush foam, less soaking in water. ',
    category: ' Soap ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h62/hc5/47333471649822/vesna-klassiceskoe-hozajstvennoe-72-140-g-102953686-1.jpg',
    rating: {
      rate: 4.2,
      count: 83
    },
    link: 'https://kaspi.kz/shop/p/kuskovoe-mylo-hozjaistvennoe-vesna-klassicheskoe-hozjaistvennoe-72-140-g-102953686/?c=750000000#!/item'
  },
  {
    id: 6,
    title: ' Stool ZETA IMP-TV-056116, 45x35x35 cm, brown ',
    price: 4890,
    description: ' The stool is specially made without paint coating.' +
      ' To paint it to match the desired interior color. High seat rigidity. ',
    category: ' Stool ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h40/48030433935390/zeta-taburet-imp-tv-056116-derevo-100345101-1-Container.jpg',
    rating: {
      rate: 3.2,
      count: 105
    },
    link: 'https://kaspi.kz/shop/p/taburet-zeta-imp-tv-056116-45x35x35-sm-korichnevyi-100345101/?c=750000000#!/item'
  },
  {
    id: 7,
    title: ' Rondell Santoku Cascara RD-687, blade: steel ',
    price: 4990,
    description: ' Reasonable minimalism and traditionally high quality is the motto of the Cascara collection,' +
      ' which includes five of the most necessary knives: cutting, universal, santoku,' +
      ' for peeling vegetables and cooking. Made of high-quality steel, they hold the' +
      ' sharpening perfectly and do their job flawlessly ',
    category: ' Blade ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/he4/31585355038750/rondell-cascara-rd-687-16100042-1-Container.jpg',
    rating: {
      rate: 4.7,
      count: 55
    },
    link: 'https://kaspi.kz/shop/p/rondell-santoku-cascara-rd-687-lezvie-stal--16100042/?c=750000000#!/item'
  },
  {
    id: 8,
    title: ' Apple MacBook Air 13 MGN63 Laptop Grey ',
    price: 478874,
    description: ' A small chip. A grand breakthrough is the first chip designed specifically for Mac.' +
      ' Amazingly, the system on the Apple M1 chip accommodates 16 billion transistors an' +
      ' combines the central and graphics processors, the Neural Engine system,' +
      ' I/O controllers and many other components. The Apple M1 chip allows you to use' +
      ' unique technologies on a Mac and provides incredible performance combined with' +
      ' the industry\'s best energy efficiency. ',
    category: ' MacBook ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: {
      rate: 4.9,
      count: 250
    },
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item'
  },
  {
    id: 9,
    title: ' Apple iMac 24 2021 Monoblock 24M182SUX MGTF3 silver',
    price: 829900,
    description: '' +
      'Operating system: macOS\n' +
      'Screen diagonal: 24 inch\n' +
      'Processor: Apple M1\n' +
      'RAM size: 8 GB\n' +
      'Drive type: SSD\n' +
      'total storage capacity: 256 GB\n' +
      'Graphics card: Apple M1 7-Core',
    category: ' iMac ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hb7/34185499017246/apple-imac-24-2021-24m182sux-mgtf3-serebristyj-101530799-1-Container.jpg',
    rating: {
      rate: 4.3,
      count: 213
    },
    link: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mgtf3-serebristyi-101530799/?c=750000000#!/item'
  },
  {
    id: 10,
    title: ' Action Figure Seventh Heaven Anime Naruto 5492 7 cm ',
    price: 2500,
    description: '' +
      'type: Cartoon characters\n' +
      'theme: Anime\n' +
      'height, cm: 7\n' +
      'Main material: plastic ',
    category: ' Figure ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/ha1/49357282312222/figurka-sedmoe-nebo-5492-7-sm-104106402-1.jpg',
    rating: {
      rate: 5.0,
      count: 333
    },
    link: 'https://kaspi.kz/shop/p/figurka-sed-moe-nebo-anime-naruto-5492-7-sm-104106402/?c=750000000#!/item'
  },

]
