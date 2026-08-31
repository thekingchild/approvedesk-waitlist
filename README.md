# ApproveDesk waitlist — static site

This folder is a complete HTML/CSS/JS site. Open `index.html` in a browser or copy the folder into ApproveDesk’s `website/` drop-in. There is no build step, no Node, and no React.

```
index.html
css/app.css
js/waitlist.js
images/
```

Asset URLs are relative (`css/app.css`, `images/background-design.svg`).

The hero CTA is the ApproveDesk auth hook — keep it empty:

```html
<nav data-approvedesk-auth></nav>
```

When the files live in an ApproveDesk `website/` folder, Laravel fills that nav with **Log in** / **Sign up** (or **Dashboard** if already signed in). Standalone, `js/waitlist.js` shows the guest buttons so the CSS can be previewed; it does nothing if Laravel already injected the links.

Style the hook from this site’s CSS: `[data-approvedesk-auth]`, `[data-auth="login"]`, `[data-auth="register"]`, `[data-auth="dashboard"]`.
