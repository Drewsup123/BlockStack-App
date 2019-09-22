import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';

const createMarkdown = createMarkdownShortcutsPlugin();
const plugins = [createMarkdown];
const text = 'The toolbar above the editor can be used for formatting text, as in conventional static editors  …';

export default class MyEditor extends Component {
    state = {
        editorState: createEditorStateWithText(text),
    };

    onChange = (editorState) => {
        this.setState({
        editorState,
        });
    };

    focus = () => {
        this.editor.focus();
    };

    render() {
        return (
        <div>
            <div onClick={this.focus}>
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                plugins={plugins}
                ref={(element) => { this.editor = element; }}
            />
            </div>
        </div>
        );
    }
}