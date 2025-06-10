import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';

function App() {
  const [summary, setSummary] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSuggest = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/suggest', {
        section: 'summary',
        content: summary,
      });
      setSuggestion(response.data.suggestion);
    } catch (error) {
      setSuggestion('Error fetching suggestion. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
        <textarea
          placeholder="Write your summary here..."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows="6"
          style={{ width: '100%', padding: '10px', fontSize: '1rem' }}
        />
        <br />
        <button
          onClick={handleSuggest}
          style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
        >
          {loading ? 'Loading...' : 'Get AI Suggestion'}
        </button>
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f9f9f9', borderRadius: '5px' }}>
          <strong>Suggestion:</strong>
          <p>{suggestion}</p>
        </div>
      </main>
    </div>
  );
}

export default App;

