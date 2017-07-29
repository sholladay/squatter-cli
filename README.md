# squatter-cli [![Build status for Squatter CLI](https://img.shields.io/circleci/project/sholladay/squatter-cli/master.svg "Build Status")](https://circleci.com/gh/sholladay/squatter-cli "Builds") [![Build status for Squatter CLI on Windows](https://ci.appveyor.com/api/projects/status/xxh47w8j36wlmgck/branch/master?svg=true "Windows Build Status")](https://ci.appveyor.com/project/sholladay/squatter-cli "Windows Builds")

> Check if a namespace on npm is being hogged.

## Why?

 - Find out if a package name is worth [disputing](https://docs.npmjs.com/misc/disputes).
 - Filter out low quality packages in tools (e.g. search).
 - Check the quality of your own packages.

## Install

```sh
npm install squatter-cli --save
```

## Usage

```console
$ squatter --help

  Usage
    $ squatter <...packages>

  Example
    $ squatter foo
    $ squatter foo bar
```

## Algorithm

See the API for [how it works](https://github.com/sholladay/squatter#algorithm).

## Related

 - [squatter](https://github.com/sholladay/squatter) - API for this module

## Contributing

See our [contributing guidelines](https://github.com/sholladay/squatter-cli/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/squatter-cli/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/squatter-cli/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/squatter-cli/blob/master/LICENSE "The license for squatter-cli.") © [Seth Holladay](http://seth-holladay.com "Author of squatter-cli.")

Go make something, dang it.
