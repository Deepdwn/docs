---
title: "Version 0.12.0"
description: "New stuff! Search, zoom, more highlighting"
lead: "New stuff! Search, zoom, more highlighting"
date: 2020-12-23T17:46:21-06:00
lastmod: 2021-03-05T17:46:21-06:00
draft: false
images: []
contributors: []
---

This update adds a bunch of stuff!

## Find and Replace

This and UI scaling are the two most important features I've wanted to add. It (hopefully) works the way you'd expect.


## UI Scaling / Font Size

You can now scale all text and UI together using the View menu, or the Ctrl/Cmd + Mousewheel. I don't have a screenshot for this but you can move your head closer and further from the screenshot above to simulate it.

## New Charts

JotDown now supports two new chart types.

### State Diagram

State diagrams are similar to flowcharts, but emphasize changes in state.

I accidentally excluded this one from the "Show Me an Example" file, but it's still supported in the current version, and the example will be fixed in the next update.

### Flowchart

This is really a beta test for an expanded graph type. Flowchart adds more arrow types and subgraphs, but shares the same syntax with graph. Eventually, both flowchart and graph will share the same features.

## Syntax Highlighting

Custom syntax highlighting has been added for all supported chart and music block types. Here are some examples:

## Less Exciting Stuff

* Save As will now warn before overwriting an existing file
* When saving a new file, the ".md" file extension will be added automatically
* Fixed an issue where side panels would be locked temporarily for brand new installs
* Typewriter mode is now disabled as default for new installations
* Added links to documentation for chart and music block types