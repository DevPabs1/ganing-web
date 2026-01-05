import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

const Booking = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section className="pt-32 pb-24 px-6 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Book a Session</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Schedule a consultation to discuss your architectural or interior photography needs. Let's capture your space.
                    </p>
                </div>

                <div className="w-full h-[600px] overflow-hidden border border-gray-100 rounded-lg shadow-sm">
                    {/* 
                        NOTE: This is a demo Cal.com embed. 
                        To use your own, sign up at cal.com, create an event, and replace 'rick/get-your-rick-roll' 
                        with your own username/event-link. 
                    */}
                    <iframe
                        src="https://cal.com/wall-street-wdigal"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Book an Appointment"
                    ></iframe>
                </div>

                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>Powered by Google Calendar Sync</p>
                </div>
            </div>
        </section>
    );
};

export default Booking;
