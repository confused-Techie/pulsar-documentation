---
title: Pulsar Basics
curbook: Using Pulsar
---

Now that Pulsar is installed on your system, let's fire it up, configure it and get acquainted with the editor.

When you launch Pulsar for the first time, you should get a screen that looks like this:

![Pulsar's welcome screen](TODO)

This is the Pulsar welcome screen (powered by the `welcome` package) and it gives you a pretty good starting point for how to get started with the editor.

## Terminology

!!!include(docs/pulsar-docs/resources/glossary.md)!!!

## Command Palette

In that welcome screen, we are introduced to probably the most important command in Pulsar, the Command Palette. If you press **_MAC_**: <kbd class="platform-mac">Cmd+Shift+P</kbd> **_LNX/WIN_**: <kbd class="platform-windows platform-linux">Ctrl+Shift+P</kbd> while focused in an editor pane, the command palette will pop up.

This search-driven meny can do just about any major task that is possible in Pulsar. Instead of clicking around all the application menus to look for soemthing, you can press:

**_LNX/WIN_**: <kbd>Ctrl+Shift+P</kbd> -
**_MAC_**: <kbd>Cmd+Shift+P</kbd>

and search for the command.

![Command Palette](TODO "Command Palette")

Not only can you see and quickly search through thousands of possible commands, but you can also see if there is a keybinding associated with it. This is great because it means you can guess your way to doing interesting things while also learning the shortcut key strokes for doing it.

For the rest of this documentation, we will try to be clear as to the text you can search for in the Command Paelette in addition to the keybinding for different commands.

## Settings and Preferences

Pulsar has a number of settings and preferences you can modify in the Settings View.

![Settings View](TODO "Settings View")

This includes things like changing the theme, specifiying how to handle wrapping, font settings, tab size, scroll speed and much more. You can also use this screen to install new packages and themes, which we'll cover in [Pulsar Packages](TODO).

To open the Settings View, you can:

- Use the
  **_LNX_**: _Edit > Preferences_ -
  **_MAC_**: _Pulsar > Preferences_ -
  **_WIN_**: _File > Settings_
  menu item in the menu bar
- Search for `settings-view:open` in the [Command Palette](#command-palette)
- Use the
  **_LNX/WIN_**: <kbd>Ctrl+,</kbd> -
  **_MAC_**: <kbd>Cmd+,</kbd>
  keybinding.

### Finding Settings

If you ever have any difficulty in finding the relvant setting for any part of Pulsar, the Settings View has a search bar baked right in on the "Search" panel, allowing full text search of most parts of every setting.

![Searching for a Setting in Settings View](TODO "Searching for a Setting in Settings View")


### Changing the Theme

The Settings View also lets you change the themes for Pulsar. Pulsar ships with 4 different UI themes, dark and light variants of the Atom and One theme, as well as 8 different syntax themes. You can modify the active theme by clicking on the Themes tab in the sidebar of the Settings View, or you can install new themes by clicking the Install tab.

![Changing the theme from Settings View](TODO "Changing the theme from Settings View")

The UI themes control the style of UI elements like the tabs and the tree view, while the syntax themes control the syntax highlighting of text you load into the editor. To change the syntax or UI theme, simply pick something different in the appropriate dropdown list.

There are also hundreds of themes on the [Pulsar Package Repository](https://web.pulsar-edit.dev) that you can choose from if you want something different. Customizing a theme in [Style Tweaks](TODO) and creating your own theme in [Creating a Theme](TODO) will be covered later.

### Soft Wrap

You can use the Settings View to specify your whitespace and wrapping preferences.

![Whitespace and wrapping preferences settings](TODO)

Enabling "Soft Tabs" will insert spaces instead of actual tab characters when you press the <kbd>Tab</kbd> key and the "Tab Length" setting specifies how many spaces to insert when you do so, or how many spaces are used to represent a tab if "Soft Tabs" is disabled.

The "Soft Wrap" option will wrap lines that are too long to fit in your current window. If soft wrapping is disabled, the lines will simply run off the side of the screen and you will have to scroll the window to see the rest of the content. If "Soft Wrap At Preferred Line Length" is toggled, the lines will wrap at 80 characters instead of the end of the screen. You can also change the default line length to a value other than 80 on this screen.

In [Basic Customization](TODO) you will see how to set different wrap preferences for different types of files (for example, if you want to wrap Markdown files but not other files).

### Opening, Modifying, and Saving Files

Now that your editor is looking and acting how you want, let's start opening up and editing files. This is a text editor after all, right?

#### Opening a File

There are several ways to open a file in Pulsar. You can do it by choosing _File > Open_ from the menu bar or by pressing:

**_LNX/WIN_**: <kbd>Ctrl+O</kbd> -
**_MAC_**: <kbd>Cmd+0</kbd>

to choose a file from the standard dialog.

![Open file by dialog](TODO "Open file by dialog")

This is useful for opening a file that is not contained in the project you're currently in (more on that next), or if you're starting from a new window for some reason.

Another way to open a file in Pulsar is from the command line using the `pulsar command.`

::: info
The `pulsar` command may not be available by default after installation. Adding this feature is detailed further in [Integrating Pulsar into the Operating System](TODO).
:::

You can run the `pulsar` command with one or more file paths to open up those files in Pulsar.

```sh
$ pulsar --help
> Pulsar Editor v1.100.0

> Usage: pulsar [options] [path ...]

> One or more paths to files or folders may be specified. If there is an
> existing Pulsar window that contains all of the given folders, the paths
> will be opening in that window. Otherwise, they will be opened in a new
> window.

> ...
```

This is a great tool if you're used to the terminal or you work from the terminal a lot. Just fire off `pulsar [files]` and you're ready to start editing.
You can even open a file at a certain line (and optionally column) so the cursor will be positioned exactly where you want. For example, you may search some keyword in a repository to find the line you want to edit:

```sh
$ git grep -n 'Opening a File$'
gettings-started/sections/pulsar-basics.md:130:#### Opening a File
```

and then jump to the beginning of that line by appending a colon and the line number to the file path:

```sh
$ pulsar getting-started/sections/pulsar-basics.md:130
```

Sometimes you may want to cursor to jump to the exact column position of the searched keyword. Just append another colon plus the column number:

```sh
$ git grep -n --column 'Windows Explorer'
getting-started/sections/pulsar-basics.md:150:722
$ pulsar getting-started/sections/pulsar-basics.md:150:722
```

#### Editing and Saving a File

### Opening Directories

#### Opening a File in a Project 

### Proxy and Firewall Settings

#### Behind a Firewall?

If you are behind a firewall and seeing SSL errors when installing packages you can disable strict SSL by running:

```sh
$ pulsar -p config set strict-ssl false
```

#### Using a Proxy?

If you are using a HTTP(S) proxy you can configure `ppm` to use it by running:

```sh
$ pulsar -p config set https-proxy <YOUR_PROXY_ADDRESS>
```

You can run `pulsar -p config get https-proxy` to verify it has been set correctly.
