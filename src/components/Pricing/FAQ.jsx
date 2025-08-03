import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What happens after I upgrade?",
    answer:
      "You immediately unlock unlimited games, get your Verified badge, and gain access to all premium features. Your journey to the top of the leaderboard starts now!",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Absolutely. You have full control. You can cancel your subscription anytime with a single click in your Profile Settings. No questions asked, no hidden fees.",
  },
];

const FAQ = () => {
  return (
    <div className=" text-white py-12 ">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-teal-200 text-sm mb-3">
          🔁 Auto-renews monthly. Cancel anytime – no hidden fees.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-5 flex gap-4 items-start text-left"
            >
              <FaQuestionCircle className="text-blue-400 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
