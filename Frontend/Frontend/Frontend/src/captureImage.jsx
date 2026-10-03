import React, { useState } from 'react';

const CaptureImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-[#181f2e] border border-gray-800 rounded-2xl">
      <div className="w-full max-w-xl border-2 border-dashed border-gray-700 hover:border-emerald-500 rounded-xl p-8 text-center transition-colors bg-[#0b0f17]">
        {selectedImage ? (
          <div className="space-y-4">
            <img src={selectedImage} alt="Food Upload" className="max-h-64 mx-auto rounded-lg shadow-md object-cover" />
            <button
              onClick={() => setSelectedImage(null)}
              className="bg-red-500/20 text-red-400 border border-red-500/40 px-4 py-1.5 rounded-lg text-sm hover:bg-red-500/30"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-5xl text-emerald-400">📷</div>
            <div>
              <p className="text-base font-semibold text-white">Upload or Snap a Food Photo</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, or JPEG up to 10MB</p>
            </div>
            <label className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-6 py-2.5 rounded-lg cursor-pointer hover:opacity-90 transition text-sm">
              Select Image
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaptureImage;