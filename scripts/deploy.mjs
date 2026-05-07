// Deploy dist/ to the gh-pages branch on origin.
// Assumes `vite build` has already produced dist/.
import { execSync } from 'node:child_process'
import { writeFileSync, rmSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const cwd = resolve('dist')

if (!existsSync(cwd)) {
  console.error('dist/ does not exist — run `npm run build` first')
  process.exit(1)
}

writeFileSync(resolve(cwd, '.nojekyll'), '')

const run = (cmd) => execSync(cmd, { cwd, stdio: 'inherit' })

// Discover origin URL from the parent repo
const originUrl = execSync('git remote get-url origin').toString().trim()

// Use a fresh nested git so we don't entangle dist with the parent repo
rmSync(resolve(cwd, '.git'), { recursive: true, force: true })

run('git init -b gh-pages')
run('git config user.name "Zhiqian Zhou"')
run('git config user.email "zhiqian.zhou@estudiantat.upc.edu"')
run('git add -A')
run('git commit -m "Deploy site"')
run(`git remote add origin ${originUrl}`)
run('git push -f origin gh-pages')

// Cleanup
rmSync(resolve(cwd, '.git'), { recursive: true, force: true })

console.log('\n✓ Deployed to gh-pages branch')
