/**
 * บีบอัด JPG ใต้ assets/images แบบแทนที่ไฟล์เดิม (ไม่สร้างสำรอง / ไม่ใช้ WebP)
 * รัน: npm install && node scripts/compress-jpgs.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesRoot = path.join(__dirname, '..', 'assets', 'images');

/** ความกว้างสูงสุดพิกเซล (ลดเฉพาะเมื่อใหญ่กว่านี้) */
const maxWidth = 2400;
/** คุณภาพ JPEG สมดุลขนาด/รายละเอียด */
const jpegQuality = 83;

async function compressFile(filePath) {
  const before = (await fs.promises.stat(filePath)).size;
  const input = await fs.promises.readFile(filePath);
  let pipeline = sharp(input).rotate();

  const meta = await sharp(input).metadata();
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  const out = await pipeline
    .jpeg({
      quality: jpegQuality,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:2:0',
    })
    .toBuffer();

  await fs.promises.writeFile(filePath, out);
  const after = out.length;
  const rel = path.relative(imagesRoot, filePath);
  console.log(
    `${rel}: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB`,
  );
}

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) await walk(full);
    else if (/\.jpe?g$/i.test(ent.name)) await compressFile(full);
  }
}

await walk(imagesRoot);
console.log('เสร็จ: อัปเดต JPG ทั้งหมดใต้ assets/images');
