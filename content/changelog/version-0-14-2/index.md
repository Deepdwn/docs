---
title: "Version 0.14.2"
description: "Search for files, compact view, fixes"
lead: "Search for files, compact view, fixes"
date: 2020-12-30T17:55:02-06:00
lastmod: 2021-03-05T17:55:02-06:00
draft: false
images: ["images/search.png"]
contributors: []
---

This update brings a few features to improve usability when managing more files.

## File list updates

The file list now has a search field! This will search all (currently visible, subject to tag/category/folder filtering) files, based on their content or filename.

{{< img-simple src="images/search.png" alt="File panel with search field, search text and filtered file list" >}}

The file list now shows the currently selected folder or tag or category in the heading at the top to help make it more obvious that you're looking at a filtered set of files.

The file list also sports a new (optional) compact view, selectable from the View menu.

The file list is now sorted by name by default, instead of essentially unsorted. I'd like to make the sort order selectable in the future.

These two features work together to make working on long-form documents, split into multiple files, much easier.

{{< img-simple src="images/compact.png" alt="Application window with sorted and compact file view." >}}

## Bug fixes

* Fixed long lines in quote and code blocks not wrapping correctly in the preview window. These are now forcibly wrapped.
* Fixed Right Click > Open Folder not working in the Filters panel
* Minor performance improvements for tab processing and rendering.
* Prevent user from adding a folder that contains or is already contained by another folder that has been added already.