import { useEffect, useState } from 'react';

export default function Saved() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/saved")
      .then(res => res.json())
      .then(data => setSavedData(data));
  }, []);

  return (
    <div>
      <h3>Saved Weather Reports</h3>
      <ul>
        {savedData.map((item, idx) => (
          <li key={idx}>
            {item.city}: {item.temp}°C, {item.weather}
          </li>
        ))}
      </ul>
    </div>
  );
}
