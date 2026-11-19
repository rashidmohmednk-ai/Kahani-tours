# Kahani Travel & Tours website

"Stories in every step." This is a one-page site for Kahani Travel & Tours, Thamarassery, Kozhikode.

- `index.html`: page layout, SEO meta tags, structured data (TravelAgency + FAQ)
- `data.js`: **edit here** for the WhatsApp number, social links, the enquiry email endpoint, services and all packages
- `script.js`: slideshow, package tabs and pop-up, enquiry form (emails info@kahanitravel.in via FormSubmit)
- `style.css`: design
- `robots.txt`, `sitemap.xml`, `site.webmanifest`: search-engine and phone-install files
- `assets/`: logo, icons, office photo, attestation poster, social share image

## Enquiry form → email
Forms post to `https://formsubmit.co/ajax/info@kahanitravel.in`. The **first** enquiry sends an
"Activate form" email to info@kahanitravel.in. Click the button in that email once; after that, every enquiry arrives in the inbox.

## SEO
SEO URLs assume the site lives at `https://kahanitravel.in/`. If you host it elsewhere, replace that address in
`index.html`, `robots.txt` and `sitemap.xml`. After going live, submit the sitemap in Google Search Console
and keep the Google Business Profile updated.
