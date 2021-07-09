---
title: "Version 0.25.2"
description: "More folding improvements"
lead: "More folding improvements"
date: 2021-07-08T11:12:01-05:00
lastmod: 2021-07-08T11:12:01-05:00
draft: false
images: []
contributors: []
---

More improvements for markdown folding!

## Tweaks

* Added shortcuts for folding specific heading levels for sublime and emacs key bindings.
* Added toggle fold command for default key bindings
* Cursor can now move past fold markers without clearing them
* Prevent folding when no lines would be folded.
* Deleting a fold marker (via delete key) now unfolds the content instead of deleting whole region, similar to backspace key.
* Unfold and toggle fold commands now work when used on unfolded content that follows a fold marker, even if that content is technically on a different line.

## Bugfixes

* Fixed first heading not being foldable if it was also the first line in the document
* Fixed repeatedly folding the same line creating nested fold markers that hade to be cleared multiple times
* Fixed one cause of repeated fold markers appearing on the same line
* Fixed more than three periods at the end of a heading getting folded as well (folding is now limited to the last three periods).
* Fixed fold marker getting deleted prematurely when backspacing 
* Fix deleting characters on lines after folds sometimes unfolding above lines
* Workaround (read: hack) for cursor not appearing next to fold markers. Still occurs in one case
* Fixed deleting a fold marker sometimes unfolding a nested marker as well