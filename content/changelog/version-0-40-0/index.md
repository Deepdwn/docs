---
title: "Version 0.40.0"
description: "Footnote previews + linking, navigation history"
lead: ""
date: 2024-01-06T13:40:00-05:00
lastmod: 2024-01-06T13:40:00-05:00
draft: false
contributors: []
---

Welcome to Deepdwn v0.40!

This release adds a couple of new features and some smaller bugfixes.

## Footnotes

Footnote references can now be control-clicked in the editor to jump right to the footnote.

Also, like images, footnotes can now be previewed by holding control while hovering over them.

{{< img-simple src="images/footnote.png" alt="Markdown document with the cursor hovering over a footnote reference. A preview of the rendered footnote content appears in a popup near the cursor, matching the markdown content in the footnote below." >}}

## Navigation History

Deepdwn now keeps track of your document navigation history, including the document you're looking at and the
cursor location. This allows you to jump back to your previous location (great when clicking document and footnote links)!

**For the default (Sublime) key bindings**, you can use {{< keystroke "Ctrl Shift -" >}} and {{< keystroke "Ctrl Alt -" >}} to navigate forward and backward.<br />
**For Vim bindings**, you can use {{< keystroke "Ctrl o" >}} and {{< keystroke "Ctrl i" >}}.<br />
**For Emacs binding**, both {{< keystroke "C-x C-left" >}} and {{< keystroke "C-x C-space" >}} will navigate backward, and {{< keystroke "C-x C-right" >}} will navigate forward.

For all bindings, you can also navigate with mouse buttons 4 and 5 (typically mouse thumb buttons).

## Better monospace font sizing

The monospace font size setting used when a non-monospaced font has been selected as the primary editor font. The monospace font size setting changes the relative sizes of your monospaced font (used for tables, code, and other places where monospacing is important) and the non-monospaced font used everywhere else.

When clicking the new "Auto" button next to this setting, Deepdwn will calculate the differences in heights of the two fonts and update the setting accordingly (you can still adjust it afterward if needed).

## Bugfixes

* Fixed incorrect indentation in Fountain action elements
* Fixed control key behavior remaining acive after application unfocused
