export const UI = {
  en: {
    prefix: '', cats: { plan: 'Floor plans', render: 'Rendering', model: '3D modelling', business: 'Business management', ai: 'AI', sketch: 'Sketching' },
    free: { yes: 'Free plan', trial: 'Free trial', no: 'No free option' },
    review: 'Read review →', compare: 'Compare', price: 'Price', type: 'Type', notes: 'Notes', tool: 'Tool',
    src: 'Data from vendors’ official pages, read 12 Oct 2026. Prices in USD excluding tax unless stated.',
  },
  ru: {
    prefix: '/ru', cats: { plan: 'Планировка', render: 'Рендер', model: '3D-моделирование', business: 'Управление бизнесом', ai: 'ИИ', sketch: 'Скетчи' },
    free: { yes: 'Бесплатный тариф', trial: 'Пробный период', no: 'Без бесплатного тарифа' },
    review: 'Читать обзор →', compare: 'Сравнить', price: 'Цена', type: 'Тип', notes: 'Особенности', tool: 'Программа',
    src: 'Данные с официальных сайтов, на 12.10.2026. Цены в USD без налогов, если не указано иное.',
  },
} as const;
export const pairs: [string, string][] = [
  ['sketchup', 'blender'], ['sketchup', 'chief-architect'], ['sketchup', 'planner-5d'], ['roomsketcher', 'planner-5d'],
  ['roomsketcher', 'floorplanner'], ['cedreo', 'roomsketcher'], ['cedreo', 'planner-5d'], ['coohom', 'homestyler'],
  ['live-home-3d', 'sweet-home-3d'], ['enscape', 'lumion'], ['enscape', 'd5-render'], ['lumion', 'd5-render'],
  ['foyr-neo', 'd5-render'], ['houzz-pro', 'designfiles'], ['houzz-pro', 'desenta'], ['autocad', 'sketchup'],
  ['chief-architect', 'autocad'], ['homebyme', 'planner-5d'], ['magicplan', 'roomsketcher'], ['interior-ai', 'foyr-neo'],
];
