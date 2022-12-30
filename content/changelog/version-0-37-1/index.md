---
title: "Version 0.37.1"
description: "Mostly bugfix update"
lead: ""
date: 2022-12-26T18:01:00-05:00
lastmod: 2022-12-26T18:01:00-05:00
draft: false
images: []
contributors: []
---

This is primarily a bugfix release!

## Autocomplete

Autocomplete has gotten a small rework. When using autocomplete to link to other markdown files, more files will be considered if the link being autocompleted doesn't look like a relative path.

For example, when autocompleting the following link

```md
[link](my_file
```

_all_ files with names containing `my_file` will be shown in the autocomplete list, including those in parent or child folders, relative to the current file.

However, the following will only display files matching the specified directory and beginning of filename:

```md
[link](../path/to/my_file
```

This makes it easier to link to files by name without having to specify (or know) their relative paths.

Hopefully that makes sense. Let me know what you think.

## Bug fixes

* Fixed some markdown back references not appearing in the info panel if the current file path contained spaces
* Fixed clicking links to other markdown files in the preview window not working
* Fixed spellcheck language settings failing to load properly in some cases
* Navigation buttons for future dates now correctly disabled in the statistics panel's date picker
* Fixed expanded statistics panel using wrong colors in high contrast mode
* Fixed missing high contrast theme for date picker
* Added high contrast theme using patterns instead of color for word count statistics
* Fixed incorrect particle colors in power mode in some cases (mostly while writing code blocks)
* Fix power mode failing to engage in some cases
* Fix missing drag-and-drop display in some cases

## Performance

* Fixed image autocomplete considering too many images in some cases
* Performance improvement for markdown link autocomplete
* Fix unusually sluggish performance when opening application menus on linux machines
* Reduce rendering requirements when particles disabled in power mode

## Miscellaneous

* Security and maintenance updates
* More ligatures are now available in the included Fira Code font
* Slightly reduced width of wordcount chart's tooltip border