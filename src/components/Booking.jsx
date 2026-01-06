import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";
import axios from 'axios';

// NOTE: In production, we use the VITE_API_URL environment variable.
// In local development, we fallback to localhost:3001.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [step, setStep] = useState(1); // 1: Select Date/Time, 2: Details, 3: Success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch slots when date changes
        fetchSlots(selectedDate);
    }, [selectedDate]);

    const fetchSlots = async (date) => {
        setLoading(true);
        setAvailableSlots([]); // Clear previous slots
        try {
            const response = await axios.post(`${API_URL}/availability`, {
                date: date.toISOString()
            });
            setAvailableSlots(response.data.slots);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Failed to load slots. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    const handleBook = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/book`, {
                ...formData,
                date: selectedDate.toISOString(),
                time: selectedSlot
            });

            if (response.data.success) {
                setStep(3);
            }
        } catch (err) {
            console.error(err);
            setError('Booking failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pt-32 pb-24 px-6 bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Visual Side (Left) */}
                <div className="hidden lg:block relative">
                    <div className="relative z-10 animate-float">
                        <img
                            src="https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&w=2525&auto=format&fit=crop"
                            alt="3D Abstract Calendar"
                            className="w-full h-auto rounded-3xl shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                    <div className="mt-12 text-center lg:text-left">
                        <h2 className="text-4xl font-bold mb-4">Let's create something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">extraordinary.</span></h2>
                        <p className="text-gray-500 text-lg max-w-md">Select a time that suits you, and let's discuss your vision in detail.</p>
                    </div>
                </div>

                {/* Form Side (Right) */}
                <div>
                    <div className="mb-8 lg:hidden">
                        <h1 className="text-4xl font-extrabold mb-4 tracking-tight text-gray-900">Book a Session</h1>
                        <p className="text-gray-500">Choose a time that works best for you.</p>
                    </div>

                    {step === 1 && (
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 animate-fade-in border border-gray-100/50 backdrop-blur-sm">
                            <div className="booking-container">
                                {/* Calendar Section */}
                                <div className="flex justify-center p-4">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        inline
                                        minDate={new Date()}
                                        calendarClassName="booking-calendar"
                                    />
                                </div>

                                {/* Slots Section */}
                                <div className="border-t border-gray-100 pt-8 mt-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-black rounded-full"></span>
                                        Available Times
                                    </h3>

                                    {loading ? (
                                        <div className="flex justify-center py-12">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-3 gap-3">
                                            {availableSlots.length > 0 ? (
                                                availableSlots.map((slot) => (
                                                    <button
                                                        key={slot}
                                                        onClick={() => setSelectedSlot(slot)}
                                                        className={`slot-button py-3 px-2 rounded-xl text-xs font-medium border transition-all ${selectedSlot === slot
                                                            ? 'bg-black text-white border-black shadow-lg scale-105'
                                                            : 'bg-gray-50 text-gray-600 border-transparent hover:border-gray-300 hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        {slot}
                                                    </button>
                                                ))
                                            ) : (
                                                <p className="col-span-3 text-center text-gray-400 py-8">
                                                    No slots available for this date.
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {selectedSlot && (
                                        <div className="mt-8 pt-6 border-t border-gray-100 animate-slide-up">
                                            <p className="text-sm text-gray-500 mb-4">
                                                Selected: <span className="font-semibold text-black">{selectedDate.toDateString()} at {selectedSlot}</span>
                                            </p>
                                            <button
                                                onClick={() => setStep(2)}
                                                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-transform hover:scale-[1.02] shadow-xl shadow-black/20"
                                            >
                                                Continue to Details
                                            </button>
                                        </div>
                                    )}
                                    {error && <p className="text-red-500 text-sm mt-4 bg-red-50 p-3 rounded-lg">{error}</p>}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in border border-gray-100">
                            <button
                                onClick={() => setStep(1)}
                                className="text-sm text-gray-500 hover:text-black mb-8 flex items-center gap-1 transition-colors group"
                            >
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Calendar
                            </button>

                            <h3 className="text-3xl font-bold mb-8 text-gray-900">Your Details</h3>

                            <form onSubmit={handleBook} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">What would you like to discuss?</label>
                                    <textarea
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium"
                                        rows="4"
                                        placeholder="Briefly describe your project or questions..."
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-black/20 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Processing...
                                        </span>
                                    ) : 'Confirm Booking'}
                                </button>
                            </form>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="bg-white rounded-3xl shadow-xl p-12 text-center animate-fade-in border border-gray-100">
                            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">You're All Set!</h2>
                            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                                A confirmation email with the Zoom link has been sent to <span className="font-semibold text-black">{formData.email}</span>.
                            </p>
                            <button
                                onClick={() => {
                                    setStep(1);
                                    setSelectedSlot(null);
                                    setFormData({ name: '', email: '', description: '' });
                                }}
                                className="text-black font-semibold hover:text-gray-600 underline underline-offset-4 decoration-2"
                            >
                                Book Another Session
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Booking;
