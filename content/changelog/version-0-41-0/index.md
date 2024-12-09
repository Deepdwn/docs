---
title: "Version 0.41.0"
description: "Preference and mac updates"
lead: ""
date: 2024-12-08T21:56:00-05:00
lastmod: 2024-12-08T21:56:00-05:00
draft: false
contributors: []
---

This update adds a few new features, and a small rebuild of the application preferences area. Additionally, some
Mac-specific UI updates have been added to help Deepdwn fit in better in that ecosystem.

## New features

### Open files directly

You can now open markdown and fountain documents in Deepdwn directly from your file explorer, if Deepdwn knows about that folder.
If those files are _not_ in an existing folder, you'll be asked whether you'd like to add that document's folder first.

As a related feature/bugfix, when a folder cannot be added for some reason (for instance, if it has been added already,
or contains/is contained by another existing folder), an error will now be displayed in a notification instead of failing silently.

### Added PDF export bookmarks

The headings used in your documents will now translate to PDF bookmarks when exported. This is something I've wanted to add for a long time, and I'm glad it's now possible

### Mac-specific updates

* Deepdwn on macOS will now open application preferences and "About&nbsp;Deepdwn" in a separate window.
* In the main editor window, the application titlebar and toolbar now share space.
* When Deepdwn isn't focused, some elements will use reduced visual contrast.
* Reduced some on-hover effects in lists.
* Application menus have been slightly reorganized.
* User's Library directory is always ignored for folder scanning.

{{< img-simple src="images/titlebar.png" alt="Mac application titlebar containing the default window 'traffic lights', as well as the window title, combined with Deepdwn's menu buttons for creating new documents, opening help, etc." >}}

{{< img-simple src="images/preferences.png" alt="New settings window with a toolbar at the top with icons for preference sections, and preferences in a panel below." >}}

## Smaller features

* Font size can now be set manually, instead of only by dragging the slider

{{< img-simple src="images/font-size.png" alt="Fine sile slider with a text field to the right where the pixel size can be seen or directly edited." >}}

* Added key binding for moving to the visual beginning and end of the current line when line wrapping is enabled. This uses {{< keystroke "Alt Home" >}} and {{< keystroke "Alt End" >}} on Linux and Windows, and {{< keystroke "Command Left" >}} and {{< keystroke "Command Right" >}} on Mac.
* Added a warning when selecting your entire home directory (or a parent directory) as your notes folder.

## Tweaks

Some changes have been made to application preferences:

  * Some radio buttons replaced with dropdowns
  * For accessibility reasons, some dropdowns have been replaced with their more native implementations (and may be less stylish for it)
  * Replaced color preset dropdown with circular color swatches

## Other stuff

* Replaced some social media links with different social media links
* Songbook blocks no longer output headings in preview or exports
* Enforce a pagebreak in fountain document PDFs after the title page
* Adjust alignment of some elements on fountain document title pages to match documentation
* Added credits to about panel

## Bugfixes

* Reduce light colored flashes when opening preview window in dark mode
* Fixed missing prompt text for notes folder selection in macOS
* Fixed "mark" element in editor not ending correctly after some characters
* Fixed incorrect scrollbar colors in preview window in high contrast mode
* Fixed inconsistent punctuation in preferences help text
* Fixed incorrect label / field associations in preferences
* Fixed incorrect high contrast outline color for inputs during keyboard navigation
* Fixed border visibility in preview in high contrast mode at narrow window widths
* Fixed ignored directories still being monitored for changes. Improves performance on some systems when ignored folders have many nested folders
* Fixed timing issue causing directories to be monitored in some cases, when directory monitoring was disabled
* Fixed incorrect cursor position when moving to the end of a wrapped line when line breaks on spaces between words
