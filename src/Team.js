import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Mohd Ilham Ananta',
      id: '2257301083',
      image: 'Ilham.png'
    },
    {
      name: 'Adella Tri Muhariani AE',
      id: '2257301004',
      image: 'Adell.jpg'
    },
  ];

  const backgroundStyle = {
    backgroundImage: 'url(' + process.env.PUBLIC_URL + '/bgteam.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '20px'
  };

  const contentStyle = {
    marginTop: '100px' // Adjust the value as needed
  };

  return (
    <div style={backgroundStyle} className="flex flex-col items-center">
      <div style={contentStyle} className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-20 text-white">Anggota Kelompok</h1>
        <div className="flex space-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#FFFFFF] p-6 rounded-lg shadow-xl text-center max-w-xs">
              <img src={process.env.PUBLIC_URL + '/' + member.image} alt={member.name} className="w-48 h-48 rounded-lg mx-auto mb-4 object-cover" />
              <h2 className="text-xl font-medium">{member.name}</h2>
              <p className="text-gray-600">{member.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
