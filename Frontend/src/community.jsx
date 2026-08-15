import React, { useState } from 'react';

const Community = () => {
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([
    { author: 'Sarah K.', text: 'Just completed my 2000 kcal goal for today with Foodie AI!', time: '2 hours ago' },
    { author: 'Rahul M.', text: 'The food scanner correctly recognized my Paneer Butter Masala macros!', time: '5 hours ago' },
  ]);

  const handlePost = () => {
    if (!comment.trim()) return;
    setPosts([{ author: 'You', text: comment, time: 'Just now' }, ...posts]);
    setComment('');
  };

  return (
    <div className="w-full space-y-6">
      {/* Input Box */}
      <div className="bg-[#181f2e] border border-gray-800 rounded-xl p-4 space-y-3">
        <textarea
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts, progress, or recipe tips..."
          className="w-full bg-[#0b0f17] border border-gray-700 text-white p-3 rounded-lg focus:border-emerald-500 outline-none text-sm resize-none"
        />
        <div className="flex justify-end">
          <button
            onClick={handlePost}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition text-sm"
          >
            Post Update
          </button>
        </div>
      </div>

      {/* Community Feed */}
      <div className="space-y-3">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-[#181f2e] border border-gray-800 rounded-xl p-4 space-y-1">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span className="font-semibold text-emerald-400">{post.author}</span>
              <span>{post.time}</span>
            </div>
            <p className="text-sm text-gray-200">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;