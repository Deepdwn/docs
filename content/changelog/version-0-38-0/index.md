---
title: "Version 0.38.0"
description: "New Mac build, font selection, many bug fixes"
lead: ""
date: 2023-02-05T13:01:00-05:00
lastmod: 2023-02-05T13:01:00-05:00
draft: false
images: []
contributors: []
---

## New features

### Mac universal build

Deepdwn now provides a universal Mac OS build, supporting both x64 and ARM64 (M1/M2) processors without the need for Rosetta.

This build is larger (since it contains both the X64 and ARM builds combined), but _is recommended_ for users on M1 or M2 macs.

For technical reasons, an ARM-only build is not available right now.

### Font lists

Deepdwn now shows a proper list of fonts when selecting a custom font for editor or preview display, instead of requiring you to enter them manually. It's way better.

### Disable active line highlighting

Highlighting the current line can now be disabled in appearance preferences for those who find it distracting.

## Tweaks

* Justified text now supported using inline HTML, ex: `<div style="text-align: justified"></div>`

## Bug fixes

* Fixed missing high-contrast color scheme for the find-and-replace panel.

### List fixes

This release contains a number of fixes for list rendering and behavior, related to three main cases:

1. Ordered lists beginning with the `1)` format, rather than `1.`
2. Unordered list items beginning with `+` rather than `*` or `-`
3. "Nested" lists on a single line, ex: `1. * list item` or `* * * list item`

For these cases, the following issues were fixed:

* Fixed inability to toggle checklists with {{< keystroke "Ctrl Space" >}}.
* Fixed incorrect or failed checklist toggling when clicking checkboxes in the preview window
* Fixed tab key not indenting the current list item
* Fixed mixed-monospace feature not including the list item prefixes in the editor, when using a variable width font.

#### Other list fixes

* Fixed list continuation including too much much of the current line's content on the next line
* Fixed list continuation failing for enabled checkboxes that containing an uppercase `X`
* Fixed list continuation not including checkboxes for new items in ordered lists

## Other stuff

As [promised](https://billiam.itch.io/deepdwn/devlog/213733/future-updates-development-plan), Deepdwn's price is increasing from $11.99 to $14.99. It's likely this will be increased again in the future.

Deepdwn will be on sale until the end of February to give a little more warning about the price change.