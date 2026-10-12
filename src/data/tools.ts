// Facts taken from each vendor's official pages, read 12 Oct 2026. See the linked review for details and sources.
export type Tool = { slug: string; name: string; cat: 'plan' | 'render' | 'model' | 'business' | 'ai' | 'sketch'; free: 'yes' | 'trial' | 'no'; price: string; note: string };
export const tools: Tool[] = [
  { slug: 'foyr-neo', name: 'Foyr Neo', cat: 'render', free: 'trial', price: 'From $39/month (Basic)', note: '14-day free trial; render credits: 30 / 180 / unlimited by plan' },
  { slug: 'roomsketcher', name: 'RoomSketcher', cat: 'plan', free: 'yes', price: 'Pro $24/month, or $12/month billed $144/year', note: 'Free plan: 1 user, watermarked snapshots' },
  { slug: 'sketchup', name: 'SketchUp', cat: 'model', free: 'no', price: 'From $10.75/month (Go), Pro $33.25/month, billed annually', note: 'Education from $55/user/year' },
  { slug: 'sweet-home-3d', name: 'Sweet Home 3D', cat: 'plan', free: 'yes', price: 'Free, open source', note: 'Windows, macOS, Linux, iOS, Android and browser' },
  { slug: 'planner-5d', name: 'Planner 5D', cat: 'plan', free: 'yes', price: 'Premium $19.99/month or $59.99/year', note: 'Professional $49.99/month or $399.99/year' },
  { slug: 'cedreo', name: 'Cedreo', cat: 'plan', free: 'yes', price: 'Plan amounts not readable on the vendor page', note: 'Free, Personal, Pro and Enterprise plans' },
  { slug: 'coohom', name: 'Coohom', cat: 'plan', free: 'yes', price: 'Pro $29, Elite $69 (billing period not confirmed)', note: 'Free Basic plan; cloud rendering' },
  { slug: 'homestyler', name: 'Homestyler', cat: 'plan', free: 'yes', price: 'Pro+ from $6.8/month', note: 'Master+ from $11.8/month' },
  { slug: 'floorplanner', name: 'Floorplanner', cat: 'plan', free: 'yes', price: 'Credits from $8.15 (5 credits)', note: 'Free: 5 projects; subscription prices not readable' },
  { slug: 'live-home-3d', name: 'Live Home 3D', cat: 'plan', free: 'yes', price: 'Mac lifetime from $59.99; subscription from $19.99/year', note: 'Mac, Windows, iOS, Android' },
  { slug: 'chief-architect', name: 'Chief Architect Premier', cat: 'model', free: 'no', price: '$1,995/year or $229/month', note: 'Residential design and construction documents' },
  { slug: 'houzz-pro', name: 'Houzz Pro', cat: 'business', free: 'trial', price: 'Pricing page unavailable when checked', note: 'Free trial and free account offered' },
  { slug: 'designfiles', name: 'DesignFiles', cat: 'business', free: 'no', price: '55/month (e-Design), 75/month (Full Service)', note: '+$30/month per extra user' },
  { slug: 'enscape', name: 'Enscape', cat: 'render', free: 'no', price: 'Solo $47.90/month, billed annually', note: 'Premium $55.90/month billed annually' },
  { slug: 'lumion', name: 'Lumion', cat: 'render', free: 'no', price: 'Pro named user $1,149/year', note: 'Floating seat $1,499/year' },
  { slug: 'd5-render', name: 'D5 Render', cat: 'render', free: 'yes', price: 'Pro plans from $38/month', note: 'Free Community plan is non-commercial' },
  { slug: 'morpholio-trace', name: 'Morpholio Trace', cat: 'sketch', free: 'yes', price: 'In-app subscriptions $4.99–$24.99 (periods not stated)', note: 'iPhone and iPad' },
  { slug: 'magicplan', name: 'magicplan', cat: 'plan', free: 'no', price: 'Not published', note: 'Pay per project; works on phone or tablet' },
  { slug: 'blender', name: 'Blender', cat: 'model', free: 'yes', price: 'Free', note: 'General 3D tool, not interior-specific' },
  { slug: 'interior-ai', name: 'Interior AI', cat: 'ai', free: 'no', price: 'Pro $49/month, or $29/month billed yearly', note: 'Concept visuals, not construction drawings' },
];
