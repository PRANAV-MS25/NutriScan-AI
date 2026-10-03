import React, { useState, useEffect } from 'react';

export default function Community() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/comments')
      .then(res => res.json())
      .then(data => {
        if (data.comments) setComments(data.comments);
      })
      .catch(err => console.error("Error fetching comments:", err));
  }, []);

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newComment })
      });
      const data = await response.json();
      if (data.comments) {
        setComments(data.comments);
        setNewComment('');
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Community Comments</h2>
        
        <form onSubmit={handlePostComment} className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts or feedback..."
            className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700"
            rows="3"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-xl shadow transition"
          >
            {loading ? 'Posting...' : 'Post Comment'}
          </button>
        </form>

        <div className="mt-6 space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-800">{c.text}</p>
              <span className="text-[10px] text-slate-400 font-semibold">— {c.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}