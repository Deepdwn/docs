---
title: "Version 0.36.1"
description: "Outline and table improvements"
lead: ""
date: 2022-08-06T16:50:00-05:00
lastmod: 022-08-06T16:50:00-05:00
draft: false
images: []
contributors: []
---

This version adds some fixes and improvements for table rendering and outline scrolling.

As an aside, further large-scale changes are being made to Deepdwn behind the scenes currently, but they won't be in a releasable state for a while yet.

## Tables

* Tables are now rendered with vertical lines between columns in the preview
* Very wide tables can now be scrolled left and right in the preview window and in styled HTML exports
* Very wide tables will be scaled down to fit the page in PDF exports

## Bugfixes

* Fixed clicking a heading in the outline panel sometimes highlighting the wrong heading afterward, even though the heading would be scrolled to correctly.
