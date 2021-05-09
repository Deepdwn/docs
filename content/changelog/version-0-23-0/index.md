---
title: "Version 0.23.0"
description: "RTL support, math, songbooks"
lead: "RTL support, math, songbooks"
date: 2021-05-12T13:01:01-05:00
lastmod: 2021-05-12T13:01:01-05:00
draft: true
images: []
contributors: []
---

## Right to left support

Deepdwn now has support for right to left script, both while editing and in the preview.

First, there's a new setting under `Preferences->Input`, which controls the default writing and display direction for documents.

Here, you can select `Right-to-left`, `Left-to-right`, or `Automatic`.

If you select right-to-left, or left-to-right, that direction will be used for all documents unless overridden per-document.

You can also select `Automatic`, which will detect the first (non-[neutral](https://en.wikipedia.org/wiki/Bidirectional_text#Neutral_characters)) character in your document, after any frontmatter, and use that to set document direction.

This global default setting can be overwritten on any document by adding `dir: rtl` or `dir: ltr` attribute to your frontmatter (see screenshot).

In right-to-left documents, frontmatter and code blocks will still be displayed left-to-right, as well as diagrams and music in the preview.

## More music! Adding songbooks

To supplement sheet music and guitar tabs, Deepdwn can now display (and syntax highlight) songbooks (a mix of chords and lyrics), in [ChordPro](https://www.chordpro.org) format.

## Math

Deepdwn now supports [AsciiMath](http://asciimath.org/), a markup language for mathematics that meshes really well with Deepdwn's, and markdown's easy to write/easy to read philosophy, and renders nicely.

## LaTeX + chemistry

LaTeX is more common than AsciiMath for displaying math on the web and print.

It wouldn't normally be included in Deepdwn, because despite it's ubiquity, it does not read as well without rendering. However, AsciiMath depends on a LaTeX implementation for it's rendering, so Deepdwn now also supports [KaTeX](https://katex.org/).

Support for [chemical equations](https://mhchem.github.io/MathJax-mhchem/) has also been added, for good measure

## Immediate frontmatter updates

As part of RTL support, Deepdwn now immediately responds to changes to document frontmatter, instead of waiting until save. This means that changing document title, tags, categories, and RTL setting will now update Deepdwn's interface immediately.

This gives better feedback when entering frontmatter, and makes more sense in general.

## Added indentation control

The last update ensured that indentation was consistant in Deepdwn, and defaulted to spaces. If you prefer tabs, you can now do so by changing the indentation setting in Preferences, as well as the visible tab size / number of spaces.

## Tweaks

* Clicking URLs in the preview window will now open them in a new default browser window.
* "Drafts" filter will no longer be activated automatically when selecting a draft document.
* Heading indicators `#` now appear in a slightly different color (looks nice).
* One more of several planned (large) code refactors.

## Bugfixes

* Fixed checkbox display in generated PDFs.
* Fixed incorrect 'hide menu' menu state on startup.
* Fixed separator and sidebar nav border color in high contrast mode.
* Fixed text selection background color making selected text unreadable in dark mode.