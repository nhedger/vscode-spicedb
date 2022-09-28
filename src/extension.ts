import { window } from "vscode";

/**
 * This method is called by VS Code when the extension is activated.
 */
export const activate = () => {
    console.log("The SpiceDB extension has been activated.");
    window.showInformationMessage('Hello');
};

/**
 * This method is called by VS Code when the extension is deactivated.
 */
export const deactivate = () => {
    console.log("The SpiceDB extension has been deactivated.");
};
