---
title: "Version 0.24.0"
description: "Document linking/autocomplete, and HTML exports"
lead: "Document linking/autocomplete, and HTML exports"
date: 2021-06-10T18:01:01-05:00
lastmod: 2021-06-10T18:01:01-05:00
draft: false
images: []
contributors: []
---

Update 0.24 is a feature-packed update that I've been looking forward to for a while.

## Document linking

First up, document linking! This is really a collection of features, so let's dive in.

{{< img-simple src="images/autocomplete.gif" alt="Typing a markdown link and autocompleting the name of a document and heading. Ctrl+clicking the link navigates to the document and heading. Autocompleting an image, and then hovering cursor over image with ctrl held to display a thumbnail of the image.">}}


Deepdwn now supports links from one document to another, both in the editor and preview window.

This is done using the standard markdown link format:

```markdown
[My Document](../my_document.md)
```

Clicking this link in the preview window, or control-clicking the filename portion of the link in the editor, will both take you directly to the file. This currently works for documents that Deepdwn knows about (markdown files in the folders you have added).

Control-clicking external http(s) links in the editor will open the URL in your default web browser, similar
to clicking external links in the preview window (as of version 0.23).

### Heading links

You can also link directly to a heading in a markdown document by adding an anchor ID.

```markdown
# My Heading

[link to my heading](../my_document.md#my-heading)
```

These ID values are based on the heading content, by: replacing all runs of space characters with hyphens, converting it to lowercase, and URL-encoding the whole value.

To make linking to these IDs (much) easier, here comes another new feature.

### Link Autocomplete

Deepdwn can now autocomplete links to both documents and their headings. Autocomplete is triggered with {{< keystroke "Ctrl Space" >}}.


{{< img-simple src="images/document-autocomplete.png" alt="Popup autocompleting document filenames">}}

Autocomplete will return documents beginning in the same directory as your current file, so your active file will need to be saved first. To link to other directories, you can begin your link with a relative path, like:

```markdown
[My Document](../
```
or
```markdown
[My Document](subdirectory/
```

You can also link directly to headings by using {{< keystroke "Ctrl Space" >}} after typing a `#` character in your link:

```markdown
[My Document](../my_document.md#help
```

{{< img-simple src="images/heading-autocomplete.png" alt="Popup autocompleting headings in another document" >}}

Deepdwn's autocomplete will then display a list of headings in that document, and will add the correct ID to your document link.

### Backlinks

Document links also enable another feature: Backlinks!

To view a list of documents that have linked to your current document, you can expand the brand new file info panel at the bottom of the editor.

Currently, this only shows the number of characters/words/lines in your document, the creation and modification times, and backlinks, if any.

{{< img-simple src="images/info-panel.gif" alt="Info panel toggling, showing backlinks and document data">}}

## Image preview

In the editor, you can now see a preview of your images by holding the {{< keystroke "Control" >}} key while hovering over them.

This works for both local images (but only if they're within one of your document directories), and remote web images.

{{< img-simple src="images/image-preview.png" alt="Cursor hovering over markdown image tag, with image popup of the Deepdwn logo">}}

## Exporting

In addition to PDF, Deepdwn can now export your markdown as HTML, both with and without styling (in case you want to incorporate it in some other location)

{{< img-simple src="images/export-menu.png" alt="Preview window with popup menu and the options 'Save as PDF', 'Save as HTML' and 'Save as Unstyled HTML'">}}

### Export from File menu

Exporting is now available directly from the File menu in the editor, without having to open the preview.

### Export SVGs

Some of Deepdwn's non-standard markdown features are rendered as SVGs, like diagrams, sheet music and guitar tabs (but not math).

These SVGs can now be exported directly from the preview window by right-clicking on them and selecting "Export as SVG" from the context menu, in case you want to use a diagram you've created somewhere else.

{{< img-simple src="images/export-svg.png" alt="Export SVG context menu on top of flow chart">}}

## YAML error display

Deepdwn will now highlight and warn you about invalid YAML frontmatter at the beginning of your markdown documents. The error messages themselves need some work to make them more friendly, but for now you'll have an indicator about what's going on.

{{< img-simple src="images/yaml-validation.png" alt="Yaml indentation error underlined with popup containing 'bad indentation of a mapping entry' error message" >}}

## Tweaks

* Removed automatic codeblock language detection from preview window for performance reasons.
* Added animation in outline view when switching documents.
* Increased spacing for active line indicator in high contrast mode.
* Library updates and patches.


## Bug fixes

* Fixed occasional and/or brief mermaid graph errors when changing between light and dark modes
* Fixed background color of save icon in preview window in high contrast mode
* Fixed unexpected code indentation when completing code blocks in the editor
* Fixed bug related to cancelling an export in progress
* Another attempt at fixing incorrect URL in Deepdwn update notifications
