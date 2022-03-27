---
title: "Version 0.34.0"
description: "Accessibility updates"
lead: ""
date: 2022-03-27T11:57:00-05:00
lastmod: 2022-03-27T11:57:00-05:00
draft: false
images: []
contributors: []
---

## New accessibility preferences

A new section has been added to Deepdwn's preferences for accessibility settings. The existing settings for the tab key behavior (toggling between indenting and navigation), and high-contrast display, have both been moved here.

Two new options have been added here as well:

1. **Display entire document at once**: By default, Deepdwn hides offscreen content for performance reasons in a way that may interfere with screen readers, in some cases. With this setting enabled, the entire document will be rendered at once which may improve support, at the cost of rendering performance.
2. **Align heading text**: This setting enables or disables outdented headings. Headings are normally positioned in a way that may interfere with some screen readers, so this setting has been added to improve compatibility if needed.

Additionally, skip links have been added to the filters, file and outline panels to bypass your growing list of filters and files when navigating with the {{< keystroke "Tab" >}} key. You may still use {{< keystroke "F6" >}} to jump directly from panel to panel.

Lastly, a long standing issue where NVDA could skip reading some content in your documents in browse mode has been fixed. If you've run into this issue in the past, this is a great release to give Deepdwn another try.

If you have suggestions to improve Deepdwn's accessibility, please let me know in the [feature request community forum](https://itch.io/board/1147312/requests), or on twitter ([@DeepdwnApp](https://twitter.com/DeepdwnApp)).

## Tweaks

* The file list panel will now be automatically scrolled to the active file. This is mostly useful/noticeable when you reopen Deepdwn and a document is already active from your previous session.

## Bugfixes

* Fixed screen readers announcing files were in a file conflict state, when they were not.
* Fixed a focusing/rendering issue that could result in NVDA skipping content.