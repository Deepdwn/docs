---
title: "Version 0.22.0"
description: "Preferences revamp, preview fonts, bug fixes"
lead: "Preferences revamp, preview fonts, bug fixes"
date: 2021-04-24T13:01:01-05:00
lastmod: 2021-04-24T13:01:01-05:00
draft: false
images: []
contributors: []
---

## Preferences

The preferences UI has gotten a little overhaul


{{< img-simple src="images/preferences.png" alt="Preferences display with navigable sidebar split into multiple sections." >}}


* The preferences user interface has been split into multiple sections instead of one long list of settings.
* The automatic names used for the accent colors in the preference panels have been replaced with a subset of the [XKCD color survey colors](https://xkcd.com/color/rgb/)
* Color and font preset pickers have been replaced with dropdown selectors

## Preview font

A font selector has been added in preferences for the preview window font. 


{{< img-simple src="images/preview-fonts.gif" alt="Preview window with demonstration markdown content. The displayed font cycles every 3 seconds" >}}

All the fonts in the editor are available, as well as the default font "Sorts Mill Goudy", and any of your own installed fonts.

## Check for updates


{{< img-simple src="images/update.png" alt="Editor window with notification in the upper right corner reading 'New version available!'" >}}

Deepdwn will now periodically check for updates and alert you when a new version is available. You can disable update checking in preferences.

##  Standardize tab vs. space indentation

This update fixes inconsistencies with tab and space indentation.

When pressing {{< keystroke "Tab" >}}:

* if text in one or more lines was selected, or when using the indent line shortcut keys, two spaces would be inserted at beginning of the line
* if no text was selected, a real tab character was inserted instead

This leads to documents with a mix of tabs and spaces.

With 0.22.0, the {{< keystroke "Tab" >}} key will now insert a soft tab, either one or two spaces depending on alignment. 

A future update will add a setting for tabs vs spaces, as well as the tab size.

## Tweaks

* Removed editor panel shadow effect when outline panel is fully collapsed (looks a little cleaner)
* Internal library and tooling updates
* Added "About" window with current version and external links (accessible from the help menu)
* Animated transitions for "About" modal, preferences, and automatic update popup.

## Bug Fixes

* Fix spacing around search field when scrolling down file list
* Fixed text selection partially covering up text on heading lines
* Fixed incorrect cursor display in preview mode checkboxes
* Fixed unexpected checkbox check alignment in preview in some environments
* Fixed preview mode checkbox styles in high contrast
* Fixed preview mode code block syntax highlighting colors in dark and highcontrast modes
* Fixed issue where links could be opened in new application window instead of default browser
* Fixed mac users being shown non-mac options and keystrokes in preferences
* Fixed incorrect context menu position when zoomed in or out
* Fixed statistics colors in high-contrast color scheme
* Fixed incomplete high-contrast color scheme in distraction free mode
* Fixed one cause of previews not immediately updating at application launch
* Removing some unused code and assets 
* Fixed preview window not changing theme if it was already open when new theme selected
* Fixed some elements showing through close button from behind in preference
* Fixed some elements showing on top of close button in preferences