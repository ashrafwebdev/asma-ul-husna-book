# Asma-ul-Husna — Book Website

A simple static site for the book *Asma-ul-Husna: The 99 Names of Allah and Their Benefits*.
No build step — plain HTML/CSS/JS, ready for GitHub Pages.

## Files

- `index.html` — all page content (title, price, author bio, sample names, order form)
- `assets/style.css` — styling
- `assets/script.js` — order form logic (builds a WhatsApp message from the form)

## Editing content

Everything visible on the page — title, price, author bio, sample names/benefits, contact
details — is plain text inside `index.html`. Open it in any text editor and edit directly;
no build tools required.

To update the WhatsApp number the order form sends to, edit `WHATSAPP_NUMBER` at the top of
`assets/script.js`.

## Publishing with GitHub Pages

1. Merge this branch into the repository's default branch (or set Pages to build from this
   branch directly for a quick preview).
2. In the repo: **Settings → Pages → Build and deployment → Source** → choose
   **Deploy from a branch**, pick the branch and `/ (root)` folder, then **Save**.
3. GitHub publishes the site at `https://<username>.github.io/<repo-name>/` within a minute
   or two.

A custom domain can be added later from the same Pages settings screen.
