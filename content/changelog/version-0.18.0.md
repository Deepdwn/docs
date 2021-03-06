---
title: "Version 0.18.0"
description: "Accessibility improvements"
lead: "Accessibility improvements"
date: 2021-02-28T17:00:16-06:00
draft: false
---

This update brings a number of changes to improve Deepdwn's accessibility, particularly for keyboard-only and screen reader users.

I need to stress that I'm not an accessibility expert, and these changes represent a work in progress for accessibility in Deepdwn. If you have specific suggestions in this area, or something isn't working for you that really ought to be, please reach out and let me know and I will try to fix it.

## General changes

### The menu is back

(For Linux and Windows users)

The application menu was auto-hidden in a previous update, but could be made to appear temporarily by pressing the Alt key. 

This behavior isn't obvious, and hid a number of functions from users that are not otherwise available in the UI, as well as keyboard shortcuts.

By default, the menu is now visible for all users. The option to autohide the menu again is available in the preferences panel (and View menu) if you prefer.

### Bigger accent color presets

On some systems, the preset colors for accent color selection are tiny and awkward.

The preset picker has been replaced with a big list instead. You can still select a custom color by clicking the Current Color button in preferences.

![Accent color picker with currently selected color and several presets with labeled colors](https://img.itch.zone/aW1nLzUzMjA0MDcucG5n/original/9ExlCe.png)

### Preferences button

If space allows, the word 'preferences' appears next to the preference button (gear) in the lower left of the application, to make it's purpose more obvious.

## Keyboard navigation

All interactive elements are now focusable by keyboard-only users using the tab key as normal, and can be activated using the space or enter key. Some elements, like the folder list and panel separators, also make use of the arrow keys (respectively for moving the separator, and for expanding and collapsing the navigation tree).

Previously some (most) elements could not be focused correctly with the keyboard. This been fixed application-wide. Tooltips now also appear when focusing elements that have tooltips, instead of only when hovering with the mouse.

Changing focus from the search field to the editor should retain your current selection or cursor position, instead of scrolling back to the beginning of the document.

Outlines for the currently focused element have been added everywhere.

Some additional keyboard have been added for navigation:

* <kbd>Cmd/Ctrl</kbd><kbd>M</kbd>: Toggle the behavior of the tab key between indentation, versus changing the currently focused element.
* <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>M</kbd>: Move focus to the main editor
* <kbd>F6</kbd>/<kbd>Shift</kbd><kbd>F6</kbd>: Cycle focus through different areas of the application

## Screen reader support

In addition to the changes to keyboard navigation above, a number of specific changes have been made to support screen readers.

Buttons and interactive elements are all appropriately labeled and described, as are their pressed states and the expanded state of collapsible items that they control.

Live regions will announce the number of filtered files when filtering by tag, category, folder or the search field.

Live regions will also announce some changes in application state triggered by keyboard shortcuts:

* Adding a new file (<kbd>Cmd/Ctrl</kbd><kbd>N</kbd>)
* Saving the current file (<kbd>Cmd/Ctrl</kbd><kbd>S</kbd>)
* Toggling the behavior of the tab key (<kbd>Cmd/Ctrl</kbd><kbd>M</kbd>)
* Toggling fullscreen mode (<kbd>F11</kbd>)
* Toggling distraction free mode (<kbd>Shift</kbd><kbd>F11</kbd>)

## General Bugfixes

* Triggering the context menu via keyboard (context menu button, or <kbd>Shift</kbd><kbd>F10</kbd>) appeared at the mouse location, rather than the element where it was triggered.
* Fix preview window scrolling unexpectedly after clicking a checkbox in a checklist
* Removed some hacks used to force immediate spellchecking when first enabling spellcheck
* Fixed window settings not persisting between launches. Deepdwn should now correctly reappear where you last left it.