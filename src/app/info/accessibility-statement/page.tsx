import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Accessibility Statement",
};

// This handler returns the HTML content for the app's accessiility statement.
export default function AccessibilityStatementPage() {
    return (
        <div>
            <h1 id="accessibility-statement">Accessibility Statement</h1>
            <p>
                At GoFunder, we are committed to ensuring digital accessibility
                for everyone, including those with disabilities. We believe in
                providing an inclusive and seamless experience for all users,
                regardless of their abilities. We strive to adhere to the Web
                Content Accessibility Guidelines (WCAG) 2.1 Level AA standards
                to ensure our website and digital platforms are accessible to
                individuals with diverse needs.
            </p>
            <h2 id="our-commitment">Our Commitment</h2>
            <p>
                GoFunder is dedicated to making our digital platforms accessible
                to all users, including those with visual, auditory, motor, and
                cognitive impairments. We continuously work towards improving
                the accessibility of our website and applications to provide an
                optimal user experience for everyone.
            </p>
            <h2 id="accessibility-features">Accessibility Features</h2>
            <p>
                To enhance accessibility, we have implemented various features
                including:
            </p>
            <ul>
                <li>
                    <strong>Keyboard Navigation:</strong> Our website and
                    applications can be navigated easily using only a keyboard,
                    ensuring individuals who cannot use a mouse or touchscreen
                    can still access all features.
                </li>
                <li>
                    <strong>Screen Reader Compatibility:</strong> We have
                    optimized our digital content to be compatible with screen
                    reader software, allowing users with visual impairments to
                    access and interact with our platforms effectively.
                </li>
                <li>
                    <strong>Alternative Text:</strong> We provide descriptive
                    alternative text for images and multimedia content, enabling
                    users with visual impairments to understand the content
                    through screen readers or text-only browsers.
                </li>
                <li>
                    <strong>Color Contrast:</strong> We maintain sufficient
                    color contrast throughout our digital interfaces to ensure
                    readability for users with low vision or color blindness.
                </li>
                <li>
                    <strong>Resizable Text:</strong> Users can adjust the text
                    size and font settings according to their preferences,
                    providing flexibility for individuals with visual
                    impairments or reading difficulties.
                </li>
                <li>
                    <strong>Accessible Forms:</strong> Our forms are designed to
                    be accessible and easy to navigate, with clear labels and
                    instructions for screen reader users.
                </li>
            </ul>
            <h2 id="feedback-and-support">Feedback and Support</h2>
            <p>
                We welcome feedback from our users regarding the accessibility
                of our platforms. If you encounter any accessibility barriers or
                have suggestions for improvement, please contact us at{" "}
                <a href="mailto:contact@GoFunder.com">contact@GoFunder.com</a>.
                Your input helps us enhance accessibility and improve the user
                experience for everyone.
            </p>
            <h2 id="continuous-improvement">Continuous Improvement</h2>
            <p>
                GoFunder is committed to ongoing accessibility efforts,
                including regular audits, user testing, and staff training. We
                strive to stay up-to-date with accessibility standards and best
                practices to ensure our digital platforms remain accessible to
                all users.
            </p>
            <h2 id="accessibility-statement-updates">
                Accessibility Statement Updates
            </h2>
            <p>
                This accessibility statement will be reviewed and updated
                regularly to reflect our commitment to accessibility and any
                improvements made to our digital platforms.
            </p>
            <h2 id="contact-information">Contact Information</h2>
            <p>
                If you have any questions or concerns regarding our
                accessibility efforts or need assistance accessing our
                platforms, please contact us at:
            </p>
            <p>
                Email: &nbsp;
                <a href="mailto:contact@gofunder.com">contact@GoFunder.com</a>
            </p>
            <p>
                We appreciate your support as we work towards creating an
                inclusive and accessible online environment for all users.
            </p>
            <p>
                <strong>Last Updated: 24 February 2024</strong>
            </p>
        </div>
    );
}
