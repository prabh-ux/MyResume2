import React, { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast'
import { useEffect } from "react";
export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;



  const  handleSubmit =async (e)=> {
    
  
    e.preventDefault();
    setSending(true);
    try {
      const newsletterUrl = `${backendUrl}/newsletter`;

     await toast.promise( axios.post(newsletterUrl, {
        name, message

      }),{
     loading: 'sending...',
     success: <b>Message Sent!</b>,
     error: <b>Could not send message right now.</b>,
   })
   

      console.log("data sent sucessfully ");

    } catch (error) {
      console.log("error sending data: ", error);
    }

    setSending(false);
  }


  return (
    <section id="contact" className="py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
        Let&apos;s Talk
      </h2>

      <div
        className="max-w-3xl mx-auto rounded-2xl p-6 sm:p-8 shadow-lg
                   bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full mt-1 p-3 rounded-md
                         bg-white/5 border border-gray-700 text-sm sm:text-base
                         focus:outline-none focus:ring-2 focus:ring-tealsoft transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              placeholder="Tell me about the project..."
              className="w-full mt-1 p-3 rounded-md
                         bg-white/5 border border-gray-700 text-sm sm:text-base
                         focus:outline-none focus:ring-2 focus:ring-tealsoft transition resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button disabled={sending}
              type="submit"
              className={`px-6 py-2  border border-gray-700 hover:bg-white/2 rounded-full ${sending?' text-gray-400 cursor-not-allowed hover:text-gray-300':'hover:scale-105 text-indigo-400 cursor-pointer  hover:text-indigo-300'}  transition-all duration-300 ease-in-out font-semibold
                         shadow-md  text-sm sm:text-base`}
            >
              Send
            </button>
            <a
              href="mailto:prabhkiratsainibusiness@gmail.com"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              or email directly
            </a>
          </div>

          {sending && (
            <div className="text-sm text-green-400 mt-2">
              Your email client opened — thanks! (Check your draft ✉️)
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
