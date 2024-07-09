import React from 'react';

const MataKuliah = () => {
  const dosen = [
    {
      name: 'Muhammad Mahrus Zain, S.ST., M.T.I.',
      role: 'Dosen Framework Lanjutan',
      image: 'PakMahruz.png'
    },
    {
      name: 'Mardhiah Fadli, S.T., M.T.',
      role: 'Dosen Manajemen Proyek',
      image: 'BukMar.png'
    },
    {
      name: 'Dini Nurmalasari, S.T., M.T',
      role: 'Dosen Data Mining',
      image: 'BukDini.png'
    },
  ];

  const DosenCard = ({ name, title, role, image }) => (
    <div className="bg-[#3B4443] text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img src={process.env.PUBLIC_URL + '/' + image} alt={name} className="w-full h-85 object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-300">{title}</p>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center py-20">
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-20">Dosen Pengampu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dosen.map((d, index) => (
            <DosenCard
              key={index}
              name={d.name}
              title={d.title}
              role={d.role}
              image={d.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MataKuliah;
