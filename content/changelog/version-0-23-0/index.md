---
title: "Version 0.23.0"
description: "RTL support, math, songbooks"
lead: "RTL support, math, songbooks"
date: 2021-04-24T13:01:01-05:00
lastmod: 2021-04-24T13:01:01-05:00
draft: true
images: []
contributors: []
---

## Right to left support

Deepdwn now has support for right to left writing and display.

Frontmatter and code blocks will still be displayed left-to-right, as are diagrams and music in the preview.

First, there's a new setting under Preferences->Input, which controls the default writing and display direction.

You can select Right-to-left, Left-to-right, or automatic.

Automatic will determine document direction from the first (non-[neutral](https://en.wikipedia.org/wiki/Bidirectional_text#Neutral_characters)) character in your document, after any frontmatter.

This global default setting can be overwritten on any document by adding a `dir: rtl` or `dir: ltr` attribute to your yaml frontmatter.

## More music: Songbooks

To supplement sheet music and guitar tabs, Deepdwn can now display (and syntax highlight) songbooks (a mix of chords and lyrics), in [ChordPro](https://www.chordpro.org) format.

## Math

Deepdwn now supports [AsciiMath](http://asciimath.org/), a markup language for mathematics that meshes really well with Deepdwn's, and markdown's, display philosophy.

It's easy to read, easy to write, and renders nicely.

## LaTeX + chemistry

LaTeX is more common than AsciiMath for displaying math on the web and print.

It wouldn't normally be included in Deepdwn, because despite it's ubiquity, it does not read as well without rendering. However, AsciiMath depends on a LaTeX implementation for it's rendering, so Deepdwn now also supports [KaTeX](https://katex.org/).

Support for [chemical equations](https://mhchem.github.io/MathJax-mhchem/) has also been added, for good measure

## Immediate frontmatter updates

As part of RTL support, Deepdwn now immediately responds to changes to document frontmatter, instead of waiting until save. This means that changing document title, tags, categories, and RTL setting will will now update Deepdwn's interface immediately.

This gives better feedback when entering frontmatter, and makes more sense in general.

## Tweaks

* "Drafts" filter will no longer be activated automatically when selecting a draft document
* Heading indicators `#` now appear in a slightly different color (looks nice).
* One more of several planned (large) code refactors.

## Bugfixes

* Fixed checkbox display in generated PDFs
* Fixed incorrect 'hide menu' menu state on startup