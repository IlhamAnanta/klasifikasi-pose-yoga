import React from 'react';

const benefits = [
  { title: 'Meningkatkan Fleksibilitas Tubuh', imgSrc: 'Fleksibilitas.jpg' },
  { title: 'Meningkatkan Kekuatan Otot', imgSrc: 'KekuatanOtot.jpg' },
  { title: 'Meningkatkan Kesehatan Jantung', imgSrc: 'KesehatanJantung.jpg' },
  { title: 'Mengurangi Stres dan Kecemasan', imgSrc: 'Stres.jpg' },
  { title: 'Meningkatkan Kualitas Tidur', imgSrc: 'KualitasTidur.jpg' },
  { title: 'Meningkatkan Kesadaran Diri', imgSrc: 'KesadaranDiri.jpg' },
];

const YogaBenefits = () => {
  return (
    <div id="manfaat" className="min-h-screen container mx-auto px-10 pt-32 pb-20" style={{ backgroundColor: '#3B4443', fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="text-4xl font-bold text-center mb-20" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>Manfaat yoga bagi kesehatan fisik dan mental</h2>
      <div className="overflow-x-auto pl-8 pt-8">
        <div className="flex flex-nowrap gap-6" style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', maxWidth: '100vw', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {benefits.map((benefit, index) => (
            <div key={index} className="relative flex-none w-64 h-80 overflow-hidden rounded-lg shadow-xl">
              <img src={benefit.imgSrc} alt={benefit.title} className="w-full h-46 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4">
                <h3 className="text-lg font-regular" style={{ fontFamily: 'Poppins, sans-serif' }}>{benefit.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaBenefits;
