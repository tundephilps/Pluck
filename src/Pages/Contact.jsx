import React, { useState } from "react";
import {
  FaUserCircle,
  FaCreditCard,
  FaGamepad,
  FaTrophy,
  FaBug,
  FaQuestionCircle,
  FaUser,
  FaEnvelope,
  FaLayerGroup,
  FaAlignLeft,
  FaPaperPlane,
} from "react-icons/fa";

const supportOptions = [
  {
    title: "Account Issues",
    description: "Help with login, profile, and account settings.",
    icon: <FaUserCircle className="text-cyan-400 text-2xl" />,
  },
  {
    title: "Billing & Payments",
    description: "Questions about subscriptions, payments, and refunds.",
    icon: <FaCreditCard className="text-cyan-400 text-2xl" />,
  },
  {
    title: "Gameplay & Rules",
    description: "Clarification on game rules and fair play policies.",
    icon: <FaGamepad className="text-cyan-400 text-2xl" />,
  },
  {
    title: "Tournaments",
    description: "Issues related to joining or participating in tournaments.",
    icon: <FaTrophy className="text-cyan-400 text-2xl" />,
  },
  {
    title: "Bug Reports",
    description: "Report technical issues or glitches you've encountered.",
    icon: <FaBug className="text-cyan-400 text-2xl" />,
  },
  {
    title: "General Inquiry",
    description: "For any other questions you may have for our team.",
    icon: <FaQuestionCircle className="text-cyan-400 text-2xl" />,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });

  const categories = supportOptions.map((option) => option.title);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for API submission logic
    alert("Support ticket submitted!");
    setFormData({
      name: "",
      email: "",
      category: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen text-white px-6 py-32 md:px-12">
      <div className="mx-auto">
        {/* Support Center Grid */}
        <h1 className="text-2xl font-semibold flex items-center gap-2 justify-center mb-3">
          🧰 Support Center
        </h1>
        <p className="text-center text-sm text-gray-300 mb-10">
          Welcome to the Pluck Support Center. Find answers to your questions or
          get in touch with our team.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((item, index) => (
            <div
              key={index}
              className="bg-[#121212] hover:bg-[#1E1E1E] transition-colors items-center justify-start flex flex-col rounded-lg px-5 py-6 space-y-3 shadow-md"
            >
              <div>{item.icon}</div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Submit Ticket Form */}
        <div className="bg-[#121212] rounded-lg px-6 py-8">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
            💬 Still have questions? Submit a ticket
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <div className="relative mt-1">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Jane Doe"
                    className="w-full pl-10 pr-3 py-2 bg-[#0F1F28] rounded-md text-sm border border-[#1F3B47] focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Your Email</label>
                <div className="relative mt-1">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., jane.doe@example.com"
                    className="w-full pl-10 pr-3 py-2 bg-[#0F1F28] rounded-md text-sm border border-[#1F3B47] focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium">Support Category</label>
              <div className="relative mt-1">
                <FaLayerGroup className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 bg-[#0F1F28] rounded-md text-sm border border-[#1F3B47] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-medium">Subject</label>
              <div className="relative mt-1">
                <FaAlignLeft className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="A brief summary of your issue"
                  className="w-full pl-10 pr-3 py-2 bg-[#0F1F28] rounded-md text-sm border border-[#1F3B47] focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your issue in detail..."
                className="w-full px-4 py-3 bg-[#0F1F28] rounded-md text-sm border border-[#1F3B47] focus:outline-none focus:ring-2 focus:ring-cyan-500"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 rounded-md flex justify-center items-center gap-2 transition-colors"
            >
              Send Message <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
