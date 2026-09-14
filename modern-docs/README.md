# ChameleonMap Guide - Modern Documentation

This folder contains a refreshed documentation interface for the existing ChameleonMap guide.

The new layout keeps the original source pages in `../topics/` and renders them inside a modern responsive shell with:

- Searchable navigation
- Mobile-friendly sidebar
- Previous and next topic links
- Cleaner typography and media presentation
- Reuse of the existing images and video assets

## Running locally

Because the interface loads the original topic files with `fetch`, open it through a local web server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/modern-docs/
```
