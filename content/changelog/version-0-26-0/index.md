---
title: "Version 0.26.0"
description: "Table editing edition"
lead: "Table editing edition"
date: 2021-07-15T16:36:01-05:00
lastmod: 2021-07-15T16:36:01-05:00
draft: false
images: ["images/table-social.png"]
contributors: []
---

# Live tables

Verion 0.26 brings a shiny new table editor to Deepdwn!

{{< img-simple src="images/table-edit.gif" alt="Entering data in a markdown table, table columns remain aligned while typing. Cursor jumps between cells. Rows are sorted in ascending and descending order, columns are reordered.">}}

Tables are realigned automatically while editing. You can press tab (and shift tab) to jump between columns, or press enter to move to the next row.

You can find the shortcuts for adding, removing, sorting, and moving columns and rows here: [Shortcuts]({{< ref "shortcuts#tables" >}}). Most of these are also available when using [vim]({{< ref "vim#tables" >}}) or [emacs]({{< ref "emacs#tables" >}}) shortcuts as well.

## Adding and removing columns

In addition to the more explicit shortcuts above, new columns can be added by typing a pipe character ( `|` ) in an existing table cell.

Similarly, you can delete a pipe character if the column before that character is empty (not counting the header), and the entire column will be removed.


## Table alignment with CJK characters

When Deepdwn adds spaces to pad out column widths, CJK (Chinese, Japanese and Korean) characters will be treated as exactly twice the width of latin characters.

There are some fonts, too large to include with Deepdwn, where latin characters are exactly half the width relative of CJK characters, such as like [Sarasa Mono](https://picaq.github.io/sarasa/). If you install one of these and use it as your editor font in Deepdwn, your tables will line up perfectly, even with a mix of CJK and non-CJK characters.

Sarasa Term UI shown:

{{< img-simple src="images/cjk-table.png" alt="Markdown table with Chinese, English, Japanese, and Korean text using a font which maintains monospace alignment">}}

## Table formatting styles

Tables can either have pipe characters at the start and end of each line ("closed" tables), or they can be "open", where each line does not start and end with a pipe.

Here's a closed table:

```
| heading | heading |
|---------|---------|
| hello   | hello   |
```

and an open table:

```
heading | heading
--------|--------
hello   | hello
```

Because of markdown formatting rules, open tables are slightly more compact, but aren't quite as flexible. Closed tables are required if any cells in the first column are empty, for instance. Closed tables can also be a single column wide, where open tables must have at least two columns.

You can toggle between open and closed table formatting styles by adding (or removing) a pipe character at the very beginning of the table.

{{< img-simple src="images/table-styles.gif" alt="Adding and removing pipe character from the beginning of a markdown table. Pipe characters are added and removed from the beginning and end of each line to match">}}

## _No thank you_

There may be times when you don't want to automatically reformat tables while editing them, perhaps because the alignment causes wrapping in your editor.

You can disable automatic table formatting in `Preferences > Input`. When table formatting is disabled, you may still use all of the table editing shortcut keys to edit and format tables.

# Typewriter mode

This update also has a few (mostly) visual tweaks for typewriter mode

* Smoothly scroll to the active line position for initial scrolling, or if scrolling more than one line, but use immediate scrolling 
* Allow centered typing, even for very short documents
* Visually represent the top of the document in typewriter mode

## Tweaks

* The statistics/backreference panel no longer opens when clicking the panel itself, and will open only when clicking the expand button.
* Replaced most in-app icons
* Add icons to filter panel section headings, small updates to visuals
* Changed display of file counts in filter panel
* Removed zebra striping from file panel
* Removed animation used when files are reordered from the file panel for the initial application load. Animation still used when pinning files and filtering.

## Bug fixes

* Fixed missing file synopsis in the file list panel when compact file view was disabled. Synopses no longer contain markdown formatting.
* Fixed several hover effects in high-contrast mode
* Fixed unexpected document scrolling when changing from one document to another in some cases
* Fixed unexpected document scrolling when returning to editor after scrolling while the editor or window was not focused
* Fixed slow animation of outline panel separator on app load and when changing theme.