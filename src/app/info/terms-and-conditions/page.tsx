// PURPOSE: This page displays the app's terms and condtions.

// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Terms and Conditions'
};

// This handler returns the HTML content for the app's accessiility statement.
export default function TermsAndConditionsPage(): JSX.Element {
    return (
        <div className="info-page-container">
            <h1 id="terms-and-conditions">Terms and Conditions</h1>
            <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use
                of the Eventee website and mobile applications (collectively,
                the &quot;Service&quot;) provided by Eventee (&quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;). By accessing or using the
                Service, you agree to be bound by these Terms. If you do not
                agree to these Terms, please do not use the Service.
            </p>
            <h2 id="use-of-service">Use of Service</h2>
            <p>
                You must be at least 13 years old to use the Service. By using
                the Service, you represent and warrant that you are at least 13
                years old. If you are under 13 years old, you may not use the
                Service.
            </p>
            <p>
                You agree to use the Service only for lawful purposes and in
                accordance with these Terms. You are responsible for maintaining
                the confidentiality of your account credentials and for all
                activities that occur under your account.
            </p>
            <h2 id="intellectual-property">Intellectual Property</h2>
            <p>
                The Service and its original content, features, and
                functionality are owned by Eventee and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property or proprietary rights laws.
            </p>
            <p>
                You may not modify, reproduce, distribute, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our Service,
                except as necessary for your own personal, non-commercial use.
            </p>
            <h2 id="user-content">User Content</h2>
            <p>
                You may submit content to the Service, including but not limited
                to text, images, videos, and other materials (&quot;User
                Content&quot;). By submitting User Content, you grant us a
                non-exclusive, worldwide, royalty-free, sublicensable, and
                transferable license to use, reproduce, distribute, prepare
                derivative works of, display, and perform the User Content in
                connection with the Service.
            </p>
            <p>
                You represent and warrant that you own or have the necessary
                rights, licenses, consents, and permissions to submit User
                Content and grant the above license.
            </p>
            <h2 id="limitation-of-liability">Limitation of Liability</h2>
            <p>
                In no event shall Eventee, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from (i)
                your access to or use of or inability to access or use the
                Service; (ii) any conduct or content of any third party on the
                Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use, or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence), or any other legal theory, whether or not we have
                been informed of the possibility of such damage, and even if a
                remedy set forth herein is found to have failed of its essential
                purpose.
            </p>
            <h2 id="governing-law">Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with
                the laws of [Your Jurisdiction], without regard to its conflict
                of law provisions.
            </p>
            <h2 id="changes-to-terms">Changes to Terms</h2>
            <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days&#39; notice prior to any new terms
                taking effect. What constitutes a material change will be
                determined at our sole discretion.
            </p>
            <h2 id="contact-us">Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us
                at
                <a href="mailto:contact@eventee.com">contact@eventee.com</a>.
            </p>
            <p>
                <strong>Last Updated: [Insert Date]</strong>
            </p>
        </div>
    );
}
