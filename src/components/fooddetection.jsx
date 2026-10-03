import React, { useState, useRef } from 'react';

export default function FoodDetection() {
  const [selectedImage, setSelectedImage] = useState('pasta.jpg');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const datasetImages = [
    { name: 'Pasta', file: 'pasta.jpg' },
    { name: 'Burger', file: 'burger.jpg' },
    { name: 'Pizza', file: 'pizza.jpg' },
    { name: 'Paneer', file: 'paneer.jpg' },
    { name: 'Butter Chicken', file: 'butterchicken.jpg' },
    { name: 'Dosa', file: 'dosa.jpg' }
  ];

  // Handle file upload from system
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file.name);
    }
  };

  // Start Camera Stream
  const startCamera = async () => {
    setCameraActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied or unavailable:", err);
      alert("Could not access camera.");
      setCameraActive(false);
    }
  };

  // Capture Photo from Camera
  const capturePhoto = () => {
    const video = videoRef.current;
    if (video) {
      // Stop the video stream tracks
      const stream = video.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      setCameraActive(false);
      setSelectedImage('captured_meal.jpg');
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/analyze-meal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          image: selectedImage, 
          weight: 70, 
          height: 175, 
          age: 22 
        })
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      {/* Hidden file input for system uploads */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Capture or Upload Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Capture or Upload Food Image</h2>
        <p className="text-slate-500 text-sm mb-6">Click below or select from your processed image library to analyze your food.</p>
        
        {/* Camera Live Stream View (if active) */}
        {cameraActive && (
          <div className="mb-6 space-y-4">
            <video ref={videoRef} autoPlay playsInline className="w-full max-w-md mx-auto rounded-2xl border shadow-lg" />
            <button 
              onClick={capturePhoto}
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-xl shadow"
            >
              📸 Snap Photo
            </button>
          </div>
        )}

        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={startCamera}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
          >
            📷 Use Camera
          </button>
          <button 
            onClick={() => fileInputRef.current.click()}
            className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
          >
            📁 Upload from System
          </button>
        </div>

        {/* Processed Images Grid Input Selection */}
        <div className="text-left bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Or Pick from Processed Dataset Images</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {datasetImages.map((img) => (
              <div 
                key={img.file}
                onClick={() => setSelectedImage(img.file)}
                className={`p-3 rounded-xl border text-center cursor-pointer transition ${
                  selectedImage === img.file ? 'border-sky-600 bg-sky-50 font-bold text-sky-900' : 'border-slate-200 bg-white text-slate-700'
                }`}
              >
                <p className="text-sm">{img.name}</p>
                <span className="text-[10px] text-slate-400 font-mono">{img.file}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full mt-6 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 rounded-xl shadow transition"
          >
            {loading ? 'Analyzing Processed Image...' : `✨ Run AI Recognition on ${selectedImage}`}
          </button>
        </div>
      </div>

      {/* Analysis Result */}
      {result && (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Detection Results</h3>
          <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100">
            <h4 className="text-lg font-extrabold text-sky-900">{result.scanned_meal.food_name}</h4>
            <p className="text-sm text-sky-700 mt-1">Calories: {result.scanned_meal.calories} kcal | Protein: {result.scanned_meal.protein}g | Carbs: {result.scanned_meal.carbs}g | Fat: {result.scanned_meal.fat}g</p>
          </div>
        </div>
      )}
    </div>
  );
}