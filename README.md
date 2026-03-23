# ASA — Adi Shmueli Architect

Portfolio website for Adi Shmueli Architect.
Live at: **https://idoputty.github.io/asa/**

---

## How to update content

You don't need any technical knowledge to update the site. Everything is in plain text files you can edit directly on GitHub.

### Updating your bio (About section)

1. Open `index.html` on GitHub
2. Click the pencil icon (Edit)
3. Find the section starting with `id="about"` — look for `<!-- About -->`
4. Edit the paragraph text inside the `<p>` tags
5. Click **Commit changes**

### Adding or editing a project

1. Open `js/projects.js` on GitHub
2. Edit the pencil icon to edit
3. Find the `var projects = [` array at the top
4. Each project looks like this:
   ```js
   {
     id: 'project-name',
     title: 'Project Title',
     category: 'Residential',       // or Cultural, Commercial, Interior, Landscape
     meta: 'City, Country · Year',
     image: './assets/images/projects/project-01.jpg',
     imageAlt: 'Description of image for accessibility',
     description: 'Full project description shown in the detail view.'
   }
   ```
5. Also update the matching card HTML in `index.html` (search for the project title)
6. Commit changes

### Adding a project photo

1. Prepare your photo: JPEG, approximately 1200×900px, under 500KB
2. Go to `assets/images/projects/` in the repository
3. Click **Add file → Upload files**
4. Name it `project-01.jpg`, `project-02.jpg`, etc.
5. The site will automatically show the image

### Updating contact information

1. Open `index.html`
2. Search for `studio@adishmueli.com` — replace with your real email
3. Search for `+972 · 50 · 000 · 0000` — replace with your real phone
4. Find the LinkedIn and Instagram `href="#"` links and replace `#` with your profile URLs
5. Commit

### Setting up the contact form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the form ID (looks like `xabcdefg`)
3. Open `index.html`
4. Find `action="https://formspree.io/f/YOUR_FORM_ID"`
5. Replace `YOUR_FORM_ID` with your actual form ID
6. Commit

### Replacing the hero background

The hero currently shows a concrete gradient. To add your own photo:

1. Prepare a high-quality photo: JPEG, 2000px wide minimum
2. Upload it to `assets/images/` and name it `hero-bg.jpg`
3. Open `css/sections.css`
4. Find the comment `/* When a real hero photo is available...`
5. Follow the instructions in that comment to switch from gradient to image
6. Commit

---

## Local preview

To preview changes locally without pushing:

```bash
# Just open the file directly in your browser:
open index.html

# Or use any simple local server (Python):
python3 -m http.server 8080
# Then visit http://localhost:8080
```

---

## Deployment

The site deploys automatically to GitHub Pages when you push to the `main` branch.

**Setup (one time only):**
1. Go to repository Settings → Pages
2. Under **Source**, select: **Deploy from a branch**
3. Branch: `gh-pages` / folder: `/ (root)`
4. Save → the site will be live within ~2 minutes

Every subsequent push to `main` triggers a re-deployment automatically.
