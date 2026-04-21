const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const reportsRoutes = require('./routes/reports');
const foundItemsRoutes = require('./routes/foundItems');
const messagesRoutes = require('./routes/messages');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/found-items', foundItemsRoutes);
app.use('/api/messages', messagesRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
