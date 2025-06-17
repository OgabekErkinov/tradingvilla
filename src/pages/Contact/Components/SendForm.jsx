import { useState } from 'react';
import { motion } from 'framer-motion';

const TELEGRAM_BOT_TOKEN = '7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0';
const TELEGRAM_CHAT_ID = '8158030030';

const SendForm = () => {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToTelegram = async () => {
    const message = `✉️ *New Contact Message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendToTelegram();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Telegram error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
     <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-xl w-full h-full flex justify-center items-center "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
     <div className='h-[90%] w-[90%] flex flex-col justify-evenly gap-2'>
            {['name', 'email', 'subject'].map((field) => (
        <motion.div
          key={field}
          className="w-full flex flex-col items-start gap-2"
          whileFocus={{ scale: 1.02 }}
        >
          <label className="block text-gray-700 font-semibold mb-1">
            {field.charAt(0).toUpperCase() + field.slice(1).replace('email', 'Email Address')}
          </label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Your ${field === 'email' ? 'E-mail' : field.charAt(0).toUpperCase() + field.slice(1)}...`}
            className="w-full h-8 rounded-full bg-gray-100 outline-none"
          />
        </motion.div>
      ))}

      <motion.div className="mb-4 flex flex-col gap-2">
        <label className="block text-gray-700 font-semibold text-start">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full rounded-lg px-4 py-2 bg-gray-100 outline-none h-28 resize-none"
        ></textarea>
      </motion.div>

      <motion.button
        type="submit"
        className="h-8 w-[150px] bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
        whileTap={{ scale: 0.95 }}
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </motion.button>
     </div>
    </motion.form>
  )
}

export default SendForm
