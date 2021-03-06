---
title: "Version 0.9.1"
description: "Added autosave, outline view and scrolling"
lead: "Added autosave, outline view and scrolling"
date: 2019-11-24T16:58:09-06:00
lastmod: 2021-03-05T16:58:09-06:00
draft: false
images: ["images/scrolling.gif"]
---

This release adds autosave (finally), and a document outilne.

## Autosave

When enabled, changed files (that have already been saved at least once) will be saved every 2 minutes. When JotDown loses focus, these files will also be saved immediately.

## Outline view

A new tab to the left of the document now displays the document outline, based on headings in your markdown document. Headings will be highlighted as you scroll through your document, and can be used to quickly navigate around your file. Particularly useful for longer notes.

The addition of the third tab is a little bit awkward to me, and makes resizing and collapsing these sections a bit funky. Hope to improve the UI in this area at some point.

{{< img-simple src="images/scrolling.gif" alt="Synchronized scrolling between editor and preview and outline panel" >}}
