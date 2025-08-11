// components/UI/ContactForm.tsx
import React, { useState } from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import type { ContactFormData } from '../../types';
import { contactInfo } from '../../data/portfolioData';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let's collaborate on your next project. I specialize in product, fashion, and commercial photography 
          that brings your vision to life.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gray-800 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Instagram className="w-5 h-5" />
                <a 
                  href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition-colors"
                >
                  {contactInfo.instagram}
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              {contactInfo.services.map((service, index) => (
                <li key={index}>• {service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Project Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;