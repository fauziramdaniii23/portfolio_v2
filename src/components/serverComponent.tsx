import { useState, useRef, useEffect } from "react";

export default function Calculator() {
  const [number, setNumber] = useState(1);
  const resultRef = useRef(1);

  useEffect(() => {
    console.log("📊 Hasil kalkulasi (ref):", resultRef.current);
  }, []);

  const calculate = () => {
    // kalkulasi berat tapi tidak perlu render ulang
    resultRef.current = number * 2;
    console.log("📊 Hasil kalkulasi (ref):", resultRef.current);
  };

  const calculatestate = () => {
    // kalkulasi berat tapi tidak perlu render ulang
    setNumber(number * resultRef.current);
    console.log("📊 Hasil kalkulasi (ref):", resultRef.current);
  };

  return (
    <div>
      <p>Angka: {number}</p>
      <p>Hasil (ref): {resultRef.current}</p>

      <button onClick={() => setNumber(number + 1)}>Ubah Angka</button>
      <button onClick={calculate}>Hitung</button>
      <button onClick={calculatestate}>Hitung State</button>
    </div>
  );
}
