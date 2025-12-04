import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productsQuantity: string;
  destinationPort: string;
  additionalRequirements: string;
}

interface FormErrors {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  productsQuantity?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productsQuantity: '',
    destinationPort: '',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.productsQuantity.trim()) {
      newErrors.productsQuantity = 'Products & Quantity is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          productsQuantity: '',
          destinationPort: '',
          additionalRequirements: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-zinc-950 min-h-screen py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-xl">
                Get in touch with our team for quotes, product details, or partnership opportunities.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex items-start space-x-5">
              <div className="bg-zinc-800 p-4 rounded-xl text-emerald-500 shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Email Us</h3>
                <p className="text-zinc-400 text-base break-all">global.ex888@gmail.com</p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex items-start space-x-5">
              <div className="bg-zinc-800 p-4 rounded-xl text-emerald-500 shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Call Us</h3>
                <p className="text-zinc-400 text-base">Whatsapp: +84 982485366 (Mr SamSon)</p>
                <p className="text-zinc-500 text-sm mt-1">Mon-Sat, 8AM-6PM</p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex items-start space-x-5">
              <div className="bg-zinc-800 p-4 rounded-xl text-emerald-500 shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Visit Us</h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  CÔNG TY TNHH GLOBAL EX Village 7, Bat Trang Commune, Ha Noi City, Viet Nam
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-10">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-center">
                ✓ Thank you! Your quote request has been sent. We'll respond within 24 business hours.
              </div>
            )}
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-bold text-white">Company Name *</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950 border rounded-lg px-5 py-4 text-white text-base focus:outline-none transition-colors ${
                      errors.companyName 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-zinc-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.companyName}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <label className="text-base font-bold text-white">Contact Person *</label>
                  <input 
                    type="text" 
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950 border rounded-lg px-5 py-4 text-white text-base focus:outline-none transition-colors ${
                      errors.contactPerson 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-zinc-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.contactPerson && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.contactPerson}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-bold text-white">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950 border rounded-lg px-5 py-4 text-white text-base focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-zinc-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <label className="text-base font-bold text-white">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950 border rounded-lg px-5 py-4 text-white text-base focus:outline-none transition-colors ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-zinc-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-white">Products & Quantity *</label>
                <input 
                  type="text" 
                  name="productsQuantity"
                  value={formData.productsQuantity}
                  onChange={handleChange}
                  placeholder="e.g., 20 tons Premium Briquettes" 
                  className={`w-full bg-zinc-950 border rounded-lg px-5 py-4 text-white text-base focus:outline-none transition-colors placeholder:text-zinc-600 ${
                    errors.productsQuantity 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-zinc-800 focus:border-emerald-500'
                  }`}
                />
                {errors.productsQuantity && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.productsQuantity}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-white">Destination Port</label>
                <input 
                  type="text" 
                  name="destinationPort"
                  value={formData.destinationPort}
                  onChange={handleChange}
                  placeholder="e.g., Port of Los Angeles" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-5 py-4 text-white text-base focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-600" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-white">Additional Requirements</label>
                <textarea 
                  rows={4} 
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  placeholder="Tell us about your needs, packaging preferences, delivery timeline, etc." 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-5 py-4 text-white text-base focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-600 resize-none" 
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 text-lg ${
                  isSubmitting
                    ? 'bg-zinc-600 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Quote Request
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-zinc-500 mt-6">
                By submitting this form, you agree to our privacy policy. We'll respond within 24 business hours.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;