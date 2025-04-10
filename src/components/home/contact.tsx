"use client"
import React, { useState } from 'react';
import { Mail, Phone, User, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const ProfessionalContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  const [isHovering, setIsHovering] = useState(false);
  type ValidationResult = {
    valid: boolean;
    message?: string;
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = (): ValidationResult => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  
    if (!formData.name.trim()) {
      return { valid: false, message: 'Name is required' };
    }
    if (!emailRegex.test(formData.email)) {
      return { valid: false, message: 'Please enter a valid email' };
    }
    if (!phoneRegex.test(formData.phone)) {
      return { valid: false, message: 'Please enter a valid phone number' };
    }
  
    return { valid: true, message: '' }; // Explicitly return empty string when valid
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateForm();
  
    if (!validation.valid) {
      setStatus({
        submitted: false,
        error: true,
        message: validation.message || 'Validation failed' // Provide fallback
      });
      return;
    }
  
    // Rest of your submission logic
    setStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message. We\'ll get back to you soon!'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 flex items-center justify-center p-6">
      <div className="w-full max-w-md backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center tracking-tight">
          Get in Touch
        </h2>
        
        {status.error && (
          <div className="bg-black/20 backdrop-blur-sm border border-red-500 text-red-400 
          p-4 rounded-lg mb-6 flex items-center">
            <AlertCircle className="mr-3 text-red-500" />
            {status.message}
          </div>
        )}

        {status.submitted && (
          <div className="bg-black/20 backdrop-blur-sm border border-green-500 text-green-400 
          p-4 rounded-lg mb-6 flex items-center">
            <CheckCircle2 className="mr-3 text-green-500" />
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="text-blue-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-black/10 backdrop-blur-sm text-white 
              pl-10 pr-4 py-4 rounded-lg border border-blue-500/20
              focus:outline-none focus:border-blue-500
              transition-all duration-300"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-blue-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-black/10 backdrop-blur-sm text-white 
              pl-10 pr-4 py-4 rounded-lg border border-blue-500/20
              focus:outline-none focus:border-blue-500
              transition-all duration-300"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="text-blue-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-black/10 backdrop-blur-sm text-white 
              pl-10 pr-4 py-4 rounded-lg border border-blue-500/20
              focus:outline-none focus:border-blue-500
              transition-all duration-300"
              required
            />
          </div>

          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
              className="w-full bg-black/10 backdrop-blur-sm text-white 
              px-4 py-4 rounded-lg border border-blue-500/20
              focus:outline-none focus:border-blue-500 min-h-[120px]
              transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`w-full text-white 
            font-bold py-4 rounded-lg
            transition-all duration-500 ease-in-out
            relative overflow-hidden group
            ${isHovering ? 'bg-blue-600' : 'bg-blue-500'}`}
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-700 
                  transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
            <span className="flex items-center justify-center relative z-10">
              <Send className="mr-2" /> Send Message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalContactForm;