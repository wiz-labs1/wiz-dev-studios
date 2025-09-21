export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground mb-6">
        This Privacy Policy explains how Wiz Dev Studios collects, uses,
        and safeguards your information when you use our website and
        services. By using our site, you agree to the terms outlined here.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may collect personal information such as your name, email address,
          and project details when you contact us through our forms or email.
          Additionally, non-personal information such as browser type and usage
          statistics may be collected to improve our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Information</h2>
        <p className="text-muted-foreground leading-relaxed">
          Your information is used solely for the purpose of providing services,
          responding to inquiries, and improving our website. We do not sell or
          rent your personal information to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          We take reasonable steps to protect your information from unauthorized
          access, alteration, or disclosure. However, please note that no method
          of online transmission or storage is completely secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Changes to This Policy</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated effective date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">5. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:wiz.dev.studios@gmail.com"
            className="text-primary hover:underline"
          >
            wiz.dev.studios@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
