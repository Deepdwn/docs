---
title: "Version 0.21.0"
description: "Custom fonts, power mode options, spellcheck languages"
lead: "Custom fonts, power mode options, spellcheck languages"
date: 2021-03-29T00:23:01-06:00
lastmod: 2021-03-29T00:23:01-06:00
draft: false
images: ["images/ligatures-social.png"]
contributors: []
---

## Font improvements

A couple of features have been added to improve Deepdwn's font handling.

### Fira Code

[Fira Code](https://github.com/tonsky/FiraCode) has been added to Deepdwn's font list. Fira Code distinguishes itself
with its ligature support, groups of two or more characters combined to make a single character. 

While these are largely intended for programming, they suit markdown editing as well. A full list of ligatures can be found
on the [Fira Code github page](https://github.com/tonsky/FiraCode).

{{< img-simple src="images/ligatures.png" alt="Editor using Fira Code font and available ligatures" >}}

### Custom fonts

In addition, a "Custom font" option has been added to application preferences, which will allow you to use an already installed system font of your own in Deepdwn's editor.

{{< img-simple src="images/custom-fonts.png" alt="Font selection with custom font selected and example text using custom font" >}}

Currently, this requires entering the font by name, but I'm hoping replace this with a proper installed font list some time in the future.

Since Deepdwn doesn't know whether your system font is [_monospace_ or _variable width_](https://en.wikipedia.org/wiki/Typeface#Proportion), a new option has been added to force mixed-monospace font handling for custom fonts as well. This allows indentation-sensitive markdown, like checklists, to appear correcly while still using your variable width font.

You can see the effect of turning this feature on and off in the example text below the option.

## Power mode performance and options

Power mode has received some performance improvements, especially noticable on low-spec machines. While power mode could (and still can) be turned off to improve CPU and GPU usage, it should now be much better behaved, both while active and while idle.

{{< img-simple src="images/power-mode-options.png" alt="Power mode preferences with separate range sliders for screenshake and particle effect intensity" >}}

Additionally, two new sub-settings have been added for power mode, to allow reducing or eliminating the screenshake or particle effects independantly, in case you like one, but not the other. Both can also be turned up slightly from their stock positions.

## Heading outdenting

When adding a heading via `###` in Deepdwn, the `#` prefix will now be _outdented_, so that the heading text is aligned with the left margin of the editor. The left margin width has been increased to accomodate this feature.

**Before**
{{< img-simple src="images/heading-outdent.png" alt="Editor showing several markdown headings prefixed with the '#' character. Prefix characters are right alingned to page margin, and headings left aligned" >}}

**After**
{{< img-simple src="images/heading-outdent.png" alt="Editor showing several markdown headings prefixed with the '#' character. Prefix characters are right alingned to page margin, and headings left aligned" >}}


This helps make headings stand out while editing, and ensures that the most important part of the heading, the text itself, is in a predictable location.

## Spellcheck languages

On Windows and Linux, you can now select the language (or multiple languages) used for spellchecking in Deepdwn.

{{< img-simple src="images/spellcheck-languages.png" alt="Preferences for spellcheck languages. Two buttons with selected languages above closed dropdown used for selection" >}}

On Mac systems, the spellcheck language was already handled at the operating system level, so this functionality isn't needed.

## Bugfixes

* Editor - In sequence diagrams, fixed lines starting with `par` (like "participant") getting incorrect syntax highlighting.