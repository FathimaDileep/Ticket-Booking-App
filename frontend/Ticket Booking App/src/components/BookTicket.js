import React, { useState } from 'react';
import axios from 'axios';

const BookTicket = ({ movieId, availableSeats }) => {
  const [seats, setSeats] = useState(1);

  const bookTicketHandler = async () => {
    const response = await axios.post(`/api/movies/${movieId}/book`, { seats });
    if (response.data.success) {
      alert(`Ticket booked successfully! Seat number: ${response.data.seatNumber}`);
    }
  };

  return (
    <div className="book-ticket">
      <h3>Available Seats: {availableSeats}</h3>
      <select value={seats} onChange={(e) => setSeats(e.target.value)}>
        {[...Array(availableSeats)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button onClick={bookTicketHandler}>Confirm Booking</button>
    </div>
  );
};

export default BookTicket;
