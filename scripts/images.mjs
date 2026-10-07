// Grade and export site imagery into public/img/.
// Sources live in scripts/src-images/ (Unsplash photos + portrait). Run: node scripts/images.mjs
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const SRC = resolve('scripts/src-images')
const OUT = resolve('public/img')
mkdirSync(resolve(OUT, 'projects'), { recursive: true })

// Shared muted steel-blue grade so mixed photo sources read as one set.
async function grade(file, { saturation = 0.45, brightness = 0.92, tint = 0.35 } = {}) {
  const base = sharp(resolve(SRC, file)).rotate().modulate({ saturation, brightness })
  const { width, height } = await base.metadata()
  const overlay = await sharp({
    create: { width, height, channels: 4, background: { r: 43, g: 63, b: 92, alpha: tint } }
  }).png().toBuffer()
  return sharp(await base.toBuffer())
    .composite([{ input: overlay, blend: 'soft-light' }])
    .linear(1.06, -6)
    .toBuffer()
}

async function exportSizes(buf, name, ratio, widths, quality = 76) {
  for (const w of widths) {
    await sharp(buf)
      .resize(w, Math.round(w / ratio), { fit: 'cover', position: 'centre' })
      .webp({ quality })
      .toFile(resolve(OUT, `${name}-${w}.webp`))
  }
}

const projects = ['aimsafe', 'aividence', 'addad', 'nextbuy', 'cupme']
for (const p of projects) {
  const buf = await grade(`${p}.jpg`)
  await exportSizes(buf, `projects/${p}`, 15 / 11, [240, 360, 720])
}

// Sidebar landscape: Lausanne cathedral over Lake Geneva; lighter grade, portrait crop.
{
  const buf = await grade('lausanne.jpg', { saturation: 0.55, brightness: 1, tint: 0.2 })
  for (const w of [360, 540]) {
    await sharp(buf)
      .resize(w, Math.round((w * 13) / 9), { fit: 'cover', position: 'left' })
      .webp({ quality: 74 })
      .toFile(resolve(OUT, `lausanne-${w}.webp`))
  }
}

// Portrait: 4:5 crop, natural color with a slightly softened palette.
{
  const src = sharp(resolve(SRC, 'portrait.jpg'))
  const { width, height } = await src.metadata()
  const cropW = Math.round((height * 4) / 5)
  const buf = await src
    .extract({ left: Math.round((width - cropW) / 2), top: 0, width: cropW, height })
    .modulate({ saturation: 0.92 })
    .linear(1.03, 0)
    .toBuffer()
  for (const w of [400, 560, 778]) {
    await sharp(buf).resize(w).webp({ quality: 80 }).toFile(resolve(OUT, `portrait-${w}.webp`))
  }
  await sharp(buf).resize(600).jpeg({ quality: 82 }).toFile(resolve('public/profile.jpg'))
}

console.log('✓ images written to public/img')
