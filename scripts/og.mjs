// Build public/og.jpg (1200×630 social preview). Run after scripts/images.mjs.
import sharp from 'sharp'

const portrait = await sharp('public/img/portrait-560.webp').resize(360, 450).toBuffer()
const src = sharp('scripts/src-images/lausanne.jpg')
const { width, height } = await src.metadata()
// Horizontal band around the cathedral spire, mountains and lake.
const strip = await src
  .extract({ left: 0, top: Math.round(height * 0.3), width, height: Math.round(height * 0.3) })
  .resize(1200, 140, { fit: 'cover', position: 'bottom' })
  .modulate({ saturation: 0.55 })
  .toBuffer()
const fade = Buffer.from(`<svg width="1200" height="140"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FAF8F4"/><stop offset="1" stop-color="#FAF8F4" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="140" fill="url(#g)"/></svg>`)
const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="80" y="150" font-family="Menlo, monospace" font-size="20" letter-spacing="4" fill="#3B5B8C">M.S. DATA SCIENCE · EPFL</text>
  <text x="76" y="255" font-family="Georgia, serif" font-size="92" fill="#1A1D23">Zhiqian Zhou</text>
  <text x="80" y="320" font-family="Georgia, serif" font-style="italic" font-size="28" fill="#3A3F47">Multi-Agent LLM Systems · RAG</text>
  <text x="80" y="356" font-family="Georgia, serif" font-style="italic" font-size="28" fill="#3A3F47">Machine Learning · Data Analysis</text>
  <rect x="80" y="386" width="60" height="2" fill="#3B5B8C"/>
  <text x="80" y="430" font-family="Menlo, monospace" font-size="20" fill="#5F6670">Open to ML / Data Science internships</text>
</svg>`)
const paper = Buffer.from('<svg width="360" height="450"><rect width="360" height="450" fill="#EFEBE3" stroke="#E5E2DC"/></svg>')

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#FAF8F4' } })
  .composite([
    { input: strip, top: 490, left: 0 },
    { input: fade, top: 490, left: 0 },
    { input: paper, top: 104, left: 774 },
    { input: portrait, top: 90, left: 760 },
    { input: text, top: 0, left: 0 }
  ])
  .jpeg({ quality: 84 })
  .toFile('public/og.jpg')
console.log('✓ public/og.jpg')
