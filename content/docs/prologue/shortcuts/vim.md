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
<kbd>Escape</kbd> | Enter command mode
<kbd>i</kbd> | Enter insert mode before cursor
<kbd>I<kbd> | Enter insert mode at the beginning of the line
<kbd>a<kbd> | Enter insert mode after the cursor
<kbd>A<kbd> | Enter insert mode at the end of the line
<kbd>o<kbd> | Enter insert mode after the current line
<kbd>O<kbd> | Enter insert mode before the current line
<kbd>:</kbd> | Last line mode (prompt)
<kbd>Ctrl</kbd><kbd>c</kbd> | Exit insert mode and abort current command
<kbd>v</kbd> | Enter visual mode
<kbd>V</kbd> | Enter visual line mode
<kbd>Ctrl</kbd><kbd>v</kbd> | Enter visual block mode
<kbd>s</kbd> | Delete character and enter insert mode
<kbd>S</kbd> | Delete line and enter insert mode
<kbd>R</kbd> | Enter replace mode
</div>

## Cursor movement

<div class="table">

Shortcut | Description
---: | :---
<kbd>h/j/k/l</kbd> | Move cursor left/down/up/right
<kbd>0</kbd> | Move cursor to beginning of line
<kbd>$</kbd> | Move cursor to end of line
<kbd>^</kbd> | Move cursor to first non-empty character of line
<kbd>w</kbd> | Move cursor forward one word
<kbd>W</kbd> | Move cursor forward one word, based on whitespace
<kbd>6</kbd><kbd>w</kbd> | Move cursor forward 6 words
<kbd>b</kbd> | Move cursor backward one word
<kbd>B</kbd> | Move cursor backward one word, based on whitespace
<kbd>6</kbd><kbd>b</kbd> | Move cursor backward 6 words
<kbd>e</kbd> | Move cursor to end of word
<kbd>ge</kbd> | Move cursor backward one word, to end of word
<kbd>6</kbd><kbd>e</kbd> | Move cursor forward 6 words, to end of word
<kbd>f</kbd><kbd>c</kbd> | Move cursor forward to next character `c`
<kbd>F</kbd><kbd>c</kbd> | Move cursor backward to previous character `c`
<kbd>t</kbd><kbd>c</kbd> | Move cursor to before next character `c`
<kbd>T</kbd><kbd>c</kbd> | Move cursor to after previous character `c`
<kbd>;</kbd> | Repeat previous `t` or `f` movement, forward
<kbd>,</kbd> | Repeat previous `t` or `f` movement, backward
<kbd>Ctrl</kbd><kbd>b/f</kbd> | Move cursor one page up/down
<kbd>Ctrl</kbd><kbd>u/d</kbd> | Move cursor half a page up/down
<kbd>H<kbd> | Move cursor to top of visible screen
<kbd>M</kbd> | Move cursor to middle of visible screen
<kbd>L</kbd> | Move cursor to bottom of visible screen
<kbd>gg</kbd> | Move cursor to beginning of document
<kbd>G</kbd> | Move cursor to end of document
<kbd>16</kbd><kbd>G</kbd> | Move cursor to line 16
<kbd>zt</kbd> | Scroll current line to top of screen
<kbd>zz</kbd> | Scroll current line to center of screen
<kbd>zb</kbd> | Scroll current line to bottom of screen
<kbd>Ctrl</kbd><kbd>e</kbd> | Scroll screen down one line
<kbd>Ctrl</kbd><kbd>y</kbd> | Scroll screen up one line
<kbd>(</kbd> | Move cursor to next sentence
<kbd>(</kbd> | Move cursor to previous sentence
<kbd>}</kbd> | Move cursor to next paragraph
<kbd>{</kbd> | Move cursor to previous paragraph
<kbd>Ctrl</kbd><kbd>o</kbd> | Move cursor to back (in location history)
<kbd>Ctrl</kbd><kbd>i</kbd> | Move cursor to forward (in location history)

</div>

## Editing

<div class="table">

Shortcut | Description
---: | :---
<kbd>x</kbd> | Delete character
<kbd>r</kbd> | Replace character
<kbd>dd</kbd> | Cut line
<kbd>yy</kbd> | Yank line
<kbd>p</kbd> | Paste
<kbd>P</kbd> | Paste before
<kbd>u</kbd> | Undo
<kbd>Ctrl</kbd><kbd>r</kbd> | Redo
<kbd>~</kbd> | Toggle case
<kbd>gU</kbd> | Uppercase
<kbd>gu</kbd> | Lowercase
<kbd>gUU</kbd> | Uppercase current line
<kbd>guu</kbd> | Lowercase current line
<kbd>></kbd> | Indent
<kbd>\<</kbd> | Unindent
<kbd>d/x</kbd> | Delete selection
<kbd>s</kbd> | Replace selection
<kbd>y</kbd> | Yank selection

</div>


## Macros

<div class="table">

Shortcut | Description
---: | :---
<kbd>q</kbd><kbd>c</kbd> | Record macro named `c`
<kbd>q</kbd> | (While recording) stop recording
<kbd>@</kbd><kbd>c</kbd> | Execute macro named `c`
<kbd>@</kbd><kbd>6</kbd><kbd>c</kbd> | Execute macro named `c` 6 times
<kbd>@@</kbd> | Execute macro again
</div>



