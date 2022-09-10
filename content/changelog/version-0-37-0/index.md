---
title: "Version 0.37.0"
description: "Minor search update"
lead: ""
date: 2022-09-10T13:01:00-05:00
lastmod: 022-09-10T13:01:00-05:00
draft: false
images: []
contributors: []
---

This is a minor release, but a couple of small features have snuck in anyway.

## New stuff

Slightly expanded search capabilities

Previously, all file searches in the file list panel were treated as exact phrase searches. Now, you can search for multiple words, in any order, to locate files that have all of those words in either the file name or content, including the YAML header.

To search for an exact phrase (the previous behavior), wrap your search terms in quotes.

Example:

```
cakes pies "my recipes"
```

If you need to search for actual quote characters, you can escape them with a backslash: `\"`

A more extensive search feature is planned for a future update.

## Tweaks

* The filename is now visible in the non-compact-view files panel, if it's different from the YAML title.
* Manual page breaks can now be added to PDF exports using `<div style="page-break-after: always"></div>`

## Fixes

* Fixed excessive spacing above and below Mermaid charts when resizing the preview window
* Fixed incorrect extra spacing around non-first-level headings in preview window
* Fixed errors when user does not have a "documents" directory available
* Fixed timing issue that could cause spellcheck language selection to revert after saving in some cases
* Fixed erroneous vertical separator in songbook elements