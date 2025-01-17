# OmnisientAngularAssessment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Design assumptions

The design of this project revolves around displaying datasets and their respective statuses in a clear and intuitive layout.

1. Dataset List Page:

The Datalist page displays a list of datasets. Upon loading the page, the user is presented with a list of datasets - those requiring user reviews. 

Each dataset is represented by a row that includes basic information, such as Dataset Name, Uploaded By and more.

2. Dataset Status Cards:

Above the list of datasets, there are three status cards representing different statuses ```(review, fail and shares) ```.

These cards act as buttons and indicate how many datasets fall under each status category. When clicked, the cards filter and show datasets with the selected status type.

3. Dataset Details View:

When a user clicks the "View" button on a dataset row, the activity details of the selected dataset are displayed on the right-hand side in a card format.

This card provides detailed information about the dataset's activity.

Styling and Refinement

Although the current layout provides a functional foundation, there are a number of stylistic refinements that are yet to be added:

Refinement of Card Layouts:

The dataset details card and the status cards could be further refined in terms of spacing, typography, and color schemes to improve readability and create a more cohesive design.

Error and Personal Info Icons:

Icons related to dataset errors should be visually distinct and appropriately sized to ensure they are easily identifiable.


