const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Thiết lập thư mục chứa các file view
app.use(express.static(path.join(__dirname, 'views')));

// Route cho các đường dẫn
app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'user.html'));
});

app.get(['/home', '/'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Đường dẫn mặc định cho các trường hợp khác
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'filenotfound.html'));
});

// Bắt đầu lắng nghe các yêu cầu
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
