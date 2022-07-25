# VS Code Extension Template

Bootstrap your next VS Code extension idea with this batteries-included kickass boilerplate.

-   **Run anywhere**. Create extensions that run on the desktop and in the browser.
-   **Test everywhere**. Run tests on the desktop and in the browser.
-   **Automated**. GitHub Actions workflows to automate linting, formatting, testing and releasing.

## Getting Started

The following command will initialize a new project baed on this template.

```shell
npm create @nhedger/vscode-extension-template
```

## Usage

### Entrypoint

The extension's entrypoint is defined in [`src/extension.ts`](./src/extension.ts).

#### Host-specific entrypoint

You may create extension host specific entrypoints if you need to.

-   If the `src/extension.web.ts` file exists, it will override `src/extension.ts` when bundling the extension for a
    webworker-based extension host.
-   If the `src/extension.node.ts` file exists, it will override `src/extension.ts` when bundling for a node-based
    extension host.

### Tests

The extension's tests and test runner are defined in the [`test`](./test/) directory.

-   [`test/suite`](./test/suite/) contains the extension's test suites.
-   [`test/runner.node.ts`](./test/runner.node.ts) contains the test runner executed on node-based extension hosts.
-   [`test/runner.web.ts`](./test/runner.web.ts) contains the test runner executed on webworker-based extension hosts.
-   [`test/test-script.ts`](./test/test-script.ts) contains the test script that downloads and boots a VS Code instance
    and starts the tests when using the CLI.

Test suites created in `test/suites` will automatically be bundled and run.

#### Extension host specific test suites

-   Test suites ending with `.node.test.ts` will only run in a node-based extension host.
-   Test suites ending with `.web.test.ts` will only run in a webworker-based extension host.

#### Running the tests

The tests can be run using VS Code's **Run and Debug** feature.

Alternatively, you may run them from the command line with the following command.

```bash
# Run all tests
npm test

# Run tests for node-based extension hosts
npm run test:node

# Run tests for webworker-based extension hosts
npm run test: web
```

## License

This template is open-sourced software licensed under the [MIT license](./LICENSE.md).

Copyright © 2022 Nicolas Hedger
