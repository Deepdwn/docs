---
title: "Version 0.33.0"
description: "Automatic formatting fixes"
lead: ""
date: 2022-02-20T11:54:00-05:00
lastmod: 2022-02-20T11:54:00-05:00
draft: false
images: []
contributors: []
---

Deepdwn's previous feature update added markdown format checks, and with this update it can fix many of them automatically!

## Fix markdown formatting errors

{{< img-simple src="images/lint-fix.gif" alt="Extra spaces are added to an ATX-style markdown heading which become underlined indicating an error. Clicking the warning icon shows a menu where the errors can be fixed">}}

When Deepdwn knows how to fix a formatting issue, you can click the format warning icon to show a menu of available fixes.

You can also fix all document errors at once with from the "Fix all formatting errors" item in the Tools menu. You can even apply fixes to your files automatically on save with "Fix formatting issues on save" setting in Preferences > Advanced.

## Tweaks

* Slightly higher contrast for markdown lint underlines
* Save whether sections (tags/categories/folders) are expanded or collapsed, and restore their state at launch

## Bug fixes

* Fix missing/incorrect formatting error underline locations in some cases
* Fix similar errors on the same line not being highlighted. Identical errors may still not be
* Fix autosave not autosaving correctly
* Fix cursor position being weird when inserted between a heading's prefix and its text
* Fix border color of template selection popup in high contrast mode
* Fix heading alignment when selecting text in right-to-left documents
* Fix removing a folder leaving some files behind visually
* Fixed top level folders not being collapsed at launch if they were collapsed previously
