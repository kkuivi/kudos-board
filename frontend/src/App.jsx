import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KudosBoardCard from './components/KudosBoardCard'
import BoardDetails from './components/BoardDetails'
import Header from './components/Header'
import Footer from './components/Footer'

const API_URL = import.meta.env.VITE_API_URL;

function HomePage({ boards, categories, setShowModal, showModal, onCreateBoard, onDeleteBoard, loading }) {
  const navigate = useNavigate();
  // Form state for creating a board
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    author: ''
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCreateBoard({
      title: form.title,
      description: form.description,
      category: form.category,
      image: form.image,
      author: form.author,
      messages: []
    });
    setShowModal(false);
    setForm({ title: '', description: '', category: '', image: '', author: '' });
  };

  const handleSearch = () => {
    if (!search.trim()) {
      setSearchResults(null);
      return;
    }
    const results = boards.filter(
      b =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase()) ||
        (b.author && b.author.toLowerCase().includes(search.toLowerCase()))
    );
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearch('');
    setSearchResults(null);
  };

  // Filter boards based on selected category
  let filteredBoards = boards;
  if (selectedCategory === 'Recent') {
    filteredBoards = boards.slice(0, 5);
  } else if (selectedCategory !== 'All') {
    filteredBoards = boards.filter(b => b.category === selectedCategory);
  }

  const boardsToShow = searchResults !== null ? searchResults : filteredBoards;

  if (loading) return <div>Loading boards...</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="Search boards..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1.5px solid #ccc',
            fontSize: '1.1rem',
            outline: 'none',
            minWidth: '220px'
          }}
        />
        <button className="kudos-btn kudos-btn-outline" onClick={handleSearch}>Search</button>
        <button className="kudos-btn kudos-btn-outline" onClick={handleClearSearch}>Clear</button>
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`kudos-btn kudos-btn-outline${selectedCategory === cat ? ' kudos-btn-filled' : ''}`}
            style={{ textTransform: 'capitalize', fontWeight: 500 }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <button className="kudos-btn kudos-btn-filled" style={{ marginBottom: '32px', fontSize: '1.2rem', padding: '12px 32px' }} onClick={() => setShowModal(true)}>
        + Create New Board
      </button>
      {boardsToShow.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#444', fontSize: '1.4rem', marginTop: '40px' }}>
          <strong>No boards found.</strong>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {boardsToShow.map((board, idx) => (
            <KudosBoardCard
              key={idx}
              image={board.image}
              title={board.title}
              description={board.description}
              category={board.category}
              onViewBoard={() => navigate(`/board/${board.id}`)}
              onDelete={() => onDeleteBoard(boards.indexOf(board))}
            />
          ))}
        </div>
      )}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '32px 28px 24px 28px',
            minWidth: '340px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
            position: 'relative',
            maxWidth: '90vw'
          }}>
            <button onClick={() => setShowModal(false)} style={{
              position: 'absolute',
              top: 12,
              right: 16,
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#888'
            }}>&times;</button>
            <h2 style={{ marginBottom: 18, textAlign: 'center' }}>Create New Board</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleFormSubmit}>
              <input name="title" type="text" placeholder="Title" required style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem' }} value={form.title} onChange={handleFormChange} />
              <textarea name="description" placeholder="Description" required rows={3} style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem', resize: 'vertical' }} value={form.description} onChange={handleFormChange} />
              <select name="category" required style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem' }} value={form.category} onChange={handleFormChange}>
                <option value="">Select Category</option>
                <option value="Celebration">Celebration</option>
                <option value="Thank You">Thank You</option>
                <option value="Inspiration">Inspiration</option>
              </select>
              <input name="image" type="text" placeholder="Image Link" required style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem' }} value={form.image} onChange={handleFormChange} />
              <input name="author" type="text" placeholder="Author (optional)" style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem' }} value={form.author} onChange={handleFormChange} />
              <button className="kudos-btn kudos-btn-filled" type="submit" style={{ marginTop: '8px', fontSize: '1.1rem' }}>Create Board</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = [
    'All',
    'Recent',
    'Celebration',
    'Thank You',
    'Inspiration'
  ];
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/boards`)
      .then(res => res.json())
      .then(data => {
        setBoards(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching boards:', err);
        setLoading(false);
      });
  }, []);

  const handleCreateBoard = (newBoard) => {
    fetch(`${API_URL}/boards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBoard)
    })
      .then(res => res.json())
      .then(created => setBoards(prev => [created, ...prev]));
  };

  const handleDeleteBoard = (idx) => {
    const boardId = boards[idx].id;
    fetch(`${API_URL}/boards/${boardId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => setBoards(prev => prev.filter((_, i) => i !== idx)));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage boards={boards} categories={categories} setShowModal={setShowModal} showModal={showModal} onCreateBoard={handleCreateBoard} onDeleteBoard={handleDeleteBoard} loading={loading} />} />
        <Route path="/board/:boardId" element={<BoardDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
