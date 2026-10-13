export type Lang = 'en' | 'ru';

export const T = {
  en: {
    tagline: 'Tools for designers, tested before you buy.',
    nav: [
      { path: '/software/', label: 'Software & reviews' },
      { path: '/best/', label: 'Best of' },
      { path: '/gear/', label: 'Gear' },
      { path: '/news/', label: 'News' },
      { path: '/guides/', label: 'Guides' },
    ],
    footerDisclosure: 'Some links on this site may be affiliate links: if you buy through them we may earn a commission at no extra cost to you. It never changes our verdict.',
    disclosureLink: 'Read our disclosure',
    footerLinks: [
      { path: '/about/', label: 'About' },
      { path: '/how-we-test/', label: 'How we test' },
      { path: '/affiliate-disclosure/', label: 'Affiliate disclosure' },
      { path: '/privacy/', label: 'Privacy' },
      { path: '/contact/', label: 'Contact' },
    ],
    lastUpdated: 'Last updated',
    byTeam: 'By the DesignTested team',
    articleDisclosure: 'Disclosure: some links below are affiliate links. We may earn a commission if you buy through them, at no extra cost to you.',
    details: 'Details',
    soon: 'First articles in this section are on the way.',
    latest: 'Latest',
    switchTo: 'Русский',
    switchLabel: 'Читать по-русски',
  },
  ru: {
    tagline: 'Инструменты для дизайнеров: проверяем до покупки.',
    nav: [
      { path: '/software/', label: 'Каталог и обзоры' },
      { path: '/best/', label: 'Лучшее' },
      { path: '/gear/', label: 'Оборудование' },
      { path: '/news/', label: 'Новости' },
      { path: '/guides/', label: 'Гайды' },
    ],
    footerDisclosure: 'Часть ссылок на сайте может быть партнёрской: если вы купите по ним, мы можем получить комиссию без доплаты с вашей стороны. Это не влияет на наши выводы.',
    disclosureLink: 'Подробнее о партнёрских ссылках',
    footerLinks: [
      { path: '/about/', label: 'О проекте' },
      { path: '/how-we-test/', label: 'Как мы тестируем' },
      { path: '/affiliate-disclosure/', label: 'Партнёрские ссылки' },
      { path: '/privacy/', label: 'Конфиденциальность' },
      { path: '/contact/', label: 'Контакты' },
    ],
    lastUpdated: 'Обновлено',
    byTeam: 'Команда DesignTested',
    articleDisclosure: 'Раскрытие информации: часть ссылок ниже партнёрские. Если вы купите по ним, мы можем получить комиссию без доплаты с вашей стороны.',
    details: 'Подробнее',
    soon: 'Первые статьи в этом разделе скоро появятся.',
    latest: 'Новое',
    switchTo: 'English',
    switchLabel: 'Read in English',
  },
} as const;

export function altPath(pathname: string, lang: Lang): string {
  if (lang === 'en') return '/ru' + (pathname === '/' ? '/' : pathname);
  const p = pathname.replace(/^\/ru/, '');
  return p === '' ? '/' : p;
}
