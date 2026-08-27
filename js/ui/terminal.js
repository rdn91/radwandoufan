export function initTerminal() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    const container = document.getElementById('terminal-container');

    if (!input || !output || !container) return;

    // Focus input when clicking anywhere in the terminal
    container.addEventListener('click', () => {
        input.focus();
    });

    const commands = {
        help: "Available commands: <br> - <strong>help</strong>: Show this message <br> - <strong>whoami</strong>: Display user info <br> - <strong>status</strong>: Show system status <br> - <strong>projects</strong>: List featured projects <br> - <strong>contact</strong>: Show contact info <br> - <strong>clear</strong>: Clear terminal output",
        whoami: "guest@radwandoufan<br>Permissions: View-Only<br>Role: Recruiter / Engineer",
        status: "SYSTEM STATUS: Online<br>UPTIME: 99.99%<br>ACTIVE CONNECTIONS: 1<br>INFRASTRUCTURE: Vercel / GitHub Pages",
        projects: "1. BLE Smart Vehicle [Hardware]<br>2. Steal or Split API [Python/FastAPI]<br>3. Boba Drops Audio [Frontend]<br>4. Homelab [Systems]",
        contact: "Email: radwandoufan@gmail.com<br>GitHub: <a href='https://github.com/rdn91' target='_blank'>rdn91</a><br>LinkedIn: <a href='https://www.linkedin.com/in/radwan-doufan/' target='_blank'>in/radwan-doufan</a>"
    };

    function printOutput(text, isHTML = true) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        if (isHTML) {
            line.innerHTML = text;
        } else {
            line.textContent = text;
        }
        output.appendChild(line);
        scrollToBottom();
    }

    function printCommand(cmd) {
        const line = document.createElement('div');
        line.className = 'terminal-line command-echo';
        line.innerHTML = `<span class="prompt">guest@radwandoufan:~$</span> ${cmd}`;
        output.appendChild(line);
    }

    function scrollToBottom() {
        container.scrollTop = container.scrollHeight;
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            input.value = '';

            if (cmd === '') return;

            printCommand(cmd);

            if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (commands[cmd]) {
                printOutput(commands[cmd]);
            } else {
                printOutput(`bash: ${cmd}: command not found`);
            }
        }
    });

    // Initial message
    printOutput("Welcome to RadwanOS v2.0.4 (GNU/Linux 5.15.0-101-generic x86_64)<br>Type 'help' for a list of available commands.");
}
