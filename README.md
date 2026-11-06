# ApprovalDesk waitlist — static site

This folder is a complete HTML/CSS/JS site. Open `index.html` in a browser or copy the folder into ApprovalDesk’s `website/` drop-in. There is no build step, no Node, and no React.

```
index.html
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

## Search

This page is marked `noindex` so it doesn't compete with the marketing site at https://approvaldesk.ng (repo: thekingchild/ApprovalDesk-Home), which owns the domain's search setup, `robots.txt`, `sitemap.xml` and `llms.txt`. Don't add a canonical URL, structured data or root crawler files here. If this page gets its own public URL and should appear in search, switch `robots` to `index, follow` and add a canonical and absolute `og:image` for that URL.
