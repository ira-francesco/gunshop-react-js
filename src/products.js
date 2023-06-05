import glock17 from "./assets/handguns/glock17.png";
import beretta92fs from "./assets/handguns/beretta92fs.png";
import coltm1911 from "./assets/handguns/coltm1911.png";
import smithwesson from "./assets/handguns/smithwesson.png";
import sigp226 from "./assets/handguns/sigsauerp226.png";

import ak12 from "./assets/rifles/ak12.png";
import m4 from "./assets/rifles/m4.png";
import mp5 from "./assets/rifles/mp5.png";
import p90 from "./assets/rifles/p90.png";
import saiga12 from "./assets/rifles/saiga12.png";

import a6094rs from "./assets/plate-carriers/6094a-rs-pc.png";
import cryeprecision from "./assets/plate-carriers/crye-precision-pc.png";
import defcon5 from "./assets/plate-carriers/defcon-5-pc.png";
import deltasix from "./assets/plate-carriers/delta-six-pc.png";
import warriorrecon from "./assets/plate-carriers/warrior-recon-pc.png";

export const handguns = [
  {
    name: "Glock 17",
    price: 499.99,
    image: glock17
  },
  {
    name: "Beretta 92FS",
    price: 399.99,
    image: beretta92fs
  },
  {
    name: "Colt M1911",
    price: 419.99,
    image: coltm1911
  },
  {
    name: "Sig Sauer P226",
    price: 549.99,
    image: smithwesson
  },
  {
    name: "Smith & Wesson M&P",
    price: 329.99,
    image: sigp226
  }
];

export const rifles = [
  {
    name: "AK 12",
    price: 3599.99,
    image: ak12
  },
  {
    name: "M4",
    price: 4215,
    image: m4
  },
  {
    name: "Heckler & Koch MP5",
    price: 2300,
    image: mp5
  },
  {
    name: "P90",
    price: 3249.99,
    image: p90
  },
  {
    name: "SAIGA 12",
    price: 2550.55,
    image: saiga12
  }
];

export const plateCarriers = [
  {
    name: "DEFCON 5 COMBAT VEST",
    price: 99.99,
    image: defcon5
  },
  {
    name: "CRYE PRECISION JUMPABLE",
    price: 80.0,
    image: cryeprecision
  },
  {
    name: "6094A-RS",
    price: 119.99,
    image: a6094rs
  },
  {
    name: "DELTA SIX RANGER LC",
    price: 125,
    image: deltasix
  },
  {
    name: "RECON WARRIOR",
    price: 109,
    image: warriorrecon
  }
];
