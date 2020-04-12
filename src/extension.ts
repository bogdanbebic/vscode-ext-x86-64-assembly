// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-ext-x86-64-assembly" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-ext-x86-64-assembly.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vscode-ext-x86-64-assembly!');
	});

	context.subscriptions.push(disposable);


	let registers = require('../resources/registers.json');
	// add property for autocomplete
	for (let index = 0; index < registers.length; index++) {
		registers[index].kind = vscode.CompletionItemKind.Variable;		
	}

	let disposable_completion_regs = vscode.languages.registerCompletionItemProvider('asm', {
		provideCompletionItems(document, position, token, context) {
			return new vscode.CompletionList(registers);
		}
	}, "qwertyuiopasdfghjklzxcvbnm");

	context.subscriptions.push(disposable_completion_regs);

	
	let instructions = require('../resources/instructions.json');
	// add property for autocomplete
	for (let index = 0; index < instructions.length; index++) {
		instructions[index].kind = vscode.CompletionItemKind.Keyword;		
	}

	let disposable_completion_instructions = vscode.languages.registerCompletionItemProvider('asm', {
		provideCompletionItems(document, position, token, context) {
			return new vscode.CompletionList(instructions);
		}
	}, "qwertyuiopasdfghjklzxcvbnm");

	context.subscriptions.push(disposable_completion_instructions);
	
}

// this method is called when your extension is deactivated
export function deactivate() {}
