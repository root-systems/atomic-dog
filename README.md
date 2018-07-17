# atomic-dog
exploratory system for developing a dogstack compatible atomic design driven development process
 
## Note on adding bin scripts to path
If you are finding that the locally installed scripts:
 - storybook
 - codeceptjs
Are not working :( (you may be on a windows computer!)

Than you need to make sure you have something like this:

```BASH
export PATH="$PATH:./node_modules/.bin"
```

In your .zshrc, .bashrc or .bash_profile

For windows users - you will need to be using [gitbash](https://gitforwindows.org/) or [cmder](http://cmder.net/)