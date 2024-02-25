# evidentQuasar (evident-quasar)

A quasar project for evident.

1.Utilizing Axios, data is fetched via the GET method and presented in a Q-table. A BaseTable was established and integrated into UserTable for displaying the retrieved data. A spinner was implemented to indicate loading while fetching data from the API, and pagination was enabled. The search feature was enhanced with props to facilitate data filtering based on search input. Pinia store was leveraged to manage API calls and loading states. Additionally, Quasar Notify was incorporated (a custom utils file) to provide users with informative messages, displayed in the bottom-right corner of the window, for both successful and erroneous outcomes.

2.I've added a "Create User" button to demonstrate routing, which directs users to the "Add User" page. The "Add User" page features input fields without any actual functionality; they're merely placeholders. Additionally, the page includes an "Add User" button that redirects users back to the index page, with no further functionalities implemented.

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
yarn dev
# or
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
yarn build
# or
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
