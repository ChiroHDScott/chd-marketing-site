---
name: inserting-google-analytics
description: Checks for and inserts Google Analytics script into a user-provided HTML page. Use when the user asks to add Google Analytics or tracking to a page.
---

# Insert Google Analytics

## When to use this skill
- When the user asks to "add Google Analytics" or "insert tracking code".
- When you need to ensure a specific Google Analytics tag (`G-Q2PKVTFDR5`) is present on a page.

## Workflow
- [ ] **Check for existing installation**: Verify if the script is already present in the file.
- [ ] **Locate insertion point**: Find the opening `<head>` tag.
- [ ] **Insert Script**: Add the Google Analytics immediately after the opening `<head>` tag.

## Instructions

### 1. Check for Existing Installation
Before making any changes, search the target file for the following ID or script snippets to avoid duplicate installation:
- `G-Q2PKVTFDR5`
- `googletagmanager.com/gtag/js`

If found, notify the user that Google Analytics is already installed.

### 2. Insertion Logic
If the script is missing, insert the following code block **immediately after** the `<head>` tag.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q2PKVTFDR5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q2PKVTFDR5');
</script>
```

### 3. Verification
After insertion, ensure the structure looks like this:

```html
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q2PKVTFDR5"></script>
    ...
```
