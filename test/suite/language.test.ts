import { commands, workspace, window, Selection, TextEditor } from "vscode";
import { assert } from "chai";

const openTestSchemaInEditor = async (
    content: string,
    selection?: Selection
): Promise<TextEditor> => {
    const document = await workspace.openTextDocument({
        language: "zed",
        content: content,
    });

    const editor = await window.showTextDocument(document, {
        selection: selection,
    });

    return editor;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

suite("Language Configuration", async () => {
    test("it supports toggling line comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 0)
        );

        return new Promise((resolve, reject) => {
            workspace.onDidChangeTextDocument((e) => {
                if (
                    e.document.uri === editor.document.uri &&
                    e.document.getText() === "// comment me please"
                ) {
                    resolve();
                } else {
                    reject();
                }
            });
            commands.executeCommand("editor.action.commentLine");
        });
    });

    test("it supports toggling block comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 17)
        );
        return new Promise((resolve, reject) => {
            workspace.onDidChangeTextDocument((e) => {
                if (
                    e.document.uri === editor.document.uri &&
                    e.document.getText() === "/* comment me please */"
                ) {
                    resolve();
                } else {
                    reject();
                }
            });
            commands.executeCommand("editor.action.blockComment");
        });
    });
});
