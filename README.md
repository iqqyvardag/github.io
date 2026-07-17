# TriOrigin Labs website

Static GitHub Pages website for **TriOrigin Labs** at `https://trioriginlabs.com`.

## Current release

Website v0.2 — repository-integrated beta.

## Stack

- Semantic HTML
- Responsive CSS
- Vanilla JavaScript
- GitHub Pages
- No build step or external framework

## Local preview

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

GitHub Pages should publish from the `main` branch repository root. Keep the `CNAME` file unchanged so the custom domain remains connected.

See `DEPLOYMENT_GUIDE.md` for migration and rollback steps.
