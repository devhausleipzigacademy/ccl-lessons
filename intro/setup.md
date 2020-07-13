# Setting up a developer machine

## Mac Specific

### XCode

Apple Developer Toolchain

```bash
xcode-select --install
```

### Homebrew

Package Manager

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Windows Specific

### WSL 2 with Ubuntu

Windows Subsystem for Linux

Update Windows to at least Build 19041

Run Powershell as Administrator

[Guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

### scoop

Package Manager [Link](https://scoop.sh)

## Tools

### Chrome

Web Browser: [Download](https://www.google.com/chrome/)

Mac:

```bash
brew cask install google-chrome
```

### VS Code

Code Editor: [Download](https://code.visualstudio.com/)

Mac:

```bash
brew cask install visual-studio-code
```

### Git

Source Code Version Control: [Link](https://git-scm.com/)

Mac:

```bash
brew install git
```

WSL:

```bash
 sudo apt install git-all
```

### zsh

Shell

Mac:

```bash
brew install zsh
chsh -s /usr/local/bin/zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

WSL:

```bash
apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Node & npm

Javascript Runtime & Package Manager.
Node version manager: [n-install](https://github.com/mklement0/n-install)

```bash
curl -L https://git.io/n-install | bash
```

### Docker

Containerization [Link](https://www.docker.com/products/docker-desktop)

Mac:

```bash
brew cask install docker
```

## Accounts

### GitHub

https://github.com

### Discord

https://discord.com/channels/665641579368677395

### Code Camp Leipzig Learning Plattform

https://codecampleipzig.netlify.app
