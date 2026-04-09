(function () {
  'use strict';

  const STR = {
    th: {
      logoAlt: 'โลโก้ไร่ดี',
      navHome: 'หน้าแรก',
      navFeaturesNav: 'ฟีเจอร์',
      navMarket: 'ตลาดนัดเกษตรกร',
      navAbout: 'เกี่ยวกับเรา',
      navContact: 'ติดต่อ',
      navPrivacy: 'ความเป็นส่วนตัว',
      headerDownload: 'ดาวน์โหลด',
      langCurrent: 'ไทย',
      heroTagline: 'เพื่อนคู่ใจเกษตรกรไทย',
      heroTitle: 'ไร่ดี',
      heroSubtitle:
        '"วันนี้ควรทำอะไรก่อนดี?" ไร่ดีเช็คสภาพอากาศ ราคาผลผลิต ราคาสินค้าทางการเกษตร ตรวจโรคแมลงระบาดให้คุณ แล้วบอกสรุปว่าต้องทำอะไรบ้าง ทุกเช้าผ่าน LINE ฟรี! ไม่มีค่าใช้จ่าย',
      heroDownloadShort: 'ดาวน์โหลดฟรี',
      heroLearnMore: 'เรียนรู้เพิ่มเติม',
      mascotsAlt: 'มาสคอตไร่ดี',
      mascotGirlAlt: 'มาสคอตไร่ดี',
      storyBadge: 'จุดเริ่มต้นของไร่ดี',
      storyTitle: 'เรื่องราวของเรา',
      storyP1:
        'เกษตรกรไทยมีข้อมูลจากหลายแหล่ง แต่การตีความและสลับแอปหลายตัวทำให้เหนื่อย โดยเฉพาะเมื่อต้องการคำตอบสั้นๆ ว่า “วันนี้ควรทำอะไรก่อน”',
      storyP2:
        'ไร่ดีรวมสภาพอากาศ การแจ้งเตือนศัตรูพืช แผนการปลูก และบันทึกต้นทุนไว้ในที่เดียว พร้อม AI ช่วยสรุปเป็นภาษาที่อ่านง่าย',
      storyMission:
        'ภารกิจของเราคือทำให้การทำเกษตรเป็นเรื่องสนุกและมีประสิทธิภาพมากขึ้น',
      lineCtaLong: 'แอดไลน์เพื่อดู/ขายสินค้า',
      featuresKicker: 'ฟีเจอร์',
      featuresTitle: 'ทำอะไรได้บ้างในแอป',
      featuresLead:
        'สรุปตามแท็บและเมนูในแอป — พยากรณ์ แผนที่ดิน ตลาด Zero Waste การเงิน และ GAP',
      featuresScreensCta: 'คลิกดูตัวอย่างหน้าตาในแอป',
      f1t: 'พยากรณ์ & หน้าแรก',
      f1d: 'สรุป “วันนี้” ฝน อุณหภูมิ ความชื้น — ดูรายละเอียดฝนและวางแผนลงแปลง',
      f2t: 'ศัตรูพืช & เตือนภัย',
      f2d: 'ประเมินความเสี่ยง รายงานจากชุมชน และคำแนะนำเชิงปฏิบัติ',
      f3t: 'ต้นทุน ปฏิทิน & วางแผนปลูก',
      f3d: 'บันทึกต้นทุนรอบปลูก ปฏิทินกิจกรรม และลงทะเบียน/ดูแผนการปลูก',
      f4t: 'ราคา ตลาด & ชุมชน',
      f4d: 'ราคาพืช เมนูตลาด ราคาเพื่อนบ้านในรัศมี และรายงานในพื้นที่',
      f5t: 'AI ช่วยคิด',
      f5d: 'สรุปและถาม–ตอบจากบริบทฟาร์ม พิมพ์ถามหรือพูดถามไร่ดี พร้อมอ้างอิงข้อมูลที่ตรวจสอบได้',
      f6t: 'GAP & เอกสาร',
      f6d: 'บันทึกปุ๋ย ยา การเก็บเกี่ยว และส่งออกรายงาน',
      f7t: 'แผนที่ดิน & คุณภาพดิน',
      f7d: 'ดูตำแหน่งแปลงบนแผนที่และข้อมูลชั้นดิน (แหล่งข้อมูล กพด.) เพื่อประกอบการตัดสินใจ',
      f8t: 'Zero Waste',
      f8d: 'ติดตามเศษวัสดุทางการเกษตร ลดการเผา และดูสรุปในฟาร์ม',
      f9t: 'สแกนพืชให้ AI ดู',
      f9d: 'ถ่ายภาพให้ AI ช่วยวิเคราะห์เบื้องต้น (ฟีเจอร์ต้นแบบ — ผลลัพธ์อาจเปลี่ยนตามการอัปเดต)',
      f10t: 'สินเชื่อ ทุน & พยากรณ์รายได้',
      f10d: 'ดูแหล่งสินเชื่อ/ทุน และพยากรณ์รายได้จากข้อมูลที่บันทึกไว้',
      f11t: 'โปรไฟล์ & สุขภาพแปลง',
      f11d: 'แก้ไขข้อมูลฟาร์ม พิกัดแปลง และดูภาพรวมสุขภาพ/ความสมบูรณ์ของแปลง',
      marketKicker: 'ชุมชน',
      marketTitle: 'ตลาดนัดเกษตรกร',
      marketBody:
        'นัดพบกันใน LINE — แลกเปลี่ยนราคาในพื้นที่ ข่าวตลาด และโอกาสซื้อขายสินค้าเกษตรกับเพื่อนร่วมอาชีพ แอดไลน์ไร่ดีเพื่อติดตามกิจกรรมตลาดนัดและข่าวที่เกี่ยวกับฟาร์ม',
      uxTitle: 'ตัวอย่างหน้าจอจากแอปจริง',
      uxIntro:
        'สกรีนจริงจากแอปไร่ดี จัดเป็นคู่ให้เห็นภาพชัด—ทั้งหน้าแรก ตลาด/ราคา Zero Waste แผนก่อนปลูก และแผนที่ดิน เหมาะใช้พรีเซนต์หรืออธิบายต่อชาวบ้านได้ทันที',
      ux1aHead: 'หน้าแรก · AI แนะนำและเตือนศัตรูพืช',
      ux1bHead: 'เมนูลัด',
      ux2aHead: 'Zero Waste · เศษวัสดุกลับมาใช้',
      ux2bHead: 'Zero Waste · มูลค่าและแหล่งรับซื้อ',
      ux3aHead: 'ข้อมูลพื้นที่',
      ux3bHead: 'วางแผนก่อนปลูก',
      ux4aHead: 'ราคาและจังหวะขาย',
      ux4bHead: 'แผนที่ดิน',
      ux1Before:
        'หน้าแรกรวม AI แนะนำงานวันนี้แบบอ่านแล้วทำตามได้ และเตือนศัตรูพืชชัด ๆ—แตะดูวิธีป้องกันทันที',
      ux1After:
        'กดปุ่มบับเบิลมุมขวาล่าง เปิดเมนูลัด: สแกนพืช ถามเสียง ชุมชน แผนที่ดิน ปุ๋ย ปฏิทิน—ครบในที่เดียว',
      ux2Before:
        'Zero Waste: เลือกพืชที่ปลูก ระบบชี้เศษวัสดุที่เก็บกลับใช้ได้ พร้อมวิธีแปรรูป เช่น ทำปุ๋ยหมัก—ทำตามได้ทีละขั้น',
      ux2After:
        'เลื่อนลงอีกนิด—ใส่น้ำหนักเศษวัสดุ AI ประเมินมูลค่า และชี้แหล่งรับซื้อใกล้บ้าน โทรหรือแอด LINE ต่อได้เลย',
      ux3Before:
        'ข้อมูลพื้นที่: สรุปศัตรูพืช ราคาในพื้นที่ ราคาจากเพื่อนบ้าน—มองภาพความเสี่ยงและตลาดรอบแปลง',
      ux3After:
        'วางแผนก่อนปลูก: ใส่ไร่ ต้นทุน ดึงราคาตลาดวันนี้—คำนวณกำไร จุดคุ้มทุน และบอกว่า “น่าปลูก” หรือไม่',
      ux4Before:
        'ราคาพืชแยกชนิด เปรียบเทียบย้อนหลัง กราฟ 7 วัน คู่กล่อง “จังหวะขาย”—อ่านโอกาสและจังหวะดูแลก่อนขาย',
      ux4After:
        'แผนที่ดิน: เลื่อนแผนที่ให้ตรงแปลง ดูชั้นดิน กพด. ชนิดดิน pH อินทรีย์วัตถุ—วางแผนปุ๋ยและพืชให้ตรงดินจริง',
      footerTagline: 'ไร่ดี — เพื่อนคู่คิดเกษตรกรไทย',
      footerContactLead: 'ติดต่อผู้พัฒนาได้ที่อีเมล ',
      footerBackTop: 'กลับขึ้นด้านบน',
      footerPrivacy: 'นโยบายความเป็นส่วนตัว',
      langToggleAria: 'สลับภาษา ไทยและอังกฤษ',
      uxImg1Before:
        'สกรีนแอปไร่ดี หน้าแรก การ์ด AI แนะนำงานวันนี้และเตือนศัตรูพืช',
      uxImg1After: 'สกรีนแอปไร่ดี เมนูลัดจากปุ่มมุมขวาล่าง',
      uxImg2Before: 'สกรีนแอปไร่ดี Zero Waste เศษวัสดุกลับมาใช้',
      uxImg2After: 'สกรีนแอปไร่ดี Zero Waste มูลค่าเศษวัสดุและแหล่งรับซื้อ',
      uxImg3Before: 'สกรีนแอปไร่ดี ข้อมูลพื้นที่ ศัตรูพืชและราคาใกล้แปลง',
      uxImg3After: 'สกรีนแอปไร่ดี วางแผนก่อนปลูกและคำนวณกำไร',
      uxImg4Before: 'สกรีนแอปไร่ดี ราคาพืชและจังหวะขาย',
      uxImg4After: 'สกรีนแอปไร่ดี แผนที่ดินและข้อมูลชั้นดิน',
      mascotBoyAlt: 'มาสคอตไร่ดี (ชาย)',
      mascotGirlFooterAlt: 'มาสคอตไร่ดี (หญิง)',
    },
    en: {
      logoAlt: 'Rai Dee logo',
      navHome: 'Home',
      navFeaturesNav: 'Features',
      navMarket: 'Farmer’s market',
      navAbout: 'About',
      navContact: 'Contact',
      navPrivacy: 'Privacy',
      headerDownload: 'Download',
      langCurrent: 'English',
      heroTagline: 'Your field-smart partner — built for Thai farmers',
      heroTitle: 'Rai Dee',
      heroSubtitle:
        '“What should I do first today?” Rai Dee checks the weather, crop prices, and farm-input prices, tracks pest and disease risk for you, then tells you what to do next—in a morning summary on LINE, free! No charge.',
      heroDownloadShort: 'Download Free',
      heroLearnMore: 'Learn more',
      mascotsAlt: 'Rai Dee mascots',
      mascotGirlAlt: 'Rai Dee mascot',
      storyBadge: 'Where Rai Dee starts',
      storyTitle: 'Our story',
      storyP1:
        'Farmers already have data, but it is scattered across apps and hard to interpret when you only need a short answer: what to do first today.',
      storyP2:
        'Rai Dee brings weather, pest alerts, planting plans, and costs into one place, with AI summaries in plain language.',
      storyMission:
        'Our mission is to make farming more enjoyable and more efficient.',
      lineCtaLong: 'Add LINE to browse or sell produce',
      featuresKicker: 'Features',
      featuresTitle: 'What you can do in the app',
      featuresLead:
        'Mirrors the app’s tabs and menus — forecasts, soil map, market, Zero Waste, finance, and GAP.',
      featuresScreensCta: 'See in-app screen examples',
      f1t: 'Weather & home',
      f1d: 'A “today” snapshot plus rain, temperature, and humidity — drill into rainfall and plan field work',
      f2t: 'Pest risk & alerts',
      f2d: 'Risk signals, nearby community reports, and practical guidance',
      f3t: 'Costs, calendar & crop plan',
      f3d: 'Per-season costs, activity calendar, and planting plan registration/overview',
      f4t: 'Prices, market & community',
      f4d: 'Crop prices, marketplace entry points, nearby neighbor prices, and local-area reports',
      f5t: 'AI assist',
      f5d: 'Farm-aware summaries and Q&A — type or use voice “ask Rai Dee” with checkable context',
      f6t: 'GAP & records',
      f6d: 'Fertilizer, chemical, and harvest logs with exportable reports',
      f7t: 'Soil map & soil quality',
      f7d: 'See your plot on a map with soil-layer context (LDD source) to support decisions',
      f8t: 'Zero Waste',
      f8d: 'Track farm waste streams, reduce burning, and review summaries for your farm',
      f9t: 'Plant photo scan',
      f9d: 'Let AI review a photo for a first-pass readout (prototype — results may change as we ship updates)',
      f10t: 'Credit, funding & income outlook',
      f10d: 'Browse credit/funding pointers and an income outlook based on records you keep',
      f11t: 'Profile & farm health',
      f11d: 'Edit farm details and coordinates, plus an at-a-glance farm health/completeness view',
      marketKicker: 'Community',
      marketTitle: 'Farmer’s market on LINE',
      marketBody:
        'Meet us on LINE for local price chatter, market news, and chances to trade farm goods with peers. Add Rai Dee’s official account for market-day updates and farm-related announcements.',
      uxTitle: 'Real screens from the app',
      uxIntro:
        'Actual Rai Dee UI, shown in pairs so you can demo clearly—home and shortcuts, Zero Waste, local intel vs pre-plant planning, prices vs soil map. Farmer-friendly for presentations.',
      ux1aHead: 'Home · AI tips & pest alerts',
      ux1bHead: 'Quick menu',
      ux2aHead: 'Zero Waste · reuse leftovers',
      ux2bHead: 'Zero Waste · value & buyers',
      ux3aHead: 'Area insights',
      ux3bHead: 'Pre-plant planner',
      ux4aHead: 'Prices & selling window',
      ux4bHead: 'Soil map',
      ux1Before:
        'Home combines easy-to-follow AI tips for today with clear pest-risk alerts—tap straight into prevention steps.',
      ux1After:
        'Tap the green bubble (bottom-right) for the quick menu: plant scan, voice ask, community, soil map, fertilizer, calendar—one sheet, every shortcut.',
      ux2Before:
        'Zero Waste: pick your crop, see which leftovers can be reused, and get simple how-tos (e.g. straw to compost)—step by step.',
      ux2After:
        'Scroll down—enter how much waste you have; AI estimates value and surfaces nearby buyers with call and LINE shortcuts.',
      ux3Before:
        'Area insights: pest snapshot, local averages, neighbor-reported prices—sense risk and the market around your farm.',
      ux3After:
        'Pre-plant planner: enter rai and costs, pull today’s market price—see profit, break-even, and a clear “worth planting” signal.',
      ux4Before:
        'Prices by crop, comparisons over time, 7-day trends, plus a “selling window” readout—time sales and field care with confidence.',
      ux4After:
        'Soil map: center on your plot, read LDD soil class, pH, organic matter—match fertilizer and crops to your real soil.',
      footerTagline: 'Rai Dee — a thinking partner for Thai farmers',
      footerContactLead: 'Contact the developer: ',
      footerBackTop: 'Back to top',
      footerPrivacy: 'Privacy policy',
      langToggleAria: 'Switch language Thai and English',
      uxImg1Before:
        'Rai Dee app: home screen with AI suggestions and pest alerts',
      uxImg1After: 'Rai Dee app: quick menu from bottom-right bubble',
      uxImg2Before: 'Rai Dee app: Zero Waste reuse of farm leftovers',
      uxImg2After: 'Rai Dee app: Zero Waste value and buyer locations',
      uxImg3Before: 'Rai Dee app: local area insights and nearby prices',
      uxImg3After: 'Rai Dee app: pre-plant planner and profit estimate',
      uxImg4Before: 'Rai Dee app: crop prices and selling window',
      uxImg4After: 'Rai Dee app: soil map and soil layer data',
      mascotBoyAlt: 'Rai Dee mascot (boy)',
      mascotGirlFooterAlt: 'Rai Dee mascot (girl)',
    },
  };

  const KEY = 'raidee-landing-lang';
  let lang = localStorage.getItem(KEY) || 'th';

  function apply() {
    const d = STR[lang] || STR.th;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (k && d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (k && d[k] != null) el.setAttribute('placeholder', d[k]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const k = el.getAttribute('data-i18n-alt');
      if (k && d[k] != null) el.setAttribute('alt', d[k]);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const k = el.getAttribute('data-i18n-aria-label');
      if (k && d[k] != null) el.setAttribute('aria-label', d[k]);
    });
  }

  window.RAIDEE_I18N = {
    toggle() {
      lang = lang === 'th' ? 'en' : 'th';
      localStorage.setItem(KEY, lang);
      apply();
    },
    init() {
      apply();
      document.getElementById('lang-toggle')?.addEventListener('click', () =>
        window.RAIDEE_I18N.toggle(),
      );
    },
  };
})();
