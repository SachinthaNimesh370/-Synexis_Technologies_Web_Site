import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { type, email, ...rest } = data;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = "New Inquiry from Zynovra Website";
    let htmlContent = `<h3>New Form Submission</h3><p><strong>Email:</strong> ${email}</p>`;

    // Format email based on the type of submission
    if (type === "consultation") {
      subject = `Consultation Request: ${rest.name} (${rest.company || "No Company"})`;
      htmlContent = `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${rest.name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${rest.phone || "N/A"}</p>
        <p><strong>Company:</strong> ${rest.company || "N/A"}</p>
        <p><strong>Service Requested:</strong> ${rest.serviceType}</p>
        <br/>
        <h3>Project Details:</h3>
        <p>${rest.message.replace(/\n/g, "<br/>")}</p>
      `;
    } else if (type === "contact") {
      subject = `Contact Form Submission: ${rest.name}`;
      htmlContent = `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${rest.name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${rest.company || "N/A"}</p>
        <br/>
        <h3>Message:</h3>
        <p>${rest.message.replace(/\n/g, "<br/>")}</p>
      `;
    } else if (type === "newsletter") {
      subject = "New Newsletter Subscription";
      htmlContent = `
        <h2>Newsletter Subscription</h2>
        <p>A new user has subscribed to the newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
      `;
    }

    // Define the email options
    const mailOptions = {
      from: `Zynovra Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sending to yourself
      replyTo: email, // So you can reply directly to the customer
      subject,
      html: htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
