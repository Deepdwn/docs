---
title: "Version 0.35.0"
description: "Discord integration and tag autocomplete"
lead: ""
date: 2022-04-10T13:18:00-05:00
lastmod: 2022-04-10T13:18:00-05:00
draft: false
images: []
contributors: []
---

## Discord status

Deepdwn can now update your status in Discord when you have the Discord application running (if you like).

This integration is disabled by default. To enable it, go to the new Preferences > Integrations section, and enable "Show Deepdwn activity in Discord".

{{< img-simple src="images/discord.png" alt="Discord configuration in Preferences with settings to toggle showing specific items in discord with a preview of the resulting display">}}

Here, you can also enable "Show current activity", which will display whether you're actively writing (with a long cooldown) or idle.

You can also enable "Show current file", disabled by default, which will also display the title or filename of your active document.

Finally, in Discord you'll need to enable "Display current activity as a status message" in Settings > Activity Status.

In the future, I'm planning to add some additional information like session word count, but that will likely wait until some prerequisite work has been completed.

## Tag and category autocomplete

You can now use autocomplete to enter your tags and categories when editing metadata!

{{< img-simple src="images/tag-autocomplete.png" alt="Markdown frontmatter with a partially entered tag. A popup menu shows available tags which match the partially entered one">}}

Begin typing your tag or category and press {{< keystroke "Ctrl Space" >}} to see a list of matching items.

## Bug fixes

* Fix file system listening not being correctly initialized on startup in some cases
* Fix automatic lint fixing not using correct lint configuration
* Fix badly formatted yaml causing unexpected tags to appear in the library panel sometimes
* Better handling of non-string types in titles in frontmatter
* Fix title disappearing in file list when file had yaml metadata, but no title
* Fix new drafts not showing up immediately when drafts filter was already selected
* Fix initial empty file not appearing in file list when edited
