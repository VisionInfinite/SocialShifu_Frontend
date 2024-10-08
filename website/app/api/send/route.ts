import { EmailTemplate } from "@/components/custom/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Conglaturations! You are on the waitlist, SocialyShifu!",
      react: EmailTemplate({ firstName: "User" }) as React.ReactElement,
    });

    if (error) {
      console.error("Error sending email:", error);
      return Response.json({ error }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return Response.json({ data });
  } catch (error) {
    console.error("Error in POST request:", error);
    return Response.json({ error }, { status: 500 });
  }
}
