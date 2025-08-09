import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className=" text-white px-6 py-32 lg:px-12">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          🔒 Privacy Policy
        </h1>
        <p className="text-sm text-gray-300">Last updated: October 26, 2023</p>

        {/* Introduction */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Introduction</h2>
          <p className="text-sm text-gray-200">
            Your privacy is important to us. This Privacy Policy explains how
            Pluck (“we”, “us”, or “our”) collects, uses, discloses, and
            safeguards your information when you use our platform. We are
            committed to ensuring that your information is protected. By using
            our services, you agree to the collection and use of information in
            accordance with this policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Information We Collect</h2>
          <p className="text-sm text-gray-200 mb-3">
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
            <li>
              <span className="font-bold text-white">Personal Data:</span>{" "}
              Personally identifiable information, such as your name, email
              address, and demographic information, that you voluntarily give to
              us when you register with the platform.
            </li>
            <li>
              <span className="font-bold text-white">Derivative Data:</span>{" "}
              Information our servers automatically collect when you access the
              platform, such as your IP address, browser type, OS, access times,
              and pages viewed before/after access.
            </li>
            <li>
              <span className="font-bold text-white">Financial Data:</span>{" "}
              Payment-related info like credit card details (if provided). Most
              financial data is stored by our payment processors.
            </li>
            <li>
              <span className="font-bold text-white">Gameplay Data:</span>{" "}
              Information related to your in-game activity — progress,
              achievements, scores, and interactions.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p className="text-sm text-gray-200 mb-3">
            Having accurate information allows us to provide a smooth,
            efficient, and personalized experience. We may use your info to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or orders.</li>
            <li>Process payments and refunds.</li>
          </ul>
        </section>

        {/* Disclosure of Your Information */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            Disclosure of Your Information
          </h2>
          <p className="text-sm text-gray-200 mb-3">
            We may share information we’ve collected about you in certain
            situations. Disclosures include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
            <li>
              <span className="font-bold text-white">
                By Law or to Protect Rights:
              </span>{" "}
              If legally required, or to protect our rights/safety, we may
              disclose your info.
            </li>
            <li>
              <span className="font-bold text-white">
                Third-Party Service Providers:
              </span>{" "}
              We may share data with vendors that help us operate — e.g., for
              payments, hosting, customer service.
            </li>
            <li>
              <span className="font-bold text-white">Business Transfers:</span>{" "}
              If we’re involved in a merger or sale, your data may be
              transferred as part of that.
            </li>
          </ul>
        </section>

        {/* Security of Your Information */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            Security of Your Information
          </h2>
          <p className="text-sm text-gray-200">
            We use technical, administrative, and physical security measures to
            protect your data. While we aim to safeguard your info, no system is
            100% secure. We cannot guarantee complete protection from misuse or
            unauthorized access.
          </p>
        </section>

        {/* Your Rights and Choices */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            Your Rights and Choices
          </h2>
          <p className="text-sm text-gray-200 mb-3">
            You have rights regarding your personal data. You may review or
            change your info or delete your account by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
            <li>Logging into your account and updating your settings.</li>
            <li>Contacting us via the info provided below.</li>
          </ul>
          <p className="text-sm text-gray-200 mt-3">
            If you choose to delete your account, we will deactivate or delete
            your info from active databases. However, we may retain some data
            for legal, troubleshooting, or compliance purposes.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="text-sm text-gray-200">
            We may update this Privacy Policy from time to time to reflect
            operational, legal, or regulatory changes. If we do, we’ll notify
            you by posting the new policy here. Please review it periodically.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-200">
            If you have questions or comments about this Privacy Policy, please
            contact us at:{" "}
            <a
              href="mailto:privacy@pluckgames.com"
              className="text-blue-400 hover:underline"
            >
              privacy@pluckgames.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
