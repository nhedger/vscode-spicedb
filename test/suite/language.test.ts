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

suite("Language Configuration", async () => {
    test("it supports toggling line comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 0)
        );

        await commands.executeCommand("editor.action.commentLine");

        assert.equal(editor.document.getText(), "// comment me please");

        await commands.executeCommand("workbench.action.closeActiveEditor");
    });

    test("it supports toggling block comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 17)
        );

        await commands.executeCommand("editor.action.blockComment");

        assert.equal(editor.document.getText(), "/* comment me please */");

        await commands.executeCommand("workbench.action.closeActiveEditor");
    });
});
