function PrivacyPolicy(){
    return(
        <div className="tc-page">
            <div className="tc-page-hero">
                <div className="tc-unique-eyebrow">YOUR DATA, YOUR RIGHTS</div>
                <div className="finger-paint font-md">Privacy Policy</div>
            </div>

            <div className="tc-policy-wrap">
                <p className="tc-policy-updated">Last updated: [August, 2026]</p>

                <p className="tc-policy-intro">
                    Tiny Coders respects your family's privacy. This policy explains what
                    information we collect when you contact us or register a child for a class, how we use it, and
                    the choices you have. <em>This is a template policy — replace the bracketed details and have it
                    reviewed by a legal professional before publishing.</em>
                </p>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Information We Collect</h2>
                    <p>When you use our contact form or register for a class, we may collect:</p>
                    <ul className="tc-policy-list">
                        <li><strong>Child information:</strong> full legal name, date of birth, grade, and current school.</li>
                        <li><strong>Parent/guardian information:</strong> full name, relationship to child, email, phone number, and home address.</li>
                        <li><strong>Emergency contact information:</strong> name, relationship to child, and phone number.</li>
                        <li><strong>Authorized pickup information:</strong> names of anyone else approved to pick up your child.</li>
                        <li><strong>Medical/safety information:</strong> allergies, medical conditions, and medication instructions relevant to class supervision.</li>
                        <li><strong>Communication preferences:</strong> your preferred contact method and newsletter opt-in status.</li>
                    </ul>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">How We Use Your Information</h2>
                    <p>We use the information above to:</p>
                    <ul className="tc-policy-list">
                        <li>Register your child for classes and manage attendance</li>
                        <li>Contact you about schedule changes, pickup, or your child's safety</li>
                        <li>Respond to questions submitted through our contact form</li>
                        <li>Send program updates or newsletters, only if you opt in</li>
                    </ul>
                    <p>We do not sell your information to third parties.</p>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Photo &amp; Video Release</h2>
                    <p>
                        If you check the photo/video release box during registration, we may use photos or videos of
                        your child taken during class on our website and social media. You can withdraw this consent
                        at any time by contacting us — see Contact Us below.
                    </p>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Data Sharing &amp; Third Parties</h2>
                    <p>
                        Form submissions on this site are processed through Formspree, a third-party form service.
                        We do not share your information with any other third party except as required by law or to
                        protect the safety of a child in our care.
                    </p>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Data Retention</h2>
                    <p>
                        We retain registration and medical/safety information for as long as your child is enrolled,
                        plus [retention period] afterward, then delete it unless we're required to keep it longer.
                    </p>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Children's Privacy</h2>
                    <p>
                        Our classes are designed for children, and registration necessarily involves a parent or
                        guardian submitting information about a minor. We collect this information directly from a
                        parent or guardian, never from the child, and use it solely to run our program safely.
                    </p>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Your Rights &amp; Choices</h2>
                    <ul className="tc-policy-list">
                        <li>Opt out of the newsletter at any time</li>
                        <li>Request a copy of the information we have on file for your child</li>
                        <li>Request that we correct or delete your information, subject to safety and legal recordkeeping needs</li>
                    </ul>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Security</h2>
                    <p>
                        We take reasonable steps to protect the information you share with us, but no method of
                        transmission or storage is 100% secure.
                    </p>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Changes to This Policy</h2>
                    <p>
                        We may update this policy from time to time. The "Last updated" date at the top of this page
                        reflects the most recent changes.
                    </p>
                </section>

                <section className="tc-policy-section">
                    <h2 className="tc-policy-heading">Contact Us</h2>
                    <p>
                        Questions about this policy or your data? Reach out via our{' '}
                        <a className="tc-form-link" href="/contact">Contact page</a>.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy
