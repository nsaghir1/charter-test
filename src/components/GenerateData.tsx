import { useState } from "react";

interface IProps {
  onGenerate: (data: IGeneratedData[]) => void;
}

interface IGeneratedData {
  name: string;
  amount: number;
  month: string;
}

const customers = ['Fred', 'Bob', 'Smith', 'Will', 'Steve']
const months = ['Jan', 'Feb', 'Mar'];

function GenerateData({ onGenerate }: IProps) {
  const [data, setData] = useState<IGeneratedData[]>([]);

  const generateData = (transactionCount: number) => {
    const data: IGeneratedData[] = [];

    for (let i = 0; i <= transactionCount; i++) {
      const randomCustomer = customers[Math.floor((Math.random() * customers.length))]
      data.push({
        name: randomCustomer,
        amount: Math.floor(Math.random() * 200),
        month: months[Math.floor((Math.random() * months.length))],
      })
    }
    setData(data);
    onGenerate(data);
  }

  return (
    <>
      <textarea className="generate-data-textarea" value={JSON.stringify(data)} readOnly></textarea>
      <button onClick={() => generateData(100)}>Generate Data and Process</button>
    </>
  );
}

export default GenerateData;
