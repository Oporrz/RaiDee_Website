(function () {
  'use strict';

  const STR = {
    th: {
      logoAlt: 'โลโก้ไร่ดี',
      navHome: 'หน้าแรก',
      navFeaturesNav: 'ฟีเจอร์',
      navAbout: 'เกี่ยวกับเรา',
      navContact: 'ติดต่อ',
      headerDownload: 'ดาวน์โหลด',
      langCurrent: 'ไทย',
      heroTagline: 'เพื่อนคู่ใจเกษตรกรไทย',
      heroTitle: 'ไร่ดี',
      heroSubtitle:
        'ช่วยจัดการฟาร์มอย่างชาญฉลาด ใช้งานง่าย เข้าถึงข้อมูลการเกษตรได้ทุกที่ — สรุปฝน ศัตรูพืช ตลาด และคำแนะนำว่าวันนี้ควรทำอะไร',
      heroDownloadShort: 'ดาวน์โหลดเลย',
      heroLearnMore: 'เรียนรู้เพิ่มเติม',
      heroScrollHint: 'เลื่อนลง',
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
      lineCtaLong: 'แอดไลน์เพื่อรับข่าวสาร',
      featuresKicker: 'ฟีเจอร์',
      featuresTitle: 'ทำอะไรได้บ้างในแอป',
      featuresLead:
        'รวมเครื่องมือที่ใช้บ่อยในฟาร์ม — จากพยากรณ์ไปจนถึงเอกสาร GAP',
      f1t: 'พยากรณ์อากาศ',
      f1d: 'ฝน อุณหภูมิ ความชื้น ใช้วางแผนลงแปลงและกันศัตรูพืช',
      f2t: 'ศัตรูพืช & เตือนภัย',
      f2d: 'ประเมินความเสี่ยง รายงานชุมชน และคำแนะนำเชิงปฏิบัติ',
      f3t: 'ต้นทุน & แผน',
      f3d: 'บันทึกต้นทุน ปฏิทินกิจกรรม และมองภาพรวมฟาร์ม',
      f4t: 'ตลาด & ชุมชน',
      f4d: 'ดูราคาเพื่อนบ้าน รายงานราคา และข้อมูลในพื้นที่',
      f5t: 'AI ช่วยคิด',
      f5d: 'สรุปและตอบคำถามจากบริบทฟาร์ม พร้อมอ้างอิงข้อมูลที่ตรวจสอบได้',
      f6t: 'GAP & เอกสาร',
      f6d: 'บันทึกปุ๋ย ยา การเก็บเกี่ยว ส่งออกรายงาน',
      uxKicker: 'UX / UI',
      uxTitle: 'ออกแบบเพื่อใช้งานจริงในฟาร์ม',
      uxIntro:
        'เปรียบก่อน–หลัง: อธิบายปัญหาเดิม แล้วโชว์ว่าแอปช่วยอย่างไร (ใส่สกรีนช็อตจริงแทนกรอบเทาเมื่อพร้อม)',
      uxLabelBefore: 'ก่อน',
      uxLabelAfter: 'หลัง',
      ux1Before: 'ข้อมูลกระจายหลายแอป อ่านยาว ไม่รู้จะเริ่มจากไหน',
      ux1After: 'หน้าแรกสรุป “วันนี้” ฝน ความเสี่ยง และเมนูทำต่อทันที',
      ux2Before: 'ลงทะเบียนยุ่ง สลับจอบ่อย',
      ux2After: 'ออนบอร์ดิงทีละขั้น ฟอนต์ใหญ่ คำถามสั้น',
      ux3Before: 'ไม่มั่นใจคำแนะนำ AI',
      ux3After: 'แยกข้อมูลวัดได้ (เช่น ฝนจากแหล่งพยากรณ์) กับข้อความสรุป',
      ux4Before: 'ต้นทุนกระจายในกระดาษหรือจำไม่ครบ',
      ux4After: 'บันทึกต้นทุนต่อรอบปลูก ดูยอดรวมและประวัติเก็บเกี่ยว',
      footerTagline: 'ไร่ดี — แอปเพื่อเกษตรกรไทย',
      footerNote:
        'รูปพื้นหลังและมาสคอตจากชุดสินทรัพย์โปรเจกต์ — หากเผยแพร่นอกแอปโปรดตรวจสิทธิ์ใช้งาน',
    },
    en: {
      logoAlt: 'Rai Dee logo',
      navHome: 'Home',
      navFeaturesNav: 'Features',
      navAbout: 'About',
      navContact: 'Contact',
      headerDownload: 'Download',
      langCurrent: 'English',
      heroTagline: 'A companion for Thai farmers',
      heroTitle: 'Rai Dee',
      heroSubtitle:
        'Smarter farm management that stays easy to use — weather, pests, market signals, and clear guidance on what to do today.',
      heroDownloadShort: 'Download now',
      heroLearnMore: 'Learn more',
      heroScrollHint: 'Scroll',
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
      lineCtaLong: 'Add LINE for updates',
      featuresKicker: 'Features',
      featuresTitle: 'What you can do in the app',
      featuresLead:
        'Tools you use often in the field — from forecasts to GAP-style records.',
      f1t: 'Weather',
      f1d: 'Rain, temperature, humidity for field planning',
      f2t: 'Pest risk & alerts',
      f2d: 'Risk cues, community reports, practical tips',
      f3t: 'Costs & planning',
      f3d: 'Cost tracking, calendar, farm overview',
      f4t: 'Market & community',
      f4d: 'Neighbor prices and local reports',
      f5t: 'AI assist',
      f5d: 'Summaries and Q&A with checkable context',
      f6t: 'GAP & records',
      f6d: 'Fertilizer, chemical, harvest logs and exports',
      uxKicker: 'UX / UI',
      uxTitle: 'Designed for real farm use',
      uxIntro:
        'Before → after pairs: name the pain, then show how the app responds (swap in real screenshots later).',
      uxLabelBefore: 'Before',
      uxLabelAfter: 'After',
      ux1Before: 'Data across many apps; long text; unclear first step',
      ux1After: 'Home summarizes “today” — weather, risk, next actions',
      ux2Before: 'Heavy onboarding and tiny controls',
      ux2After: 'Step-by-step setup, larger type, fewer taps',
      ux3Before: 'Mistrust of “black box” AI tips',
      ux3After: 'Separates measured data (e.g. forecast source) from AI text',
      ux4Before: 'Costs on paper or hard to remember',
      ux4After: 'Per-season costs plus harvest history',
      footerTagline: 'Rai Dee — for Thai farmers',
      footerNote:
        'Background and mascots are project assets; check rights before wider promotion.',
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
