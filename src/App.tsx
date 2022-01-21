import React, { useState } from 'react';
import './App.css';
import GenerateData from './components/GenerateData';
import PointsData from './components/PointsData';
interface IGeneratedData {
  name: string;
  amount: number;
  month: string;
}

function App() {
  const [data, setData] = useState<IGeneratedData[]>([]);

  return (
    <div className="App">
      <GenerateData onGenerate={setData} />
      {data.length > 0 && <PointsData generatedData={data} />}
    </div>
  );
}

export default App;
