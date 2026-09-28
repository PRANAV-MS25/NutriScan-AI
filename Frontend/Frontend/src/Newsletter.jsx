import { useState, useEffect } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulated local success message
        if (email.trim()) {
            setMessage('Joined!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email.');
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000); // Show message for 2 seconds
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="w-full max-w-xl mx-auto bg-[#131926] border border-gray-800 rounded-2xl p-6 text-center space-y-4 my-8 shadow-xl">
            <h2 className="text-xl font-bold text-white tracking-wide">Join Our Nutrition Program</h2>
            <form className="flex flex-col sm:flex-row gap-3 justify-center items-center" onSubmit={handleSubmit}>
                <input
                    type='email'
                    className="w-full sm:w-80 bg-[#0b0f17] border border-gray-700 text-white px-4 py-2.5 rounded-xl focus:border-emerald-500 outline-none text-sm transition-colors"
                    placeholder='Enter your email address'
                    required
                    value={email}
                    onChange={handleChange}
                />
                <button 
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition text-sm cursor-pointer whitespace-nowrap" 
                    type='submit'
                >
                    Join
                </button>
            </form>
            {message && (
                <p className={`text-sm font-medium ${message === 'Joined!' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}

export default Newsletter;