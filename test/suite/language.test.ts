import { commands, workspace, window, Location, Selection } from "vscode";
import { assert } from "chai";

suite("Language Configuration", function () {
    test("it supports toggling line comments", async () => {
        const editor = await window.showTextDocument(
            await workspace.openTextDocument({
                language: "zed",
                content: "comment me please",
            })
        );

        editor.selection = new Selection(
            0,
            0,
            0,
            editor.document.getText().length
        );

        await commands.executeCommand<Location[]>(
            "editor.action.commentLine",
            editor.document.uri
        );

        assert.equal(editor.document.getText(), "// comment me please");
    });

    test("it supports toggling block comments", async () => {
        const editor = await window.showTextDocument(
            await workspace.openTextDocument({
                language: "zed",
                content: "comment me please",
            })
        );

        editor.selection = new Selection(
            0,
            0,
            0,
            editor.document.getText().length
        );

        await commands.executeCommand<Location[]>(
            "editor.action.blockComment",
            editor.document.uri
        );

        assert.equal(editor.document.getText(), "/* comment me please */");
    });
});
