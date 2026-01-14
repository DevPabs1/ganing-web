import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // This must be a Google App Password
    }
});

export async function sendConfirmationEmail(bookingDetails) {
    const {
        customerName,
        customerEmail,
        dateTime,
        meetingLink,
        description
    } = bookingDetails;

    // Email to Customer
    const customerMailOptions = {
        from: `"Ganing Scheduling" <${process.env.EMAIL_USER}>`,
        to: customerEmail,
        subject: `Booking Confirmed: Consultation with Ganing`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #000;">Booking Confirmed!</h2>
                <p>Hi ${customerName},</p>
                <p>Your consultation has been successfully booked.</p>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p><strong>Time:</strong> ${new Date(dateTime).toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })}</p>
                    <p><strong>Zoom Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
                    <p><strong>Topic:</strong> ${description}</p>
                </div>
                
                <p>A Google Calendar invitation has also been sent to you.</p>
                <p>See you then!</p>
            </div>
        `
    };

    // Email to Host (You)
    const hostMailOptions = {
        from: `"Ganing Scheduling" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `NEW BOOKING: ${customerName}`,
        html: `
            <div style="font-family: Arial, sans-serif;">
                <h2>New Booking Received</h2>
                <p><strong>Name:</strong> ${customerName}</p>
                <p><strong>Email:</strong> ${customerEmail}</p>
                <p><strong>Time:</strong> ${new Date(dateTime).toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })}</p>
                <p><strong>Topic:</strong> ${description}</p>
                <p><a href="${meetingLink}">Join Zoom Meeting</a></p>
            </div>
        `
    };

    try {
        console.log(`Sending email to customer: ${customerEmail}`);
        await transporter.sendMail(customerMailOptions);

        console.log(`Sending notification to host: ${process.env.EMAIL_USER}`);
        await transporter.sendMail(hostMailOptions); // Send separate email to host

        return true;
    } catch (error) {
        console.error("Email Error:", error);
        return false;
    }
}

export async function sendContactEmail(contactDetails) {
    const { name, email, message } = contactDetails;

    const mailOptions = {
        from: `"Ganing Contact" <${process.env.EMAIL_USER}>`,
        to: "wallstreetinquries@gmail.com", // Requested recipient
        replyTo: email, // Allow replying directly to the sender
        subject: `New Message from ${name} - Ganing Web`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px;">New Inquiry</h2>
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            </div>
        `
    };

    try {
        console.log(`Sending contact email from ${email}`);
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error("Contact Email Error:", error);
        return false;
    }
}
