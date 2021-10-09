---
title: "Version 0.28.0"
description: ""
lead: ""
date: 2021-10-08T12:00:01-05:00
lastmod: 2021-10-08T12:00:01-05:00
draft: false
images: []
contributors: []
---

This update contains a number of smaller display improvements and tweaks. Enjoy!

## Display updates

{{< img-simple src="images/appearance.png" alt="Markdown document with headings of different sizes based on heading level, code blocks and inline code with outlines around them" >}}

In a new feature I'm creatively calling "Big Headings", Deepdwn can now display your markdown headings, uh, bigger. 

Because this is much less compact, and may not be desirable for all users, it can be disabled in the Appearance section in preferences.

The appearance of inline code and code blocks have also been updated, and now more closely match their preview-rendered counterparts. Code blocks created by indenting text, rather than wrapping with backticks, will look slightly different, but I'm planning to improve that in the future.

Also, rendered songbooks are now more compact with regard to line spacing in the preview window.

## Drag and drop

In addition to images, Deepdwn now supports drag-and-drop for other filetypes. These will be added as generic links in your document. Control-clicking them in the editor, or lef-clicking them in the preview, will load them with your system's default application.

## Active file in window header (mac-only)

{{< img-simple src="images/represented-filename.png" alt="Mac window titlebar with filename dropdown showing path to the current file." >}}

Deepdwn now supports a mac-only feature: file representations in window Titles. Mac users can now command-click the filename in the window heading to show a dropdown path to the current file.


## Added abbreviations in markdown

```
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification is maintained by the W3C.
```

Will be rendered this way:

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

## Bugfixes

* Fix text selection color in dark mode being way too bright
* Fix a timing issue causing a duplicate files to appear in the file list, on some systems, when saving a file for the first time
* Fix overwriting a known file via Save As causing a duplicate file to appear in the file list
* When using non-monospaced font in the editor, center text markers (`->` and `<-`) are now displayed with a monospaced font

## Other stuff

The itch.io page has been slightly updated as well to reflect new features that have been added since launching, remove some less important features, and update some images where the design has changed.