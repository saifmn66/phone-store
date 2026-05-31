import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';

const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"];
const serviceOptions = [
  { id: 'screen', name: 'Screen Restoration' },
  { id: 'battery', name: 'Battery Recalibration' },
  { id: 'liquid', name: 'Liquid Exposure Recovery' },
  { id: 'software', name: 'Board-Level / Software' },
  { id: 'diagnostic', name: 'Free Complete Diagnosis' }
];

export default function ContactBooking() {
  // Form State
  const [formData, setFormData] = useState({
    deviceBrand: 'apple',
    deviceModel: '',
    serviceType: 'screen',
    selectedDate: '',
    selectedTime: '',
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [formStep, setFormStep] = useState(1); // 1: Device/Service, 2: Date/Time, 3: Details, 4: Success
  const [ticketId, setTicketId] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectSlot = (time) => {
    setFormData((prev) => ({ ...prev, selectedTime: time }));
  };

  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.deviceModel.trim()) {
        setValidationError('Please enter your device model (e.g. iPhone 15 Pro).');
        return false;
      }
    } else if (step === 2) {
      if (!formData.selectedDate) {
        setValidationError('Please select a preferred date.');
        return false;
      }
      if (!formData.selectedTime) {
        setValidationError('Please select a time slot.');
        return false;
      }
    } else if (step === 3) {
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
        setValidationError('Please fill in your name, email, and phone number.');
        return false;
      }
    }
    setValidationError('');
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(formStep)) {
      setFormStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setValidationError('');
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    // Generate random Ticket ID
    const randomId = `SRX-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomId);
    setFormStep(4);
  };

  return (
    <section id="booking" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden border-t border-slate-900">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure Reservation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Schedule a <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Repair Appointment</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            Book your repair slot online. Drop off your device at our service center, and we will handle the rest.
          </motion.p>
        </div>

        {/* Core Layout: Grid form / details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Booking Card */}
          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-xl shadow-black/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white flex items-center justify-center text-sm font-extrabold">
                {formStep < 4 ? `0${formStep}` : '✓'}
              </span>
              {formStep === 1 && "Device & Service Details"}
              {formStep === 2 && "Preferred Schedule"}
              {formStep === 3 && "Contact Details"}
              {formStep === 4 && "Booking Confirmed"}
            </h3>

            {/* Steps tracker */}
            {formStep < 4 && (
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-800/50">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors duration-300 ${
                        formStep === step
                          ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400'
                          : formStep > step
                          ? 'bg-emerald-500/10 border-emerald-400 text-emerald-400'
                          : 'bg-transparent border-slate-800 text-slate-500'
                      }`}
                    >
                      {step}
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider hidden sm:inline transition-colors duration-300 ${
                        formStep === step ? 'text-slate-200' : 'text-slate-500'
                      }`}
                    >
                      {step === 1 && "Device"}
                      {step === 2 && "Time"}
                      {step === 3 && "Details"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Form Steps Animation container */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {formStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Brand Class
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['apple', 'samsung', 'pixel'].map((brand) => (
                          <button
                            key={brand}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, deviceBrand: brand }))}
                            className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all duration-200 capitalize ${
                              formData.deviceBrand === brand
                                ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400'
                                : 'bg-slate-950/60 border-slate-850 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="deviceModel" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Exact Device Model
                      </label>
                      <input
                        type="text"
                        name="deviceModel"
                        id="deviceModel"
                        placeholder="e.g. iPhone 15 Pro, Galaxy S24"
                        value={formData.deviceModel}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950/60 border border-slate-850 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-655 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Service Category
                      </label>
                      <select
                        name="serviceType"
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.id} value={opt.id} className="bg-slate-950 text-slate-200">
                            {opt.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {formStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="selectedDate" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Choose Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="selectedDate"
                          id="selectedDate"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.selectedDate}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Choose Preferred Time Slot
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleSelectSlot(time)}
                            className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                              formData.selectedTime === time
                                ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400'
                                : 'bg-slate-950/60 border-slate-850 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {formStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Symptoms / Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        id="notes"
                        rows="3"
                        placeholder="Describe device condition, liquid type, drop height, etc..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200 resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: SUCCESS */}
                {formStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">Reservation Secured!</h4>
                    <p className="text-sm text-slate-450 mb-6 max-w-sm mx-auto">
                      A confirmation ticket has been dispatched to <span className="text-slate-200">{formData.email}</span>.
                    </p>

                    {/* Summary box */}
                    <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 mb-8">
                      <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2">
                        <span className="text-slate-500 font-bold uppercase tracking-wider">Ticket ID</span>
                        <span className="text-cyan-400 font-bold font-mono">{ticketId}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-455">Device:</span>
                        <span className="text-slate-200 font-semibold">{formData.deviceModel} ({formData.deviceBrand})</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-455">Service:</span>
                        <span className="text-slate-200 font-semibold">
                          {serviceOptions.find(o => o.id === formData.serviceType)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-455">Date:</span>
                        <span className="text-slate-200 font-semibold">{formData.selectedDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-455">Time Slot:</span>
                        <span className="text-slate-200 font-semibold">{formData.selectedTime}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          deviceBrand: 'apple',
                          deviceModel: '',
                          serviceType: 'screen',
                          selectedDate: '',
                          selectedTime: '',
                          fullName: '',
                          email: '',
                          phone: '',
                          notes: ''
                        });
                        setFormStep(1);
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 font-semibold hover:bg-slate-850 hover:text-white transition-colors duration-200"
                    >
                      Book Another Repair
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Validation alert banner */}
              {validationError && (
                <div className="mt-6 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Navigation Controls */}
              {formStep < 4 && (
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800/50">
                  {formStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-850 transition-all duration-200"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-1.5 ml-auto"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white shadow-lg shadow-cyan-500/10 transition-all duration-200 ml-auto"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Contact Details & Mock Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info details */}
            <div className="bg-slate-900/20 border border-slate-850 rounded-3xl p-6 sm:p-8 space-y-6">
              <h4 className="text-lg font-bold text-white tracking-tight">SmartRx Headquarters</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 text-cyan-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block">Address</span>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      100 Tech Plaza, Suite 400, Cupertino, CA 95014
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 text-emerald-400 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block">Hotline</span>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      +1 (555) 797-3727 (RX-REPAIR)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block">Direct Email</span>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      labs@smartrx.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider block">Business Hours</span>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      Mon - Sat: 9:00 AM - 7:00 PM <br />
                      Sunday: Closed (Emergency Mailbox Open)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Mock Digital Vector Grid Map */}
            <div className="relative rounded-3xl bg-slate-900/30 border border-slate-850 p-3 overflow-hidden group">
              <div className="relative h-64 rounded-2xl bg-slate-950 overflow-hidden border border-slate-900 flex items-center justify-center">
                
                {/* Digital Schematic Map SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-65 group-hover:scale-[1.02] transition-transform duration-700 ease-out" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines background */}
                  <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15, 23, 42, 0.5)" strokeWidth="0.8" />
                    <circle cx="20" cy="20" r="0.8" fill="rgba(34, 211, 238, 0.08)" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />

                  {/* Street Roads (Lines) */}
                  <path d="M -10 120 L 410 120" stroke="rgba(51, 65, 85, 0.4)" strokeWidth="16" strokeLinecap="round" />
                  <path d="M -10 120 L 410 120" stroke="rgba(15, 23, 42, 0.9)" strokeWidth="12" strokeLinecap="round" />
                  <text x="310" y="114" fill="rgba(100, 116, 139, 0.5)" fontSize="7" fontWeight="bold" letterSpacing="0.1em">TECH PLAZA AVE</text>

                  <path d="M 120 -10 L 120 250" stroke="rgba(51, 65, 85, 0.4)" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 120 -10 L 120 250" stroke="rgba(15, 23, 42, 0.9)" strokeWidth="6" strokeLinecap="round" />
                  <text x="126" y="40" fill="rgba(100, 116, 139, 0.5)" fontSize="7" fontWeight="bold" transform="rotate(90,126,40)" letterSpacing="0.1em">SILICON BLVD</text>

                  <path d="M 280 -10 L 280 250" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 280 -10 L 280 250" stroke="rgba(15, 23, 42, 0.9)" strokeWidth="4" strokeLinecap="round" />

                  {/* Diagonal side road */}
                  <path d="M 120 120 L 300 20" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 120 120 L 300 20" stroke="rgba(15, 23, 42, 0.9)" strokeWidth="4" strokeLinecap="round" />

                  {/* Digital schematics accents */}
                  <rect x="20" y="20" width="60" height="40" rx="4" fill="rgba(30, 41, 59, 0.15)" stroke="rgba(34, 211, 238, 0.08)" />
                  <circle cx="50" cy="40" r="1.5" fill="rgba(34, 211, 238, 0.3)" />
                  <circle cx="65" cy="40" r="1.5" fill="rgba(34, 211, 238, 0.15)" />
                  
                  <rect x="220" y="160" width="100" height="50" rx="4" fill="rgba(30, 41, 59, 0.15)" stroke="rgba(34, 211, 238, 0.08)" />

                  {/* River or park accent shape */}
                  <path d="M 0 0 C 40 10, 80 5, 100 0 L 100 -20 L 0 -20 Z" fill="rgba(56, 189, 248, 0.04)" />
                </svg>

                {/* Glowing Radar Target Pin (SmartRx) */}
                <div className="absolute top-[120px] left-[120px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="absolute w-12 h-12 rounded-full bg-cyan-500/15 border border-cyan-400/40 animate-ping pointer-events-none" />
                  <span className="absolute w-8 h-8 rounded-full bg-cyan-500/25 border border-cyan-400/60 animate-pulse pointer-events-none" />
                  
                  <div className="relative z-10 w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 border border-white/40 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>
                </div>

                {/* Target Label */}
                <div className="absolute top-[90px] left-[135px] bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-lg shadow-md backdrop-blur-sm pointer-events-none select-none">
                  <span className="text-[9px] font-bold text-white tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    SmartRx Labs
                  </span>
                </div>

                {/* Compass visual element */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-40 select-none text-[8px] font-mono text-slate-500">
                  <span>GPS COORDS: 37.3318° N, 122.0312° W</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
