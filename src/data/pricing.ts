// Numeric prices in USD, per user, taken from the plan named in `plan`, as published by the vendor (read Oct 2026). See the review for sources.
// monthly = price if billed month by month; yearly = total per year if billed annually (monthly equivalent x 12 as published). Missing = not published for that billing.
export type Price = { slug: string; plan: string; monthly?: number; yearly?: number; once?: number; cur?: 'EUR' };
export const pricing: Price[] = [
  { slug: 'roomsketcher', plan: 'Pro', monthly: 24, yearly: 144 },
  { slug: 'sketchup', plan: 'Go', monthly: 19.99, yearly: 129 },
  { slug: 'planner-5d', plan: 'Premium', monthly: 19.99, yearly: 59.99 },
  { slug: 'cedreo', plan: 'Pro', monthly: 59, yearly: 468 },
  { slug: 'coohom', plan: 'Pro', monthly: 29, yearly: 300 },
  { slug: 'chief-architect', plan: 'Premier', monthly: 229, yearly: 1995 },
  { slug: 'enscape', plan: 'Solo', yearly: 574.8 },
  { slug: 'lumion', plan: 'Pro named user', yearly: 1149 },
  { slug: 'd5-render', plan: 'Pro', yearly: 360 },
  { slug: 'autocad', plan: 'AutoCAD', monthly: 260, yearly: 2095 },
  { slug: 'homebyme', plan: 'Essentials', monthly: 29, yearly: 300 },
  { slug: 'interior-ai', plan: 'Pro', monthly: 49, yearly: 348 },
  { slug: 'desenta', plan: 'Core (our own product), in EUR', monthly: 19, cur: 'EUR' },
  { slug: 'houzz-pro', plan: 'Design', monthly: 99 },
  { slug: 'designfiles', plan: 'e-Design', monthly: 55 },
  { slug: 'foyr-neo', plan: 'Basic', monthly: 39 },
  { slug: 'floorplanner', plan: 'Plus', monthly: 5 },
  { slug: 'live-home-3d', plan: 'Mac lifetime (from)', once: 59.99 },
];
