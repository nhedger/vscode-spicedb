import {
    commands,
    workspace,
    window,
    Location,
    Selection,
    TextEditor,
} from "vscode";
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

        await new Promise((r) => setTimeout(r, 2000));

        await commands.executeCommand<Location[]>(
            "editor.action.commentLine",
            editor.document.uri
        );

        await new Promise((r) => setTimeout(r, 2000));

        assert.equal(editor.document.getText(), "// comment me please");
    });

    test("it supports toggling block comments", async () => {
        const editor = await openTestSchemaInEditor(
            "comment me please",
            new Selection(0, 0, 0, 17)
        );

        await commands.executeCommand<Location[]>(
            "editor.action.blockComment",
            editor.document.uri
        );

        assert.equal(editor.document.getText(), "/* comment me please */");
    });
});
