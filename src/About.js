import React from 'react';

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Tentang Kami</h1>
      <div className="bg-white rounded-lg p-6 flex shadow-lg">
        <img src="ImageLeft.png" alt="Yoga" className="rounded-lg max-w-xs" />
        <div className="ml-6 flex flex-col justify-center">
          <p className="text-gray-700 text-base mb-4">
          Yoga adalah salah satu aktivitas fisik yang penting untuk <br/> 
          menjaga kesehatan dan keseimbangan tubuh serta pikiran. <br/>
          Saat ini, yoga menjadi semakin populer di masyarakat dengan <br/> 
          berbagai jenis seperti Downdog, Goddes, Plank Tree dan <br/>
          Warior 2, dimana Setiap jenis yoga memiliki karakteristik dan <br/>
          manfaat yang berbeda-beda, sehingga seringkali sulit bagi pemula <br/>
          untuk memilih jenis yang tepat. Di Yogaes, kami hadir <br/>
          untuk membantu Anda mengenal dan memilih jenis yoga <br/>
          yang sesuai dengan kebutuhan Anda. Dengan panduan dari <br/>
          instruktur berpengalaman, Anda dapat menikmati berbagai <br/>
          manfaat yoga dengan mudah dan nyaman.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
