# PancakeSwap

A clone of [PancakeSwap's front page ](https://pancakeswap.finance/) using ReactJS.
 
This is a pair programming exercise.

## Installation

1.Make sure you have yarn installed

`npm install --global yarn`

If you run `yarn --version` and it works it means that yarn was installed

2.Install dependencies

`yarn`

Pre-commit hooks:

- the commit messages need to follow the conventional commits structure (https://www.conventionalcommits.org/en/v1.0.0/)
- the files will need to be pretty before a commit. please run `yarn lint` before you commit otherwise you won't be able to commit

### Contributing

Follow the developer's branch structure.

Default theme is dark.

<br>

Media - Queries.

<br>

> Break - Points are:
>
> - XSmall: window width >=370px
> - Small: window width >=576px
> - Medium: window width >=852px
> - Large: window width >=968px
> - XLarge: window width >=1080px

<br>

Usage example for the break-point mixins in a basic SCSS code:

```
.main-content {
    padding: 0 1.5rem;

    // window width >=576px
    @include sm {
      padding: 0 2rem;
    }

    // window width >=852px
    @include md {
      margin-left: auto;
      margin-right: auto;
    }

    // window width >=968px
    @include lg {
      background: white;
    }
}
```

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
