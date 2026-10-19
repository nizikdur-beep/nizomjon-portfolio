import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

console.log('Initializing gh-pages deployment from:', distDir);

execSync('git init', { cwd: distDir, stdio: 'inherit' });
execSync('git checkout -B gh-pages', { cwd: distDir, stdio: 'inherit' });
execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
execSync('git commit -m "deploy: publish production build to GitHub Pages"', { cwd: distDir, stdio: 'inherit' });
try {
  execSync('git remote add origin git@github.com:nizikdur-beep/nizomjon-portfolio.git', { cwd: distDir, stdio: 'ignore' });
} catch {
  execSync('git remote set-url origin git@github.com:nizikdur-beep/nizomjon-portfolio.git', { cwd: distDir, stdio: 'inherit' });
}
execSync('git push -f origin gh-pages', { cwd: distDir, stdio: 'inherit' });

console.log('Deployment push completed successfully!');
