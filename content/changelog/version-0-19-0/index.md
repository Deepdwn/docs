---
title: "Version 0.19.0"
description: "High contrast, emacs, centering, highlighting, list continuation!"
lead: "High contrast, emacs, centering, highlighting, list continuation!"
date: 2021-03-06T00:23:01-06:00
lastmod: 2021-03-06T00:23:01-06:00
draft: false
images: ["images/high-contrast.png"]
contributors: []
---

## List continuation

When typing a list, pressing enter/return will now insert a new list item at the same indentation level. This works for check lists as well. If you don't want that item, just press enter again.

{{< img-simple src="images/list-continuation.gif" alt="Typing bulleted lists and checklists in markdown. Lists continue automatically when pressing enter." >}}

## Center and Highlight

Paragraphs can now be centered with `->text<-`. 

Deepdwn now also supports highlighting text with `==text==`.

The code for this in the editor and preview is not identical, so you may see some slight differences in behavior between the two for some edge cases.

{{< img-simple src="images/center.png" alt="Editor and preview window with centered and highlighted text" >}}

## High contrast

This update also adds a high contrast mode supporting both dark and light application themes. The colors are currently static, but I'm hoping to make them configurable in the future. If this feature would be useful to you, please let me know.

{{< img-simple src="images/high-contrast.png" alt="Editor with highcontrast mode enabled, showing dark and light themes" >}}


## Emacs mode

Deepdwn now supports an Emacs mode to complement the existing Vim mode.

## Bugfixes

* Fix `:w` in vim mode not saving file
* Fix application menu being visible in distraction free mode
* Fix vim text field using wrong text color in dark mode
* Better preferences button and text alignment
* Fix the tail end of the yaml frontmatter (`---`) not using the correct display in mixed monospace mode