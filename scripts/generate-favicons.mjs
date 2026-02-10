import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const svgPath = join(publicDir, 'logo.svg')
const svgBuffer = readFileSync(svgPath)

// Sizes needed for various platforms
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'og-image-icon.png', size: 512 }, // For social media
]

async function generateFavicons() {
  console.log('Generating favicons from SVG...')

  for (const { name, size } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name))
    console.log(`  ✓ ${name} (${size}x${size})`)
  }

  // Generate ICO file (multi-resolution)
  // ICO needs 16, 32, 48 combined - we'll use the 32x32 as primary
  const ico32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer()

  // For simplicity, just copy the 32x32 as favicon.ico
  // (Real ICO would need ico-encoder package, but PNG works in modern browsers)
  writeFileSync(join(publicDir, 'favicon.ico'), ico32)
  console.log('  ✓ favicon.ico (32x32)')

  console.log('\nDone! Generated all favicon variants.')
}

generateFavicons().catch(console.error)
