---
title: Glossary
curbook: Using Pulsar
---

Below is a list of some userful terms used with regard to Pulsar.

## Buffer

A buffer is the text content of a file in Pulsar. It's basically the same as a file for most descriptions, but it's the version Pulsar has in memory. For instance, you can change the text of a buffer and it isn't written to its associated file until you save it.

## Command

A command is a bit of functionality in Pulsar that can be triggered by the user either through a [keybinding]() or a menu item.

## Dock

Docks are collapsible [pane containers]() that attach to the left, right, and bottom sides of the Pulsar window.

Examples:

  * Tree View
  * Git
  * GitHub

## Key Combination

A key combination is some bombination or sequence of keys that are pressed to perform a task.

Examples:

  * <kbd>A</kbd>
  * <kbd>Ctrl+Enter</kbd>
  * <kbd>Ctrl+K</kbd> <kbd>Right</kbd>

## Key Sequence

A key sequence is a special case of a key combination. It is a key combination that consists of keys that must be pressed and released in sequence. <kbd>Ctrl+K</kbd> <kbd>Down</kbd> is a key sequence. <kbd>Alt+S</kbd> is not a key sequence because it is two keys that are pressed and released together rather than in succession.

## Keybinding

A keybinding is a mapping of a [key combination](), such as <kbd>Ctrl+Enter</kbd> to a Pulsar command.

## Keymap

A keymap is a collection of [keybindings](). It can also refer to a file or files containing keybindings for a Pulsar package or Pulsar itself.

## Package

A Pulsar plugin. There is a bunch more information int he section on [Pulsar Packages]().

## Pane

A pane is a visual section of the editor space. Each pane can hold multiple [pane items](). There is always at least one pane in each Pulsar window.

## Pane Container

A section of the Pulsar UI that can contain multiple [panes]().

## Pane Item

Some item, often an editor, that is displayed within a [pane](). In the default configuration of Pulsar, pane items are represented by tags at the top of each pane.

::: info
**Note:** The reason why we don't call them "tabs" is because you can disable the [tabs package]() and then there aren't any tabs. For a similar reason, we don't call them files because some things can be shown in a pane that aren't files, like the Settings View.
:::

## Panel

A piece of the Pulsar UI that is outside the editor space.

Examples:

  * Find and Replace
  * Keybinding Resolver
