/**
 * Company information used across the site.
 *
 * Sources (checked Oct 2026):
 *  - aksarfoodmachine.com page title & meta description (phone, heritage)
 *  - Aksar Food Machine LLP's own catalogue/profile on IndiaMART (address, partner, GSTIN,
 *    business description, facilities, product listings and photographs)
 *
 * Anything not confirmed by those sources is either omitted or marked as "to confirm".
 */

export const site = {
  name: "Aksar Food Machine",
  legalName: "Aksar Food Machine LLP",
  url: "https://www.aksarfoodmachine.com",
  tagline: "Sweet & namkeen making machinery, built in Gujarat",
  description:
    "Aksar Food Machine LLP manufactures food processing machinery for sweets, namkeen, bakery and dairy products — laddu, peda, rasgulla, gulab jamun, halwa, khoya and namkeen machines from Wadhwan, Gujarat.",
  // Logo as published by the company on its catalogue profile (white background).
  logo: "https://5.imimg.com/data5/SELLER/Logo/2023/1/EE/JY/QT/512213/aksarfood-logo-white-background-120x120.jpg",
  phone: {
    display: "+91 93757 67788",
    href: "tel:+919375767788",
  },
  address: {
    line: "Wadhwan, Surendranagar",
    region: "Gujarat, India",
    full: "Wadhwan, Surendranagar, Gujarat, India",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Aksar+Food+Machine+LLP+Wadhwan+Surendranagar+Gujarat",
  partner: "Rajesh Vadgama",
  gstin: "24ABFFA6565L1Z6",
  heritage:
    "Rooted in Shri Sahajanand Industries, founded by Mr. N. M. Vadgama in the 1970s as a small-scale engineering unit.",
  // Export markets as listed on the company's own profile.
  exportMarkets: ["Sri Lanka", "Nepal", "Bangladesh", "United Kingdom", "United States"],
};

const FAC = "https://5.imimg.com/data5/SELLER/Default/2023/1";

/** Facility photographs published by the company (captions follow the company's own labels). */
export const facilityImages = {
  infrastructure: {
    src: `${FAC}/RQ/OB/FO/512213/whatsapp-image-2023-01-23-at-12-25-12-1000x1000.jpg`,
    alt: "Aksar Food Machine infrastructure",
    caption: "Infrastructure",
  },
  manufacturing: {
    src: `${FAC}/VP/FA/HK/512213/laser-02-20230123121908565-1000x1000.jpg`,
    alt: "Aksar Food Machine manufacturing unit",
    caption: "Manufacturing unit",
  },
  warehouse: {
    src: `${FAC}/HO/KI/VT/512213/laser-1-20230123121908738-1000x1000.jpg`,
    alt: "Aksar Food Machine warehouse",
    caption: "Warehouse",
  },
  team: {
    src: `${FAC}/CW/SQ/XA/512213/account-20230123121907883-1000x1000.jpg`,
    alt: "Aksar Food Machine infrastructure and team",
    caption: "Infrastructure & team",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/products/", label: "Products" },
  { href: "/manufacturing/", label: "Manufacturing" },
  { href: "/quality/", label: "Quality" },
  { href: "/contact/", label: "Contact" },
];
