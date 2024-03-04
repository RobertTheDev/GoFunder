import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Privacy Policy'
};

export default function PrivacyPolicyPage() {
    return (
        <div>
            <h1 id="privacy-policy">Privacy Policy</h1>
            <p>
                This Privacy Policy outlines how Eventee (&quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;) collects, uses, shares, and
                protects personal information obtained from users
                (&quot;you&quot; or &quot;your&quot;) of our website and mobile
                applications.
            </p>
            <h2 id="information-we-collect">Information We Collect</h2>
            <p>
                We may collect personal information from you when you use our
                website or mobile applications, register for an account, make a
                purchase, participate in surveys or promotions, or interact with
                our content. The types of information we may collect include:
            </p>
            <ul>
                <li>
                    Contact information (such as name, email address, phone
                    number)
                </li>
                <li>Account credentials (such as username and password)</li>
                <li>Payment information (such as credit card details)</li>
                <li>Event preferences and interests</li>
                <li>
                    Usage data (such as IP address, device type, browser
                    information)
                </li>
                <li>
                    Location information (such as GPS data or inferred location
                    based on IP address)
                </li>
                <li>Communications with us (such as emails or messages)</li>
            </ul>
            <h2 id="how-we-use-your-information">
                How We Use Your Information
            </h2>
            <p>
                We may use the information we collect for the following
                purposes:
            </p>
            <ul>
                <li>To provide and personalize our services</li>
                <li>To process transactions and fulfill orders</li>
                <li>To communicate with you and respond to your inquiries</li>
                <li>
                    To send you updates, promotions, and other marketing
                    communications
                </li>
                <li>
                    To conduct research, surveys, and analysis to improve our
                    services
                </li>
                <li>To detect and prevent fraud and abuse</li>
                <li>To comply with legal obligations</li>
            </ul>
            <h2 id="data-sharing">Data Sharing</h2>
            <p>
                We may share your personal information with third parties in the
                following circumstances:
            </p>
            <ul>
                <li>
                    With service providers who assist us in operating our
                    business (such as payment processors, hosting providers, and
                    marketing partners)
                </li>
                <li>
                    With event organizers when you register for or attend their
                    events through our platform
                </li>
                <li>
                    With law enforcement or government authorities if required
                    by law or to protect our legal rights
                </li>
                <li>
                    In connection with a merger, acquisition, or sale of assets,
                    where your information may be transferred as part of the
                    transaction
                </li>
                <li>
                    With your consent or as otherwise disclosed at the time of
                    data collection
                </li>
            </ul>
            <h2 id="data-security">Data Security</h2>
            <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, disclosure, alteration, or
                destruction. However, no method of transmission over the
                internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
            </p>
            <h2 id="your-choices">Your Choices</h2>
            <p>
                You may choose not to provide certain personal information, but
                this may limit your ability to access certain features of our
                services. You can also update or correct your personal
                information by logging into your account settings or contacting
                us directly.
            </p>
            <h2 id="children-s-privacy">Children&#39;s Privacy</h2>
            <p>
                Our services are not intended for children under the age of 13,
                and we do not knowingly collect personal information from
                children. If you believe we have inadvertently collected
                information from a child, please contact us immediately.
            </p>
            <h2 id="changes-to-this-privacy-policy">
                Changes to this Privacy Policy
            </h2>
            <p>
                We may update this Privacy Policy from time to time by posting
                the revised version on our website. Your continued use of our
                services after any changes indicates your acceptance of the
                updated policy.
            </p>
            <h2 id="contact-us">Contact Us</h2>
            <p>
                If you have any questions or concerns about our Privacy Policy
                or our data practices, please contact us at
                <a href="mailto:contact@eventee.com">contact@eventee.com</a>.
            </p>
            <p>
                <strong>Last Updated: [Insert Date]</strong>
            </p>
        </div>
    );
}
