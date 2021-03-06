---
title: "Version 0.10.3"
description: "Big feature update! (music formats, save as pdf, other good stuff)"
lead: "Big feature update! (music formats, save as pdf, other good stuff)"
date: 2020-12-17T17:42:23-06:00
lastmod: 2021-03-05T17:42:23-06:00
draft: false
images: ["images/music.gif"]
contributors: []
---


{{< img-simple src="images/music.gif" alt="Entering data for sheet music and guitar tabs, and rendering them at the same time" >}}
This updated ended up larger than expected, but I'm excited for these changes.

## Music!

First is a feature I've wanted to add since starting: Rendering of sheetmusic and tabs from a (fairly) user friendly format.

Sheetmusic uses the [ABC notation format](https://en.wikipedia.org/wiki/ABC_notation), and is written inside a code block beginning with ` ```music` or ` ```abc`.

Guitar tabs and chords [jTab](https://jtab.tardate.com/#notation), and are written in code blocks beginning with ` ```tab` or ` ```guitar`.

Both formats have basic code highlighting in JotDown's editor as well. See the markdown example file in Help > Show me an example for a couple of examples.

I'd like to add support for additional (non-6-string) instruments and tunings at some point, but probably not soon.

## Save as PDF

The print button has been removed from the rendered preview display, and replaced with a save button which will save a new PDF for you instead.

## Other Stuff

* You can now double click the different panel headings (Filters, Files, Outline) to quickly collapse or expand those sections, instead of having to drag them around.
* In dark mode, the editor is a little darker, and the text is a little brighter and more differentiated. I'm hoping to make this more customizable in the future (instead of just dark/light mode)
* More comfortable spacing around the editor panel
* The outline display will now scroll up and down to make sure the current section remains offscreen. Previously, the closest section was always highlighted, but wouldn't always be visible.
* JotDown has nicer (slightly thinner) scrollbars that blend in better and are less in the way.
* In distraction-free mode, the outline panel has a more subtle color scheme, and brightens on hover.
* Spellchecking is now disabled inside graph/diagram, music and tab code blocks.
* You can now exit distraction free mode by hitting escape twice quickly, in addition to the default shortcut (<kbd>Shift</kbd><kbd>F11</kbd>)