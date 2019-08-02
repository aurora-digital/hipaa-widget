# Hipaa Widget

Are you HIPPA? is a tool to help developers the entrepreneurs understand if an application is HIPAA compliant. HIPAA stands for Health Insurance Portability and Accountability Act. The goal of this law is to ensure confidentiality and security of healthcare information.

HIPAA is long and complex, and most small businesses cannot afford a legal team. Are you HIPPA? is a survey that determine if an applicatin is HIPAA compliant and provides information on what steps to take to make it.

## Development

We are using [asdf](https://github.com/asdf-vm/asdf) to manage tool
dependencies. Our recommendation is that you also use it, since the
`.tool-versions` is always up to date regarding the languages and respective
versions we are using.

```shell
git clone https://github.com/aurora-digital/hipaa-widget
bin/setup # this sets up pretty much everything
bin/server # this runs the project
```

And done! You are ready to rock.

If you intend on making a contribution, don't forget to run `bin/lint`

## Architecture

This is a simple React app built with a custom webpack config. It uses CSS modules with the `className` prop, just make sure to name your files accordingly: `filename.css` for regular global css and `filename.module.css` for modules (check existing usages for examples).

The app makes use of a simplified global store via a custom hook `useStore`.

## Contributing

Feel free to contribute.

If you found a bug, open an issue. You can also open a PR for bugs or new
features. Your PRs will be reviewed and subject to our style guide and linters.

We have a list of tasks available at the **project** tab here on Github.

[trello]: https://trello.com/b/EKLeaNzU/pessoa
[coc]: https://github.com/justmendes/pessoa/blob/master/CODE_OF_CONDUCT.md

# About

This project is maintained by [Aurora](http://auroradigital.co).

If you need to contact the maintainer you can reach out to us via <a href="mailto:contact@auroradigital.co">email</a>.
