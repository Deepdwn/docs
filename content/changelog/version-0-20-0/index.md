---
title: "Version 0.20.0"
description: "Image drag and drop, pasting, dark mode for preview"
lead: "Image drag and drop, pasting, dark mode for preview"
date: 2021-03-23T00:23:01-06:00
lastmod: 2021-03-23T00:23:01-06:00
draft: false
images: ["images/dnd-thumb.png"]
contributors: []
---

This update brings a couple of long overdue features, alongside some bells and whistles.

## Local image handling

Deepdwn can now display images from your local machine. Both absolute paths, and paths relative to the current document are supported. Setting an image directory via yaml frontmatter may be supported later.

For example:

```md
![A Happy goat!](/home/myname/pictures/goat.jpg)
![A Happy goat!](../goat.jpg)
![A Happy goat!](C:\Users\MyName\Pictures\goat.jpg)

```


Note that paths with spaces in them are not supported in markdown, so you'll either want to replace these with URL escaped space characters `%20`, ex:
```md
![My Image](path/to/my/file%20with%20spaces.jpg)
```
or wrap the whole path in angle brackets
```md
![My Image](<path/to/my/file with spaces.jpg>)
```

### Drag and drop

To make working with local images a little easier, Deepdwn now also supports image drag and drop.

{{< img-simple src="images/dnd.gif" alt="Dragging an image file into the editor. Image then appears in preview window">}}

If your current file has been saved at least once, the image will use a relative path from your markdown file to the image.

If your file has not been saved, Deepdwn will use the absolute path to your file.


### Image pasting

{{< img-simple src="images/paste.gif" alt="Animation of mouse selecting portion of an image in image editor, and copy-pasting into deepdwn editor window. Image section then appears in preview window.">}}

Deepdwn now also supports pasting PNG and JPG image data directly.

If you copy an image, or a section of an image, and paste it into the editor, a new file will be created in the same directory as the file (if youl document has been saved). For unsaved markdown documents, the image will be added to your first document directory instead.


## Preview dark mode

{{< img-simple src="images/dark-mode.png" alt="Preview window with heading 'Dark preview mode.' Dark colored background and light colored text and diagrams.">}}


The preview window now respects the application dark mode setting, including diagrams and music. When saving a PDF from the preview window, the PDF will still use the light theme as before.

## Minor changes

* Increased contrast for guitar tabs and chord diagrams
* Skip spellchecking for raw urls (links that aren't using the `[text](url)` syntax)
* Added a link to the support site to the help menu
* Changed the default theme for diagrams to a more gray palette. In a future update, these will be themed around the selected accent color.
* Two new key shortcuts for reverse sorting the selected lines in the default keybindings ({{< keystroke "Shift F9" >}} and {{< keystroke "Ctrl Shift F9" >}} for case-insensitive). Complete list here: [Shortcuts →]({{< ref "shortcuts" >}})

## Bugfixes

* Fix incorrect icon color when hovering over the word "Preferences" in the preferences button
* Fix text always being out of alignment for some diagrams
* The word count displayed below the editor will now show `0` for empty documents, instead of `1`
* Fixed small horizontal gaps in table separators in preview
* Fixed crash related to syntax highlighting, in some weird cases, for diagram and music code blocks
