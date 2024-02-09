# Pepsi's UI Library
Contributors are Welcome.
[Pepsi's](https://github.com/Pepsied-5229/) old UI library. Could use plenty of optimizations.
# DOCUMENTATION IS SUPERSEDED BY [https://actualmasteroogway.github.io/docs/pepsi-user-interface/](https://actualmasteroogway.github.io/docs/pepsi-user-interface/)
## Table of Contents
- [Configuration](#configuration)
  - [Introduction](#introduction)
    - [Why Pepsi's UI Library](#why-choose-this-ui-library)
  - [Booting the Library](#booting-the-library)
    - [Library Functions](#library-functions)
    - [Useful Tips](#useful-tips-when-working-with-the-ui-library)
  - [Windows](#windows)
    - [Creating a Window](#creating-a-window)
      - [Window Functions](#window-functions)
    - [Creating a Tab](#creating-a-tab)
      - [Tab Functions](#tab-functions)
    - [Creating a Section](#creating-a-section)
      - [Section Functions](#section-functions)
- [Elements](#elements)
  - [Creating a Label](#creating-a-lable)
    - [Whats a Label](#whats-a-label)
    - [Label Functions](#label-functions)
  - [Creating a Toggle](#creating-a-toggle)
    - [Whats a Toggle](#whats-a-toggle)
    - [Toggle Functions](#toggle-functions)
  - [Creating a Textbox](#creating-a-textbox)
    - [Whats a Textbox](#whats-a-textbox)
    - [Textbox Functions](#textbox-functions)
  - [Creating a Slider](#creating-a-slider)
    - [Whats a Slider](#whats-a-slider)
    - [Slider Functions](#slider-functions)
  - [Creating a Button](#creating-a-button)
    - [Whats a Button](#whats-a-button)
    - [Button Functions](#button-functions)
  - [Creating a Keybind](#creating-a-keybind)
    - [Whats a Keybind](#whats-a-keybind)
    - [Keybind Functions](#keybind-functions)
  - [Creating a Dropdown](#creating-a-dropdown)
    - [Whats a Dropdown](#whats-a-dropdown)
    - [Dropdown Functions](#dropdown-functions)
  - [Creating a Search Box](#creating-a-search-box)
    - [Whats a Search Box](#whats-a-search-box)
    - [Search Box Functions](#search-box-functions)
  - [Creating a Colorpicker](#creating-a-colorpicker)
    - [Whats a Colorpicker](#whats-a-colorpicker)
    - [Colorpicker Functions](#colorpicker-functions)
  - [Creating a Persistence](#creating-a-persistence)
    - [Whats a Persistence](#whats-a-persistence)
    - [Persistence Functions](#persistence-functions)
- [Other](#other)
  - [Credits](#credits)
  - [Changelog](#changelog)
  - [Script Template](#script-template)

# Configuration

## Introduction

This is the written documentation for Pepsi's User Interface.

### Why choose this UI Library

- 🛠️ Occasional Bugfixes
- 💫 Open to any suggestions
- ⚙️ Advanced Features like:
  - ⏏️ Prompts the User can interact with
  - 🔧 Useful Built-In functions and variabls Developers can take advantage of to make their code look cleaner
  - 😍 Occasional Updates
- 🔓 Open Sourced

## Booting the Library

```lua
local Library, Flags, Subs = loadstring(game:GetObjects("rbxassetid://7657867786")[1].Source)("Pepsi's UI Library")
```

### Library Functions

#### [:CreateWindow](#creating-a-window)

Creates a [Window](#windows) [User Interface](https://create.roblox.com/docs/ui) the user can interact with

### Useful Tips when working with the Ui Library

The Library has many different custom made functions perfected for the best optimization (not really), such as
  - Library.Players: ```Library.Players: Instance\<Players\>``` (game.Players)
  - Library.LP: ```Library.LP: Instance\<Player\>```: (Local Player)
  - Library.Unload: ```Library.Unload(): \<void\> function(\<void\>)``` (Unloads all of the [Windows created](#creating-a-window))
  - Library.ResetAll: ```Library.ResetAll(): \<void\> function(\<void\>)``` (Resets the values of all Elements to their default ones, that were set in the configs)
  - Library.signals: ```Library.signals: \<table\>``` (A table with all the RBXScriptConnections the library has made. Feel free to add your own too. Automatically disconnects post library unloading)
  - Library.UnloadCallback: ```Library.UnloadCallback: \<void\> function(\<void\>)``` (A function that gets called post unloading the UI Library)
  - Library.Subs: ```Library.Subs: \<table\>``` (A table with many more different kind of Functions in it. Library.Subs and Suby are the same assuming you booted the Library using [the Code Snippet](#booting-the-library))

## Windows

### Creating a Window

```lua
Library:CreateWindow({
    Name = "Window Name",
    Themeable = {
        Image = "rbxassetid://7483871523",
        Credit = true, -- sad if set to false :(
        Info = "Extra info displayed in designer",
        Background = {
            Transparency = 0.5 or 50, -- Both examples will make the background half visible
            Visible = true
        }
    },
    Theme = '{"__Designer.Colors.main":"4dbed9"}'
})
```

#### Window Functions

##### [CreateTab](#creating-a-tab)

See the [Code Snippet](#creating-a-tab)

### Creating a Tab

#### Tab Functions

### Creating a Section

#### Section Functions

# Elements

## Creating a Lable

### Whats a Label

### Label Functions

## Creating a Toggle

### Whats a Toggle

### Toggle Functions

## Creating a Textbox

### Whats a Textbox

### Textbox Functions

## Creating a Slider

### Whats a Slider

### Slider Functions

## Creating a Button

### Whats a Button

### Button Functions

## Creating a Keybind

### Whats a Keybind

### Keybind Functions

## Creating a Dropdown

### Whats a Dropdown

### Dropdown Functions

## Creating a Search Box

### Whats a Search Box

### Search Box Functions

## Creating a Colorpicker

### Whats a Colorpicker

### Colorpicker Functions

## Creating a Persistence

### Whats a Persistence

### Persistence Functions

# Other

## Credits

## Changelog

## Script Template
