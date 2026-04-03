# How to Edit Your Website Content

Everything you need to edit is in this `content/` folder.

## Quick Guide

| What to edit          | File                          | Format   |
|-----------------------|-------------------------------|----------|
| Name, bio, tagline    | `site.json`                   | JSON     |
| Work/projects         | `projects.json`               | JSON     |
| Brand collaborations  | `brands.json`                 | JSON     |
| Testimonials          | `testimonials.json`           | JSON     |
| Blog posts            | `blog/your-post-title.md`     | Markdown |
| Curated links         | `links/links.json`            | JSON     |
| Images                | `../public/images/`           | JPG/PNG  |

## Adding a Blog Post

1. Create a new `.md` file in `content/blog/` (e.g., `my-new-post.md`)
2. Add frontmatter at the top:

```
---
title: "Your Post Title"
date: "2026-04-04"
summary: "A short description of the post"
---

Your post content goes here in markdown.
You can use **bold**, *italic*, [links](https://example.com), etc.
```

3. Save. It will appear on the blog page automatically.

## Adding a Curated Link

Open `links/links.json` and add a new entry:

```json
{
  "label": "Cool AI Tool",
  "url": "https://example.com",
  "description": "Short description",
  "category": "tools"
}
```

## Adding Images

Drop images into `../public/images/` and reference them as `/images/filename.jpg` anywhere.
