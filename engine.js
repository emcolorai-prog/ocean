/* Bawadi Al Dain — shared site engine: content, AI concierge, 3D globe, 3D explorer, gallery */
(function () {
  "use strict";
  var IMG = "https://bawadialdaingroup.com/assets/";
  var D = {
    core: [
      { id: "gum", name: "Gum Arabic", ar: "الصمغ العربي", img: "img/photos/gum-arabic-raw-thumb.jpg", text: "Natural acacia gum for food, beverage and pharmaceutical use.", tag: "Forest product" },
      { id: "talha", name: "Gum Talha", ar: "صمغ الطلح", img: "img/photos/gum-talha-sacks-thumb.jpg", text: "Cleaned, sifted and packed in company sacks.", tag: "Forest product" },
      { id: "sorghum", name: "Sorghum", ar: "الذرة الرفيعة", img: "img/photos/sorghum-heads-thumb.jpg", text: "Grain for food and animal feed.", tag: "Grain" },
      { id: "livestock", name: "Livestock", ar: "المواشي", img: "img/photos/cattle-pen-thumb.jpg", text: "Cattle, sheep and camels, shipped to the destination’s veterinary and import rules.", tag: "Live animals" }
    ],
    lines: [
      { n: "01", name: "Agricultural products", img: "img/brochure/spread-agriculture.jpg", text: "Groundnuts, sesame, sunflower, fruit and vegetables, forage and commercial crops." },
      { n: "02", name: "Cattle & sheep", img: "img/brochure/spread-cattle-sheep.jpg", text: "Standing herds, fattening and large-scale exports." },
      { n: "03", name: "Camels", img: "img/brochure/spread-camels.jpg", text: "Sourced and supplied mainly from Sudan." },
      { n: "04", name: "Forest products", img: "img/brochure/spread-gum-arabic.jpg", text: "Hashab and Talha gum, with plantations since 2001." },
      { n: "05", name: "Grains & oilseeds", img: "img/brochure/spread-grains-oilseeds.jpg", text: "Peanuts, sesame, sunflower, hibiscus, baobab, chickpeas, pigeon peas, watermelon seeds, peanut cake." },
      { n: "06", name: "Meat processing", img: "img/brochure/spread-meat.jpg", text: "Slaughter and processing for export and domestic markets, with a Halal, ISO and HACCP focus." }
    ],
    sudan: [
      { name: "Agriculture", img: "img/brochure/grains.jpg", text: "500+ acres of pivot-irrigated land in West Omdurman, 1,800 acres of peanut land in East Darfur and 1,100 in Kordofan, plus 14,000 contract farmers." },
      { name: "Oils", img: "img/brochure/sunflower-oil.jpg", text: "Al-Sultan Oil Factory at Al-Baqir: 375 MT/day crushing, 22,000 m² site, 11,000 m² storage." },
      { name: "Livestock", img: "img/brochure/bull.jpg", text: "Standing herds, fattening yards and large-scale cattle, sheep and camel exports." },
      { name: "Darfur groundnuts", img: "img/brochure/peanuts.jpg", text: "Darfur provides about two-thirds of Sudan’s groundnut harvest; Sudan produces over one million tons of peanuts a year." }
    ],
    facilities: [
      { name: "Hullers · East Darfur", v: "8 units", d: "5 MT/hour · 15,000 m²" },
      { name: "Sorters · Omdurman", v: "4 units", d: "5 MT/hour · 6,000 m²" },
      { name: "SMA Sorting · Al-Baqir", v: "8 MT/h", d: "5,000 m²" },
      { name: "Al-Sultan Oil Factory", v: "375 MT/day", d: "22,000 m² · 11,000 m² storage" },
      { name: "Mahboub Animal Feed", v: "Omdurman", d: "Feed pellets" },
      { name: "Al-Kadaro Meat Complex", v: "Khartoum", d: "Halal · ISO · HACCP focus" }
    ],
    stats: [
      { v: 14000, s: "", l: "contract farmers in Sudan" },
      { v: 375, s: " MT", l: "crushed per day at Al-Sultan Oil" },
      { v: 50000, s: "", l: "head capacity in Brakna, Mauritania" },
      { v: 2001, s: "", l: "gum plantations since", raw: true }
    ],
    entities: [
      { c: "UAE", n: "Bawadi Al Dain General Trading L.L.C", d: "Commercial & export arm · Al Garhoud, Deira, Dubai" },
      { c: "Sudan", n: "Bawadi Al Dain Animal & Agricultural Production Co. Ltd", d: "Khartoum 2, Street 47 · farms, oil, feed and meat" },
      { c: "Mauritania", n: "Arrahma SARL · Mauritania Meat Company (MMC)", d: "Tavragh Zeina, Nouakchott · +222 41 32 08 98 · land in Boghé/Aleg since 2023" },
      { c: "Kenya", n: "Al-Rahma for Development and Animal & Agricultural Production Co.", d: "P.O. Box 7395, 00109, Nairobi" },
      { c: "Iraq", n: "Al-Qafila Al-Baidaa (JV)", d: "Erbil, Kurdistan · +964 751 561 9999" },
      { c: "Somaliland", n: "Livestock facilities", d: "Under development" }
    ],
    gallery: [
      ["media/bawadi/sheep-flock-poster.jpg", "Flock of sheep with herder", "0:05"],
      ["media/bawadi/gum-talha-sack-thumb.jpg", "Gum talha sack, cleaned and sifted"],
      ["media/bawadi/camels-poster.jpg", "Camels in pens", "1:49"],
      ["media/bawadi/meat-hall-1-thumb.jpg", "Meat processing hall"],
      ["media/bawadi/gum-arabic-1-thumb.jpg", "Gum arabic in a woven basket"],
      ["media/bawadi/cattle-feedlot-poster.jpg", "Cattle in the feedlot", "0:15"],
      ["media/bawadi/warehouse-1-thumb.jpg", "Sacks stacked in the warehouse"],
      ["media/bawadi/plant-visit-thumb.jpg", "Visit to a processing plant"],
      ["media/bawadi/cattle-troughs-poster.jpg", "Cattle at feed troughs", "0:19"],
      ["media/bawadi/gum-talha-store-1-thumb.jpg", "Gum talha in storage"],
      ["media/bawadi/filling-line-thumb.jpg", "Jerrycan filling line"],
      ["media/bawadi/bulls-poster.jpg", "Bulls in the pen", "0:22"],
      ["media/bawadi/meat-hall-2-thumb.jpg", "Carcasses on the overhead rail"],
      ["media/bawadi/warehouse-2-thumb.jpg", "Warehouse with processing equipment"],
      ["media/bawadi/cattle-pens-poster.jpg", "Cattle in pens", "1:06"],
      ["media/bawadi/processing-line-thumb.jpg", "Processing line at work"],
      ["media/bawadi/gum-arabic-2-thumb.jpg", "Gum arabic nodules, close up"],
      ["media/bawadi/plant-inspection-thumb.jpg", "Inspecting packed products"],
      ["media/bawadi/cattle-pens-2-poster.jpg", "Cattle pens and feed troughs", "2:51"],
      ["media/bawadi/meat-hall-3-thumb.jpg", "Carcasses on the processing line"],
      ["media/bawadi/cattle-shade-poster.jpg", "Cattle under shade structures", "2:51"],
      ["img/photos/hero-cattle-720.jpg", "Cattle under shade cloth"],
      ["img/photos/gum-arabic-basket-thumb.jpg", "Raw gum arabic"],
      ["img/brochure/dubai-port.jpg", "Dubai skyline behind a container port"],
      ["img/brochure/peanuts.jpg", "Shelled peanuts, Darfur"],
      ["img/brochure/bull.jpg", "Cattle in the feedlot"]
    ],
    layers: [
      { tag: "Layer 1 · Grow", name: "Farmland", img: "img/brochure/crop-rows.jpg", body: "Pivot-irrigated land and peanut farms across Sudan, backed by a contract-farming network.", facts: [["West Omdurman (pivot)", "500+ acres"], ["East Darfur (peanut)", "1,800 acres"], ["Kordofan (peanut)", "1,100 acres"], ["Contract farmers", "14,000"]] },
      { tag: "Layer 2 · Forest", name: "Gum plantations", img: "img/brochure/spread-gum-arabic.jpg", body: "Hashab and Talha gum from the group’s own plantations — the source of our gum arabic and gum talha.", facts: [["Plantations since", "2001"], ["Species", "Hashab · Talha"]] },
      { tag: "Layer 3 · Hull & sort", name: "Hullers & sorters", img: "media/bawadi/processing-line-thumb.jpg", body: "Groundnuts are hulled near the farm in East Darfur, then sorted in Omdurman and Al-Baqir.", facts: [["Hullers, East Darfur", "8 · 5 MT/h"], ["Sorters, Omdurman", "4 · 5 MT/h"], ["SMA, Al-Baqir", "8 MT/h"]] },
      { tag: "Layer 4 · Process", name: "Processing plants", img: "img/brochure/spread-factories.jpg", body: "Integrated processing for oils, feed and meat: Al-Sultan Oil Factory, Mahboub Animal Feed Factory and the Al-Kadaro Meat Processing Complex.", facts: [["Crushing capacity", "375 MT/day"], ["Factory area", "22,000 m²"], ["Storage", "11,000 m²"], ["Meat processing", "Halal · ISO · HACCP focus"]] },
      { tag: "Layer 5 · Livestock", name: "Herds & facilities", img: "img/brochure/spread-cattle-sheep.jpg", body: "Standing herds, fattening and large-scale exports of cattle, sheep and camels, with facilities in Sudan and Mauritania.", facts: [["Mauritania (Brakna)", "Up to 50,000 head"], ["In development", "Kenya · Somaliland"]] },
      { tag: "Layer 6 · Trade", name: "Dubai export desk", img: "img/brochure/dubai-port.jpg", body: "Bawadi Al Dain General Trading handles procurement, documentation and the end-to-end supply chain to GCC and global buyers.", facts: [["Licensed", "Dubai, 2020"], ["Dubai Chamber", "Since Sept 2020"], ["Phone", "+971 55 282 8769"]] }
    ],
    sites: [
      { n: "Dubai", lat: 25.2, lon: 55.3, hub: true },
      { n: "Sudan", lat: 15.5, lon: 32.5 },
      { n: "Mauritania", lat: 18.1, lon: -15.95 },
      { n: "Kenya", lat: -1.29, lon: 36.82 },
      { n: "Erbil", lat: 36.19, lon: 44.01 },
      { n: "Somaliland", lat: 9.56, lon: 44.06, dev: true }
    ]
  };
  var KB = {
    products: "From Dubai we trade four core commodities: Gum Arabic, Gum Talha, Sorghum and Livestock (cattle, sheep and camels). The wider group also produces groundnuts, sesame, sunflower, hibiscus, baobab, chickpeas, pigeon peas, watermelon seeds and peanut cake, plus feed, oils and meat.",
    gum: "Our Gum Arabic is natural acacia gum for food, beverage and pharmaceutical use, from Hashab plantations the group has run since 2001. Gum Talha is cleaned, sifted and packed in company sacks. Tell me the grade, volume and port and I’ll add them to your enquiry.",
    livestock: "We supply cattle, sheep and camels, mainly sourced from Sudan, with large-scale facilities in Sudan and Mauritania (up to 50,000 head in Brakna). Every shipment follows the destination country’s veterinary and import rules — the trade desk handles the health paperwork.",
    sorghum: "Sorghum is supplied for food and animal feed. The group also runs the Mahboub Animal Feed Factory in Omdurman. Share your volume and destination and I’ll draft the enquiry.",
    oil: "The Al-Sultan Oil Factory at Al-Baqir crushes 375 MT a day, on a 22,000 m² site with 11,000 m² of storage. Groundnuts come from our own farms and hullers in Darfur and Kordofan.",
    capacity: "In Sudan: 14,000 contract farmers; 500+ pivot-irrigated acres in West Omdurman; 1,800 acres of peanut land in East Darfur and 1,100 in Kordofan; 8 hullers, 5 sorting lines and a 375 MT/day oil mill. In Mauritania: land in Boghé/Aleg for up to 50,000 head.",
    halal: "Meat processing across the group focuses on Halal, ISO and HACCP standards. The trade desk will send the certificates that apply to your order with the quotation.",
    expansion: "The group operates in the UAE, Sudan, Mauritania, Kenya and Iraq (a joint venture in Erbil), with livestock facilities in Kenya and Somaliland under development. Partners include ADID and QITAF Holding.",
    price: "I can’t quote prices — they depend on grade, volume, Incoterm and shipment window. I’ve added your request to the draft enquiry so the trade desk can send a firm quotation.",
    contact: "Head office: Office M01-0118, Uruba Business Center, Garhoud Views Building, Al Garhoud, Deira, Dubai. Phone/WhatsApp +971 55 282 8769 · email info@bawadialdaingroup.com.",
    fallback: "Good question — I’ve noted it for the trade desk. Meanwhile I can tell you about our products, capacity, livestock rules, certifications, expansion or how to reach the Dubai office.",
    ar: "مرحباً بك! نتاجر من دبي في الصمغ العربي وصمغ الطلح والذرة الرفيعة والمواشي (أبقار وأغنام وإبل). أخبرني بالمنتج والكمية والوجهة وسأُعدّ لك مسودة طلب لمكتب التجارة. للتواصل: ‎+971 55 282 8769‎"
  };
  function intent(t) {
    var s = t.toLowerCase();
    if (/[؀-ۿ]/.test(t)) return "ar";
    if (/price|cost|quote|rate|how much is/.test(s)) return "price";
    if (/gum|acacia|talha|hashab/.test(s)) return "gum";
    if (/cattle|sheep|camel|livestock|goat|veterinar|head of/.test(s)) return "livestock";
    if (/sorghum|feed|grain/.test(s)) return "sorghum";
    if (/oil|crush|sunflower|peanut|groundnut|sesame/.test(s)) return "oil";
    if (/halal|iso|haccp|certif/.test(s)) return "halal";
    if (/expan|country|countries|kenya|mauritania|iraq|somaliland|partner/.test(s)) return "expansion";
    if (/capacity|farm|acre|factory|volume|how big/.test(s)) return "capacity";
    if (/contact|office|address|phone|email|where are|whatsapp/.test(s)) return "contact";
    if (/product|what do you|sell|trade|range/.test(s)) return "products";
    return "fallback";
  }
  function productOf(t) {
    var s = t.toLowerCase();
    if (/talha|طلح/.test(s)) return "Gum Talha";
    if (/gum|acacia|صمغ/.test(s)) return "Gum Arabic";
    if (/sorghum|ذرة/.test(s)) return "Sorghum";
    if (/camel|إبل|ابل/.test(s)) return "Livestock — camels";
    if (/sheep|أغنام|اغنام/.test(s)) return "Livestock — sheep";
    if (/cattle|livestock|أبقار|ابقار|مواشي/.test(s)) return "Livestock — cattle";
    if (/sesame/.test(s)) return "Sesame";
    if (/peanut|groundnut/.test(s)) return "Groundnuts";
    if (/oil/.test(s)) return "Edible oil";
    return null;
  }
  function localOf(u) { if (u.indexOf("hd/") === 0) return u; var n = u.replace("img/", "").replace("media/", "").replace(/\//g, "_").replace(/\.(png|jpe?g)$/i, ""); return "photos/" + n + (/\.png$/i.test(u) ? ".png" : ".jpg"); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function photo(src, alt, cls) {
    var w = el("div", "bd-ph " + (cls || ""));
    var i = new Image(); i.alt = alt || ""; i.loading = "lazy"; i.decoding = "async";
    var tried = false;
    i.onerror = function () { if (!tried && window.SITE_LOCAL !== false && src.indexOf('hd/') !== 0) { tried = true; i.src = IMG + src; } else w.classList.add("bd-noimg"); };
    i.onload = function () { w.classList.add("bd-loaded"); };
    i.src = window.SITE_LOCAL === false ? IMG + src : localOf(src);
    w.appendChild(i);
    w.appendChild(el("span", "bd-cap", esc(alt || "")));
    return w;
  }
  if (window.SITE_DATA) { for (var k in window.SITE_DATA) D[k] = window.SITE_DATA[k]; }
  if (window.SITE_KB) KB = window.SITE_KB;
  if (window.SITE_INTENT) intent = window.SITE_INTENT;
  if (window.SITE_PRODUCT) productOf = window.SITE_PRODUCT;
  var WA = window.SITE_WA || "971552828769", MAIL = window.SITE_EMAIL || "info@bawadialdaingroup.com", PHONE = window.SITE_PHONE || "+971 55 282 8769";
  var ENQ = window.SITE_ENQ_LABELS || ["Product", "Quantity", "Destination"];
  window.BAWADI = { data: D, photo: photo, IMG: IMG };

  /* ---------- base component CSS (themed by CSS variables per site) ---------- */
  var css = [
    ".bd-ph{position:relative;overflow:hidden;background:var(--ph,#2a2216);}",
    ".bd-ph img{width:100%;height:100%;object-fit:cover;display:block;opacity:0;transition:opacity .8s,transform 1.2s cubic-bezier(.2,.8,.2,1)}",
    ".bd-ph.bd-loaded img{opacity:1}",
    ".bd-ph .bd-cap{position:absolute;left:14px;bottom:12px;right:14px;font-size:12px;color:var(--ph-ink,#e8dcc6);opacity:0;pointer-events:none}",
    ".bd-ph.bd-noimg{background:repeating-linear-gradient(135deg,var(--ph,#2a2216) 0 14px,var(--ph2,#30281a) 14px 28px)}",
    ".bd-ph.bd-noimg img{display:none}.bd-ph.bd-noimg .bd-cap{opacity:.9}",
    "[data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .9s ease,transform .9s cubic-bezier(.2,.8,.2,1)}",
    "[data-reveal].in{opacity:1;transform:none}",
    "@media (prefers-reduced-motion:reduce){[data-reveal]{opacity:1;transform:none;transition:none}}",
    /* chat */
    ".bd-chat{display:flex;flex-direction:column;gap:12px;height:100%;min-height:0}",
    ".bd-log{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:10px;padding:4px 2px;min-height:160px;scroll-behavior:smooth}",
    ".bd-msg{max-width:86%;padding:12px 16px;border-radius:18px;font-size:15px;line-height:1.55;animation:bdpop .35s ease both}",
    ".bd-msg.ai{align-self:flex-start;background:var(--chat-ai,#fff);color:var(--chat-ai-ink,#12201a);border-bottom-left-radius:6px}",
    ".bd-msg.me{align-self:flex-end;background:var(--accent);color:var(--accent-ink);border-bottom-right-radius:6px}",
    "[dir=rtl] .bd-msg.ai{align-self:flex-end;border-radius:18px 18px 6px 18px}[dir=rtl] .bd-msg.me{align-self:flex-start}",
    "@keyframes bdpop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}",
    ".bd-typing span{display:inline-block;width:7px;height:7px;border-radius:50%;background:currentColor;margin-right:4px;animation:bddot 1.2s infinite}",
    ".bd-typing span:nth-child(2){animation-delay:.2s}.bd-typing span:nth-child(3){animation-delay:.4s}",
    "@keyframes bddot{0%,80%,100%{opacity:.2}40%{opacity:1}}",
    ".bd-chips{display:flex;gap:8px;flex-wrap:wrap}",
    ".bd-chip{border:1px solid var(--line);background:transparent;color:inherit;border-radius:999px;padding:9px 14px;font:inherit;font-size:13px;min-height:40px;cursor:pointer;transition:background .2s,border-color .2s}",
    ".bd-chip:hover{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,transparent)}",
    ".bd-form{display:flex;gap:8px;background:var(--field,#fff);border:1px solid var(--line);border-radius:16px;padding:6px}",
    ".bd-form input{flex:1;min-width:0;border:0;background:none;color:var(--field-ink,inherit);padding:12px 14px;font:inherit;font-size:16px;outline:none}",
    ".bd-form button{background:var(--accent);color:var(--accent-ink);border:0;border-radius:12px;padding:0 20px;min-height:46px;font:inherit;font-weight:600;cursor:pointer}",
    ".bd-enq{border:1px solid var(--line);border-radius:18px;padding:16px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;font-size:14px}",
    ".bd-enq div small{display:block;opacity:.65;font-size:12px}.bd-enq strong{font-weight:600}",
    ".bd-enq .bd-enq-act{grid-column:1/-1;display:flex;gap:8px;flex-wrap:wrap;align-items:center}",
    ".bd-btn{display:inline-flex;align-items:center;gap:8px;border-radius:12px;padding:11px 16px;font-weight:600;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid var(--line);background:transparent;color:inherit}",
    ".bd-btn.solid{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}",
    ".bd-note{font-size:12px;opacity:.7}",
    /* launcher drawer */
    ".bd-launch{position:fixed;right:22px;bottom:22px;z-index:60;display:flex;align-items:center;gap:10px;background:var(--accent);color:var(--accent-ink);border:0;border-radius:999px;padding:14px 20px;font:inherit;font-weight:600;box-shadow:0 18px 40px rgba(0,0,0,.3);cursor:pointer}",
    ".bd-launch .pulse{width:10px;height:10px;border-radius:50%;background:currentColor;box-shadow:0 0 0 0 currentColor;animation:bdpulse 2s infinite}",
    "@keyframes bdpulse{0%{box-shadow:0 0 0 0 color-mix(in srgb,currentColor 60%,transparent)}100%{box-shadow:0 0 0 12px transparent}}",
    ".bd-drawer{position:fixed;right:22px;bottom:90px;z-index:61;width:min(420px,calc(100vw - 28px));height:min(620px,calc(100vh - 120px));background:var(--drawer,#fff);color:var(--drawer-ink,#12201a);border:1px solid var(--line);border-radius:24px;box-shadow:0 30px 80px rgba(0,0,0,.35);padding:18px;display:flex;flex-direction:column;gap:12px;transform:translateY(20px) scale(.98);opacity:0;pointer-events:none;transition:all .3s cubic-bezier(.2,.8,.2,1)}",
    ".bd-drawer.open{transform:none;opacity:1;pointer-events:auto}",
    ".bd-drawer .bd-log{min-height:80px}.bd-drawer .bd-chips{flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px}.bd-drawer .bd-chip{flex:none}.bd-drawer .bd-note{display:none}.bd-drawer .bd-enq{padding:12px;gap:6px}",
    ".bd-drawer header{display:flex;align-items:center;gap:10px}.bd-drawer header strong{flex:1}",
    ".bd-x{width:40px;height:40px;border-radius:50%;border:1px solid var(--line);background:none;color:inherit;cursor:pointer;font-size:18px}",
    /* explorer */
    ".bd-xp{display:flex;flex-wrap:wrap;gap:0;border-radius:var(--radius,24px);overflow:hidden;border:1px solid var(--line)}",
    ".bd-xp-stage{flex:999 1 560px;min-width:0;position:relative;min-height:600px;display:flex;flex-direction:column;background:var(--xp-bg,#0e0d0b);color:var(--xp-ink,#f3ebdd)}",
    ".bd-xp-view{flex:1;display:grid;place-items:center;perspective:1700px;cursor:grab;touch-action:none;user-select:none;min-height:620px;padding-top:150px;overflow:hidden}",
    ".bd-xp-view:active{cursor:grabbing}",
    ".bd-xp-rig{position:relative;width:min(400px,70vw);aspect-ratio:1;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.2,.8,.2,1)}",
    ".bd-xp-rig.drag{transition:none}",
    ".bd-layer{position:absolute;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.25);box-shadow:0 34px 60px rgba(0,0,0,.45);transition:transform .7s cubic-bezier(.2,.8,.2,1),outline-color .3s;cursor:pointer;padding:0;background:#222;outline:3px solid transparent;outline-offset:2px}",
    ".bd-layer.on{outline-color:var(--accent)}",
    ".bd-layer .bd-ph{position:absolute;inset:0}",
    ".bd-layer .lab{position:absolute;left:0;right:0;bottom:0;padding:12px 14px;background:linear-gradient(transparent,rgba(0,0,0,.75));color:#fff;text-align:left;font:600 14px/1.2 inherit;display:flex;flex-direction:column;gap:2px}",
    ".bd-layer .lab small{font-size:10px;letter-spacing:.14em;text-transform:uppercase;opacity:.8}",
    ".bd-xp-ctl{display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding:18px 22px}",
    ".bd-xp-ctl button{min-height:46px;padding:0 18px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:none;color:inherit;font:inherit;font-size:14px;cursor:pointer}",
    ".bd-xp-ctl button.solid{background:var(--accent);color:var(--accent-ink);border-color:var(--accent);font-weight:600}",
    ".bd-xp-panel{flex:1 1 340px;max-width:460px;background:var(--xp-panel,#17150f);color:var(--xp-ink,#f3ebdd);padding:30px;display:flex;flex-direction:column;gap:14px}",
    ".bd-xp-panel .bd-ph{height:200px;border-radius:16px}",
    ".bd-xp-panel h3{margin:0;font-family:var(--display);font-size:36px;line-height:1.05;font-weight:500}",
    ".bd-xp-panel p{margin:0;line-height:1.6;opacity:.85}",
    ".bd-fact{display:flex;justify-content:space-between;gap:12px;border-top:1px solid rgba(255,255,255,.12);padding-top:10px;font-size:14px}",
    ".bd-fact span{opacity:.7}",
    /* globe */
    ".bd-globe{position:relative}.bd-globe canvas{display:block;width:100%!important;height:100%!important;cursor:grab}",
    ".bd-globe .bd-gl{position:absolute;font-size:12px;font-weight:600;padding:5px 9px;border-radius:999px;background:var(--glabel,rgba(0,0,0,.6));color:var(--glabel-ink,#fff);pointer-events:none;white-space:nowrap;transform:translate(-50%,-140%);transition:opacity .2s}",
    ".bd-globe.noglobe{display:grid;place-items:center}",
    /* gallery */
    ".bd-gfilters{display:flex;gap:8px;flex-wrap:wrap}",
    ".bd-gfilters button{border:1px solid var(--line);background:none;color:inherit;border-radius:999px;padding:10px 16px;font:inherit;font-size:14px;cursor:pointer;min-height:44px}",
    ".bd-gfilters button[aria-pressed=true]{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}",
    ".bd-ggrid{columns:4 240px;column-gap:12px}",
    ".bd-gitem{break-inside:avoid;margin:0 0 12px;display:block;width:100%;padding:0;border:0;background:none;cursor:zoom-in;border-radius:16px;overflow:hidden;position:relative}",
    ".bd-gitem .bd-ph{border-radius:16px}.bd-gitem .bd-ph img{aspect-ratio:auto}",
    ".bd-gitem:nth-child(3n) .bd-ph{aspect-ratio:3/4}.bd-gitem:nth-child(3n+1) .bd-ph{aspect-ratio:4/3}.bd-gitem:nth-child(3n+2) .bd-ph{aspect-ratio:1}",
    ".bd-gitem:hover img{transform:scale(1.06)}",
    ".bd-gitem .vid{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.65);color:#fff;font-size:12px;padding:5px 10px;border-radius:999px;display:flex;gap:6px;align-items:center}",
    ".bd-lb{position:fixed;inset:0;z-index:80;background:rgba(0,0,0,.88);display:none;align-items:center;justify-content:center;padding:24px;flex-direction:column;gap:14px;color:#fff}",
    ".bd-lb.open{display:flex}.bd-lb .bd-ph{width:min(1100px,92vw);height:min(72vh,760px);border-radius:16px;background:#111}.bd-lb .bd-ph img{object-fit:contain}",
    ".bd-lb .row{display:flex;gap:10px;align-items:center}.bd-lb button{min-width:46px;min-height:46px;border-radius:999px;border:1px solid rgba(255,255,255,.3);background:none;color:#fff;font-size:18px;cursor:pointer}"
  ].join("\n");
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var SPARK = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>';

  /* ---------- AI concierge ---------- */
  var chats = [];
  function buildChat(host) {
    var full = host.getAttribute("data-chat") === "full";
    var state = { product: "—", qty: "—", dest: "—", busy: false };
    var wrap = el("div", "bd-chat");
    var log = el("div", "bd-log"); log.setAttribute("aria-live", "polite");
    var chips = el("div", "bd-chips");
    var form = el("form", "bd-form");
    var uid = "bdq" + Math.random().toString(36).slice(2, 7);
    form.innerHTML = '<label for="' + uid + '" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Ask our AI</label><input id="' + uid + '" type="text" autocomplete="off" placeholder="' + (window.SITE_PLACEHOLDER || "Ask in English or عربي — e.g. 20 containers of sorghum to Jeddah") + '"><button type="submit">Ask</button>';
    var input = form.querySelector("input");
    var enq = null;
    wrap.appendChild(log); wrap.appendChild(chips); wrap.appendChild(form);
    if (full) {
      enq = el("div", "bd-enq");
      wrap.appendChild(enq);
    }
    function drawEnq() {
      if (!enq) return;
      var body = "Enquiry via website%0A" + ENQ[0] + ": " + encodeURIComponent(state.product) + "%0A" + ENQ[1] + ": " + encodeURIComponent(state.qty) + "%0A" + ENQ[2] + ": " + encodeURIComponent(state.dest);
      enq.innerHTML = '<div><small>' + ENQ[0] + '</small><strong>' + esc(state.product) + '</strong></div><div><small>' + ENQ[1] + '</small><strong>' + esc(state.qty) + '</strong></div><div><small>' + ENQ[2] + '</small><strong>' + esc(state.dest) + '</strong></div>' +
        '<div class="bd-enq-act"><a class="bd-btn solid" href="https://wa.me/' + WA + '?text=' + body + '" target="_blank" rel="noopener">Send on WhatsApp</a><a class="bd-btn" href="mailto:' + MAIL + '?subject=Enquiry&body=' + body + '">Email us</a><span class="bd-note">Draft builds as you chat · ' + PHONE + ' · ' + MAIL + '</span></div>';
    }
    function add(from, text) { var m = el("div", "bd-msg " + from); m.textContent = text; log.appendChild(m); log.scrollTop = log.scrollHeight; return m; }
    function ask(t) {
      t = (t || "").trim(); if (!t || state.busy) return;
      add("me", t); input.value = "";
      var p = productOf(t); if (p) state.product = p;
      var q = t.match(/(\d[\d,\.]*)\s*(mt|tons?|tonnes?|containers?|head|fcl|kg)/i); if (q) state.qty = q[1] + " " + q[2];
      var d = t.match(/\b(?:to|cif|fob|into)\s+([A-Za-z][A-Za-z \-]{2,28})/i); if (d) state.dest = d[1].trim();
      var d2 = t.match(/إلى\s+([؀-ۿ ]{2,20})/); if (d2) state.dest = d2[1].trim();
      drawEnq();
      state.busy = true;
      var typing = add("ai", ""); typing.innerHTML = '<span class="bd-typing"><span></span><span></span><span></span></span>';
      var answer = KB[intent(t)];
      setTimeout(function () {
        typing.textContent = "";
        if (/[؀-ۿ]/.test(answer)) typing.setAttribute("dir", "rtl");
        var i = 0;
        var iv = setInterval(function () {
          i += 3; typing.textContent = answer.slice(0, i); log.scrollTop = log.scrollHeight;
          if (i >= answer.length) { clearInterval(iv); state.busy = false; }
        }, 14);
      }, 650);
    }
    (window.SITE_CHIPS || ["What do you trade?", "Can you ship camels to Riyadh?", "Price for 500 MT gum arabic CIF Hamburg", "What is your oil capacity?", "ما هي منتجاتكم؟"]).forEach(function (c) {
      var b = el("button", "bd-chip"); b.type = "button"; b.textContent = c; b.onclick = function () { ask(c); }; chips.appendChild(b);
    });
    form.addEventListener("submit", function (e) { e.preventDefault(); ask(input.value); });
    if (window.SITE_HELLO) add("ai", window.SITE_HELLO); else add("ai", "Marhaba! I’m Bawadi AI. Ask about our gum arabic, sorghum, livestock, capacity or certifications — I’ll draft your enquiry for the Dubai trade desk.");
    drawEnq();
    host.appendChild(wrap);
    var api = { ask: ask, input: input };
    chats.push(api);
    return api;
  }
  function launcher() {
    var b = el("button", "bd-launch", '<span class="pulse"></span>' + SPARK + "<span>" + (window.SITE_AI_NAME ? "Ask " + window.SITE_AI_NAME : "Ask Bawadi AI") + "</span>"); b.type = "button";
    var dr = el("div", "bd-drawer"); dr.setAttribute("role", "dialog"); dr.setAttribute("aria-label", "Bawadi AI trade concierge");
    dr.innerHTML = '<header>' + SPARK + '<strong>' + (window.SITE_AI_NAME || 'Bawadi AI') + ' · Concierge</strong><button type="button" class="bd-x" aria-label="Close">×</button></header>';
    var host = el("div"); host.style.cssText = "flex:1;min-height:0;display:flex;flex-direction:column"; host.setAttribute("data-chat", "full");
    dr.appendChild(host); document.body.appendChild(dr); document.body.appendChild(b);
    var api = buildChat(host);
    function toggle(o) { dr.classList.toggle("open", o); if (o) setTimeout(function () { api.input.focus(); }, 200); }
    b.onclick = function () { toggle(!dr.classList.contains("open")); };
    dr.querySelector(".bd-x").onclick = function () { toggle(false); };
    window.BAWADI.openChat = function (q) { toggle(true); if (q) api.ask(q); };
  }

  /* ---------- 3D explorer ---------- */
  function buildExplorer(host) {
    var L = D.layers, sel = 3, open = true, rx = 58, rz = -36;
    host.classList.add("bd-xp");
    var stage = el("div", "bd-xp-stage");
    var view = el("div", "bd-xp-view"); view.setAttribute("aria-label", "Drag to rotate the 3D model");
    var rig = el("div", "bd-xp-rig"); view.appendChild(rig); stage.appendChild(view);
    var ctl = el("div", "bd-xp-ctl");
    ctl.innerHTML = '<button type="button" data-a="l" aria-label="Rotate left">⟲</button><button type="button" data-a="r" aria-label="Rotate right">⟳</button><button type="button" data-a="t">Change angle</button><button type="button" class="solid" data-a="e">Collapse layers</button><span style="font-size:13px;opacity:.7">Drag to rotate · tap a layer to look inside</span>';
    stage.appendChild(ctl);
    var panel = el("div", "bd-xp-panel");
    host.appendChild(stage); host.appendChild(panel);
    var btns = L.map(function (l, i) {
      var b = el("button", "bd-layer"); b.type = "button"; b.setAttribute("aria-label", l.name);
      b.appendChild(photo(l.img, l.name));
      b.appendChild(el("span", "lab", "<small>" + esc(l.tag) + "</small>" + esc(l.name)));
      b.onclick = function (e) { if (moved) return; sel = i; draw(); };
      rig.appendChild(b); return b;
    });
    function draw() {
      rig.style.transform = "rotateX(" + rx + "deg) rotateZ(" + rz + "deg)";
      var gap = open ? 58 : 16;
      btns.forEach(function (b, i) {
        var inset = i * 4.2;
        b.style.left = inset + "%"; b.style.top = inset + "%"; b.style.right = inset + "%"; b.style.bottom = inset + "%";
        b.style.transform = "translateZ(" + (i * gap + (open && i === sel ? 28 : 0)) + "px)";
        b.classList.toggle("on", i === sel); b.setAttribute("aria-pressed", i === sel);
      });
      var l = L[sel];
      panel.innerHTML = "";
      panel.appendChild(el("span", "", '<span style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);font-weight:600">' + esc(l.tag) + "</span>"));
      panel.appendChild(el("h3", "", esc(l.name)));
      panel.appendChild(photo(l.img, l.name));
      panel.appendChild(el("p", "", esc(l.body)));
      l.facts.forEach(function (f) { panel.appendChild(el("div", "bd-fact", "<span>" + esc(f[0]) + "</span><strong>" + esc(f[1]) + "</strong>")); });
      var a = el("button", "bd-btn solid", SPARK + " Ask Bawadi AI about this"); a.type = "button"; a.style.marginTop = "auto"; a.style.alignSelf = "flex-start";
      a.onclick = function () { if (window.BAWADI.openChat) window.BAWADI.openChat("Tell me about your " + l.name.toLowerCase()); };
      panel.appendChild(a);
      ctl.querySelector('[data-a="e"]').textContent = open ? "Collapse layers" : "Explode layers";
    }
    ctl.addEventListener("click", function (e) {
      var a = e.target.getAttribute && e.target.getAttribute("data-a"); if (!a) return;
      if (a === "l") rz -= 45; if (a === "r") rz += 45; if (a === "t") rx = rx > 45 ? 30 : 62; if (a === "e") open = !open; draw();
    });
    var down = null, moved = false;
    view.addEventListener("pointerdown", function (e) { down = { x: e.clientX, y: e.clientY, rx: rx, rz: rz }; moved = false; rig.classList.add("drag"); });
    window.addEventListener("pointermove", function (e) {
      if (!down) return; var dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
      rz = down.rz + dx * 0.4; rx = Math.max(15, Math.min(75, down.rx - dy * 0.3)); rig.style.transform = "rotateX(" + rx + "deg) rotateZ(" + rz + "deg)";
    });
    window.addEventListener("pointerup", function () { if (down) { down = null; rig.classList.remove("drag"); setTimeout(function () { moved = false; }, 30); } });
    draw();
  }

  /* ---------- three.js globe ---------- */
  function buildGlobe(host) {
    var cs = getComputedStyle(host);
    var col = function (n, d) { return (cs.getPropertyValue(n) || d).trim() || d; };
    if (!window.THREE) { host.classList.add("noglobe"); host.innerHTML = '<div style="text-align:center;opacity:.8;font-size:14px">' + D.sites.map(function (x) { return esc(x.n); }).join(' · ') + '</div>'; return; }
    var T = window.THREE;
    var W = host.clientWidth || 500, H = host.clientHeight || 500;
    var r = new T.WebGLRenderer({ antialias: true, alpha: true });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); r.setSize(W, H); host.appendChild(r.domElement);
    var scene = new T.Scene(), cam = new T.PerspectiveCamera(36, W / H, 0.1, 100); cam.position.z = window.SITE_GLOBE_Z || 3.6;
    var g = new T.Group(); scene.add(g);
    var occ = new T.Mesh(new T.SphereGeometry(0.985, 48, 48), new T.MeshBasicMaterial({ color: new T.Color(col("--globe-bg", "#0e0d0b")) }));
    g.add(occ);
    var N = 2600, pos = new Float32Array(N * 3), ga = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < N; i++) { var y = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(1 - y * y), th = ga * i; pos[i * 3] = Math.cos(th) * rad; pos[i * 3 + 1] = y; pos[i * 3 + 2] = Math.sin(th) * rad; }
    var pg = new T.BufferGeometry(); pg.setAttribute("position", new T.BufferAttribute(pos, 3));
    g.add(new T.Points(pg, new T.PointsMaterial({ color: new T.Color(col("--globe-dot", "#8a7a5c")), size: 0.014, transparent: true, opacity: 0.85 })));
    function ll(lat, lon, rr) { var p = (90 - lat) * Math.PI / 180, t = (lon + 180) * Math.PI / 180; return new T.Vector3(-rr * Math.sin(p) * Math.cos(t), rr * Math.cos(p), rr * Math.sin(p) * Math.sin(t)); }
    var acc = new T.Color(col("--accent", "#c9a15b"));
    var hub = D.sites.filter(function (x) { return x.hub; })[0] || D.sites[0], hv = ll(hub.lat, hub.lon, 1.0);
    var pulses = [], labels = [];
    D.sites.forEach(function (s, k) {
      var v = ll(s.lat, s.lon, 1.0);
      var m = new T.Mesh(new T.SphereGeometry(s.hub ? 0.034 : 0.022, 16, 16), new T.MeshBasicMaterial({ color: s.hub ? acc : new T.Color(col("--globe-site", "#f3ebdd")) }));
      m.position.copy(v); g.add(m);
      var lab = el("span", "bd-gl", esc(s.n) + (s.dev ? " · in development" : "")); host.appendChild(lab); labels.push({ e: lab, v: v });
      if (s.hub) return;
      var mid = v.clone().add(hv).multiplyScalar(0.5); var dist = v.distanceTo(hv); mid.normalize().multiplyScalar(1 + dist * 0.45);
      var curve = new T.QuadraticBezierCurve3(v, mid, hv);
      var lg = new T.BufferGeometry().setFromPoints(curve.getPoints(80));
      var mat = s.dev ? new T.LineDashedMaterial({ color: acc, dashSize: 0.03, gapSize: 0.03, transparent: true, opacity: 0.8 }) : new T.LineBasicMaterial({ color: acc, transparent: true, opacity: 0.75 });
      var line = new T.Line(lg, mat); if (s.dev) line.computeLineDistances(); g.add(line);
      var pm = new T.Mesh(new T.SphereGeometry(0.016, 12, 12), new T.MeshBasicMaterial({ color: acc })); g.add(pm);
      pulses.push({ c: curve, m: pm, t: k * 0.23 });
    });
    var baseY = -((window.SITE_GLOBE_LON != null ? window.SITE_GLOBE_LON : 38) + 90) * Math.PI / 180, rotY = baseY, rotX = 0.32, vel = 0.0012, drag = null;
    r.domElement.addEventListener("pointerdown", function (e) { drag = { x: e.clientX, y: e.clientY, ry: rotY, rx: rotX }; });
    window.addEventListener("pointermove", function (e) { if (!drag) return; rotY = drag.ry + (e.clientX - drag.x) * 0.006; rotX = Math.max(-0.6, Math.min(0.9, drag.rx + (e.clientY - drag.y) * 0.004)); });
    window.addEventListener("pointerup", function () { drag = null; });
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var tmp = new T.Vector3();
    function frame() {
      if (!drag && !reduce) { rotY += vel; if (rotY > baseY + 0.5 || rotY < baseY - 0.5) vel = -vel; }
      g.rotation.set(rotX, rotY, 0);
      pulses.forEach(function (p) { p.t = (p.t + 0.004) % 1; p.m.position.copy(p.c.getPoint(p.t)); });
      r.render(scene, cam);
      g.updateMatrixWorld();
      labels.forEach(function (l) {
        tmp.copy(l.v).applyMatrix4(g.matrixWorld);
        var front = tmp.z > 0.15; tmp.project(cam);
        l.e.style.left = ((tmp.x + 1) / 2 * W) + "px"; l.e.style.top = ((1 - tmp.y) / 2 * H) + "px"; l.e.style.opacity = front ? 1 : 0;
      });
      requestAnimationFrame(frame);
    }
    frame();
    if (window.ResizeObserver) new ResizeObserver(function () { W = host.clientWidth; H = host.clientHeight; if (!W || !H) return; r.setSize(W, H); cam.aspect = W / H; cam.updateProjectionMatrix(); }).observe(host);
  }

  /* ---------- gallery + lightbox ---------- */
  function buildGallery(host) {
    var f = el("div", "bd-gfilters"), grid = el("div", "bd-ggrid"), cur = "all";
    var items = D.gallery.map(function (g, i) { return { src: g[0], cap: g[1], dur: g[2], i: i }; });
    var lb = el("div", "bd-lb"); lb.setAttribute("role", "dialog"); lb.setAttribute("aria-label", "Gallery viewer");
    var lbi = 0, shown = items;
    document.body.appendChild(lb);
    function openLb(k) { lbi = k; var it = shown[k]; lb.innerHTML = ""; lb.appendChild(photo(it.src, it.cap)); var row = el("div", "row", '<button type="button" data-d="-1" aria-label="Previous">‹</button><span>' + esc(it.cap) + (it.dur ? " · video " + it.dur + ' · <a href="' + (window.SITE_SOURCE || "https://bawadialdaingroup.com/?lang=en#gallery") + '" target="_blank" rel="noopener" style="color:#fff">play on site</a>' : "") + '</span><button type="button" data-d="1" aria-label="Next">›</button><button type="button" data-d="x" aria-label="Close">×</button>'); lb.appendChild(row); lb.classList.add("open"); }
    lb.addEventListener("click", function (e) { var d = e.target.getAttribute && e.target.getAttribute("data-d"); if (d === "x" || e.target === lb) lb.classList.remove("open"); else if (d) openLb((lbi + Number(d) + shown.length) % shown.length); });
    function draw() {
      grid.innerHTML = "";
      shown = items.filter(function (it) { return cur === "all" || (cur === "video" ? !!it.dur : !it.dur); });
      shown.forEach(function (it, k) {
        var b = el("button", "bd-gitem"); b.type = "button"; b.setAttribute("aria-label", it.cap);
        b.appendChild(photo(it.src, it.cap));
        if (it.dur) b.appendChild(el("span", "vid", "▶ " + it.dur));
        b.onclick = function () { openLb(k); };
        grid.appendChild(b);
      });
      [].forEach.call(f.children, function (c) { c.setAttribute("aria-pressed", c.getAttribute("data-f") === cur); });
    }
    [["all", "All"], ["photo", "Photos"], ["video", "Videos"]].forEach(function (o) { var b = el("button"); b.type = "button"; b.setAttribute("data-f", o[0]); b.textContent = o[1]; b.onclick = function () { cur = o[0]; draw(); }; f.appendChild(b); });
    host.appendChild(f); host.appendChild(grid); grid.style.marginTop = "18px"; draw();
  }

  /* ---------- counters, reveal, language ---------- */
  function counters() {
    var els = document.querySelectorAll("[data-count]");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; io.unobserve(e.target);
        var t = e.target, end = Number(t.getAttribute("data-count")), raw = t.hasAttribute("data-raw"), suf = t.getAttribute("data-suffix") || "", s = performance.now();
        (function step(n) { var p = Math.min(1, (n - s) / 1600), v = Math.round(end * (1 - Math.pow(1 - p, 3))); t.textContent = (raw ? String(v) : v.toLocaleString("en-US")) + suf; if (p < 1) requestAnimationFrame(step); })(s);
      });
    }, { threshold: 0.4 });
    [].forEach.call(els, function (e) { io.observe(e); });
  }
  function reveal() {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    [].forEach.call(document.querySelectorAll("[data-reveal]"), function (e) { io.observe(e); });
  }
  function lang() {
    var ar = false;
    [].forEach.call(document.querySelectorAll("[data-lang-toggle]"), function (b) {
      b.addEventListener("click", function () {
        ar = !ar;
        document.documentElement.lang = ar ? "ar" : "en"; document.documentElement.dir = ar ? "rtl" : "ltr";
        [].forEach.call(document.querySelectorAll("[data-ar]"), function (e) { if (!e.hasAttribute("data-en")) e.setAttribute("data-en", e.innerHTML); e.innerHTML = ar ? e.getAttribute("data-ar") : e.getAttribute("data-en"); });
        [].forEach.call(document.querySelectorAll("[data-lang-toggle]"), function (x) { x.textContent = ar ? "English" : "عربي"; });
      });
    });
  }
  function enquiryForms() {
    [].forEach.call(document.querySelectorAll("[data-ask-ai]"), function (f) {
      f.addEventListener("submit", function (e) { e.preventDefault(); var i = f.querySelector("input"); if (window.BAWADI.openChat) window.BAWADI.openChat(i.value || "What do you trade?"); i.value = ""; });
    });
    [].forEach.call(document.querySelectorAll("[data-open-ai]"), function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); if (window.BAWADI.openChat) window.BAWADI.openChat(b.getAttribute("data-open-ai") || ""); });
    });
  }
  function photos() {
    [].forEach.call(document.querySelectorAll("[data-photo]"), function (h) {
      var p = photo(h.getAttribute("data-photo"), h.getAttribute("data-alt") || "", h.getAttribute("data-cls") || "");
      p.style.position = "absolute"; p.style.inset = "0"; h.insertBefore(p, h.firstChild);
    });
  }

  function init() {
    if (typeof window.BAWADI_SITE === "function") window.BAWADI_SITE(D, photo, esc);
    photos();
    [].forEach.call(document.querySelectorAll("[data-chat]"), buildChat);
    if (!document.body.hasAttribute("data-no-launcher")) launcher();
    [].forEach.call(document.querySelectorAll("[data-explorer]"), buildExplorer);
    [].forEach.call(document.querySelectorAll("[data-gallery]"), buildGallery);
    [].forEach.call(document.querySelectorAll("[data-globe]"), function (g) { setTimeout(function () { buildGlobe(g); }, 60); });
    counters(); reveal(); lang(); enquiryForms();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
