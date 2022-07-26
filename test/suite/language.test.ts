import { commands, workspace, window, Selection, TextEditor } from "vscode";
import { assert } from "chai";

const openTestSchemaInEditor = async (
    content: string,
    selection?: Selection
): Promise<TextEditor> => {
    return await window.showTextDocument(
        await workspace.openTextDocument({
            language: "zed",
            content: content,
        }),
        { selection: selection }
    );
};

suite("Language Configuration", async () => {
    test("it supports toggling line comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 0)
        );

        //await new Promise((r) => setTimeout(r, 2000));

        await commands.executeCommand("editor.action.commentLine");

        assert.equal(editor.document.getText(), "// comment me please");
    });

    test("it supports toggling block comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 17)
        );

        await commands.executeCommand("editor.action.blockComment");

        assert.equal(editor.document.getText(), "/* comment me please */");
    });
});
