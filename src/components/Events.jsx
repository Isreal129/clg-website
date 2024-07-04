import React, { useState, useEffect } from 'react';

const eventsList = [
  {
    id: 1,
    event: "Tech Fest 2024",
    description: "A grand event showcasing the latest in technology.",
    image: "clg-website/assets/tech_feast.jpg" // Adjust path as per your project structure
  },
  {
    id: 2,
    event: "Annual Sports Day",
    description: "A day filled with exciting sports activities.",
    image: "clg-website/assets/annual.png" // Adjust path as per your project structure
  },
  {
    id: 3,
    event: "Cultural Fest",
    description: "Celebrating diverse cultures with music and dance.",
    image: "clg-website/assets/cultural.jpg" // Adjust path as per your project structure
  },
  {
    id: 4,
    event: "Science Fair",
    description: "Showcasing innovative science projects by students.",
    image: "clg-website/assets/science.jpg" // Adjust path as per your project structure
  }
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsList.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-container">
      <div className="event-card">
        <img
          src={eventsList[currentEvent].image}
          alt={eventsList[currentEvent].event}
          className="event-image"
        />
        <div className="event-details">
          <h3 className="event-name">{eventsList[currentEvent].event}</h3>
          <p className="event-description">{eventsList[currentEvent].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;



