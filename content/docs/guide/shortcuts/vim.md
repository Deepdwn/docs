---
title: "Vim"
description: "Shortcuts for Vim mode"
lead: "Shortcuts for Vim mode"
date: 2021-03-06T00:42:05-06:00
lastmod: 2021-03-06T00:42:05-06:00
draft: false
images: []
weight: 120
toc: true
menu: 
  docs:
    parent: "Shortcuts"
---

This is not a complete list

## Mode changing

<div class="table">

Shortcut | Description
---: | :---
{{< keystroke "Escape" >}} | Enter command mode
{{< keystroke "i" >}} | Enter insert mode before cursor
{{< keystroke "I" >}} | Enter insert mode at the beginning of the line
{{< keystroke "a" >}} | Enter insert mode after the cursor
{{< keystroke "A" >}} | Enter insert mode at the end of the line
{{< keystroke "o" >}} | Enter insert mode after the current line
{{< keystroke "O" >}} | Enter insert mode before the current line
{{< keystroke ":" >}} | Last line mode (prompt)
{{< keystroke "Ctrl c" >}} | Exit insert mode and abort current command
{{< keystroke "v" >}} | Enter visual mode
{{< keystroke "V" >}} | Enter visual line mode
{{< keystroke "Ctrl v" >}} | Enter visual block mode
{{< keystroke "s" >}} | Delete character and enter insert mode
{{< keystroke "S" >}} | Delete line and enter insert mode
{{< keystroke "R" >}} | Enter replace mode
</div>

## Cursor movement

<div class="table">

Shortcut | Description
---: | :---
{{< keystroke "h/j/k/l" >}} | Move cursor left/down/up/right
{{< keystroke "0" >}} | Move cursor to beginning of line
{{< keystroke "$" >}} | Move cursor to end of line
{{< keystroke "^" >}} | Move cursor to first non-empty character of line
{{< keystroke "w" >}} | Move cursor forward one word
{{< keystroke "W" >}} | Move cursor forward one word, based on whitespace
{{< keystroke "6 w" >}} | Move cursor forward 6 words
{{< keystroke "b" >}} | Move cursor backward one word
{{< keystroke "B" >}} | Move cursor backward one word, based on whitespace
{{< keystroke "6 b" >}} | Move cursor backward 6 words
{{< keystroke "e" >}} | Move cursor to end of word
{{< keystroke "ge" >}} | Move cursor backward one word, to end of word
{{< keystroke "6 e" >}} | Move cursor forward 6 words, to end of word
{{< keystroke "f c" >}} | Move cursor forward to next character `c`
{{< keystroke "F c" >}} | Move cursor backward to previous character `c`
{{< keystroke "t c" >}} | Move cursor to before next character `c`
{{< keystroke "T c" >}} | Move cursor to after previous character `c`
{{< keystroke ";" >}} | Repeat previous `t` or `f` movement, forward
{{< keystroke "," >}} | Repeat previous `t` or `f` movement, backward
{{< keystroke "Ctrl b/f" >}} | Move cursor one page up/down
{{< keystroke "Ctrl u/d" >}} | Move cursor half a page up/down
{{< keystroke "H" >}} | Move cursor to top of visible screen
{{< keystroke "M" >}} | Move cursor to middle of visible screen
{{< keystroke "L" >}} | Move cursor to bottom of visible screen
{{< keystroke "gg" >}} | Move cursor to beginning of document
{{< keystroke "G" >}} | Move cursor to end of document
{{< keystroke "16 G" >}} | Move cursor to line 16
{{< keystroke "zt" >}} | Scroll current line to top of screen
{{< keystroke "zz" >}} | Scroll current line to center of screen
{{< keystroke "zb" >}} | Scroll current line to bottom of screen
{{< keystroke "Ctrl e" >}} | Scroll screen down one line
{{< keystroke "Ctrl y" >}} | Scroll screen up one line
{{< keystroke "(" >}} | Move cursor to next sentence
{{< keystroke "(" >}} | Move cursor to previous sentence
{{< keystroke "}" >}} | Move cursor to next paragraph
{{< keystroke "{" >}} | Move cursor to previous paragraph
{{< keystroke "Ctrl o" >}} | Move cursor to back (in location history)
{{< keystroke "Ctrl i" >}} | Move cursor to forward (in location history)

</div>

## Editing

<div class="table">

Shortcut | Description
---: | :---
{{< keystroke "x" >}} | Delete character
{{< keystroke "r" >}} | Replace character
{{< keystroke "dd" >}} | Cut line
{{< keystroke "yy" >}} | Yank line
{{< keystroke "p" >}} | Paste
{{< keystroke "P" >}} | Paste before
{{< keystroke "u" >}} | Undo
{{< keystroke "Ctrl r" >}} | Redo
{{< keystroke "~" >}} | Toggle case
{{< keystroke "gU" >}} | Uppercase
{{< keystroke "gu" >}} | Lowercase
{{< keystroke "gUU" >}} | Uppercase current line
{{< keystroke "guu" >}} | Lowercase current line
{{< keystroke ">" >}} | Indent
{{< keystroke "<" >}} | Unindent
{{< keystroke "d/x" >}} | Delete selection
{{< keystroke "s" >}} | Replace selection
{{< keystroke "y" >}} | Yank selection

</div>


## Macros

<div class="table">

Shortcut | Description
---: | :---
{{< keystroke "q c" >}} | Record macro named `c`
{{< keystroke "q" >}} | (While recording) stop recording
{{< keystroke "@ c" >}} | Execute macro named `c`
{{< keystroke "@ 6 c" >}} | Execute macro named `c` 6 times
{{< keystroke "@@" >}} | Execute macro again
</div>



