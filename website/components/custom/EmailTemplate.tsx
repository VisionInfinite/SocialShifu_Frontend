import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
        <p>
            Welcome to SocialShifu! You are successfully on our waitlist. We are excited to have you on board and can't wait for you to experience the wonderful features we have in store. Stay tuned for more updates!
        </p>
    </div>
);

export default EmailTemplate;