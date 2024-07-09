import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate('/predict');
    setTimeout(() => {
      const predictSection = document.getElementById('predict');
      if (predictSection) {
        predictSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Waktu tunggu agar navigasi selesai
  };

  return (
    <div className="relative">
      <img src="background.png" alt="Yoga Pose" className="w-full h-screen object-cover"/>
      <div className="absolute inset-0 flex flex-col items-start justify-center px-16 font-body"> {/* Added font-body class */}
      <div className="text-white text-1x font-semibold">
          <h1 className="text-[#495057] text-1x font-bold">SELAMAT DATANG</h1>
        </div>
        <h1 className="text-5xl font-bold text-[#495057] mb-4">SISTEM KLASIFIKASI <br /> JENIS POSE YOGA</h1>
        <p className="text-[#495057] mb-6 max-w-xl font-regular">
          Tempat ideal bagi para penggemar yoga dan kebugaran <br />
          Ayo, Temukan minat yoga mu!
        </p>
        <div className="space-x-4">
          <button onClick={handlePredictClick} className="bg-[#3B4443] text-white px-6 py-3 rounded hover:bg-green-800 font-body">Mulai Prediksi</button> {/* Added onClick handler */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
