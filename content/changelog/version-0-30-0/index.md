---
title: "Version 0.30.0"
description: "Multiple tag filtering, link pasting"
lead: ""
date: 2021-11-16T12:00:01-05:00
lastmod: 2021-11-16T12:00:01-05:00
draft: false
images: []
contributors: []
---

I've got a handful of features, changes and bugfixes for you with 0.30!

## Multiple tag selection

{{< img-simple src="images/multi-tag.png" alt="Deepdwn tags list with multiple tags selected at once" >}}

You can now select multiple tags in the filters panel by holding control while clicking them, to further filter your files.

When multiple tags are selected, only files containing _all_ of the selected tags will be visible in the file list.

While you can still only select one category or folder at a time (since a file can only be in a single category or folder), you _can_ now select a category _and_ a folder _and_ one or more tags at the same time to locate files which match all of those criteria.

## Font size selection

In addition to whole-application zooming, you can now also adjust the font size in the editor and preview windows independently. This setting is located in the Fonts section of application preferences.

## Paste to link

{{< img-simple src="images/paste-link.gif" alt="Animation where a URL is selected and copied with Ctrl+C, a word is selected in the following sentence, the URL is pasted again with Ctrl+V resulting in a markdown link with the selected text and pasted URL" >}}

When text is selected in the editor, pasting a URL will replace that text with markdown link tags. 

This behavior is very simple, and it doesn't look for surrounding markdown that might be incompatible with a linking, but this may be improved in a future update.

## LaTeX delimiters

When writing your LaTeX math and chemistry expressions, you can now use single and double dollar sign characters (`$` and `$$`) as delimiters instead of ``latex ...``. The original format is still supported. This improves data portability between Deepdwn and other markdown editors, where these delimiters are more common.

This change was originally announced in v0.29, but was missed during release.

## Tweaks

* Folders with names beginning with `.` will no longer appear in the folder list, and any markdown files beneath them (for whatever reason) will will not be displayed. 
* Removed border and background appearance from code blocks created by indentation in the editor. It's not currently possible to make these look the way I'd like while maintaining commonmark behavior.
* Added a visual "tick" on slider inputs in preferences that displays the default value for the slider
* The keyboard shortcuts for creating new files from templates have been changed from {{< keystroke "Ctrl-Numpad(number)" >}} to {{< keystroke "Ctrl-Shift-(number)" >}}
* When a new folder is detected in the file system, it will now appear collapsed in the folder list instead of being initially expanded

## Performance

* Improve file list and folder list rendering performance when they contain large numbers of visible items
* Disabled some animations in the file list when it contains a large number of files, for performance reasons
* Performance improvements when adding or removing large numbers of files at once (ex: by renaming or duplicating a large folder)

## Bug fixes

* Fix last selected tag/category/folder not being selected again when closing and relaunching Deepdwn
* Fix partially-missing border around the active line in high-contrast mode, when activeline is on a code block
* Fix incorrect (low-contrast) text selection color in the editor when in dark high-contrast mode
* Fix disabled slider input elements appearing to become activated when clicked
* Fix inconsistant spacing between heading prefixes and left margin when big headings setting is enabled
* Fix incorrect color in corner when vertical and horizontal scrollbars are visible together in some locations in both dark and high contrast modes
* Fix files still appearing in ancestor folders when they had been removed by deleting their parent directory in the file system