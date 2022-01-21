interface IGeneratedData {
  name: string;
  amount: number;
  month: string;
}

interface IProps {
  generatedData: IGeneratedData[];
}

function PointsData({ generatedData }: IProps) {
  const monthOutputOrder = ['Jan', 'Feb', 'Mar']; // used for this code example, timestamps would be easier to sort dynamically.
  const sortedData: Record<string, Record<string, number>> = {};

  //calculate points
  const data = generatedData.map((data) => {
    let points = 0;
    const fiftySpentRewardPoints = data.amount - 50;
    if (fiftySpentRewardPoints > 0) points = points + 50;

    const hundredSpentRewardPoints = data.amount - 100;
    if (hundredSpentRewardPoints > 0) points = points + (2 * hundredSpentRewardPoints);

    return { ...data, points }
  });

  //sort data
  data.map((transaction) => {
    if (!sortedData[transaction.name]) sortedData[transaction.name] = {};
    if (!sortedData[transaction.name][transaction.month]) return sortedData[transaction.name][transaction.month] = transaction.points;
    sortedData[transaction.name][transaction.month] = sortedData[transaction.name][transaction.month] + transaction.points;
  })

  return (
    <div className="output-container">
      <h3>Caluclated Output</h3>
      {Object.keys(sortedData).map((name) => {
        const data = sortedData[name];
        const months = monthOutputOrder;
        let totalPoints = 0;
        return <div key={name} className="customer-result">
          <b>{name}: </b>
          {months.map((month) => {
            const points = data[month];
            totalPoints = totalPoints + points
            return <span key={month}>{month}:  {points}, </span>;

          })}
          <span>Total: {totalPoints}</span>
        </div>
      })
      }
    </div>
  );
}

export default PointsData;
