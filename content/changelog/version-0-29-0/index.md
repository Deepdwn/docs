---
title: "Version 0.29.0"
description: "Markdown templates"
lead: ""
date: 2021-10-23T12:00:01-05:00
lastmod: 2021-10-19T12:00:01-05:00
draft: false
images: []
contributors: []
---

## Markdown templates

Do you find yourself starting documents the same way over and over? Maybe you use the same set of categories or tags, maybe you always add the current date to your blog posts, or maybe you don't like copying YAML every time.

Deepdwn now supports markdown templates, to save you a couple of steps.

{{< img-simple src="images/recipes-template.png" alt="Markdown file with the beginnings of a baking recipe, used as a template for future documents" >}}

To create a new template, simply add the tag `template` to a document's frontmatter, and it will appear in the `New File From Template` entry in the File menu, or select it from the new drop down next to the New File button in the top bar.

{{< img-simple src="images/new.png" alt="Templates menu with no templates, and button reading 'Create one now'" >}}

If you star a template, it will be used as the default template for _all_ new files. You can unstar it again return to the default new file behavior (starting an empty file).

{{< img-simple src="images/favorite.png" alt="Templates list with active star next to current template" >}}

The shortcuts {{< keystroke "Ctrl+Numpad&lt;number&gt;" >}} can be used to create a document from your templates, or  {{< keystroke "Command+Numpad&lt;number&gt;" >}} for Mac users.

### Time placeholder

Templates currently support a single template field: `{{ time }}` which will be replaced with the current date in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601) (ex: `2021-09-19T19:57:55+05:00`) by default when creating a new file.

If you need other date formats, Deepdwn has you covered there as well.

Use `{{ time:format }}`, with any [Luxon tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens), or [Luxon preset name](https://moment.github.io/luxon/#/formatting?id=presets)

For example 

* `{{ time:MMMM y }}` will be replaced with the current month and year: `September 2021`
* `{{ time:DATE_SHORT }}` with `9/19/2021` 

## New diagram

Deepdwn now supports Mermaid's [class diagrams](https://mermaid-js.github.io/mermaid/#/classDiagram), complete with syntax highlighting in the editor.

{{< img-simple src="images/class_diagram.png" alt="Class diagram in a code block in markdown on the left, with rendered diagram in preview window on the right. Class diagram shows an association between several classes and their properties and methods" >}}

## LaTeX delimiters

When writing your LaTeX math and chemistry expressions, you can now use single and double dollar sign characters (`$` and `$$`) as delimiters instead ``latex ...``. This improves data portability between Deepdwn and other markdown editors, where these delimiters are more common.

## Tweaks

**HTML Snippets**

When using raw HTML snippets in the editor, a newline within an HTML tag will now return the editor's syntax coloring and behavior to markdown mode, which matches the (correct) behavior in the preview window.

ex: 
```markdown
<details>
  <summary>Label</summary>
  This is treated as HTML

  * While this is treated as markdown
</details>
```

**Big Headings**

The overall size of headings when big headings are enabled has been slightly reduced.

**Tag and Category Sorting**

Tags and categories are now sorted alphabetically instead of by file counts. I think this makes more sense anyway, since the most common tags are actually the least helpful for filtering. If the previous sorting is something you want (in the form of some kind of toggle), [let me know](https://itch.io/board/1147312/requests).

**Preview Shortcut**

You can now toggle the preview window open and closed with the key shortcut {{< keystroke "Ctrl-Shift-P" >}} (or {{< keystroke "Command-Shift-P" >}} for Mac users).

## Bug fixes

* Fixed inability to escape backticks and marked text using backslashes in the editor. The preview already behaved correctly.
* Fixed some cases where focus indicator and tooltips would appear when they shouldn't.
* Fix timezones getting lost in YAML frontmatter time values when frontmatter was rewritten while pinning and unpinning documents.
* Fixed varous causes of file duplication in the file list when saving (especially when overwriting files, and when file monitoring is enabled).
* Minor improvements to initial statistics chart rendering time.