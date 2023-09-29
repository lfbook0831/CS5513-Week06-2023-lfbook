import { db } from "../firebase";
import { useState } from 'react';

function HomePage() {
  const [cats, setCats] = useState([]);
  const [showCats, setShowCats] = useState(false);

  const handleCurrentPatientClick = async () => {
    const response = await fetch('/cat.json');
    const data = await response.json();
    setCats(data.cats);
    setShowCats(true);
  };

  return (
    <div style={{ fontFamily: 'Nanum Pen Script', backgroundColor: 'lavender', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <header style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '1.5em' }}>
        Whisker Wonders Cat Clinic
      </header>
      
      <button onClick={handleCurrentPatientClick} style={{
        fontFamily: 'Nanum Pen Script', 
        fontSize: '1.5em', 
        padding: '15px 30px', 
        margin: '10px', 
        border: 'none', 
        cursor: 'pointer', 
        transition: 'background-color 0.3s',
        borderRadius: '50%',      
        backgroundColor: 'orange'    
      }}>
        Current Patient
      </button>

      <button style={{
        fontFamily: 'Nanum Pen Script', 
        fontSize: '1.5em', 
        padding: '15px 30px', 
        margin: '10px', 
        border: 'none', 
        cursor: 'pointer', 
        transition: 'background-color 0.3s',
        borderRadius: '50%',       
        backgroundColor: 'orange'  
      }}>
        New Patient
      </button>

      {showCats && (
        <div>
          {cats.map((cat, index) => (
            <div key={index}>
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default HomePage;
