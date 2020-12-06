## gatsby-theme-terminal

This Repo clone from `gatsby-theme-terminal`

with my simple pagination feature.

## run

```shell
yarn

yarn develop
```

## How to Setup for download this package

[Configuring npm for use with GitHub Packages](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-with-a-personal-access-token)

`Settings > Developer Setting > Personal access tokens`

Generate toke with scope `read:packages, repo`

```shell
npm login --scope=@OWNER --registry=https://npm.pkg.github.com

> Username: GITHUB-USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

create `.npmrc`

```txt
registry=https://npm.pkg.github.com/chuan-khuna
```
