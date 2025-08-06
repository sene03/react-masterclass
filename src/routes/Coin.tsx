import { useParams } from "react-router-dom";

interface CoinParams extends Record<string, string> {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<CoinParams>();

  return (
    <div>
      <h1>Coin Details {coinId}</h1>
      <p>Details about the selected coin will be displayed here.</p>
    </div>
  );
}

export default Coin;
