import { GlobalHook } from "./store";
import { ErthCard } from "./EarthCard";
import { Filter } from "./Filter";
import '../Q9/er.css';

export const EarData = () => {
  const { loading, userData } = GlobalHook();
console.log('hi');

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Recipie counter table</h1>
      <Filter />
      <div className="container mt-4">
        <div className="row">
          {userData.map((curData) => (
            <ErthCard key={curData.id} curData={curData} />
          ))}
        </div>
      </div>
    </>
  );
};