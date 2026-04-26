# 🎹 Key Press Visualizer

A lightweight, interactive web app that captures and displays keyboard input in real time with visual feedback and dynamic styling.

---

## 🚀 Overview

**Key Press Visualizer** demonstrates core JavaScript event handling by listening to `keydown` events and rendering the pressed key along with its corresponding code. The UI reacts instantly with animation and color transitions, providing immediate feedback for each interaction.

---

## ✨ Features

* Real-time key detection using the DOM `keydown` event
* Displays:

  * Pressed key (normalized for special keys)
  * Keyboard event code
* Handles special keys (Space, Enter, Backspace)
* Dynamic background color generation (HSL-based)
* Smooth UI animation on each key press
* Minimal, responsive layout

---

## 🧠 How It Works

* Registers a global event listener on `window` for `keydown`
* Extracts `event.key` and `event.code`
* Normalizes special keys for readability (e.g., `" "` → `SPACE`)
* Updates DOM nodes (`textContent`) for instant UI refresh
* Applies transient CSS class for animation
* Generates a random hue to update background color via HSL

---

## 🛠️ Tech Stack

* **HTML5** — semantic structure
* **CSS3** — layout, transitions, and animations
* **JavaScript (ES6)** — event handling & DOM manipulation

---

## 📁 Project Structure

```
key-press-visualizer/
│── index.html
│── script.js
│── README.md
```

---

## ▶️ Getting Started

1. Clone or download the repository
2. Open `pro1.html` in any modern browser
3. Press any key to see real-time updates

---

## 🌐 Live Demo

*(Enable GitHub Pages to add your live link here)*

```
https://your-username.github.io/key-press-visualizer/
```

---

## 📌 Use Cases

* Understanding JavaScript keyboard events
* Practicing DOM manipulation
* Beginner-friendly UI interaction project

---

## 🔮 Future Improvements

* Key press history panel
* Sound feedback on key events
* Mobile/touch input support
* Dark/light theme toggle
* React or Vue version

---

## 🙌 Acknowledgment

Built as a hands-on exercise to strengthen core front-end development concepts.

---

## 📄 License

This project is open-source and available under the MIT License.
