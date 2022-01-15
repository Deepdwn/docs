---
title: "Version 0.32.0"
description: "Markdown linting"
lead: ""
date: 2022-01-15T12:06:01-05:00
lastmod: 2022-01-15T12:06:01-05:00
draft: false
images: []
contributors: []
---

Most of this release was focused on small performance changes, but there's one new feature for you!

## Markdown format checking

{{< img-simple src="images/lint.png" alt="Markdown with some formatting errors with highlighted with underlines and warning icons. Error details appear in a popup when hovering over them." >}}

Deepdwn can now check your documents for formatting consistency and errors with [MarkdownLint](https://github.com/DavidAnson/markdownlint).

Deepdwn can warn you if:

* Your headings end with punctuation
* You reversed the parentheses and brackets in your links
* Your numbered lists are out of order
* You have trailing spaces after your text

And a ton of other things. You can find a full settings reference here: <https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md>

The default settings are fairly relaxed, but you can make them as strict or as loose as you need, and many rules have additional customization options so that you can fine-tune to your liking.

All of these are configurable in `Preferences -> Advanced -> Enable markdown format warnings`. There's a simple configuration setting in JSON format currently, but that may be changed in a future release.

Deepdwn has a couple of custom rules, based on the default markdownlint rules:

* `no-trailing-punctuation-folding`, which is identical to [`no-trailing-punctuation`](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md026---trailing-punctuation-in-heading) but accepts an option to ignore folding indicators, "...", at the end of headings, instead of treating them like normal punctuation.
* `ol-prefix-order` which is identical to [`ol-prefix`](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md029---ordered-list-item-prefix) but allows ordered lists to start with any number when using the `ordered` or `ordered_or_one` styles.

I'm hoping to add an interface to let you fix many of these in one click in a future update.

## Tweaks

* Load the last active file earlier in the startup process to reduce the time until file is visible. Most significant for large file collections.
* Reduce work done while parsing tags and categories while typing.
* Reduced background work when selecting tags and resizing window panels.
* Reduced foreground work while processing links to headings between files
* Reduced config file writing for some repeated operations
* Move markdown linting to a background process to reduce impact while editing
* Mac users now use the {{< keystroke "Command" >}} key, rather than {{< keystroke "Ctrl" >}}, to select multiple tags in the tag list.
* In the preview, abbreviation text decoration (a dotted underline) has a little more visual space
* Minor formatting changes for the example document
* Change lint error and warning icons (previously only visible for errors in document yaml metadata)
* Lint warning popups now use bold text for the first line
* IDs for headings are now generated before applying typographic changes (ex: changing single quotes to curly quotes), resulting in simpler and more predictable heading links. Unfortunately, this may mean that you need to regenerate some links to headings in your existing documents if they were affected. Sorry about that!

## Bug fixes

* Fixed deselected tags becoming reselected after exiting and relaunching Deepdwn.
* Block quotes in light mode now have a different font color. This was already the case in dark mode
* With big headings enabled, the space between headings and heading prefixes, `###`, are more consistent and constrained
* Lint popups in high-contrast mode now use a thicker border, more consistent with the rest of the mode
* Fixed autocompleting links to headings sometimes showing HTML in plain text, depending on heading formatting
* Fixed being unable to use link autocomplete from unsaved documents. Headings from the current file are now supported