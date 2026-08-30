# ApproveDesk waitlist — static site

This folder is a complete HTML/CSS/JS site. Open `index.html` in a browser or copy the folder into ApproveDesk’s `website/` drop-in. There is no build step, no Node, and no React.

```
index.html
css/app.css
js/waitlist.js
images/
```

Asset URLs are relative (`css/app.css`, `images/background-design.svg`).

The header includes the empty ApproveDesk auth hook:

```html
<nav data-approvedesk-auth></nav>
```

When the files live in an ApproveDesk `website/` folder, Laravel fills that nav with Log in / Sign up / Dashboard. Standalone, the empty nav stays hidden.

The waitlist form is client-side only: a valid email shows “You’re on the list — we’ll be in touch soon.” It does not post to a server.
