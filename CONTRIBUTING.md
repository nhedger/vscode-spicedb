# How to contribute

Hey 👋, thank you for considering contributing to the **SpiceDB extension for VS Code**.

This documents contains instructions to get you started with the project and guidelines for
submitting pull requests.

## Setup

This project's dependencies are managed with `npm`.

The following command will:

-   Install the project's dependencies
-   Set up pre-commit hooks to lint and format the code

```bash
npm install
```

## Building

The extension may be built with the following command.

```bash
npm run build
```

During development, the following command may be used to watch for changes and automatically rebuild
the extension.

```
npm run watch
```

## Running

The extension may be run directly from within VS Code using one of the provided debug
configurations.

## Testing

The following command will run the tests on all supported extension hosts.

```
npm run test
```

Tests may also be run on specific extension hosts only.

> Make sure to build the extension before running the tests. If you use `npm run watch`, this is
> already done for you automatically.

```bash
# Run on node-based extension host
npm run test:node

# Run on web-based extension host
npm run test:web
```

### Creating new tests

Tests typically live under the `test/suite` directory and have the `.test.ts` extension. Any tests
that match this pattern will automatically be picked up and bundled.

You may create test suites that target a specific extension host. To do you, use the following
extensions.

-   `.node.test.ts` to create a test suite that runs only on node-based extension hosts.
-   `.web.test.ts` to create a test suite that runs only on web-based extension hosts.
