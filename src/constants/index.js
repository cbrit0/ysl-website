import { yImg, monParisImg, blackOpiumImg, myslfImg, firstHighlightVideo, secondHighlightVideo, thirdHighlightVideo, fourthHighlightVideo } from '../utils'

export const navList = ['MAKEUP', 'FRAGRANCE', 'SKINCARE']

export const carouselSlides = [
  {
    id: 1,
    name: 'Y, EAU DE PARFUM',
    description: 'THE FRAGRANCE OF AN ACCOMPLISHED SELF-MADE MAN, NOW REFILLABLE',
    content: '100 ml',
    image: yImg,
    duration: 4,
  },
  {
    id: 2,
    name: 'MON PARIS EAU DE PARFUM',
    description: 'THE HYPNOTIC CHYPRE FLORAL',
    content: '50 ml',
    image: monParisImg,
    duration: 4,
  },
  {
    id: 3,
    name: 'BLACK OPIUM EAU DE PARFUM',
    description: 'CONFIDENT & BOLD, THE BLACK OPIUM WOMAN EMBODIES THE NEW YVES SAINT LAURENT SPIRIT',
    content: '50 ml',
    image: blackOpiumImg,
    duration: 4,
  },
  {
    id: 4,
    name: 'MYSLF EAU DE PARFUM',
    description: 'THE NEW MASCULINE REFILLABLE FRAGRANCE BY YSL. THE EXPRESSION OF THE MAN YOU ARE WITH ALL YOUR NUANCES',
    content: '100 ml',
    image: myslfImg,
    duration: 4,
  }
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
