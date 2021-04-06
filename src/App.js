import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

// tours url
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // remove tour function
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  // fetch tours api
  const getTours = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      // switch isLoading to false before getting tours
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    getTours();
  }, []);

  // loading
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // tours
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
