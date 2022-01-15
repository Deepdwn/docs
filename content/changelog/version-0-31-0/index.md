---
title: "Version 0.31.0"
description: "Convert rich text to markdown"
lead: ""
date: 2021-12-22T20:40:01-05:00
lastmod: 2021-12-22T20:40:01-05:00
draft: false
images: []
contributors: []
---

## Paste rich text to markdown

{{< img-simple src="images/paste-html.gif" alt="Copying and pasting a checklist from a webpage into Deepdwn. Checklists are converted into markdown task lists" >}}

When you paste HTML content into Deepdwn (copied from a webpage or online document editing tool), Deepdwn will now do its very best to convert it into markdown. This can be a huge time saver when importing formatted content and tables especially.

{{< img-simple src="images/paste-table.gif" alt="Copying and pasting data from a spreadsheet into Deepdwn. Spreadsheet data is converted into a markdown table." >}}

As a side effect, Deepdwn now supports copy/pasting spreadsheet data directly from Google Sheets, LibreOffice, and Office 365. Others may or may not work!

If you want to skip this formatting, use the "Paste as Plain Text" menu item ({{< keystroke "Ctrl-Shift-V">}}), or "Paste and Match Style" for Mac users, ({{< keystroke "Command-Option-Shift-V">}}).

## Quick toggle for checklists

{{< img-simple src="images/toggle-checklist.gif" alt="Toggling checkboxes on the active line on and off with a keystroke." >}}

In checklists, you can now quickly toggle the checkbox for the current line with the keystroke {{< keystroke "Ctrl-Space">}}. This shortcut may change in the future.

## Template filters

Files with the tag `template` will no longer appear in other tags and categories when filtering. They'll still be visible when the template tag filter has been selected, or when no filters are selected.

A small icon has been added to the file list to help distinguish them from normal files.

## Tweaks

* When switching between documents, Deepdwn will do a better job maintaining your undo history and scroll position. If you run into issues, especially when changing documents, [please let me know!](https://itch.io/board/1147311/support)
* Added basic syntax highlighting for block (not inline) LaTeX, using both code backticks and the `$$` delimiters.
* For draft documents, "Save As" and "Save" will now do the same thing: just save the file. Previously, Save As would create a new file while retaining the unsaved file as well, which was confusing.
* Slight display change to word count statistics charts (rounded corners).
* Autosave is now enabled by default for new users

## Bug fixes

* Fix ordered list marker appearing too large when ordered list is nested in an unordered list
* Fixed pasting URLs being allowed to create links within links
* Fixed weird border at the corner of block code elements in the editor
* Removed unintended shortcut that reloaded the Deepdwn interface
* Fixed flash of bold/italic when using Ctrl+B/I shortcuts
* Fixed pasting a URL over selected text being allowed to create links within links
* LaTeX dollar sign delimiters (in editor window only):
  * Fix delimiters not terminating when multiple instances occur on the same line
  * Fix inline LaTeX being treated as valid when first and/or last enclosed character is a space
  * Fix markdown elements being parsed/highlighted within inline and block LaTeX