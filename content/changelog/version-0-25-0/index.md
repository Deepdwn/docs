---
title: "Version 0.25.0"
description: "Folding, pinning, file monitoring, scroll improvements"
lead: "Folding, pinning, file monitoring, scroll improvements"
date: 2021-07-05T12:12:01-05:00
lastmod: 2021-07-05T12:12:01-05:00
draft: false
images: []
contributors: []
---

Here's another big update that I had planned to be a small update instead. I hope you like features!

## Document folding

Deepdwn now supports persistent document folding.

{{< img-simple src="images/folding.gif" alt="Folding multiple paragraphs of text at headings by adding ellipses after heading text, and unfolding sections by clicking on the ellipses">}}

With this change, you can collapse entire sections of your markdown documents based on heading level.

Any heading ending in `...` (three periods) is considered "folded" and will remain folded, even when the file is saved and reopened again later.

To unfold a heading you can:

* Move your cursor into the folded area with the arrow keys (or other navigation keys)
* Click the collapsed `...` item
* Delete the `...` item
* Use a shortcut key (below) to unfold all headings

There are new key shortcuts for this feature as well:

#### Sublime

<div class="table">

Shortcut | Description
---: | :---
{{< keystroke "Ctrl Shift [" >}} | Fold the current section
{{< keystroke "Ctrl-K Ctrl-1" >}} | Fold all sections
{{< keystroke "Ctrl-K Ctrl-0" >}} | Unfold all sections
{{< keystroke "Ctrl-K Ctrl-J" >}} | Unfold all sections
</div>

#### Emacs

<div class="table">

Shortcut | Description
---: | :---
{{< keystroke "Ctrl-x Ctrl-h" >}} | Fold current section
{{< keystroke "Ctrl-x Ctrl-t" >}} | Fold all sections
{{< keystroke "Ctrl-x Ctrl-a" >}} | Unfold all sections
</div>

#### Vim

<div class="table">

Shortcut | Description
---: | :---
{{< keystroke "zc" >}} | Fold current section
{{< keystroke "zC" >}} | Fold all sections
{{< keystroke "zO" >}} | Unfold all sections
</div>

These and all other key shortcuts can be found at <https://support.deepdwn.com/docs/guide/shortcuts>

## File system updates

Deepdwn now knows when files are changed.

If another application updates a file that Deepdwn knows about, the updated version will be immediately visible in Deepdwn. If files or folders have been added or removed, you'll see them immediately in the application, without having to rescan your folders. As such, the rescan folders button has been removed _when this feature is enabled_.

{{< img-simple src="images/conflict.png" alt="File conflict dialog with options to save current changes, accept external changes, or keep both versions">}}

If you have unsaved changes to that file, you'll be prompted to choose between keeping your changes, accepting the external changes, or saving a copy in order to keep both. If the file has instead been deleted by another application (and you have unsaved changes), the file will be moved to the Drafts filter with your unsaved changes.

File monitoring can be disabled, which will return the rescan folder button, from the new "Advanced" section in preferences.

Here, you'll also be able to use poll-based file monitoring. This method is less efficient, but may be necessary if your files are stored on a network drive where filesystem events aren't available.

## Smooth synced scrolling

Synchronized preview scrolling has been revamped, and is now much smoother. Previously, the preview window would jump immediately to top level elements as you scrolled past them in the editor. With this update, the scroll position will be interpolated between these elements as well. Anyway, it's better now.

#### Old

{{< img-simple src="images/scroll_old.gif" alt="Editor and preview scrolling. Preview scrolling jumps from element to element as editor scrolls.">}}

#### New

{{< img-simple src="images/scroll_new.gif" alt="Editor and preview scrolling. Preview scrolling transitions more smoothly between elements as editor scrolls.">}}


## Document pinning

{{< img-simple src="images/pin.gif" alt="Selecting and unselect 'Pin File' from the file context menu. Pinned file is moved to the beginning of the file list.">}}

Documents can now be pinned the top of the file list panel. Pinned files ignore folder/category/tag filtering (but not search filtering) so that they'll always be visible.

You can either pin files by right-clicking on the file and choosing 'pin file' from the context menu, or you can add `pinned: true` to your document's metadata.

```yaml
title: My favorite file
pinned: true
```

## Highlight headings when jumping

When clicking headings in the outline view to jump to that position in the editor, the heading will now be highlighted for a moment in the editor.

## Tweaks

* Improve display of file search field when focused
* Animation changes for file reordering in file list (ex: when pinning documents)
* Three periods are required to form ellipses in the preview, rather than two
* Fixed deleted files remaining in parent and ancestor folders
* Fixed added files not appearing in ancestor folders
* Text centered with `-> <-` now uses paragraph tag instead of div in preview.
* Library and security updates

## Bugfixes

* Fix document title and metadata not being restored after reverting changes to a file
* Fix document content not being (immediately) restored after reverting changes to a file
* Disabled outdented headings in VIM mode. These are (unfortunately) broken outside of insertion mode.
* Fix incorrect heading label for screen readers in font preferences
