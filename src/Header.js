import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Header = () => {
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
    <header className="bg-[#3B4443] fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50">
      <div className="flex items-center space-x-2">
        <img src="Yogaes.png" alt="Great Fitness Logo" className="h-8" />
      </div>
      <nav className="space-x-4 flex items-center">
        <Link to="home" smooth={true} duration={500} className="relative text-white font-bold ml-4 group cursor-pointer" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
          Beranda
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="about" smooth={true} duration={500} className="relative text-white font-bold ml-4 group cursor-pointer" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
          Tentang Kami
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="classes" smooth={true} duration={500} className="relative text-white font-bold ml-4 group cursor-pointer" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
          Klasifikasi
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="manfaat" smooth={true} duration={500} className="relative text-white font-bold ml-4 group cursor-pointer" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
          Manfaat
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="matakuliah" smooth={true} duration={500} className="relative text-white font-bold ml-4 group cursor-pointer" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
          Dosen Pengampu
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="team" smooth={true} duration={500} className="relative text-white font-bold ml-4 group cursor-pointer" style={{ fontFamily: 'Poppins', fontSize: '16px' }}>
          Biodata
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </nav>
      <button onClick={handlePredictClick} className="bg-[#FFFFFF] text-black px-3 py-1 rounded hover:bg-green-800 transition duration-300">Mulai Prediksi</button>
    </header>
  );
};

export default Header;
