# Dafi Home — دافي | ويطيب المقام.

The Dafi Home website. It is a single static page: no build step and no server code.

```
index.html              the whole site (HTML, CSS and JavaScript)
assets/img/             all photography and graphics (compressed WebP)
assets/fonts/           Kufam (Arabic display) and PP Editorial New (English)
content/ourStory.ts     founder story copy (reference / for a future CMS)
.nojekyll               tells GitHub Pages to serve files as they are
```

IBM Plex Sans Arabic loads from Google Fonts. Everything else is in this folder.

## Publish with GitHub Pages

1. Create a new repository on GitHub, for example `dafi-home`.
2. Upload the contents of this folder to the root of the repository. Put `index.html` at the top level, not inside a sub-folder.
3. In the repository, open **Settings → Pages**.
4. Under "Build and deployment", choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
5. After a minute or two, the site is live at `https://<your-username>.github.io/dafi-home/`.

### Use dafihome.com

1. In **Settings → Pages → Custom domain**, enter `dafihome.com` and save. GitHub then adds a `CNAME` file to the repository.
2. At your domain registrar, add these DNS records:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` pointing to `<your-username>.github.io`
3. Once the certificate is issued, tick **Enforce HTTPS**.

Keep the Shopify store on a subdomain, for example `shop.dafihome.com`.

## Before launch

- [ ] Replace the test WhatsApp/phone number `+44 7572 421395`. Search `index.html` for `447572421395`.
- [ ] Check the four Shopify collection URLs. Search for `shopifyCollections`.
- [ ] Confirm the email address `ahlan@dafihome.com`.
- [ ] **Fonts:** PP Editorial New is a commercial font. A public repository makes the font files downloadable, so make the repository **private** or confirm that your web licence allows public hosting. GitHub Pages from a private repository needs a paid GitHub plan; otherwise use Netlify or Cloudflare Pages, which work from private repositories for free.

## Editing

All copy, in both Arabic and English, is in `index.html`, in the `<script>` near the bottom. To replace a photo, overwrite the file in `assets/img/` with a new `.webp` that has the same name.
