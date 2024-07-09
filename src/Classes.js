import React from 'react';

const classes = [
  { name: 'Downdog', image: 'Downdog.jpg', description: 'pose yoga di mana tangan dan kaki menyentuh lantai, membentuk segitiga dengan tubuh. Gerakan ini meregangkan punggung, bahu, dan kaki, serta memperkuat lengan dan kaki.' },
  { name: 'Goddess', image: 'Goddess.jpg', description: 'pose yoga di mana kaki dibuka lebar, lutut ditekuk, dan lengan diangkat sejajar dengan bahu. Gerakan ini memperkuat paha, pinggul, dan bokong, serta membuka dada dan bahu.' },
  { name: 'Plank', image: 'Plank.jpg', description: 'pose yoga di mana tubuh ditopang oleh tangan dan kaki dalam posisi lurus seperti papan. Gerakan ini memperkuat inti, lengan, dan bahu, serta meningkatkan stabilitas dan keseimbangan tubuh.' },
  { name: 'Tree', image: 'Tree.jpg', description: 'pose yoga di mana satu kaki ditopang, sementara kaki lainnya ditekuk dan ditempatkan di bagian dalam paha atau betis. Gerakan ini meningkatkan keseimbangan, memperkuat kaki, dan membuka pinggul.' },
  { name: 'Warrior2', image: 'Warrior2.jpg', description: 'pose yoga di mana kaki dibuka lebar dengan lutut ditekuk pada posisi 90 derajat, sambil tangan diangkat sejajar dengan bahu. Gerakan ini menguatkan kaki, membuka pinggul, dan meningkatkan kestabilan serta keseimbangan tubuh.' },
  { name: 'Downdog', image: 'Downdog.jpg', description: 'pose yoga di mana tangan dan kaki menyentuh lantai, membentuk segitiga dengan tubuh. Gerakan ini meregangkan punggung, bahu, dan kaki, serta memperkuat lengan dan kaki.' },
  { name: 'Goddess', image: 'Goddess.jpg', description: 'pose yoga di mana kaki dibuka lebar, lutut ditekuk, dan lengan diangkat sejajar dengan bahu. Gerakan ini memperkuat paha, pinggul, dan bokong, serta membuka dada dan bahu.' },
  { name: 'Plank', image: 'Plank.jpg', description: 'pose yoga di mana tubuh ditopang oleh tangan dan kaki dalam posisi lurus seperti papan. Gerakan ini memperkuat inti, lengan, dan bahu, serta meningkatkan stabilitas dan keseimbangan tubuh.' },
  { name: 'Tree', image: 'Tree.jpg', description: 'pose yoga di mana satu kaki ditopang, sementara kaki lainnya ditekuk dan ditempatkan di bagian dalam paha atau betis. Gerakan ini meningkatkan keseimbangan, memperkuat kaki, dan membuka pinggul.' },
  { name: 'Warrior2', image: 'Warrior2.jpg', description: 'pose yoga di mana kaki dibuka lebar dengan lutut ditekuk pada posisi 90 derajat, sambil tangan diangkat sejajar dengan bahu. Gerakan ini menguatkan kaki, membuka pinggul, dan meningkatkan kestabilan serta keseimbangan tubuh.' },
];

function Classes() {
  return (
    <div id="klasifikasi" className="min-h-screen bg-gray-200 flex flex-col items-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Klasifikasi jenis Yoga</h1>
        <div className="overflow-x-auto pl-8 pt-14">
          <div className="flex flex-no-wrap gap-4 md:gap-8" style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', maxWidth: 'calc(100vw - 2rem)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {classes.map((yogaClass, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex-none w-56 md:w-64">
                <img src={yogaClass.image} alt={yogaClass.name} className="w-full h-40 md:h-48 object-cover"/>
                <div className="p-4">
                  <h2 className="text-lg md:text-xl font-semibold text-center">{yogaClass.name}</h2>
                  <p className="text-sm text-gray-600 mt-2">{yogaClass.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
