import React, { useState } from "react";
import E5 from '../assets/event (5).jpg';
import E6 from '../assets/ganesh.jpg';
import E7 from '../assets/shiv.jpg';
import E8 from '../assets/holi.jpg';
import E9 from '../assets/ram.jpeg';
import E10 from '../assets/kishna.jpeg';
import E11 from '../assets/event (2).jpg';


import './all.css';

function ExploreEvent() {
    const [events, setEvents] = useState([
        { 
            id: 1, 
            img: E6, 
            name: "Ganesh Jayanti", 
            date: "Saturday, February 8, 2025", 
            location: "Mumbai", 
            category: "Religious", 
            info: "Celebrate the birth of Lord Ganesha with prayers, rituals, and cultural events." 
        },
        { 
            id: 2, 
            img: E7, 
            name: "Mahashivratri", 
            date: "Friday, February 28, 2025", 
            location: "Varanasi", 
            category: "Religious", 
            info: "Join us for a night of devotion, fasting, and prayers dedicated to Lord Shiva." 
        },
        { 
            id: 3, 
            img: E8, 
            name: "Holi Celebration", 
            date: "Monday, March 17, 2025", 
            location: "Delhi", 
            category: "Cultural", 
            info: "Enjoy the festival of colors with music, dance, and joyful celebrations." 
        },
        { 
            id: 4, 
            img: E5, 
            name: "Christmas Evening", 
            date: "Thursday, May 25, 2025", 
            location: "Bangalore", 
            category: "Social", 
            info: "Celebrate Christmas with carols, gifts, and festive cheer in a warm community gathering." 
        },
        { 
            id: 5, 
            img: E9, 
            name: "Shree Ram Navami", 
            date: "Wednesday, April 9, 2025", 
            location: "Ayodhya", 
            category: "Religious", 
            info: "Experience grand processions and devotional programs on the birth anniversary of Lord Rama." 
        },
        { 
            id: 6, 
            img: E10, 
            name: "Shree Krishna Janmashtami", 
            date: "Friday, August 15, 2025", 
            location: "Mathura", 
            category: "Religious", 
            info: "Celebrate the birth of Lord Krishna with midnight prayers, bhajans, and festivities." 
        },
        { 
            id: 7, 
            img: E11, 
            name: "Bubble Kids Party", 
            date: "Sunday, July 20, 2025", 
            location: "Chennai", 
            category: "Charity", 
            info: "A fun-filled event for kids with games, activities, and entertainment to support a noble cause." 
        }
    ]);
    

    const [showForm, setShowForm] = useState(false);
    const [newEvent, setNewEvent] = useState({ name: "", date: "", location: "", category: "", info: "" });
    const [filter, setFilter] = useState("All");

    // Handle input change
    const handleInputChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    // Add new event
    const addEvent = (e) => {
        e.preventDefault();
        const newId = events.length + 1;
        setEvents([...events, { ...newEvent, id: newId, img: E5 }]);
        setShowForm(false);
        setNewEvent({ name: "", date: "", location: "", category: "", info: "" });
    };

    // Filter logic
    const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

    return (
        <div className="event-section">
            {/* Header with Buttons */}
            <div className="event-header">
                <h2 className="event-title">🎉 Celebrate With Us! 🎉</h2>
                
            </div>
            <div className="event-actions">
                    <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="All">All Categories</option>
                        <option value="Religious">Religious</option>
                        <option value="Social">Social</option>
                        <option value="Charity">Charity</option>
                        <option value="Cultural">Cultural</option>
                    </select>
                    <div className="add-btn" onClick={() => setShowForm(true)}>Add Event</div>
                </div>

            {/* Add Event Popup Form */}
            {showForm && (
                <div className="event-popup">
                    <form className="event-form" onSubmit={addEvent}>
                        <h3>Add New Event</h3>
                        <input type="text" name="name" placeholder="Event Title" value={newEvent.name} onChange={handleInputChange} required />
                        <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} required />
                        <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} required />
                        <select name="category" value={newEvent.category} onChange={handleInputChange} required>
                            <option value="">Select Category</option>
                            <option value="Religious">Religious</option>
                            <option value="Social">Social</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Charity">Charity</option>

                        </select>
                        <textarea name="info" placeholder="Event Description" value={newEvent.info} onChange={handleInputChange} required></textarea>
                        <div className="form-buttons">
                            <div type="submit" className="submit-btn">Add Event</div>
                            <div type="button" className="close-btn" onClick={() => setShowForm(false)}>Cancel</div>
                        </div>
                    </form>
                </div>
            )}

            {/* Display Filtered Events */}
            <div className="events">
                {filteredEvents.map((event) => (
                    <div className="event-card" key={event.id}>
                        <img src={event.img} alt={event.name} />
                        <h3>{event.name}</h3>
                        <p>{event.info}</p>
                        <h4>📍 {event.location}</h4>
                        <h4>📆 {event.date}</h4>
                        <h4 className="category"><strong>Category:</strong> {event.category}</h4>
                        <div className="view-event"><a href="#">View Event</a></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreEvent;
