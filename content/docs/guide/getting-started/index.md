---
title: "Getting Started"
description: "Beginning with Deepdwn"
lead: "Beginning with Deepdwn"
date: 2021-03-10T08:48:45+00:00
lastmod: 2021-03-10T08:48:45+00:00
draft: false
images: []
weight: 10
menu: 
  docs:
    parent: "guide"
---

## First steps

The first time you open Deepdwn, you'll be prompted to select a folder which will contain your markdown notes and documents.

Deepdwn will read the markdown files in this folder, and all nested folders, and populate your available tags and categories, and allow you to find documents by searching.

For performance and organization, it's best to choose a dedicated notes directory of some kind for this, rather than your entire home directory or the root of your hard drive, since Deepdwn needs to find and read all of the markdown files inside.

## The interface

Deepdwn's interface is split into four panels. These panels can be resized by grabbing the separator between them, or collapsed and expanded by double clicking the label at the top.

### Filters panel

{{< img-simple src="images/interface-1.png" alt="Application with leftmost Filters panel highlighted" >}}

The first panel, Filters, shows your tags, categories and folders. You can select these to filter the file list (the next panel), and deselect them to see all files again.

You can also double click the section headings sections to collapse them.

The `Drafts` filter at the top is always available. Here you'll find files which have not yet been saved for the first time.

### Files panel

{{< img-simple src="images/interface-2.png" alt="Application with second panel, Files, highlighted" >}}

The second panel, Files, displays a list of files based on your currently selected filters, or all files if no filters have been selected.

Right clicking these files will display additional options, allowing you to delete files, show their location in your file system, pin them to the top of the list, or duplicate them as needed.

The top of this panel has a search field which will further filter the displayed files as you type. Filenames, and all file content will be considered when searching.

### Outline panel

{{< img-simple src="images/interface-3.png" alt="Application with third panel, Outline, highlighted" >}}

The third panel, Outline, shows all the headings in your current file. Clicking a heading will take you that section of your document.

### Editor panel

{{< img-simple src="images/interface-4.png" alt="Application with rightmost Editor panel highlighted" >}}

This is is the main panel in Deepdwn, where you edit your files.

## Organizing your files

You can tell Deepdwn about your files and how you organize them by editing the files themselves. Deepdwn supports a format known as YAML frontmatter, which appears at the very top of your documents, and looks like this:

```yml
---
title: My Favorite Cakes
category: Blog
tags: 
  - favorites
  - 🧁 baking
  - musings
pinned: true
dir: ltr
---

# Welcome to my cake post
```

This document has the title `My Favorite Cakes`, is in the category `Blog` and has three tags, `favorites`, `🧁 baking`, and `musings`. You can add as few or as many tags as you'd like. The document direction is set to left-to-right, and the document is "pinned" so that it always appears at the top of the file list.

These fields (`title`, `category`, `tags`, and `dir`) are the only ones that Deepdwn uses currently, but you can add any other fields you need as well. Many other systems support markdown with the same frontmatter, so you can add what you need to support those systems.

Once a file has been saved, its category and tags will be added to the filters panel, and the title (if present) will replace the `Untitled` name in the file list. If no title has been added, the filename will be used instead.

## Working with markdown

{{< img-simple src="images/formatting.png" alt="Markdown formatting with bold, italic, strikethrough and highlight formatting applied" >}}

Markdown's formatting is intended to be readable as-is without any coversion. Deepdwn enhances (but does not hide) this formatting by applying bold, italic, and a wide range of other formatting as you type.

Press the question mark icon in the toolbar to open a reference document with all of Deepdwn's supported markdown formatting.

## Rendering your markdown

To view your document without seeing markdown syntax and to render charts and music, you can press the preview button in the toolbar to open a new window with your fully rendered document.

The preview will be updated as you add to and edit your document, and can be exported to PDF or HTML from the save icon in the corner.

## Options

{{< img-simple src="images/preferences-button.png" alt="Preferences button with gear icon" >}}

Deepdwn supports some alternate display and behavior options. These can be changed from the preferences view, available by pressing the Preferences gear in the lower left hand corner of the application, or with the keystroke {{< keystroke "Ctrl ," >}}.

## Shortcut keys

Keystrokes for common actions [Shortcuts →]({{< ref "shortcuts" >}})
