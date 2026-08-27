import { renderRecruiterMode } from './ui/renderGrid.js';
import { initTerminal } from './ui/terminal.js';

document.addEventListener('DOMContentLoaded', () => {
    // Init recruiter mode data
    renderRecruiterMode();
    // Init live terminal widget
    initTerminal();
});
