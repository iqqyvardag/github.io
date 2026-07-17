# TriOrigin website v0.2 deployment guide

## What this package replaces

The previous repository contained a temporary Coming Soon page:

- `index.html`
- `style.css`
- `script.js`

The v0.2 repository replaces that page with the full static knowledge-platform beta. The root-level legacy `style.css` and `script.js` are intentionally absent because the new site uses `/assets/css/styles.css` and `/assets/js/`.

## Preserved configuration

- Custom domain: `trioriginlabs.com`
- GitHub Pages repository-root deployment model
- HTTPS/DNS configuration remains external to the repository and should not be changed

## Recommended deployment with GitHub Desktop

1. Download and unzip this package.
2. Open the existing `iqqyvardag.github.io` repository in GitHub Desktop.
3. Delete all repository files except the hidden `.git` folder.
4. Copy **the contents** of this package into the repository root. Do not place the package folder itself inside the repository.
5. Confirm that `CNAME` is at the repository root and contains only `trioriginlabs.com`.
6. Commit with a message such as `Deploy TriOrigin website v0.2`.
7. Push to `main`.
8. In GitHub, open **Settings → Pages** and confirm deployment is from the `main` branch/root.
9. Wait for the Pages deployment to complete, then test `https://trioriginlabs.com` in a private browser window.

## Command-line deployment alternative

Run these commands inside a clone of the existing repository:

```bash
# Back up the current branch first
git checkout -b backup-coming-soon

git checkout main

# Remove tracked site files while retaining .git
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Copy the contents of the unzipped v0.2 package into this directory
# Then:
git add -A
git commit -m "Deploy TriOrigin website v0.2"
git push origin main
```

## Post-deployment checks

- Homepage loads at the custom domain
- Learn, Evidence, Health, Tools, Journal and About navigation works
- Mobile menu opens and closes
- Search returns results
- Label Decoder calculates valid inputs and rejects inconsistent inputs
- `https://trioriginlabs.com/sitemap.xml` loads
- `https://trioriginlabs.com/robots.txt` loads
- The browser shows HTTPS without a certificate warning

## Rollback

The uploaded original repository ZIP is the rollback copy of the previous Coming Soon site. Alternatively, revert the deployment commit in GitHub.
