/**
 * Product catalogue for the demo.
 *
 * Product names, descriptions and specifications are taken from Aksar Food Machine LLP's own
 * published product listings. Photos are the company's own product photographs.
 * Products without a published photo show a neutral "photo to be supplied" panel instead of
 * an unrelated stock image. Where a listing gave conflicting figures, the figure was left out.
 *
 * To add a product later (or load from a CMS/API), keep the same `Product` shape.
 */

export type CategorySlug =
  | "laddu-rounding"
  | "rasgulla-gulabjamun"
  | "peda-moulding"
  | "cooking-mixing"
  | "portioning-cutting"
  | "namkeen-frying";

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  description: string;
  /** slug of the product whose photo represents the category */
  coverProduct: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  /** Company product photographs. Empty = photo to be supplied. */
  images: string[];
  summary: string;
  overview: string;
  features: string[];
  applications: string[];
  /** Specifications as published by the company. Empty = to be confirmed. */
  specs: Spec[];
  featured?: boolean;
}

const IMG = "https://5.imimg.com/data5/SELLER/Default/2026/5";
const img = (path: string) => `${IMG}/${path}-500x500.jpg`;

export const categories: Category[] = [
  {
    slug: "laddu-rounding",
    name: "Laddu & Rounding Machines",
    short: "Laddu",
    description:
      "Portion, cut and shape sweet mixtures into uniform balls — laddu, motichur laddu and boondi.",
    coverProduct: "laddu-making-machine",
  },
  {
    slug: "rasgulla-gulabjamun",
    name: "Rasgulla, Rasmalai & Gulab Jamun",
    short: "Rasgulla",
    description:
      "Cutting and rounding machines for chenna and khoya based sweets, with rasmalai tikki attachments.",
    coverProduct: "gulabjamun-making-machine",
  },
  {
    slug: "peda-moulding",
    name: "Peda, Modak & Moulding",
    short: "Peda",
    description:
      "Forming, designing and pressing machines for peda, modak, sandesh, cookies and mamoul.",
    coverProduct: "peda-forming-machine",
  },
  {
    slug: "cooking-mixing",
    name: "Halwa, Khoya & Mixing",
    short: "Khoya",
    description:
      "Jacketed baking, roasting and mixing machines with agitator arms for halwa, khoya and besan.",
    coverProduct: "ss-halwa-making-machine",
  },
  {
    slug: "portioning-cutting",
    name: "Portioning & Cutting",
    short: "Cutting",
    description:
      "Automatic gulla cutting and kaju katli cutting machines for equal portions at volume.",
    coverProduct: "ss-gulla-cutting-machine",
  },
  {
    slug: "namkeen-frying",
    name: "Namkeen & Frying Systems",
    short: "Namkeen",
    description:
      "Namkeen plants, extruder heads, kachori and gulab jamun fryers and commercial frying kadai.",
    coverProduct: "fully-automatic-namkeen-making-plant",
  },
];

export const products: Product[] = [
  // ───────────── Laddu & rounding ─────────────
  {
    slug: "laddu-making-machine",
    name: "Laddu Making Machine",
    category: "laddu-rounding",
    images: [img("605960111/OM/GG/VU/512213/laddu-making-machine")],
    summary:
      "Multi-purpose machine that portions, cuts and shapes sweet mixture into round laddu.",
    overview:
      "A multi-purpose laddu machine that portions the prepared food mixture, cuts it and shapes it into balls before placing them onto trays — bringing consistency to one of the most labour-intensive steps in sweet production.",
    features: [
      "Portions, cuts and rounds the mixture in one process",
      "Places finished pieces onto trays",
      "Uniform piece size and shape",
      "Built for the sweet making industry",
    ],
    applications: ["Besan laddu", "Boondi laddu", "Dry fruit laddu", "Other ball-shaped sweets"],
    specs: [
      { label: "Production capacity", value: "Up to 4,000 pcs/hour" },
      { label: "Voltage", value: "220 V" },
      { label: "Automation", value: "Automatic" },
      { label: "Usage", value: "Sweet making industry" },
    ],
    featured: true,
  },
  {
    slug: "motichur-laddu-making-machine",
    name: "Motichur Laddu Making Machine",
    category: "laddu-rounding",
    images: [img("605407358/AQ/YU/HX/512213/motichur-laddu-making-machine")],
    summary: "Fully automatic machine for portioning and rounding motichur laddu.",
    overview:
      "A fully automatic laddu machine for motichur, portioning and rounding the prepared mixture into evenly sized laddu for continuous production.",
    features: [
      "Fully automatic operation",
      "Portions, cuts and shapes into balls",
      "Consistent laddu size",
    ],
    applications: ["Motichur laddu", "Boondi laddu"],
    specs: [
      { label: "Production capacity", value: "5,000 pcs/hour" },
      { label: "Motor power", value: "1 HP" },
      { label: "Automation", value: "Fully automatic" },
    ],
  },
  {
    slug: "automatic-laddu-boondi-dana-making-machine",
    name: "Automatic Laddu Boondi Dana Making Machine",
    category: "laddu-rounding",
    images: [img("605382738/NL/UE/HY/512213/automatic-laddu-boondi-dana-making-machine")],
    summary: "Automatic machine for producing boondi dana for laddu at volume.",
    overview:
      "An automatic boondi dana machine for producing the fine boondi used in laddu, designed to keep up with production lines that need boondi in quantity.",
    features: ["Fully automatic operation", "Suited to continuous daily production"],
    applications: ["Boondi for laddu", "Motichur", "Boondi-based sweets"],
    specs: [
      { label: "Production capacity", value: "50 kg/hour" },
      { label: "Daily capacity", value: "1,000 kg/day" },
      { label: "Automation", value: "Automatic" },
    ],
  },
  {
    slug: "multipurpose-rounder-machine",
    name: "Multipurpose Rounder Machine",
    category: "laddu-rounding",
    images: [],
    summary: "Cuts and rounds laddu, rasgulla, gulab jamun and other sweets.",
    overview:
      "A fully automatic multipurpose rounder that cuts and rounds a wide range of sweets — one machine that can serve several product lines.",
    features: [
      "Fully automatic",
      "Handles laddu, rasgulla, gulab jamun and more",
      "Can be combined with a peda pressing machine",
    ],
    applications: ["Laddu", "Rasgulla", "Gulab jamun", "Other round sweets"],
    specs: [
      { label: "Production capacity", value: "5,000 pcs/hour" },
      { label: "Motor power", value: "1 HP" },
      { label: "Automation", value: "Fully automatic" },
    ],
    featured: true,
  },

  // ───────────── Rasgulla / gulab jamun ─────────────
  {
    slug: "gulabjamun-making-machine",
    name: "Gulab Jamun Making Machine",
    category: "rasgulla-gulabjamun",
    images: [img("605380033/ZM/JN/SX/512213/gulabjamun-making-machine")],
    summary: "Automatic portioning and rounding for gulab jamun at high volume.",
    overview:
      "An automatic machine that portions and rounds gulab jamun dough into consistent balls. The same principle serves other sweets, confectionery and bakery items that need round pieces.",
    features: [
      "Automatic portioning and rounding",
      "Adjustable ball size",
      "Suitable for sweets, confectionery and bakery items",
    ],
    applications: ["Gulab jamun", "Kala jamun", "Round confectionery", "Bakery dough balls"],
    specs: [
      { label: "Production capacity", value: "10,000 pcs/hour" },
      { label: "Ball size", value: "5 – 15 g" },
      { label: "Motor power", value: "0.5 HP" },
      { label: "Automation", value: "Automatic" },
    ],
    featured: true,
  },
  {
    slug: "rasgulla-making-machine",
    name: "Rasgulla Making Machine",
    category: "rasgulla-gulabjamun",
    images: [],
    summary: "Cuts and rounds rasgulla, gulab jamun, rasmalai and many other sweets.",
    overview:
      "A cutting and rounding machine for rasgulla that also serves gulab jamun, rasmalai and many other sweets and food items. It can be paired with the Rasmalai Making Machine attachment.",
    features: [
      "Cuts and rounds in one process",
      "Works with chenna and khoya based mixtures",
      "Compatible with rasmalai tikki attachment",
    ],
    applications: ["Rasgulla", "Rasmalai", "Gulab jamun", "Chenna sweets"],
    specs: [
      { label: "Production capacity", value: "10,000 pcs/hour" },
      { label: "Piece weight", value: "10 – 25 g" },
      { label: "Shape", value: "Round" },
    ],
    featured: true,
  },
  {
    slug: "sweets-making-machine-rasmalai",
    name: "Sweets Making Machine (Rasmalai)",
    category: "rasgulla-gulabjamun",
    images: [img("605379750/VE/BE/CL/512213/sweets-making-machine-rasmalai")],
    summary: "Portions and rounds sweet mixtures into round pieces for rasmalai.",
    overview:
      "A sweets making machine that portions and rounds the mixture into round pieces, configured here for rasmalai production.",
    features: ["Portioning and rounding", "Round shapes with consistent size"],
    applications: ["Rasmalai", "Rasgulla", "Round chenna sweets"],
    specs: [
      { label: "Capacity", value: "1,000 kg/day" },
      { label: "Heating source", value: "Gas" },
    ],
  },
  {
    slug: "rasmalai-making-machine",
    name: "Rasmalai Making Machine",
    category: "rasgulla-gulabjamun",
    images: [],
    summary: "PLC-based attachment that makes rasmalai tikki from chenna or rasgulla.",
    overview:
      "A rasmalai machine that forms rasmalai tikki (patties) from chenna or rasgulla. It attaches to the Rasgulla Making Machine and is PLC based for repeatable operation.",
    features: [
      "Forms rasmalai tikki (patty shape)",
      "Attaches to the Rasgulla Making Machine",
      "PLC based control",
      "Stainless steel construction",
    ],
    applications: ["Rasmalai", "Chenna patties"],
    specs: [
      { label: "Heating source", value: "Electric" },
      { label: "Motor power", value: "1 HP" },
      { label: "Material", value: "Stainless steel" },
      { label: "Control", value: "PLC based" },
    ],
  },

  // ───────────── Peda & moulding ─────────────
  {
    slug: "peda-forming-machine",
    name: "Peda Forming Machine",
    category: "peda-moulding",
    images: [img("605410722/FO/PO/GG/512213/peda-forming-machine")],
    summary: "Forms peda, sandesh, cookies and mamoul with a full SS 304 body.",
    overview:
      "An automatic peda forming machine for designing sweets and bakery items such as peda, sandesh, cookies and mamoul. A full SS 304 body and controlled forming give consistent piece size, shape and weight.",
    features: [
      "Full SS 304 body",
      "Consistent piece size, shape and weight",
      "Suits sweets and bakery items",
      "Automatic operation",
    ],
    applications: ["Peda", "Sandesh", "Cookies", "Mamoul"],
    specs: [
      { label: "Production capacity", value: "3,000 pcs/hour" },
      { label: "Voltage", value: "220 V" },
      { label: "Body material", value: "SS 304" },
      { label: "Automation", value: "Automatic" },
    ],
    featured: true,
  },
  {
    slug: "peda-designing-forming-machine",
    name: "Peda Designing & Forming Machine",
    category: "peda-moulding",
    images: [img("605409110/KQ/GV/NM/512213/peda-designing-forming-machine")],
    summary: "Forming, stamping and moulding with designer dies for decorated sweets.",
    overview:
      "A peda forming, stamping and moulding machine that cuts equal portions from a pre-conditioned mixture and presses them with designer dies — for decorated sweets and bakery items.",
    features: [
      "Equal portions from pre-conditioned mixture",
      "Designer die attachment for patterned pieces",
      "Forming, stamping and moulding in one machine",
    ],
    applications: ["Designer peda", "Sandesh", "Cookies", "Mamoul"],
    specs: [
      { label: "Production capacity", value: "3,000 pcs/hour" },
      { label: "Piece weight", value: "10 – 25 g" },
      { label: "Motor power", value: "0.5 HP" },
      { label: "Automation", value: "Automatic" },
    ],
  },
  {
    slug: "ss-peda-making-machine-double-screw",
    name: "SS Peda Making Machine – Double Screw",
    category: "peda-moulding",
    images: [img("605412311/QT/XF/ZQ/512213/ss-peda-making-machine-double-screw")],
    summary: "Double-screw peda machine with full SS 304 body for consistent output.",
    overview:
      "A double-screw peda making machine for designing sweets and bakery items such as peda, sandesh, cookies and mamoul, with a full SS 304 body for hygienic operation.",
    features: [
      "Double screw feed",
      "Full SS 304 body",
      "Consistent piece size, shape and weight",
    ],
    applications: ["Peda", "Sandesh", "Cookies", "Mamoul"],
    specs: [
      { label: "Production capacity", value: "3,000 pcs/hour" },
      { label: "Motor power", value: "1 HP" },
      { label: "Body material", value: "SS 304" },
      { label: "Automation", value: "Automatic" },
    ],
  },
  {
    slug: "modak-making-machine",
    name: "Modak Making Machine",
    category: "peda-moulding",
    images: [img("605378736/MG/FC/UI/512213/modak-making-machine")],
    summary: "Forming and moulding machine with designer die for modak.",
    overview:
      "A forming, stamping and moulding machine set up for modak. It cuts equal portions from a pre-conditioned mixture and shapes them using a designer die attachment and pressing technology.",
    features: [
      "Designer die attachment",
      "Equal portioning before moulding",
      "Automatic operation",
    ],
    applications: ["Modak", "Moulded sweets", "Bakery items"],
    specs: [
      { label: "Production capacity", value: "4,000 pcs/hour" },
      { label: "Piece weight", value: "10 – 25 g" },
      { label: "Heating source", value: "Electric" },
      { label: "Automation", value: "Automatic" },
    ],
    featured: true,
  },
  {
    slug: "peda-pressing-machine",
    name: "Peda Pressing Machine",
    category: "peda-moulding",
    images: [],
    summary: "Presses flat-shaped peda; attaches to a ball former or multipurpose rounder.",
    overview:
      "A peda pressing machine that presses round pieces into flat-shaped peda. It can be attached after a ball forming machine or multipurpose rounder to extend an existing line.",
    features: [
      "Flat-shaped peda pressing",
      "Attaches to ball forming machine or multipurpose rounder",
      "SS 304 body",
    ],
    applications: ["Flat peda", "Pressed sweets"],
    specs: [
      { label: "Production capacity", value: "4,000 pcs/hour" },
      { label: "Piece weight", value: "15 – 30 g" },
      { label: "Motor power", value: "0.5 HP" },
      { label: "Body material", value: "SS 304" },
    ],
  },

  // ───────────── Cooking & mixing ─────────────
  {
    slug: "ss-halwa-making-machine",
    name: "SS Halwa Making Machine",
    category: "cooking-mixing",
    images: [img("605390835/KH/SD/PY/512213/ss-halwa-making-machine")],
    summary: "Bakes while stirring with two agitator arms; also mixes slurries and liquids.",
    overview:
      "A stainless steel halwa machine that bakes material while stirring it with two agitator arms. Beyond halwa, it can mix slurries and liquids — a versatile cooking vessel for sweet kitchens.",
    features: [
      "Two agitator arms",
      "Bakes while stirring",
      "Also mixes slurries and liquids",
      "Stainless steel construction",
    ],
    applications: ["Halwa", "Sweet mixtures", "Slurries and liquid mixes"],
    specs: [
      { label: "Capacity", value: "200 L" },
      { label: "Heating source", value: "Electric" },
      { label: "Motor power", value: "1 HP" },
      { label: "Material", value: "Stainless steel" },
    ],
    featured: true,
  },
  {
    slug: "khoya-making-machine",
    name: "Khoya Making Machine",
    category: "cooking-mixing",
    images: [img("605960327/DX/DZ/IW/512213/khoya-making-machine")],
    summary: "Bakes, roasts and mixes milk into khoya with a two-agitator arm.",
    overview:
      "A khoya making machine that bakes, roasts and mixes with a two-agitator arm, reducing the manual stirring traditionally needed to make khoya from milk.",
    features: ["Two-agitator arm", "Baking, roasting and mixing", "Reduces manual stirring"],
    applications: ["Khoya / mawa", "Milk-based sweets", "Halwa mixtures"],
    specs: [{ label: "Capacity", value: "200 L" }],
  },
  {
    slug: "besan-mixing-machine",
    name: "Besan Mixing Machine",
    category: "cooking-mixing",
    images: [img("605961916/JX/JZ/BO/512213/besan-mixing-machine")],
    summary: "Baking, roasting and mixing machine with two-agitator arm for besan and halwa.",
    overview:
      "A baking, roasting and mixing machine with a two-agitator arm, used for besan and halwa mixtures and able to handle other food mixtures as well.",
    features: ["Two-agitator arm", "Roasting and mixing", "Stainless steel bowl"],
    applications: ["Besan roasting", "Halwa mixtures", "Other food mixtures"],
    specs: [
      { label: "Bowl capacity", value: "150 L" },
      { label: "Material", value: "Stainless steel" },
      { label: "Power", value: "Electric" },
    ],
  },

  // ───────────── Portioning & cutting ─────────────
  {
    slug: "ss-gulla-cutting-machine",
    name: "SS Gulla Cutting Machine",
    category: "portioning-cutting",
    images: [img("605958922/ND/AB/DP/512213/ss-gulla-cutting-machine")],
    summary: "Fully automatic portioning of equal pieces from pre-conditioned mixture.",
    overview:
      "A fully automatic gulla cutting machine that portions equal pieces from a pre-conditioned mixture in large quantities — the starting point for many ball and moulded sweets.",
    features: [
      "Fully automatic portioning",
      "Equal-weight pieces",
      "Stainless steel construction",
    ],
    applications: ["Dough portioning", "Gulla for laddu and peda", "Sweet and bakery mixtures"],
    specs: [
      { label: "Dough ball weight", value: "20 g" },
      { label: "Automation", value: "Automatic" },
    ],
    featured: true,
  },
  {
    slug: "gulla-cutting-machine",
    name: "Gulla Cutting Machine",
    category: "portioning-cutting",
    images: [img("605411695/IZ/KJ/IQ/512213/gulla-cutting-machine")],
    summary: "Portioning machine for cutting equal gulla from sweet mixtures.",
    overview:
      "A gulla cutting (portioning) machine for cutting equal pieces from prepared sweet and food mixtures before rounding, pressing or moulding.",
    features: ["Equal portioning", "Feeds rounding and moulding machines"],
    applications: ["Sweet mixtures", "Dough portioning"],
    specs: [],
  },
  {
    slug: "kaju-katli-cutting-machine",
    name: "Kaju Katli Cutting Machine",
    category: "portioning-cutting",
    images: [],
    summary: "Automatic sheet cutting for uniform, hygienic kaju katli.",
    overview:
      "An automatic kaju katli cutting machine that cuts sheets into uniform pieces, improving consistency, hygiene and throughput over manual cutting.",
    features: ["Automatic sheet cutting", "Uniform piece size", "Hygienic handling"],
    applications: ["Kaju katli", "Barfi", "Sheet-type sweets"],
    specs: [
      { label: "Cutting capacity", value: "100 – 200 kg/hour" },
      { label: "Motor power", value: "2 HP" },
      { label: "Automation", value: "Automatic" },
    ],
  },

  // ───────────── Namkeen & frying ─────────────
  {
    slug: "fully-automatic-namkeen-making-plant",
    name: "Fully Automatic Namkeen Making Plant",
    category: "namkeen-frying",
    images: [img("605961132/DO/LU/EN/512213/fully-automatic-namkeen-making-plant")],
    summary: "Pneumatic frying-kadai system for hygienic, large-scale namkeen production.",
    overview:
      "A fully automatic namkeen plant that extrudes gram flour dough directly into a pneumatic frying kadai system — designed for efficient, hygienic, large-scale namkeen production.",
    features: [
      "Extrudes gram flour dough",
      "Pneumatic frying kadai system",
      "Suitable for all namkeen types",
    ],
    applications: ["Sev", "Bhujia", "Papdi", "Other gram-flour namkeen"],
    specs: [
      { label: "Namkeen type", value: "All types" },
      { label: "Automation", value: "Automatic" },
    ],
    featured: true,
  },
  {
    slug: "double-head-namkeen-making-machine",
    name: "Double Head Namkeen Making Machine",
    category: "namkeen-frying",
    images: [],
    summary: "Dual-head pneumatic system for faster sev, bhujia and papdi output.",
    overview:
      "A dual-head pneumatic namkeen machine with a robust motor, built for faster output and consistent quality across sev, bhujia and papdi varieties.",
    features: ["Dual extrusion heads", "Pneumatic operation", "Consistent quality"],
    applications: ["Nylon sev", "Ratlami sev", "Bhujia sev", "Papdi"],
    specs: [
      { label: "Capacity", value: "100 kg/hour" },
      { label: "Heating source", value: "Gas" },
      { label: "Automation", value: "Semi-automatic" },
    ],
  },
  {
    slug: "automatic-kachori-frying-machine",
    name: "Automatic Kachori Frying Machine",
    category: "namkeen-frying",
    images: [img("605690373/OJ/YG/FW/512213/automatic-kachori-frying-machine")],
    summary: "Batch fryer that fries sweets and snacks evenly without breaking them.",
    overview:
      "An automatic batch fryer that fries sweets and snacks evenly and gently so pieces are not broken, with an emphasis on hygiene and energy efficiency.",
    features: ["Even, gentle frying", "Hygienic operation", "Energy-efficient design"],
    applications: ["Mini kachori", "Mini samosa", "Fried snacks"],
    specs: [
      { label: "Capacity", value: "500 pcs/hour" },
      { label: "Type", value: "Batch fryer" },
      { label: "Heating source", value: "Gas" },
    ],
  },
  {
    slug: "automatic-gulab-jamun-fryer",
    name: "Automatic Gulab Jamun Fryer",
    category: "namkeen-frying",
    images: [img("605381039/LN/PS/HL/512213/automatic-gulab-jamun-fryer")],
    summary: "Automatic fryer for uniform gulab jamun with SS 304 or anodised parts.",
    overview:
      "An automatic gulab jamun fryer with stainless steel SS 304 or anodised contact parts, giving uniform size, shape and weight with a simple weight-setting mechanism and hygienic operation.",
    features: [
      "SS 304 or anodised parts",
      "Uniform size, shape and weight",
      "Simple weight-setting mechanism",
      "Saves labour and power",
      "Easy to operate",
    ],
    applications: ["Gulab jamun", "Kala jamun", "Fried round sweets"],
    specs: [
      { label: "Production capacity", value: "3,000 pcs/hour" },
      { label: "Batch capacity", value: "10 kg per batch" },
      { label: "Ball size range", value: "15 – 30 g" },
      { label: "Automation", value: "Automatic" },
    ],
    featured: true,
  },
  {
    slug: "frying-kadai",
    name: "Automatic Frying Kadai",
    category: "namkeen-frying",
    images: [img("605689845/BA/MO/ZS/512213/commercial-frying-kadai")],
    summary: "Commercial frying kadai for sweet and namkeen kitchens.",
    overview:
      "A commercial frying kadai for sweet and namkeen production kitchens. Contact Aksar for available sizes and heating options.",
    features: ["Commercial-duty build", "For sweets and namkeen"],
    applications: ["Namkeen frying", "Sweet frying", "Snack production"],
    specs: [],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const featuredProducts = products.filter((p) => p.featured && p.images.length);
export const productsInCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug);

export function relatedProducts(product: Product, count = 4) {
  const same = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  const others = products.filter((p) => p.category !== product.category && p.images.length);
  return [...same, ...others].slice(0, count);
}
