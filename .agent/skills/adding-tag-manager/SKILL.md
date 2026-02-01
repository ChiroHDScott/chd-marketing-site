---
name: adding-tag-manager
description: Adds Google Tag Manager scripts to the head and body of HTML files. Use when the user wants to add GTM or tracking scripts.
---

# Add Google Tag Manager

## When to use this skill
- When the user asks to add Google Tag Manager.
- When the user wants to add tracking scripts for GTM-5SH3CGL.

## Instructions
1.  **Check for existing GTM snippets**: Look for `GTM-5SH3CGL` or "Google Tag Manager" comments in the target HTML file(s) to prevent duplicates.
2.  **Add Head Script**: Insert the following code immediately after the opening `<head>` tag or as high as possible in the `<head>`:
    ```html
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5SH3CGL');</script>
    <!-- End Google Tag Manager -->
    ```
3.  **Add Body Script**: Insert the following code immediately after the opening `<body>` tag:
    ```html
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SH3CGL"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    ```
