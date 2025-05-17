import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import KudosMessageCard from './KudosMessageCard';

const API_URL = import.meta.env.VITE_API_URL;

const BoardDetails = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardForm, setCardForm] = useState({
    title: '',
    message: '',
    image: '',
    upvotes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchBoard = () => {
    setLoading(true);
    fetch(`${API_URL}/boards/${boardId}`)
      .then(res => {
        if (!res.ok) throw new Error('Board not found');
        return res.json();
      })
      .then(data => {
        setBoard(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBoard();
    // eslint-disable-next-line
  }, [boardId]);

  const handleCardFormChange = (e) => {
    const { name, value } = e.target;
    setCardForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    fetch(`${API_URL}/boards/${boardId}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...cardForm,
        upvotes: cardForm.upvotes ? parseInt(cardForm.upvotes) : 0
      })
    })
      .then(res => res.json())
      .then(() => {
        setShowCardModal(false);
        setCardForm({ title: '', message: '', image: '', upvotes: '' });
        fetchBoard();
      })
      .catch(err => alert('Failed to create card: ' + err.message))
      .finally(() => setSubmitting(false));
  };

  const handleUpvote = (msg) => {
    fetch(`${API_URL}/boards/${boardId}/messages/${msg.id}/upvotes`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ upvotes: (msg.upvotes || 0) + 1 })
    })
      .then(res => res.json())
      .then(() => fetchBoard());
  };

  const handleDownvote = (msg) => {
    fetch(`${API_URL}/boards/${boardId}/messages/${msg.id}/upvotes`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ upvotes: Math.max((msg.upvotes || 0) - 1, 0) })
    })
      .then(res => res.json())
      .then(() => fetchBoard());
  };

  const handleDeleteCard = (msg) => {
    fetch(`${API_URL}/boards/${boardId}/messages/${msg.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => fetchBoard());
  };

  if (loading) return <div>Loading board...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!board) return <div>Board not found.</div>;

  return (
    <div style={{ padding: '40px', maxWidth: 800, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 24px',
            borderRadius: '8px',
            border: 'none',
            background: '#33807a',
            color: '#fff',
            fontSize: '1.1rem',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          ← Back to Home
        </button>
        <button
          onClick={() => setShowCardModal(true)}
          style={{
            padding: '10px 24px',
            borderRadius: '8px',
            border: 'none',
            background: '#6d5c7c',
            color: '#fff',
            fontSize: '1.1rem',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          + Create Card
        </button>
      </div>
      <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: 8 }}>{board.title}</h2>
      <div style={{ textAlign: 'center', fontSize: '1.3rem', marginBottom: 8 }}>{board.description}</div>
      {board.author && (
        <div style={{ 
          textAlign: 'center', 
          fontSize: '1.1rem', 
          color: '#33807a', 
          fontStyle: 'italic',
          marginBottom: 32 
        }}>
          Created by {board.author}
        </div>
      )}
      {board.messages && board.messages.length > 0 ? (
        board.messages.map((msg, idx) => (
          <KudosMessageCard
            key={msg.id || idx}
            {...msg}
            onUpvote={() => handleUpvote(msg)}
            onDownvote={() => handleDownvote(msg)}
            onDelete={() => handleDeleteCard(msg)}
          />
        ))
      ) : (
        <div style={{ textAlign: 'center', color: '#888', fontSize: '1.2rem' }}>No messages yet.</div>
      )}
      {showCardModal && (
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
            <button onClick={() => setShowCardModal(false)} style={{
              position: 'absolute',
              top: 12,
              right: 16,
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#888'
            }}>&times;</button>
            <h2 style={{ marginBottom: 18, textAlign: 'center' }}>Create New Card</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleCardFormSubmit}>
              <input name="title" type="text" placeholder="Title" required style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem' }} value={cardForm.title} onChange={handleCardFormChange} />
              <textarea name="message" placeholder="Message" required rows={3} style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem', resize: 'vertical' }} value={cardForm.message} onChange={handleCardFormChange} />
              <input name="image" type="text" placeholder="Image Link" required style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem' }} value={cardForm.image} onChange={handleCardFormChange} />
              <input name="upvotes" type="number" placeholder="Upvotes (optional)" style={{ padding: '10px', borderRadius: '7px', border: '1.5px solid #ccc', fontSize: '1.1rem' }} value={cardForm.upvotes} onChange={handleCardFormChange} />
              <button className="kudos-btn kudos-btn-filled" type="submit" style={{ marginTop: '8px', fontSize: '1.1rem' }} disabled={submitting}>{submitting ? 'Creating...' : 'Create Card'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardDetails; 