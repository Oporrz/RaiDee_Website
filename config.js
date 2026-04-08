/**
 * ปรับค่าก่อน deploy — อย่า commit URL ลับถ้าไม่ต้องการ
 * @typedef {{ apkUrl: string, lineOaUrl: string, playStoreUrl?: string }} SiteConfig
 */
window.RAIDEE_SITE_CONFIG = {
  /**
   * ลิงก์ดาวน์โหลด APK — ไฟล์ใหญ่เกินอัปโหลดใน repo ได้ดี: แนบใน GitHub Releases แล้วชี้แบบดาวน์โหลดตรง
   * ชื่อไฟล์ท้าย URL ต้องตรงกับชื่อใน Assets ของรีลีส (รวมตัวพิมพ์เล็กใหญ่)
   */
  apkUrl:
    'https://github.com/Oporrz/RaiDee_Website/releases/latest/download/raidee.apk',
  /** เพิ่มเพื่อน LINE Official Account — @942mipwo */
  lineOaUrl: 'https://line.me/R/ti/p/@942mipwo',
  playStoreUrl: '',
};
