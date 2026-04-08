/**
 * ปรับค่าก่อน deploy — อย่า commit URL ลับถ้าไม่ต้องการ
 * @typedef {{ apkUrl: string, lineOaUrl: string, playStoreUrl?: string }} SiteConfig
 */
window.RAIDEE_SITE_CONFIG = {
  /**
   * ลิงก์ดาวน์โหลด APK — แบบ relative ใช้ได้เมื่อโฟลเดอร์ `landing/` เป็น root ของเว็บ
   * ถ้าโฮสต์ APK ที่อื่น (GitHub Releases / R2) ให้ใส่ URL เต็ม https://...
   */
  apkUrl: 'downloads/raidee.apk',
  /** ลิงก์เพิ่มเพื่อน LINE OA — แทนที่ด้วยของจริง */
  lineOaUrl: 'https://line.me/R/ti/p/@YOUR_LINE_ID',
  playStoreUrl: '',
};
