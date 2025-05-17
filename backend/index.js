const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Kudos Board API is running!');
});

// GET all boards (with messages)
app.get('/boards', async (req, res) => {
  try {
    const boards = await prisma.kudosBoard.findMany({
      include: { messages: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch boards', details: err.message });
  }
});

// GET a single board (with messages)
app.get('/boards/:id', async (req, res) => {
  try {
    const board = await prisma.kudosBoard.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { messages: true }
    });
    if (!board) return res.status(404).json({ error: 'Board not found' });
    res.json(board);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch board', details: err.message });
  }
});

// CREATE a new board
app.post('/boards', async (req, res) => {
  try {
    const { title, description, category, image, author } = req.body;
    const newBoard = await prisma.kudosBoard.create({
      data: { title, description, category, image, author }
    });
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create board', details: err.message });
  }
});

// UPDATE a board
app.put('/boards/:id', async (req, res) => {
  try {
    const { title, description, category, image, author } = req.body;
    const updatedBoard = await prisma.kudosBoard.update({
      where: { id: parseInt(req.params.id) },
      data: { title, description, category, image, author }
    });
    res.json(updatedBoard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update board', details: err.message });
  }
});

// DELETE a board
app.delete('/boards/:id', async (req, res) => {
  try {
    const deletedBoard = await prisma.kudosBoard.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json(deletedBoard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete board', details: err.message });
  }
});

// GET all messages for a board
app.get('/boards/:boardId/messages', async (req, res) => {
  try {
    const messages = await prisma.kudosMessage.findMany({
      where: { boardId: parseInt(req.params.boardId) },
      orderBy: { createdAt: 'desc' }
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages', details: err.message });
  }
});

// GET a single message
app.get('/boards/:boardId/messages/:messageId', async (req, res) => {
  try {
    const message = await prisma.kudosMessage.findUnique({
      where: { id: parseInt(req.params.messageId) }
    });
    if (!message || message.boardId !== parseInt(req.params.boardId)) {
      return res.status(404).json({ error: 'Message not found for this board' });
    }
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch message', details: err.message });
  }
});

// CREATE a new message for a board
app.post('/boards/:boardId/messages', async (req, res) => {
  try {
    const { title, message, image, upvotes } = req.body;
    const boardId = parseInt(req.params.boardId);
    const newMessage = await prisma.kudosMessage.create({
      data: { title, message, image, upvotes: upvotes || 0, boardId }
    });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create message', details: err.message });
  }
});

// UPDATE a message
app.put('/boards/:boardId/messages/:messageId', async (req, res) => {
  try {
    const { title, message, image, upvotes } = req.body;
    const messageId = parseInt(req.params.messageId);
    const updatedMessage = await prisma.kudosMessage.update({
      where: { id: messageId },
      data: { title, message, image, upvotes }
    });
    res.json(updatedMessage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update message', details: err.message });
  }
});

// DELETE a message
app.delete('/boards/:boardId/messages/:messageId', async (req, res) => {
  try {
    const messageId = parseInt(req.params.messageId);
    const deletedMessage = await prisma.kudosMessage.delete({
      where: { id: messageId }
    });
    res.json(deletedMessage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete message', details: err.message });
  }
});

// PATCH upvotes for a message
app.patch('/boards/:boardId/messages/:messageId/upvotes', async (req, res) => {
  try {
    const { upvotes } = req.body;
    const messageId = parseInt(req.params.messageId);
    const updatedMessage = await prisma.kudosMessage.update({
      where: { id: messageId },
      data: { upvotes }
    });
    res.json(updatedMessage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update upvotes', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});