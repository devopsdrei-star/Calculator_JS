# Orange Calculator

A small, single-page calculator with a bright orange theme, basic arithmetic, memory buttons, and running history. Built with plain HTML, CSS, and JavaScript—no build step required.

## Features
- Four operations: add, subtract, multiply, divide (with divide-by-zero guard).
- Memory keys: MC, MR, M+, M-, plus a clear key for the whole state.
- Inline history shows the last expression.
- Responsive layout with tactile button presses and retro-inspired display font.

## Getting Started
1. Clone or download this folder.
2. Open `index.html` in any modern browser. No installs or builds needed.

## How to Use
- Click the digit and `.` buttons to build a number (max 12 chars).
- Click an operator to stage it; the history line shows the pending operation.
- Press `=` to compute; errors (e.g., divide by zero) show as `Error`.
- Memory:
  - `MC`: clear memory
  - `MR`: recall stored value into display
  - `M+` / `M-`: add/subtract the current display to/from memory
- `C` clears current/previous values and the pending operation.

## File Map
- `index.html` — page structure and button grid.
- `style.css` — orange theme, display styling, responsive tweaks.
- `script.js` — calculator logic, history rendering, memory handling.

## Notes
- Numbers are trimmed with `toPrecision(12)` to avoid long floats.
- Works fully offline; keep all three files together in the same folder.
