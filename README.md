# encrypted-usb.fail

A static research index for Xusheng Li's work on encrypted USB drives and USB copy-protection products, organized by vendor. The site is prepared for GitHub Pages. Publishing must be enabled in the repository settings.

## Preview locally

Run `python3 -m http.server 8000` in this directory, then open `http://localhost:8000`.

## Publish with GitHub Pages

1. In repository Settings → Pages, choose **Deploy from a branch**, `main`, and `/ (root)`.
2. Set the custom domain to `encrypted-usb.fail`. The tracked `CNAME` file already contains this domain.
3. At the DNS provider, point the apex domain to GitHub Pages using the `A` records in [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). An apex domain cannot use a standard `CNAME` DNS record.
4. Enable **Enforce HTTPS** after GitHub provisions the certificate.

The site has no build step. Edit `index.html` and `styles.css` directly. Finding descriptions are summaries of the linked first-hand sources; verify changes against those sources before publication.
