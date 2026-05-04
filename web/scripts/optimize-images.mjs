import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

// Hero bg images -> WebP at 1920px wide, quality 65
const heroBgDir = path.join(publicDir, 'images', 'hero-bg');
const heroImages = ['slide-2.png', 'slide-3.png', 'slide-4.png', 'slide-6.png', 'slide-7.png'];

console.log('=== Optimizing Hero Background Images ===');
for (const name of heroImages) {
  const input = path.join(heroBgDir, name);
  const output = path.join(heroBgDir, name.replace('.png', '.webp'));
  try {
    const info = await sharp(input)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 65 })
      .toFile(output);
    console.log(`✅ ${name} → ${name.replace('.png', '.webp')} (${(info.size / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.error(`❌ ${name}:`, e.message);
  }
}

// Gallery images -> WebP at 800px wide, quality 75
const galleryDir = path.join(publicDir, 'gallery');
console.log('\n=== Optimizing Gallery Images ===');
try {
  const galleryFiles = (await readdir(galleryDir)).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  for (const name of galleryFiles) {
    const input = path.join(galleryDir, name);
    const baseName = path.basename(name, path.extname(name));
    const output = path.join(galleryDir, `${baseName}.webp`);
    try {
      const info = await sharp(input)
        .resize(600, 450, { fit: 'cover', withoutEnlargement: false })
        .webp({ quality: 75 })
        .toFile(output);
      console.log(`✅ ${name} → ${baseName}.webp (${(info.size / 1024).toFixed(0)} KB)`);
    } catch (e) {
      console.error(`❌ ${name}:`, e.message);
    }
  }
} catch (e) {
  console.error('Gallery dir error:', e.message);
}

// Mentor images in root public
const mentorImages = [
  'Ashish_kulkarni.jpeg', 'akash.jpeg', 'amey_Astuti.jpeg', 'anant.jpeg',
  'atul_pandey.jpeg', 'debashis.jpeg', 'deric.jpeg', 'gaurav.jpg',
  'harsh_gupta.jpeg', 'moongoel.jpeg', 'pawan.jpeg', 'vaibhav_bhargava.jpeg',
  'vikrambanand.jpeg', 'vikrambanand_hd.png', 'mahendra.png', 'meenal.png',
  'pavan_dd.png', 'iimrohtak.jpg', 'bootcamp.jpeg',
];

console.log('\n=== Optimizing Mentor/Profile Images ===');
for (const name of mentorImages) {
  const input = path.join(publicDir, name);
  const baseName = path.basename(name, path.extname(name));
  const output = path.join(publicDir, `${baseName}.webp`);
  try {
    await stat(input);
    const info = await sharp(input)
      .resize(400, 400, { fit: 'cover', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);
    console.log(`✅ ${name} → ${baseName}.webp (${(info.size / 1024).toFixed(0)} KB)`);
  } catch (e) {
    if (e.code !== 'ENOENT') console.error(`❌ ${name}:`, e.message);
  }
}

// Large banner images
const bannerImages = [
  { file: 'ai-workshop-banner.png', w: 1200 },
  { file: 'poster-hero.png', w: 1200 },
  { file: 'upyukt.png', w: 1200 },
  { file: 'jargons.png', w: 1200 },
];

console.log('\n=== Optimizing Large Banner Images ===');
for (const { file, w } of bannerImages) {
  const input = path.join(publicDir, file);
  const baseName = path.basename(file, path.extname(file));
  const output = path.join(publicDir, `${baseName}.webp`);
  try {
    await stat(input);
    const info = await sharp(input)
      .resize(w, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);
    console.log(`✅ ${file} → ${baseName}.webp (${(info.size / 1024).toFixed(0)} KB)`);
  } catch (e) {
    if (e.code !== 'ENOENT') console.error(`❌ ${file}:`, e.message);
  }
}

console.log('\n✅ Image optimization complete!');
