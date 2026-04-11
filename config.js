/**
 * ปรับค่าก่อน deploy — อย่า commit URL ลับถ้าไม่ต้องการ
 * @typedef {{ apkUrl: string, lineOaUrl: string, playStoreUrl?: string }} SiteConfig
 */
window.RAIDEE_SITE_CONFIG = {
  /**
   * สำหรับหน้า f/index.html — คัดลอกจาก Supabase Dashboard → Project Settings → API
   * - supabaseUrl = Project URL (เช่น https://xxxx.supabase.co)
   * - supabaseAnonKey = anon public (ไม่ใช่ service_role)
   * ค่าเดียวกับ SUPABASE_URL / SUPABASE_ANON_KEY ใน assets/.env ของแอปได้
   */
  supabaseUrl: 'https://jogvznjergnismdwrcvv.supabase.co',
  supabaseAnonKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZ3Z6bmplcmduaXNtZHdyY3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDQzNzQsImV4cCI6MjA5MDcyMDM3NH0.Cmx5gr9rQOLbqM3_VGIPEp0aJjoYR65a4Fs1w1pvClA',
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
