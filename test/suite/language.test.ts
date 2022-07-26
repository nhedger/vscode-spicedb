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

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

suite("Language Configuration", async () => {
    test("it supports toggling line comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 0)
        );
        await commands.executeCommand("editor.action.commentLine");
        await sleep(2000);
        assert.equal(editor.document.getText(), "// comment me please");
    });

    test("it supports toggling block comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 17)
        );
        await commands.executeCommand("editor.action.blockComment");
        await sleep(2000);
        assert.equal(editor.document.getText(), "/* comment me please */");
    });
});
