# 💬 Chatroom Test (PHP Local)

A lightweight, database-free chatroom built with PHP, jQuery, and plain text storage. Designed for local testing and development without XAMPP or MySQL.

---

## 🧰 Requirements

- ✅ PHP 8+ installed on your system  
  [Download PHP for Windows](https://windows.php.net/download)
- ✅ A modern browser (Chrome, Firefox, Edge)
- ✅ A text editor (VS Code, Sublime Text, Notepad++)

---

## 📁 File Structure

```
chatroom/
├── index.html          # Chat interface
├── chat.php            # Loads messages
├── write.php           # Handles message submission
├── clear.php           # Clears chat.txt
├── chat.txt            # Stores messages
├── style.css           # Basic styling
└── script.js           # jQuery logic
```

---

## 🚀 How to Run Locally (Windows)

### 1. Extract PHP to a folder (e.g. `F:\php`)
- Download from [windows.php.net](https://windows.php.net/download)
- Choose **Thread Safe** version
- Add `F:\php` to your system PATH

### 2. Verify PHP installation
Open Command Prompt:
```bash
php -v
```

### 3. Place your project in a folder (e.g. `F:\chatroom`)

### 4. Start PHP’s built-in server
```bash
cd F:\chatroom
php -S localhost:8000
```

### 5. Open your browser
```
http://localhost:8000/index.html
```

---

## 🧪 Features

- ✅ Username lock-in (stored in `localStorage`)
- ✅ Real-time message updates via AJAX
- ✅ Clear chat option with confirmation
- ✅ Change username option
- ❌ No database required

---

## 🧼 Notes

- Messages are stored in `chat.txt` as plain text
- This project is for local testing only—no authentication or security
- To delete all messages, clear the contents of `chat.txt` or use the **Clear Chat** button

---

## 🧠 Credits

Built for local testing and iterative design.  
Inspired by the [CSS-Tricks jQuery/PHP Chat Room](https://css-tricks.com/jquery-php-chat/) and customized for override-proof, modular workflows.
