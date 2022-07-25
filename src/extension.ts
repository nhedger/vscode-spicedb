import { commands, ExtensionContext, window } from "vscode";

/**
 * This method is called by VS Code when the extension is activated.
 */
export const activate = (context: ExtensionContext) => {
    const helloWorldCommand = commands.registerCommand(
        "vscode-extension-template.helloWorld",
        () => {
            window.showInformationMessage(
                "Hello World from VS Code Extension Template."
            );
        }
    );

    context.subscriptions.push(helloWorldCommand);
};

/**
 * This method is called by VS Code when the extension is deactivated.
 */
export const deactivate = () => {
    console.log("VS Code Extension Template is deactivated.");
};
