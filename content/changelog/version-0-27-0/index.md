---
title: "Version 0.27.0"
description: "Word counting, oh .snap!"
lead: "Word counting, oh .snap!"
date: 2021-09-18T11:00:01-05:00
lastmod: 2021-09-18T11:00:01-05:00
draft: true
images: ["images/chart-social.png"]
contributors: []
---

## Word count statistics

Deepdwn can now track and display your word count over time in pretty charts by year, month and day. The global/file button switches between showing your word count updates for the current file, or all the files you've edited, combined.

### Year view
{{< img-simple src="images/chart-year.png" alt="Chart of word count for 365 days. Brighter colors used for more activity" >}}

### Month view
{{< img-simple src="images/chart-month.png" alt="Chart of word count for 30 days" >}}

### Day view
{{< img-simple src="images/chart-day.png" alt="Chart of word count for 24 hours" >}}

There are some other features I'd like to add to this in the future, like word count goals, and configuring for the time the day starts and ends

## Tweaks

* When cursor is within a bulleted or numbered list, pressing <kbd><kbd>Tab</kbd></kbd> will indent the current line, instead of inserting space at the cursor
* Added a .snap build for linux users
* Word counting now ignores your document's YML frontmatter metadata (like document title, tags and category)

## Bug fixes

* Fix potential error when document changed from LTR direction to RTL
* Fix incorrect color for unsaved file icon in high-contrast mode
* Fix incorrect color for heading prefixes (ex: `###`) in high-contrast mode
* Fix checkboxes in ordered lists in the editor not getting forced-monospace treatment
* Fix incorrect headings being highlighted in outline panel when scrolling or jumping to a section
* Fix wrong heading highlighted in outline when jumping to a heading that follows a folded section
* Fix clicking a heading in outline not causing the folded section to unfold
* Fix document jumping around when Deepdwn receives focus, after scrolling while unfocused
* Fix clicking checkboxes in preview not working as expected when a checklist also contains a checkbox item with incomplete markup
* Fix typo in example document
* Fix save failing sometimes after cancelling a save previously