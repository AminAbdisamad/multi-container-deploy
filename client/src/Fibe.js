import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Feb = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');
  const [error, setError] = useState('');

  const fetchIndexes = async () => {
    const response = await axios.get('/api/values/all');
    setSeenIndexes(response.data);
  };

  const fetchValues = async () => {
    const response = await axios.get('/api/values/current');
    setValues(response.data);
  };
  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!index) {
      return setError('Please set value');
    }
    console.log(index);
    await axios.post('/api/values', {
      index: index,
    });
    setIndex('');
  };
  const seenIndexesRenderer = () => {
    return seenIndexes.map(({ number }) => number).join(', ');
  };

  const renderValues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>
          for index {key} I have calculated {values[key]}
        </div>
      );
    }
    return entries;
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input value={index} onChange={(e) => setIndex(e.target.value)} />
        {error}
        <button>Submit</button>
      </form>

      <h3>I have seen these values:</h3>
      {seenIndexesRenderer()}
      <h3>Calculated values:</h3>
      {renderValues()}
    </div>
  );
};

export default Feb;
