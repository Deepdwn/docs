---
title: "Version 0.9.2"
description: "Window resizing edition"
lead: "Window resizing edition"
date: 2019-11-27T17:01:36-06:00
lastmod: 2021-03-05T17:01:36-06:00
draft: flase
images: []
contributors: []
---

This release fixes some oddities related to resizing the main window and individual sections. The old behavior was OK, but with the addition of the outline view, resizing app sections was a bit weird.

## Old Resizing

{{< img-simple src="images/old-resize.gif" alt="Resizing panels and window. Window can cut panels off" >}}

Dragging a divider resizes the two sections on either side. Resizing the window shrinks the editor area to a point, and then starts hiding content.

## New Behavior

{{< img-simple src="images/new-resize.gif" alt="Resizing panels and window. Panels respond to window size" >}}

Moving a divider resizes the two sections on either side, but dragging further continues to resize and collapse adjacent sections. Resizing the window shrinks the editor area, then starts collapsing other sections.