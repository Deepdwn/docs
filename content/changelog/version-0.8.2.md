---
title: "Version 0.8.2"
description: "Fixed itch app install under Windows"
lead: "Fixed itch app install under Windows"
date: 2019-09-24T22:28:46-06:00
lastmod: 2021-03-04T22:28:46-06:00
draft: false
images: []
---

A couple of small fixes:

This version of JotDown removes the 'Delete Folder' context menu option. I don't think this is valuable in-app. I may add it back if JotDown detects that the directory is empty, but I think that might be more confusing.

Added always-on labels for the filter and files lists on the left side. Previously, these only appeared if the panels were minimized, but should help the interface make more sense before directories and files are added.

I've removed the windows portable build from Itch. When run, it extracts its files and assets to a temporary directory, then cleans these up when it's done. If installed with the Itch application, it (correctly) detects this as an installer, and runs it once during installation, and then helpfully deletes the installer, and JotDown will not run until reinstalled.

The new windows build is just a directory including the executable and supporting assets. It launches faster, since it doesn't have to extract everything beforehand, and future updates (through the itch app) will be much smaller, since only changed files will be updated.