---
title: "Version 0.13.0"
description: "Ascii guitar tabs, tweaks and features"
lead: "Ascii guitar tabs, tweaks and features"
date: 2020-12-28T17:49:49-06:00
lastmod: 2021-03-05T17:49:49-06:00
draft: false
images: []
contributors: []
---

## Ascii Tabs

JotDown now supports guitar tabs in the (much more common) ascii tab format. These are properly syntax highlighted in the editor like the other musical formats. An example has been added to the _Show Me an Example_ document.


{{< img-simple src="images/asciitab.png" alt="Editor with ascii tabs and rendered version in preview window" >}}

## Minor features

* More mellow and more attractive editor colors in dark mode.
* When a syntax error causes a chart or ascii tab blocks not to render, a warning icon will appear in the preview window, with more details when you hover over it.
* Better spacing for the repeat signs in rendered tabs.
* Tabs now use a monospace font, and no longer vertically center notes that are played together. They are now left aligned to support more complex alignment.
* Tabs now support a spacing character (`-`) for custom note alignment. This was needed for ascii tab support, but is useful in the original tab format as well.
* Added information about JotDown's extension of the jTab format to the Show Me an Example document.

## Bug fixes

* Fixed current filter status not saving correctly in some circumstances (so that the "drafts" filter would always be enabled when reopening JotDown for instance).