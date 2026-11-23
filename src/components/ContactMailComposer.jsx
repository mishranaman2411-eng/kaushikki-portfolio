import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink, 
  MessageCircle, 
  PhoneCall,
  CheckCheck,
  Paperclip,
  Share2,
  X
} from 'lucide-react';
import { playClick, playPop, playCheck } from '../utils/sound';
import confetti from 'canvas-confetti';
import { 
  DoodleUnderline, 
  DoodleArrow, 
  DoodleCircle, 
  DoodleSparkle, 
  DoodleDivider, 
  LinkedinIcon 
} from './HandDrawn';

export default function ContactMailComposer() {
  const [copiedItem, setCopiedItem] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('internship');
  const [senderEmail, setSenderEmail] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [messageSentFeedback, setMessageSentFeedback] = useState(false);

  const topics = [
    {
      id: 'internship',
      label: '💼 Summer / Growth Internship',
      subject: 'Internship Opportunity: Koushhiki Roy x [Your Company]',
      defaultBody: `Hi Koushhiki,

I came across your portfolio and was impressed by your hands-on sales track record at Team Taurus and Dublieu, alongside your BBA DBE studies at IIM Bangalore.

We have an exciting opportunity in sales & marketing that matches your background in consultative pitching and outbound conversion. Let’s connect for a 15-minute introductory call!

Best regards,`
    },
    {
      id: 'sales',
      label: '📈 Sales Strategy & Client Pitching',
      subject: 'Inquiry: Sales Outreach & In-Person Pitching Consultation',
      defaultBody: `Hi Koushhiki,

I'd love to chat with you about your experience pitching to 50+ live clients and converting 200+ delegates. We’re currently looking to optimize our outbound sales approach and would appreciate your fresh perspective.

Let me know when you might be free for a conversation!

Warm regards,`
    },
    {
      id: 'creative',
      label: '🎨 Decks, Canva & Visual Marketing',
      subject: 'Collaboration: High-Impact Pitch Decks & Marketing Creatives',
      defaultBody: `Hi Koushhiki,

Your blend of strategic sales thinking and visual design skills in Canva and video editing caught my attention. We're developing new collateral and would love to explore collaborating with you.

Looking forward to hearing from you!

Cheers,`
    },
    {
      id: 'coffee',
      label: '☕ Virtual Coffee / Networking',
      subject: 'Quick connect / Virtual Coffee with Koushhiki Roy',
      defaultBody: `Hi Koushhiki,

Loved exploring your tactile portfolio! As someone also interested in sales, marketing, and the IIM ecosystem, I'd love to connect for a casual virtual coffee and exchange notes.

Best,`
    }
  ];

  const currentTopic = topics.find(t => t.id === selectedTopic) || topics[0];
  const activeSubject = currentTopic.subject;
  const activeBody = customMessage || currentTopic.defaultBody;

  const handleTopicSelect = (topicId) => {
    playClick();
    setSelectedTopic(topicId);
    setCustomMessage('');
  };

  const copyToClipboard = (text, type) => {
    playPop();
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  const handleSendMail = (e) => {
    e.preventDefault();
    playPop();
    const mailtoUrl = `mailto:koushhikiroy@gmail.com?subject=${encodeURIComponent(activeSubject)}&body=${encodeURIComponent(activeBody)}`;
    window.location.href = mailtoUrl;
    setMessageSentFeedback(true);
    setTimeout(() => setMessageSentFeedback(false), 4000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#121212] shadow-tactile rounded-full text-xs font-mono font-bold text-[#121212] mb-2.5">
            <Mail size={13} className="text-blue-600" />
            <span>INTERACTIVE iOS MAIL COMPOSER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] tracking-tight flex items-center justify-center gap-2">
            <span>Start a Conversation</span>
            <DoodleSparkle className="w-7 h-7 text-[#1A1A1A] hidden sm:inline-block" strokeColor="#1A1A1A" />
          </h2>

          <div className="w-48 mx-auto mt-2">
            <DoodleUnderline className="w-full h-4 text-[#1A1A1A]" strokeColor="#1A1A1A" />
          </div>

          <p className="font-hand text-lg sm:text-xl text-stone-600 mt-2 max-w-xl mx-auto">
            Pick a topic pill below to generate a tailored draft, or use the one-click copy buttons.
          </p>
        </div>

        {/* Quick Contact Pill Bar: One-Click Copy */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          
          {/* Email Card */}
          <div className="tactile-card p-3.5 rounded-2xl bg-white border-[1.8px] border-[#121212] flex items-center justify-between group">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center flex-shrink-0">
                <Mail size={16} />
              </div>
              <div className="truncate">
                <span className="text-[10px] font-mono uppercase text-[#625E56] block font-bold">Email</span>
                <span className="text-xs font-bold text-[#121212] truncate block">koushhikiroy@gmail.com</span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard('koushhikiroy@gmail.com', 'email')}
              className="tactile-btn p-1.5 rounded-lg bg-neutral-100 hover:bg-[#FEF08A] text-[#121212] transition-colors flex-shrink-0 ml-2"
              title="Copy email to clipboard"
            >
              {copiedItem === 'email' ? <CheckCheck size={14} className="text-emerald-700" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="tactile-card p-3.5 rounded-2xl bg-white border-[1.8px] border-[#121212] flex items-center justify-between group">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                <Phone size={16} />
              </div>
              <div className="truncate">
                <span className="text-[10px] font-mono uppercase text-[#625E56] block font-bold">Phone / WhatsApp</span>
                <span className="text-xs font-bold text-[#121212] truncate block">+91 898 1788 534</span>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
              <a
                href="https://wa.me/918981788534"
                target="_blank"
                rel="noreferrer"
                className="tactile-btn p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={14} />
              </a>
              <button
                onClick={() => copyToClipboard('+91 898 1788 534', 'phone')}
                className="tactile-btn p-1.5 rounded-lg bg-neutral-100 hover:bg-[#FEF08A] text-[#121212] transition-colors"
                title="Copy phone number"
              >
                {copiedItem === 'phone' ? <CheckCheck size={14} className="text-emerald-700" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="tactile-card p-3.5 rounded-2xl bg-white border-[1.8px] border-[#121212] flex items-center justify-between group">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center flex-shrink-0">
                <LinkedinIcon size={16} />
              </div>
              <div className="truncate">
                <span className="text-[10px] font-mono uppercase text-[#625E56] block font-bold">LinkedIn</span>
                <span className="text-xs font-bold text-[#121212] truncate block">/in/koushhikiroy</span>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
              <a
                href="https://www.linkedin.com/in/koushhikiroy"
                target="_blank"
                rel="noreferrer"
                className="tactile-btn p-1.5 rounded-lg bg-sky-100 hover:bg-sky-200 text-sky-800 transition-colors"
                title="Open LinkedIn Profile"
              >
                <ExternalLink size={14} />
              </a>
              <button
                onClick={() => copyToClipboard('https://www.linkedin.com/in/koushhikiroy', 'linkedin')}
                className="tactile-btn p-1.5 rounded-lg bg-neutral-100 hover:bg-[#FEF08A] text-[#121212] transition-colors"
                title="Copy LinkedIn URL"
              >
                {copiedItem === 'linkedin' ? <CheckCheck size={14} className="text-emerald-700" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

        </div>

        {/* Hand-drawn Curved Pointer Arrow Pointing directly toward the iOS Mail Card */}
        <div className="flex items-center justify-end gap-2 pr-6 mb-2 text-[#1A1A1A]">
          <span className="font-hand text-base font-bold rotate-[-3deg] text-[#1A1A1A]">
            draft your message right here ✍️
          </span>
          <DoodleArrow className="w-12 h-10 text-[#1A1A1A]" strokeColor="#1A1A1A" />
        </div>

        {/* The iOS Mail Composer Card */}
        <div className="relative bg-white border-[2px] border-[#121212] rounded-3xl shadow-tactile-lg overflow-hidden">
          
          {/* iOS Mail Modal Bar */}
          <div className="bg-[#F6F4ED] border-b border-[#E5E0D5] px-4 sm:px-6 py-3 flex items-center justify-between select-none">
            <button 
              type="button"
              onClick={() => {
                playClick();
                setCustomMessage('');
              }}
              className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Reset Draft
            </button>

            <div className="font-bold text-xs sm:text-sm text-[#121212] flex items-center gap-1.5">
              <span>New Message</span>
            </div>

            <button
              onClick={handleSendMail}
              className="tactile-btn flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700"
            >
              <Send size={12} />
              <span>Send</span>
            </button>
          </div>

          {/* Form Fields Header */}
          <form onSubmit={handleSendMail} className="p-4 sm:p-6 space-y-3">
            
            {/* To Field */}
            <div className="flex items-center border-b border-[#E8E4DA] pb-2.5">
              <span className="font-mono text-xs text-[#8C867A] w-14">To:</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>koushhikiroy@gmail.com</span>
                <span className="text-[10px] text-blue-700 font-mono">(Koushhiki Roy)</span>
              </div>
            </div>

            {/* From / Sender Field */}
            <div className="flex items-center border-b border-[#E8E4DA] pb-2.5">
              <span className="font-mono text-xs text-[#8C867A] w-14">From:</span>
              <input
                type="email"
                placeholder="your.email@organization.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full text-xs sm:text-sm text-[#121212] placeholder-stone-400 bg-transparent focus:outline-none font-medium"
              />
            </div>

            {/* Subject Line */}
            <div className="flex items-center border-b border-[#E8E4DA] pb-2.5">
              <span className="font-mono text-xs text-[#8C867A] w-14">Subject:</span>
              <input
                type="text"
                readOnly
                value={activeSubject}
                className="w-full text-xs sm:text-sm font-bold text-[#121212] bg-transparent focus:outline-none"
              />
            </div>

            {/* Topic Selector Pills */}
            <div className="pt-2 pb-1">
              <div className="text-[11px] font-mono text-[#625E56] font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                <Sparkles size={12} className="text-amber-600" />
                <span>Select a Conversation Topic (Generates auto-draft)</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleTopicSelect(t.id)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                      selectedTopic === t.id
                        ? 'bg-[#121212] text-white border-[#121212] shadow-sm'
                        : 'bg-[#F4F1EA] text-[#282828] border-[#D5D0C5] hover:border-[#121212]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Body Textarea */}
            <div className="pt-2">
              <label className="text-[10px] font-mono text-[#8C867A] uppercase block mb-1">
                Editable Message Draft
              </label>
              <textarea
                rows={7}
                value={activeBody}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2DED5] text-xs sm:text-sm font-sans text-[#121212] focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212] leading-relaxed resize-y"
              />
            </div>

            {/* Action Bar inside iOS composer */}
            <div className="pt-3 border-t border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(activeBody, 'draft')}
                  className="tactile-btn flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F4F1EA] border border-[#121212] text-xs font-bold text-[#121212] hover:bg-[#EFECE6]"
                >
                  {copiedItem === 'draft' ? <CheckCheck size={14} className="text-emerald-700" /> : <Copy size={14} />}
                  <span>{copiedItem === 'draft' ? 'Draft Copied! ✓' : 'Copy Text Draft'}</span>
                </button>

                <span className="font-hand text-xs text-stone-500 hidden sm:inline">
                  (works with any email client)
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto tactile-btn flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-bold hover:bg-blue-700"
              >
                <Send size={14} />
                <span>Open in Mail App & Send</span>
              </button>
            </div>

            {messageSentFeedback && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-center text-xs font-mono text-emerald-800 animate-in fade-in">
                ✓ Launching your device’s default mail app to send to koushhikiroy@gmail.com!
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
