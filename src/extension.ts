'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.kanonji.vim-save', () => {
        vscode.commands.executeCommand('workbench.action.files.save');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}