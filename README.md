# ApprovalDesk waitlist — static site

This folder is a complete HTML/CSS/JS site. Open `index.html` in a browser or copy the folder into ApprovalDesk’s `website/` drop-in. There is no build step, no Node, and no React.

```
index.html
robots.txt        search + AI crawler rules
sitemap.xml
llms.txt          plain-text summary for AI assistants
site.webmanifest
css/app.css
js/waitlist.js
images/
```

Asset URLs are relative (`css/app.css`, `images/background-design.svg`).

The hero CTA is the ApprovalDesk auth hook — keep it empty:

```html
<nav data-approvedesk-auth></nav>
```

When the files live in an ApprovalDesk `website/` folder, Laravel fills that nav with **Log in** / **Sign up** (or **Dashboard** if already signed in). Standalone, `js/waitlist.js` shows the guest buttons so the CSS can be previewed; it does nothing if Laravel already injected the links.

Style the hook from this site’s CSS: `[data-approvedesk-auth]`, `[data-auth="login"]`, `[data-auth="register"]`, `[data-auth="dashboard"]`.

## Search and AI search

Canonical URL, Open Graph and JSON-LD all point at `https://approvaldesk.ng/`. If the page is served from another URL, update `index.html`, `robots.txt`, `sitemap.xml` and `llms.txt` together. `robots.txt`, `sitemap.xml` and `llms.txt` only work when served from the domain root.
