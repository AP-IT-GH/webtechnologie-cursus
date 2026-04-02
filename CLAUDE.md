# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **GitBook-based course** for web technology (HTML, CSS, JavaScript) taught in Dutch. There are no build tools, package managers, or test runners — the repo is pure markdown content and static HTML/CSS/JS solution files.

## Structure

- `SUMMARY.md` — GitBook table of contents; must be updated when adding/removing pages
- `html/`, `css/`, `javascript/`, `asynchroon-programmeren/` — course theory chapters
- `labos/` — lab assignment pages (labo1.md through labo22.md)
- `projectopdracht/` — project assignment pages
- `.gitbook/assets/oplossingen/` — reference solutions per lab (e.g. `labo-12/oefening-01/`)

## Content Language

All course content (markdown files) is written in **Dutch**. When editing or adding course content, write in Dutch.

## Coding Guidelines (from `coding-guidelines.md`)

These apply to all HTML/CSS/JS files, including solutions in `.gitbook/assets/oplossingen/`:

- **Formatter**: Prettier (format on save)
- **Paths**: Always use relative paths (never start with `/`)
- **HTML**: Must be valid; use semantic tags (`<header>`, `<main>`, `<footer>`, `<article>`); HTMLHint for validation
- **CSS**: Class/id names in English, kebab-case for CSS variables; define variables in `:root {}`; no unused CSS
- **JavaScript**: Use `<script type="module">` for all scripts; camelCase for variables and functions; English variable names

## GitBook Frontmatter

Many markdown files use GitBook-specific frontmatter (e.g. `description`, `icon`, `cover`, `coverY`). Preserve this when editing existing pages.
