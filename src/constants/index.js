import { yImg, monParisImg, blackOpiumImg, myslfImg, firstHighlightVideo, secondHighlightVideo, thirdHighlightVideo, fourthHighlightVideo, coralClashBgImg, coralClashImg, berryBangBgImg, berryBangImg, nudeLavalliereBgImg, nudeLavalliereImg, lavenderLustBgImg, lavenderLustImg, peachyNudeBgImg, peachyNudeImg, restlessRoseBgImg, restlessRoseImg, nocturnalNudeBgImg, nocturnalNudeImg, pinkVoltageBgImg, pinkVoltageImg, roseHazeBgImg, roseHazeImg, babydollPinkBgImg, babydollPinkImg, suaveSunstoneBgImg, suaveSunstoneImg, makeupImg, fragrancesImg, parfumsImg, skincareImg } from '../utils'

export const navList = ['MAKEUP', 'FRAGRANCE', 'SKINCARE']

export const fragrances = [
  {
    id: 1,
    name: 'Y, EAU DE PARFUM',
    description: 'THE FRAGRANCE OF AN ACCOMPLISHED SELF-MADE MAN, NOW REFILLABLE',
    content: '100 ml',
    image: yImg,
  },
  {
    id: 2,
    name: 'MON PARIS EAU DE PARFUM',
    description: 'THE HYPNOTIC CHYPRE FLORAL',
    content: '50 ml',
    image: monParisImg,
  },
  {
    id: 3,
    name: 'BLACK OPIUM EAU DE PARFUM',
    description: 'CONFIDENT & BOLD, THE BLACK OPIUM WOMAN EMBODIES THE NEW YVES SAINT LAURENT SPIRIT',
    content: '50 ml',
    image: blackOpiumImg,
  },
  {
    id: 4,
    name: 'MYSLF EAU DE PARFUM',
    description: 'THE NEW MASCULINE REFILLABLE FRAGRANCE BY YSL. THE EXPRESSION OF THE MAN YOU ARE WITH ALL YOUR NUANCES',
    content: '100 ml',
    image: myslfImg,
  }
]

export const shades = [
  {
    id: 1,
    color: '#EE7C6D',
    colorName: '57 CORAL CLASH',
    backgroundImg: coralClashBgImg,
    image: coralClashImg,
  },
  {
    id: 2,
    color: '#AE4654',
    colorName: '54 BERRY BANG',
    backgroundImg: berryBangBgImg,
    image: berryBangImg,
  },
  {
    id: 3,
    color: '#B96372',
    colorName: '44 NUDE LAVALLIÈRE',
    backgroundImg: nudeLavalliereBgImg,
    image: nudeLavalliereImg
  },
  {
    id: 4,
    color: '#F7E7F3',
    colorName: '69 LAVENDER LUST',
    backgroundImg: lavenderLustBgImg,
    image: lavenderLustImg,
  },
  {
    id: 5,
    color: '#CF6665',
    colorName: '37 PEACHY NUDE',
    backgroundImg: peachyNudeBgImg,
    image: peachyNudeImg
  },
  {
    id: 6,
    color: '#F08492',
    colorName: '93 RESTLESS ROSÉ',
    backgroundImg: restlessRoseBgImg,
    image: restlessRoseImg,
  },
  {
    id: 7,
    color: '#D38479',
    colorName: '12 NOCTURNAL NUDE',
    backgroundImg: nocturnalNudeBgImg,
    image: nocturnalNudeImg
  },
  {
    id: 8,
    color: '#EF81A0',
    colorName: '87 PINK VOLTAGE',
    backgroundImg: pinkVoltageBgImg,
    image: pinkVoltageImg,
  },
  {
    id: 9,
    color: '#D37E7C',
    colorName: '06 ROSER HAZE',
    backgroundImg: roseHazeBgImg,
    image: roseHazeImg,
  },
  {
    id: 10,
    color: '#F08FBA',
    colorName: '42 BABYDOLL PINK',
    backgroundImg: babydollPinkBgImg,
    image: babydollPinkImg,
  },
  {
    id: 11,
    color: '#F7AFA1',
    colorName: '24 SUAVE SUNSTONE',
    backgroundImg: suaveSunstoneBgImg,
    image: suaveSunstoneImg
  },
]

export const highlightsSlides = [
  {
    id: 1,
    text: 'Nothing beats a good blush. Nothing. Dua Lipa Beauty secrets.',
    video: firstHighlightVideo,
    button: 'DISCOVER NOW',
    duration: 14,
  },
  {
    id: 2,
    text: 'Turn up the lash volume like @LilaMoss',
    video: secondHighlightVideo,
    button: 'DISCOVER LASH CLASH',
    duration: 12,
  },
  {
    id: 3,
    text: 'Even Dua Lipa can\'t <br/>stop blushing.',
    video: thirdHighlightVideo,
    button: 'DISCOVER NOW',
    duration: 35,
  },
  {
    id: 4,
    text: 'Turn heads with an invisible liner look by @AliAndreeamakeup',
    video: fourthHighlightVideo,
    button: 'DISCOVER ALL HOURS',
    duration: 31
  }
]

export const categories = [
  {
    title: 'MAKEUP',
    name: 'MAKEUP',
    image: makeupImg,
  },
  {
    title: 'FRAGRANCES',
    name: 'FRAGRANCES',
    image: fragrancesImg,
  },
  {
    title: 'LE VESTIAIRE <br/> DES PARFUMS',
    name: 'LE VESTIAIRE DES PARFUMS',
    image: parfumsImg,
  },
  {
    title: 'SKINCARE',
    name: 'SKINCARE',
    image: skincareImg
  }
]
