function Section({ number, title, children }) {
    return (
        <section className="tc-policy-section">
            <h2 className="tc-policy-heading">{number}. {title}</h2>
            {children}
        </section>
    )
}

function PrivacyPolicy() {
    return (
        <div className="tc-page">
            <div className="tc-page-hero">
                <div className="tc-unique-eyebrow">YOUR DATA, YOUR RIGHTS</div>
                <div className="finger-paint font-md">Privacy Policy</div>
            </div>

            <div className="tc-policy-wrap">
                <p className="tc-policy-updated">Effective Date: August 2026 · Last Updated: August 2026</p>

                <p className="tc-policy-intro">
                    Tiny Coders respects your privacy. This Privacy Policy explains how we collect, use, and protect
                    information when you visit our website or use our services. By using our services, you agree to
                    this Privacy Policy. If you do not agree, please do not use our services.
                </p>

                <Section number="1" title="Information We Collect">
                    <p>We collect information you provide to us directly, such as:</p>
                    <ul className="tc-policy-list">
                        <li>Name, email address, phone number</li>
                        <li>Payment and billing information (processed securely by a third-party payment provider — we do not store full card numbers)</li>
                        <li>Messages or information you send us through contact forms, email, or support requests</li>
                    </ul>
                    <p>
                        We do not automatically collect information about you (such as browsing activity or device
                        data), except through cookies as described below.
                    </p>
                </Section>

                <Section number="2" title="How We Use Information">
                    <p>We use the information we collect to:</p>
                    <ul className="tc-policy-list">
                        <li>Provide and operate our services</li>
                        <li>Process payments</li>
                        <li>Respond to inquiries and provide customer support</li>
                        <li>Send updates, confirmations, or service-related communications</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                    <p>
                        We do not sell, share, or disclose your personal information to third parties, except as
                        required by law or to process payments through our payment provider.
                    </p>
                </Section>

                <Section number="3" title="Data Retention">
                    <p>
                        We retain personal information only as long as necessary to provide our services, comply
                        with legal obligations, and resolve disputes.
                    </p>
                </Section>

                <Section number="4" title="Cookies">
                    <p>
                        We use cookies to remember preferences and understand how our website is used. You can
                        disable cookies through your browser settings, though this may affect site functionality.
                    </p>
                </Section>

                <Section number="5" title="Data Security">
                    <p>
                        We use reasonable measures to protect your information from unauthorized access, loss, or
                        misuse. No method of transmission or storage is 100% secure, so we cannot guarantee absolute
                        security.
                    </p>
                </Section>

                <Section number="6" title="Your Rights">
                    <p>Depending on your location, you may have the right to:</p>
                    <ul className="tc-policy-list">
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction or deletion of your information</li>
                        <li>Object to or restrict certain uses of your information</li>
                    </ul>
                    <p>
                        To exercise these rights, contact us at{' '}
                        <a className="tc-form-link" href="mailto:tinycoders@tinycoders.org">tinycoders@tinycoders.org</a>.
                    </p>
                </Section>

                <Section number="7" title="Changes to This Policy">
                    <p>
                        We may update this Privacy Policy from time to time. Changes will be posted on this page
                        with an updated "Last Updated" date.
                    </p>
                </Section>

                <Section number="8" title="Contact Us">
                    <p>If you have questions about this Privacy Policy, please contact us:</p>
                    <p><strong>Tiny Coders</strong></p>
                    <p>
                        Email:{' '}
                        <a className="tc-form-link" href="mailto:tinycoders@tinycoders.org">tinycoders@tinycoders.org</a>
                    </p>
                </Section>
            </div>
        </div>
    )
}

export default PrivacyPolicy
