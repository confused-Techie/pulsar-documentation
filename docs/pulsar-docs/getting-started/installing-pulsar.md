---
title: Installing Pulsar
curbook: Getting Started
---

To get started with Pulsar, you'll need to get it on your system. This section will go over installing Pulsar on your system.

Installing Pulsar should be fairly simple, but there's some important details to note first.

There are [two possible](https://pulsar-edit.dev/blog/20230216-Daeraxa-ReleaseStrategyUpdate.html) official releases of Pulsar available for installation. Each with some mild differences, expanded below:

## Regular Release

The regular release of Pulsar is a new tagged version of Pulsar released by the Pulsar team. These are the releases that can be found linked from our website, and from each GitHub release. These are considered to be stable releases and are updated as consistently as possible.

## Rolling Release

The rolling release of Pulsar is bleeding edge, containing the newest changes possible as soon as they are added to Pulsar. Every pull request that's merged to Pulsar's source code results in a new rolling release being created automatically by our CI. These releases will provide bug fixes faster than possible from regular releases, but in rare cases can also contain breaking changes that were not caught by the developers of Pulsar.

A rolling release allows a great way to get bug fixes faster, and provides the chance for the community to provide feedback to issues or changes before they become more widely available via regular releases.

---

With our release channels in mind, it's time to install Pulsar. To do so, you can head to our website [pulsar-edit.dev](https://pulsar-edit.dev/download.html).

Then select your operating system (if not opened automatically) and architecture (where necessary) and choose the type of download you need.

Along with installing Pulsar, you should know that in some cases you may need to install additional dependencies. Namly, some community packages use what is referred to as native modules. These Native Modules consist of code written in C/C++ that needs to be compiled for the operating system it is being installed on.

To be able to build these native modules some systems may require additional dependencies, or programs installed in order to do so, if a system does require this step it will be detailed along with it's instructions for installing Pulsar. Keep in mind, not all community packages utilize native modules, and often times these additional modules will not be required. But to avoid any error messages for community packages that do require these modules, it is recommended to install these dependencies ahead of time.

With that said, let's go over the steps for installing Pulsar onto each platform below:

## Linux

### Universal Releases

Releases are provided in `.AppImage` and `.tar.gz` "universal" formats that should work on most distributions.

#### AppImage

Simply run the Pulsar AppImage from your file manager or the terminal:

```bash
./pulsar_1.106.0_amd64.AppImage
```

For deeper integration into the system consider using [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher).

#### tag.gz

Simply extract and run the `pulsar` binary or integrate it into your system manually.

### Debian/Ubuntu based Distributions

To install Pulsar on Debian, Ubuntu, or releated distributions download the `.deb` Pulsar binary.

You can install this by opening it in your file manager or via the terminal:

```bash
sudo apt install .pulsar_1.106.0_amd64.deb
```

### Fedora/RHEL based Distributions

To install Pulsar on Fedora, RHEL, or releated distributions download the `.rpm` Pulsar binary.

You can install this by opening it in your file manager or via the terminal:

```bash
# On DNF-based distributions
sudo dnf install -y ./pulsar_1.106.0_amd64.rpm

# On YUM-based distributions
sudo yum install -y ./pulsar_1.106.0_amd64.rpm
```

### Officially Supported Package Managers

Optionally, Pulsar can be installed from the following officially supported package manager systems for Linux:

  * [deb-get](https://github.com/wimpysworld/deb-get/blob/main/01-main/packages/pulsar)

### Community Supported Package Managers

Optionally, Pulsar can be installed from many community supported package manager systems for Linux:

::: warning
Please remember that Community Supported installations are community supported, and any errors specific to that platform will need to be reported to, and addressed by the community members that maintain them. The Pulsar team is not responsible for any community supported installations.
:::

  * [AUR](https://aur.archlinux.org/packages/pulsar-bin)
  * [GURU](https://github.com/gentoo/guru/tree/master/app-editors/pulsar-bin)
  * [Homebrew](https://formulae.brew.sh/cask/pulsar#default)
  * [FlatPak](https://flathub.org/apps/dev.pulsar_edit.Pulsar)
  * [Nixpkgs](https://search.nixos.org/packages?channel=unstable&show=pulsar)
  * [AM/AppMan](https://github.com/ivan-hc/AM-Application-Manager/blob/main/programs/x86_64/pulsar)

## macOS

Pulsar follows the standard macOS installation process. Grab the correct download `.dmg` for your system, ensuring to grab the macOS Intel, or macOS Silicon release as needed. Once you have the file, you can open it to run the installer and drag the new `Pulsar` application into your "Applications" folder.

If your prefer to install from `.zip`, this is also provided and requires you to extract the file and drag the `Pulsar` application into your "Applications" folder.

### Officially Supported Package Managers

Unfortunately, there are no officially supported package managers for Pulsar installation on macOS at this time.

### Community Supported Package managers

Optionally, Pulsar can be installed from many community supported package manager systems for macOS:

::: warning
Please remember that Community Supported installations are community supported, and any errors specific to that platform will need to be reported to, and addressed by the community members that maintain them. The Pulsar team is not responsible for any community supported installations.
:::

  * [Homebrew](https://formulae.brew.sh/cask/pulsar#default)

## Windows

Pulsar on Windows supports a standard installation as well as running Pulsar in "Portable Mode" (More on that below).

To install Pulsar regularly download the `Setup` file, and double click to run. During the installation process you'll be able to choose either the default "User" install, or a "Machine" install. Either is fine, while knowing a "Machine" install will require administrative priviledges. Although a "User" install is recommended.

### Dependencies: For Community Package Native Modules

As mentioned above, some platforms will need additional dependencies to build native modules used by some community packages.

To be able to build community package's native modules on Windows you'll need to install the following applications:

  * Visual Studio
    - Make sure to install the "Desktop development with C++" Workload
    - Make sure to install the "Windows SDK"
  * Python

::: warning
Currently the following **exact** versions of these programs need to be installed in order to work as expected:

  * Visual Studio 2019
    - "Windows 10 SDK"
  * Python version 3.10
:::

### Officially Supported Package Managers

Optionally, Pulsar can be installed from the following officially supported package manager systems for Windows:

  * [Chocolatey](https://community.chocolatey.org/packages/pulsar)

### Community Supported Package Managers

Optionally, Pulsar can be installed from many community supported package manager systems for Windows:

::: warning
Please remember that Community Supported installations are community supported, and any errors specific to that platform will need to be reported to, and addressed by the community members that maintain them. The Pulsar team is not responsible for any community supported installations.
:::

  * [winget](https://winstall.app/apps/Pulsar-Edit.Pulsar)

## Updating Pulsar

You should consider updating Pulsar periodically for the latest improvements to the software. Additionally, when Pulsar receives hotfixes for security vulnerabilites you will want to update your version of Pulsar as soon as possible.

::: warning
Currently Pulsar does not support automatic updates on any platform. To install the latest updates follow the steps above for your platform, or update Pulsar through the supported package manager of your choice.
:::

## Portable Mode

Pulsar can optionally be run in "Portable" mode, which allows Pulsar to be run and used without requiring a permanent install.

Pulsar stores it's configuration and state in a `.pulsar` directory usually located in your home directory (`%UserProfile%` on Windows). You can however run Pulsar in portable mode where both the app and configuration are stored together such as on a removable storage device.

To setup Pulsar in portable mode download the relevant package and extract it to your removable storage.

### Linux

Download the `.AppImage` or `.tag.gz` release then create a `.pulsar` directory alongside the directory that contains the Pulsar binary, for example:

```bash
/media/myusb/pulsar-1.106.0/.pulsar
/media/myusb/.pulsar
```

### macOS

Download the `.zip` release then create a `.pulsar` directory alongside the `Pulsar.app` application, for example:

```bash
/MyUSB/Pulsar.app
/MyUSB/.pulsar
```

### Windows

Download the `Portable` release then create a `.pulsar` directory alongside the directory that contains `Pulsar.exe`, for example:

```bash
E:\\pulsar-1.106.0\\Pulsar.exe
E:\\.pulsar
```

### Portable Install Notes

  * The `.pulsar` directory must be writeable.
  * You can move an existing `.pulsar` directory to your portable device.
  * Pulsar can also store its Electron user data in your `.pulsar` directory - just create a subdirectory called `electronUserData` inside `.pulsar`.
  * Alternatively you can set the `ATOM_HOME` environment variable to point wherever you want (you can write a `.sh` or `.cmd` script to temporarily set it and launch it from that).
  * Portable mode installations will not automatically update.
