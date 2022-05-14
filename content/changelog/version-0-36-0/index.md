---
title: "Version 0.36.0"
description: "Better HTML paste and synced scrolling"
lead: ""
date: 2022-05-13T20:54:00-05:00
lastmod: 2022-05-13T20:54:00-05:00
draft: false
images: []
contributors: []
---

This version adds improvements to a couple of existing features: HTML-to-markdown and synchronized scrolling!

## HTML Pasting

Significant changes have been made to the [convert-pasted-HTML-to-markdown feature](https://support.deepdwn.com/changelog/version-0-31-0/) to support additional elements, and reduce unnecessary escaping.

* Support `<var>` elements, imported as italic
* Support definition lists, imported using compact syntax
* Use different escaping mechanisms for code blocks imported from `<pre>` tags
* Do not escape HTML in inline code imported from `<code>` tags
* When inline code contains a backtick character, use double backticks for the code element
* Minimize HTML escaping on paste, and specifically unescape some items if escaped in source
* Ignore inline styles inside of code blocks and inline code

Further changes to this feature are planned, especially to _escape_ markdown in pasted content, but other work will be needed first to make this possible.

## Preview synchronized scrolling

First, an annoying bug that caused the preview window to rapidly jiggle while typing has been fixed, as have some related issues around repeated scroll events.

Secondly, synchronized scrolling will now try to be a bit smarter about where to scroll while you're actually editing.

Without going into too much detail, the preview window used to try to keep the _top_ of the preview window and the top of the editor in sync. This worked well when scrolling, but could cause the line you're actually editing to appear offscreen in the preview, depending on a number of factors.

Now, scrolling in the editor will try to keep the active line synchronized in the preview if it's visible, whether it's at the top of the visible page or the bottom.

The effect of this is pretty subtle, but I think it's a good change. That said, I'm considering it experimental, so please provide feedback in [Deepdwn's support forum](https://itch.io/board/1147311/support).

## Bug fixes

* Fix typo in example document