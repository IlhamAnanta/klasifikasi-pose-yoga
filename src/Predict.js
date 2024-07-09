import React, { useState } from 'react';

const Prediction = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('');
  const [confidence, setConfidence] = useState('');
  const [hasil, setHasil] = useState('');
  const [details, setDetails] = useState({});

  const predictionDetails = {
    Downdog: {
      technique: 'Pose yoga di mana tangan dan kaki menyentuh lantai, membentuk segitiga dengan tubuh. Gerakan ini meregangkan punggung, bahu, dan kaki, serta memperkuat lengan dan kaki.',
      benefits: 'Meregangkan seluruh tubuh, meningkatkan sirkulasi darah, memperkuat otot inti dan punggung, meredakan stres, dan meningkatkan fleksibilitas.',
    },
    Goddess: {
      technique: 'Pose yoga di mana kaki dibuka lebar, lutut ditekuk, dan lengan diangkat sejajar dengan bahu. Gerakan ini memperkuat paha, pinggul, dan bokong, serta membuka dada dan bahu.',
      benefits: 'Memperkuat otot paha dan bokong, meningkatkan fleksibilitas pinggul, memperbaiki postur tubuh, meningkatkan kestabilan dan keseimbangan, serta membantu dalam melatih fokus.',
    },
    Plank: {
      technique: 'Teknik Plank meliputi plank dasar (posisi lurus, bertumpu pada siku dan jari kaki), side plank (posisi miring, bertumpu pada siku dan sisi kaki), dan reverse plank (posisi lurus, bertumpu pada tangan dan tumit). Variasi termasuk mengangkat kaki/tangan atau ketukan bahu.',
      benefits: 'Memperkuat otot inti, meningkatkan keseimbangan dan stabilitas, mengurangi risiko cedera punggung, serta memperbaiki postur tubuh.',
    },
    Tree: {
      technique: 'Pose yoga di mana satu kaki ditopang, sementara kaki lainnya ditekuk dan ditempatkan di bagian dalam paha atau betis. Gerakan ini meningkatkan keseimbangan, memperkuat kaki, dan membuka pinggul.',
      benefits: 'Meningkatkan keseimbangan dan kestabilan, memperkuat otot kaki dan pergelangan kaki, membuka pinggul, meningkatkan fokus dan konsentrasi, serta membantu dalam meredakan stres.',
    },
    Warrior2: {
      technique: 'Pose yoga di mana kaki dibuka lebar dengan lutut ditekuk pada posisi 90 derajat, sambil tangan diangkat sejajar dengan bahu. Gerakan ini menguatkan kaki, membuka pinggul, dan meningkatkan kestabilan serta keseimbangan tubuh.',
      benefits: 'Memperkuat otot kaki dan pergelangan kaki, meningkatkan fleksibilitas pinggul, memperbaiki postur tubuh, meningkatkan daya tahan, dan membantu dalam melatih fokus serta konsentrasi.',
    },
    'Tidak Terdeteksi': {
      technique: 'Teknik tidak terdeteksi.',
      benefits: 'Tidak ada manfaat yang terdeteksi.',
    },
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (typeof onFileChange === 'function') {
      onFileChange(file);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    const apiUrl = 'https://6c9b-34-124-157-245.ngrok-free.app/predict';

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        setStatus('<div style="text-align:left;">File berhasil diproses!</div>');
      } else {
        setStatus('<div style="text-align:left;">File gagal diproses!</div>');
      }

      setConfidence(json.confidence);
      let hasilLabel;
      switch (json.label) {
        case 0:
          hasilLabel = 'Downdog';
          break;
        case 1:
          hasilLabel = 'Goddess';
          break;
        case 2:
          hasilLabel = 'Plank';
          break;
        case 3:
          hasilLabel = 'Tree';
          break;
        case 4:
          hasilLabel = 'Warrior2';
          break;
        default:
          hasilLabel = 'Tidak Terdeteksi';
      }
      setHasil(hasilLabel);
      setDetails(predictionDetails[hasilLabel]);
    } catch (error) {
      console.error('Error:', error);
      setStatus('<div style="text-align:left;">File gagal diproses!</div>');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-lg font-bold mb-6">Silahkan Upload File Untuk Proses Data</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-white font-semibold mb-4">Upload Disini!</h3>
        <label className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer inline-flex items-center">
          <input
            id="file"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          Pilih File
        </label>
        <span className="ml-3 text-gray-400">{selectedFile ? selectedFile.name : 'Tidak ada File'}</span>
        {selectedFile && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '200px' }}
            />
          </div>
        )}
        <button
          className="bg-white hover:bg-white text-black font-bold py-2 px-4 rounded mt-4"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Unggah dan Prediksi
        </button>
      </div>
      {status && (
        <div className="mt-4 text-center bg-white p-6 rounded-lg shadow-lg" style={{ width: '600px', height: '400px', backgroundColor: '#3B4443' }}>
          <p className="text-white" dangerouslySetInnerHTML={{ __html: status }} />
          <h3 className="text-2xl font-bold mt-4 text-white">{hasil}</h3>
          <div className="text-left mt-4 text-white">
            <h4 className="text-lg font-bold">Teknik {hasil}</h4>
            <p>{details.technique}</p>
            <h4 className="text-lg font-bold mt-4">Manfaat {hasil}</h4>
            <p>{details.benefits}</p>
            <h4 className="text-lg font-bold mt-4">Confidence</h4>
            <p>{confidence}%</p> {/* Displaying confidence */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Prediction;
