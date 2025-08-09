import React from "react";
import {
  FaInfoCircle,
  FaUserShield,
  FaLock,
  FaGavel,
  FaMoneyCheckAlt,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";

const terms = [
  {
    icon: <FaInfoCircle />,
    text: "Welcome to Pluck! By using our platform, you agree to these Terms of Service. Please read carefully before participating.",
  },
  {
    icon: <FaUserShield />,
    text: "You must be at least ",
    bold: "18 years old",
    suffix: " or meet your jurisdiction's age of majority to use Pluck.",
  },
  {
    icon: <FaLock />,
    text: "You are responsible for maintaining the confidentiality of your account and activities.",
  },
  {
    icon: <FaGavel />,
    text: "Players must follow game rules and respect fair competition. Any cheating or misconduct may result in permanent ban.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    text: "Prize winnings are subject to verification. Payments are processed within 7 business days.",
  },
  {
    icon: <FaSyncAlt />,
    text: "Pluck reserves the right to update these Terms at any time. Updated Terms will be posted on this page.",
  },
  {
    icon: <FaEnvelope />,
    text: "For any questions regarding these Terms, please email: ",
    link: "support@pluckgames.com",
  },
];

export default function TermsOfService() {
  return (
    <div className=" text-white   md:px-12 px-4 py-32">
      <div className="max-w-5xl mx-auto bg-white/20 lg:p-12 p-2 rounded-lg">
        <h1 className="text-2xl text-center justify-center font-semibold mb-6 flex items-center gap-2">
          📜 Terms of Service
        </h1>

        <div className="space-y-4">
          {terms.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#123844] rounded-lg px-4 py-3 flex items-start gap-3 text-sm"
            >
              <div className="text-lg text-blue-300 mt-0.5">{item.icon}</div>
              <div>
                <span>{item.text}</span>
                {item.bold && <strong> {item.bold}</strong>}
                {item.suffix && <span>{item.suffix}</span>}
                {item.link && (
                  <a
                    href={`mailto:${item.link}`}
                    className="text-blue-400 hover:underline"
                  >
                    {item.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
