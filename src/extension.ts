// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("er-prototipo-1-1.reproduzAudio", () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        "reproduzAudio",
        "O teu audio",
        vscode.ViewColumn.One,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>O teu audio</title>
		</head>
		<body>
			<audio controls>
				<source src="./assets/" type="audio/ogg">
			</audio>
		</body>
	</html>`;
}

// this method is called when your extension is deactivated
export function deactivate() {}
