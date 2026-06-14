import crownInitialImage from '../../imports/DISPLAY_.jpeg';
import angelPearlImage from '../../imports/DISPLAY_CELESTIAL.jpeg';
import goldenShieldImage from '../../imports/DISPLAY_SMOKE.png';
import silverEyeImage from '../../imports/DISPLAY_BROWN.jpeg';
import orbitalStarImage from '../../imports/DISPLAY_ACERO.jpeg';
import dnaCrownImage from '../../imports/DISPLAY_RED.jpeg';
import racingJacketImage from '../../imports/DISPLAY.jpeg';
import essentialJsImage from '../../imports/DISPLAY_PEARL.jpeg';

export interface Product {
  id: string;
  name: string;
  price: number;
  color: string;
  image: string | null;
  soldOut: boolean;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'orbital-star-tee',
    name: 'Orbital Star Tee',
    price: 180,
    color: 'ACERO',
    image: orbitalStarImage,
    soldOut: false,
    category: 'T-SHIRTS',
    description: 'Built to orbit greatness. The Orbital Star Tee in Acero is a statement in motion — cool, precise, unstoppable.',
  },
  {
    id: 'essential-js-tee',
    name: 'Essential Js Tee',
    price: 180,
    color: 'PEARL',
    image: essentialJsImage,
    soldOut: false,
    category: 'T-SHIRTS',
    description: 'The foundation of the JHESE wardrobe. Clean lines, premium weight, and the quiet confidence of those who need no introduction.',
  },
  {
    id: 'silver-eye-tee',
    name: 'Silver Eye Tee',
    price: 180,
    color: 'CHOCOLATE',
    image: silverEyeImage,
    soldOut: false,
    category: 'T-SHIRTS',
    description: 'All-seeing. All-knowing. The Silver Eye Tee carries a watchful presence in a rich chocolate colorway.',
  },
  {
    id: 'angel-legacy-tee',
    name: 'Angel Legacy Tee',
    price: 180,
    color: 'PEARL',
    image: angelPearlImage,
    soldOut: true,
    category: 'T-SHIRTS',
    description: 'Celestial in design, grounded in intention. The Angel Legacy Tee is built for those who move with divine purpose.',
  },
  {
    id: 'crown-initial-tee',
    name: 'Crown Initial Tee',
    price: 180,
    color: 'GRAPHITE BLACK',
    image: crownInitialImage,
    soldOut: true,
    category: 'T-SHIRTS',
    description: 'A signature piece bearing the JHESE crown insignia. Crafted from premium heavyweight cotton for those who wear their legacy.',
  },
  {
    id: 'dna-crown-tee',
    name: 'DNA Crown Tee',
    price: 180,
    color: 'PREMIUM BLACK',
    image: dnaCrownImage,
    soldOut: true,
    category: 'T-SHIRTS',
    description: 'Legacy is coded into your DNA. This tee is a declaration — your bloodline, your crown, your empire.',
  },
  {
    id: 'racing-jacket',
    name: 'Racing Jacket',
    price: 320,
    color: 'DARK JEAN',
    image: racingJacketImage,
    soldOut: true,
    category: 'OUTERWEAR',
    description: 'Speed meets luxury. The Racing Jacket in Dark Jean is engineered for those who move fast and leave a mark.',
  },
  {
    id: 'golden-shield-tee',
    name: 'Golden Shield Tee',
    price: 180,
    color: 'GRAPHITE BLACK',
    image: goldenShieldImage,
    soldOut: true,
    category: 'T-SHIRTS',
    description: 'Protection through identity. The Golden Shield Tee merges armor symbolism with luxury streetwear construction.',
  },
];
