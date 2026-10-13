# Заявки в партнёрки — готовый набор

## Что вставлять в поля заявок
- Сайт: https://designtested.com
- Описание сайта (EN): Independent reviews and side-by-side comparisons of software and gear for interior designers and design studios. Content: product reviews, "best of" lists, comparison tool, buying guides. Languages: English, Russian.
- Аудитория: интерьерные дизайнеры, студии, ремонтные подрядчики, владельцы жилья. Источники трафика: органический поиск (SEO), контент. Платной рекламы по брендовым запросам нет.
- Раскрытие партнёрских ссылок: https://designtested.com/affiliate-disclosure/ ; конфиденциальность: /privacy/ ; контакты: /contact/
- Метод продвижения: обзоры, сравнения, гайды, ссылки в тексте и в таблицах сравнения.
- Не делаем: bidding на бренд-термины, купоны-спам, cookie stuffing.

## Порядок заявок (по приоритету)
1. Cedreo — FirstPromoter, 20% recurring
2. Planner 5D — 25%, 90 дней
3. Foyr Neo — 15/20/30%
4. Homestyler — до 30% первый год
5. D5 Render — Tolt, 10–20%
6. RoomSketcher — Impact, 30%
7. Live Home 3D — 30% Mac / 7% Win
8. Houzz Pro — PartnerStack, $100 фикс
9. Autodesk — CJ
10. Amazon Associates EU (для оборудования)

## Данные владельца для регистрации
Юрлицо/ИП и адрес, страна, VAT-номер, IBAN или PayPal, налоговая форма W-8BEN (для US-программ), e-mail hello@designtested.com.

## Search Console
1. search.google.com/search-console → Add property → Domain → designtested.com
2. Скопировать TXT-значение (google-site-verification=...) → Cloudflare DNS → Add record: Type TXT, Name @, Content = значение, Save → Verify.
3. Sitemaps → добавить sitemap-index.xml

## Supabase (оценки)
1. supabase.com → New project → в SQL Editor выполнить docs/supabase-setup.sql
2. Authentication → Providers → Email включён; Google — по OAuth-клиенту из Google Cloud (redirect URL из Supabase)
3. Authentication → URL Configuration → Site URL https://designtested.com
4. Project Settings → API → прислать Project URL и anon public key
Модерация: Table Editor → reviews → status pending → approved.
