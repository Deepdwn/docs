---
title: "Version 0.39.0"
description: "Fountain screenplays, autocomplete, new diagrams"
lead: ""
date: 2023-03-17T17:40:00-05:00
lastmod: 2023-03-17T17:40:00-05:00
draft: false
images: ["images/039-social.png"]
contributors: []
---

Welcome to a ~~small~~ quite large update that got out way out of hand

## Fountain

First, Deepdwn now supports the Fountain screenplay format: <https://fountain.io/>

{{< img-simple src="images/fountain.png" alt="Editor with Fountain formatted screenplay titled 'Big Fish'" >}}

Fountain is a plain-text, human-readable format for writing and sharing screenplays. It has a lot in common with markdown, and is a good fit for Deepdwn.

You can create a new Fountain document in several ways:

* Select `File > New file > Fountain` from the application menu
* _or_ create a new file (which is markdown by default) and save it with the Fountain file extension: `my_file.fountain`
* _or_ create a new Fountain example file and then edit it as needed

### Filtering

If you have both Fountain and markdown files in your document library, you'll see a new `Format` filter in the filter panel on the left. As with other filters, you can use this one to select (or exclude) Fountain files, or control click to combine with other filters.

{{< img-simple src="images/format-filter.png" alt="Filter sidebar with a format section containing both a markdown and Fountain filters" >}}

### Metadata

You can pin Fountain documents the same way you do for markdown documents; by either right-clicking them in the file view and selecting `Pin file`, or by adding `Pinned: true` to the title page.

As with markdown, you can tag and categorize your documents by storing tags and categories in the document's metadata. For Fountain, this happens on the [title page](https://fountain.io/syntax#section-titlepage), where you can add extra fields. Like markdown, Deepdwn will look for `tags` and `category` fields.

Here's an example title page with some normal Fountain fields, a category, and two tags:

```fountain
Title: Fountain example
Author: Deepdwn
Copyright: Copyright © 2001
Draft date: 2/26/2023
category: Help
tags:
   demo
   fountain
```

By default, in both the editor and preview, Deepdwn uses the [Courier Prime](https://quoteunquoteapps.com/courierprime/) font, a typeface designed for screenplays, but this can be changed (just for Fountain files!) in font preferences.

### Outline

{{< img-simple src="images/fountain-outline.png" alt="Fountain document with several sections beginning with #. The panel to the left titled Outline lists each section name" >}}

If you're already familiar with markdown, Fountain [sections](https://fountain.io/syntax#section-sections) will look familiar to you. These are only used for organization, and do not appear in the rendered output, and (like markdown), but they'll appear in your document outline in Deepdwn.

### Editor indentation

If desired, Deepdwn can display some fountain elements indented in the editor while typing (like characters, dialog, and centered elements). This is not enabled by default, as it can cause content to jump around a bit.

You can find this setting in `Preferences > Appearance`.

{{< img-simple src="images/fountain-indent.png" alt="Fountain indentation setting found in preferences. Text reads: Enables indentation and centering of Fountain formatted documents when editing. This better matches the final output, but can cause element jumping." >}}

For more information about the Fountain format, visit <https://fountain.io/>!

## Mermaid diagrams

Deepdwn's Mermaid integration has been updated, both in the editor and preview view. This adds newer features, like [accessible diagram titles and descriptions](https://mermaid.js.org/config/accessibility.html), and two new diagram types.

### New charts

[Mindmaps](https://mermaid.js.org/syntax/mindmap.html) are nice for displaying hierarchical information, and uses a very simple syntax based on indentation.

{{< img-simple src="images/mindmap.png" alt="Mindmap code block describing fashion items nested by indentation, next to the matching mindmap diagram" >}}

Also [pie charts](https://mermaid.js.org/syntax/pie.html).

{{< img-simple src="images/pie.png" alt="Mermaid pie chart code block with a title and several 'Pet Adoption' values. Alongside, a pie chat appears with pie slice colors matching the code block colors" >}}

### New theme

Diagram styles have been updated. In general, they are now higher contrast, and slightly more colorful, and a little prettier

{{< img-simple src="images/mermaid-theme-small.png" alt="Four mermaid diagrams with bold black borders and white backgrounds. Two diagrams have green or blue subgroups in the background" >}}

### Syntax highlighting updates

* Added editor highlighting for `actor` in sequence diagrams (instead of only `participant`)
* More detailed syntax highlighting for `classDiagram` diagrams
* Syntax highlighting added for accessible titles and descriptions in Mermaid code blocks. See: <https://mermaid.js.org/config/accessibility.html>
* Fenced code blocks beginning with ` ```mermaid ` are now treated as mermaid correctly, for better interoperability with other markdown editors. Mermaid is still allowed in bare code blocks without the `mermaid` language hint

### Diagram exports

Exported SVGs (by right clicking them in the preview window), do a better job of embedding their styles.

The ID attribute and style blocks have been removed in favor of inline styles. This should make them more portable and fix issues with ID collision.

### Other mermaid changes

* Improved auto-indentation while creating diagrams
* Autocomplete added for the diagram type
* Simple autocomplete added for keywords in several diagram types
* Markdown example document now contains `accTitle` and `accDescr` for supported mermaid diagrams
* Double circle now supported in flowcharts
* Fixed typo in one mermaid example document

## Autocomplete

Deepdwn's autocomplete feature has been _greatly_ expanded.

Previously, Deepdwn supported autocomplete in two places:

* Entering a tag or category in your document's metadata
* Linking to markdown documents and headings using markdown links

In markdown documents, autocomplete now also works for [footnote references](https://www.markdownguide.org/extended-syntax/#footnotes), and frontmatter keys, like `title` and `description.

In fenced code blocks, many languages also support autocomplete. Most mermaid diagrams now support a basic form of autocomplete as well, including the diagram type itself.

In Fountain documents, autocomplete can be used for title page keys, tags and categories in the same way, as well as scene prefixes (like `INT`, `EXT`), character extensions (like `cont'd`, `v.o`), and any scene names and characters in your current document

{{< img-simple src="images/fountain-autocomplete.gif" alt="Writing in a Fountain document. Autocomplete is used to enter 'Int' and 'River' from a list of scene prefixes and scenes, then to enter a character name from a list of character names and to mark the dialog below as voice over." >}}

## Font settings

Two new font controls have been added in `Preferences > Fonts` for Fountain documents, allowing you to set their font and size in the editor and preview separately.

### And monospace

Additionally, there is a new setting controlling _only_ the monospace font used in markdown documents where needed.

{{< img-simple src="images/font-menu.png" alt="Font selection interface with editor font, editor font size, monospace font, monospace font size settings." >}}

This option is enabled when using a variable-width default font (like Source Sans or Source Serif), or a custom font and have have enabled the `Mix monospace` font option.

This is useful if you'd like to use a non-monospaced font most of the time for writing, but need to use a _specific_ monospaced font in tables or code block.

This was only possible before by using the necessary monospaced font for all editing.

{{< img-simple src="images/monospace-example.png" alt="Markdown document with variable width font in a heading and paragraph text, and a monospace font, Sarasa Mono, in table and code blocks. The table text has Chinese, Japanese and Korean characters alongside latin characters while maintaining table alignment" >}}

## Ignore folders and folder patterns

Ignore specific folders, or folder names (or patterns) globally. This is useful if you use Deepdwn to manage blog posts,
or project README documents, rather than a folder dedicated only to notes.

To ignore a specific folder, right click the folder name in the folders panel on the left, and choose "Ignore folder" from the context menu.

{{< img-simple src="images/ignore-folder.png" alt="Right clicking a directory in the folder list to show a context menu with the options 'Open folder' and 'Ignore folder'" >}}

To unignore the folder, visit `Preferences > Advanced`, and press the 'remove' button for that specific folder.

### Advanced

If you're comfortable with regular expressions, you can also ignore folders matching a specific name or pattern globally.

{{< img-simple src="images/ignore-settings.png" alt="Ignored folders preference section. The top section displays a list of individually ignored folders, reading 'None added'. The bottom section has a field where a new regular expression can be entered, and two existing ignore patterns" >}}

To do so, add a new pattern in the Ignored folder patterns field.

This pattern is treated as a case-insensitive regular expression, and matched against the folder _name_ (not the entire path).

Some examples:

* `^node_modules$`: Ignore any folder named exactly "node_modules"
* `-private$`: Ignore any folder whose name ends in "-private"
* `^2021`: Ignore any folder beginning with "2021"
* `^\.`: Ignore any folder beginning with a period

Previously, Deepdwn ignored all folders beginning with a period. With this update, this default filter is now user configurable and can be removed or modified as needed.

## Code and prose commenting

Use the {{< keystroke "Ctrl /" >}} shortcut when editing to comment out the current line or selected line, so that it will be ignored when previewing or exporting.

In fenced code blocks, Deepdwn will also try to use the correct comment syntax for the code language if possible.

## Template selection

The document template list has been updated to allow templates in multiple formats.

{{< img-simple src="images/templates.png" alt="Template selection menu with subsections for fountain and markdown documents. Each section has a plus button to create a new template, and each template has a star/favorite to use that template as the default for new documents.">}}

Templates which have been starred will always be used when creating new documents for that specific format only.

Also, a button to create a new template is now available for each format. This was only available previously if you had no saved templates in your library.

## Smaller changes

* Reduced font size in template and example selection menus
* Added (very) basic syntax highlighting for AsciiMath code fences
* Increased contrast between active and hover colors when using high contrast mode with the light theme
* Slightly higher default contrast for text in light mode in the preview window
* Added hover styling to autocomplete popup for mouse usage
* Show the full file name when hovering over files in the file list when using compact file view. Previously this only appeared in the non-compact file view.
* Slightly different approach to color calculations based on selected accent color. In general, these colors are more saturated now.
* Added Courier Prime font by default to support Fountain format
* Adjusted vertical alignment of top menubar icons
* Reordered and grouped appearance preferences
* Highlight the divider between panels when hovering over it more obvious that it's interactive
* Filter items in the filter list, and file titles in the file list no longer show `...` when too large for their containers, which makes more actual text visible when there is only room for a few characters
* Fenced code background color is very slightly brighter in light theme

## Bug fixes

* Fixed control-clicking on links to other sections of the current document not working correctly in the editor
* Fix incorrect editor highlighting for markdown code fences beginning with more than three backticks. Inner backticks now correctly allowed inside these code blocks.
* Fixed items in the "Create from Template" popup menu not working correctly
* Hebrew text using diacritics should have text width calculated correctly, fixing markdown table alignment
* Markdown tables with adjacent cells containing right-to-left character sets should no longer have their columns swapped
* Fix vim cursor not being visible inside fenced code blocks
* Fix non-mermaid code fences being rendered as diagrams if they looked like diagrams
* Fix menubar being slightly "cut off" at the top after closing preferences
* Fix regex find showing incorrect result count when using line anchors