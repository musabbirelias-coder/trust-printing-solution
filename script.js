/* Trust Printing Solution — script.js (vanilla JS, no dependencies) */
(function () {
  'use strict';

  /* ===== CONFIG: update after deployment ===== */
  var CONFIG = {
    // Your production URL, with trailing slash. Also update robots.txt and sitemap.xml.
    siteUrl: 'https://YOUR-USERNAME.github.io/trust-printing-solution/',
    whatsappNumber: '8801938986723'
  };

  var STORAGE_KEY = 'tps-lang';

  /* ===== TRANSLATIONS ===== */
  var I18N = {
    en: {
      'skip': 'Skip to content',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact',
      'nav.order': 'WhatsApp Order', 'nav.menu': 'Menu',
      'tagline': 'Your Vision, Our Printing Excellence.',
      'hero.eyebrow': 'Printing · Design · Branding',
      'hero.title': 'Bring Your Ideas to Life with Quality Printing.',
      'hero.desc': 'Professional printing solutions for businesses, brands, and individuals. Quality printing, creative design, and reliable service.',
      'hero.cta1': 'Explore Our Services', 'hero.cta2': 'Get a Quote', 'hero.cta3': 'WhatsApp Us',
      'demo.tag': 'Demonstration visuals', 'demo.note': 'Images shown are demonstration visuals.',
      'about.label': 'About', 'about.title': 'Who We Are',
      'about.text': 'Trust Printing Solution is dedicated to providing professional printing solutions for businesses, organizations, and individuals. From business cards to banners, posters, brochures, flyers, and ID cards, we aim to deliver quality printing with attention to detail and customer satisfaction.',
      'aud.1': 'Small and medium businesses', 'aud.2': 'Corporate organizations', 'aud.3': 'Educational institutions', 'aud.4': 'Personal customers',
      'services.label': 'What We Do', 'services.title': 'Our Services', 'services.sub': 'Printing services for business, organization and personal needs.',
      's1.t': 'Business Card Printing', 's1.d': 'Professional business cards that make a strong first impression.',
      's2.t': 'Banner Printing', 's2.d': 'Eye-catching banners for shops, events, promotions and announcements.',
      's3.t': 'Poster Printing', 's3.d': 'Clear, vibrant posters for campaigns, events and display.',
      's4.t': 'Brochure Printing', 's4.d': 'Well-organized brochures to present your products and services.',
      's5.t': 'Flyer Printing', 's5.d': 'Simple, effective flyers to spread your message.',
      's6.t': 'ID Card Printing', 's6.d': 'ID cards for organizations, institutions and teams.',
      'btn.inquire': 'Inquire',
      'why.label': 'Why Trust Printing Solution', 'why.title': 'Why Choose Us',
      'why.1t': 'Professional Printing Solutions', 'why.1d': 'Printing services designed around the needs of businesses and individuals.',
      'why.2t': 'Attention to Detail', 'why.2d': 'We care about the small details that make your print look right.',
      'why.3t': 'Multiple Printing Services', 'why.3d': 'From business cards to banners and ID cards, find your print needs in one place.',
      'why.4t': 'Customer-Focused Approach', 'why.4d': 'We listen to your requirements and work to meet them.',
      'why.5t': 'Convenient Communication', 'why.5d': 'Reach us easily through WhatsApp or email.',
      'pf.label': 'Gallery', 'pf.title': 'Our Portfolio', 'pf.sub': 'Demonstration visuals shown below. These will be replaced with our actual work.',
      'f.all': 'All', 'f.card': 'Business Cards', 'f.poster': 'Posters', 'f.banner': 'Banners', 'f.brochure': 'Brochures', 'f.flyer': 'Flyers', 'f.id': 'ID Cards',
      'f.card1': 'Business Card · Demo', 'f.card2': 'Business Card · Demo', 'f.poster1': 'Poster · Demo', 'f.poster2': 'Poster · Demo',
      'f.banner1': 'Banner · Demo', 'f.banner2': 'Banner · Demo', 'f.brochure1': 'Brochure · Demo', 'f.brochure2': 'Brochure · Demo',
      'f.flyer1': 'Flyer · Demo', 'f.flyer2': 'Flyer · Demo', 'f.id1': 'ID Card · Demo', 'f.id2': 'ID Card · Demo',
      'alt.card': 'Demonstration business card mockup', 'alt.banner': 'Demonstration banner mockup', 'alt.poster': 'Demonstration poster mockup',
      'alt.brochure': 'Demonstration brochure mockup', 'alt.flyer': 'Demonstration flyer mockup', 'alt.id': 'Demonstration ID card mockup',
      'pr.label': 'How It Works', 'pr.title': 'Our Working Process',
      'pr.1t': 'Share Your Requirements', 'pr.1d': 'Tell us what you need to print, with size and quantity.',
      'pr.2t': 'Discuss Your Design', 'pr.2d': 'Share your design or ideas and talk through the details with us.',
      'pr.3t': 'Confirm Your Order', 'pr.3d': 'Review the details and confirm your order with us.',
      'pr.4t': 'Printing & Delivery', 'pr.4d': 'We print your order. Ask us about delivery options for your order.',
      'rv.label': 'Feedback', 'rv.title': 'Share Your Feedback',
      'rv.text': 'Have you worked with Trust Printing Solution? We would love to hear about your experience. Send us your feedback on WhatsApp or by email.',
      'rv.wa': 'Send Feedback on WhatsApp', 'rv.mail': 'Send Feedback by Email',
      'faq.label': 'FAQ', 'faq.title': 'Frequently Asked Questions',
      'faq.1q': 'What printing services do you offer?', 'faq.1a': 'We offer business card, banner, poster, brochure, flyer and ID card printing. If you need something else, message us and ask.',
      'faq.2q': 'How can I request a quotation?', 'faq.2a': 'Send us your requirements (item, size and quantity) on WhatsApp or by email, and we will get back to you.',
      'faq.3q': 'Can I share my own design?', 'faq.3a': 'You are welcome to share your own design or ideas with us on WhatsApp or by email, and we will discuss it with you.',
      'faq.4q': 'How do I place an order?', 'faq.4a': 'Contact us on WhatsApp or by email with your requirements. After we discuss the details, you can confirm your order with us.',
      'faq.5q': 'How can I contact Trust Printing Solution?', 'faq.5a': 'You can reach us on WhatsApp at +8801938-986723 or by email at trustprintingsolution.bd@gmail.com.',
      'ct.label': 'Get in Touch', 'ct.title': 'Contact Us', 'ct.sub': 'Message us on WhatsApp or send an email with your printing requirements.',
      'ct.wa': 'Chat on WhatsApp', 'ct.mail': 'Send Email', 'ct.dir': 'Get Directions',
      'ct.name': 'Business Name', 'ct.email': 'Email', 'ct.addr': 'Address', 'ct.addrv': '225, Lohar Building, Dhaka, Bangladesh, 1000.',
      'ft.links': 'Quick Links', 'ft.rights': 'All rights reserved.',
      'wa.float': 'Chat on WhatsApp', 'totop': 'Back to top',
      'lb.label': 'Image preview', 'lb.close': 'Close', 'lb.prev': 'Previous image', 'lb.next': 'Next image',
      'wa.msg.general': 'Hello Trust Printing Solution, I would like to know more about your printing services.',
      'wa.msg.quote': 'Hello Trust Printing Solution, I would like to get a quote for printing.',
      'wa.msg.feedback': 'Hello Trust Printing Solution, I would like to share my feedback.',
      'wa.msg.service': 'Hello Trust Printing Solution, I would like to inquire about: {service}.'
    },
    bn: {
      'skip': 'মূল অংশে যান',
      'nav.home': 'হোম', 'nav.about': 'আমাদের সম্পর্কে', 'nav.services': 'সেবাসমূহ', 'nav.portfolio': 'পোর্টফোলিও', 'nav.contact': 'যোগাযোগ',
      'nav.order': 'হোয়াটসঅ্যাপে অর্ডার', 'nav.menu': 'মেনু',
      'tagline': 'আপনার ভাবনা, আমাদের প্রিন্টিং দক্ষতা।',
      'hero.eyebrow': 'প্রিন্টিং · ডিজাইন · ব্র্যান্ডিং',
      'hero.title': 'আপনার ভাবনাকে দিন প্রিন্টের সুন্দর রূপ।',
      'hero.desc': 'ব্যবসা প্রতিষ্ঠান, ব্র্যান্ড এবং ব্যক্তিগত প্রয়োজনে পেশাদার প্রিন্টিং সল্যুশন। মানসম্মত প্রিন্টিং, সৃজনশীল ডিজাইন এবং নির্ভরযোগ্য সেবা।',
      'hero.cta1': 'আমাদের সেবাসমূহ দেখুন', 'hero.cta2': 'কোটেশন নিন', 'hero.cta3': 'হোয়াটসঅ্যাপে মেসেজ করুন',
      'demo.tag': 'নমুনা ছবি', 'demo.note': 'এখানে দেখানো ছবিগুলো নমুনা (ডেমো) ছবি।',
      'about.label': 'আমাদের সম্পর্কে', 'about.title': 'আমরা কারা',
      'about.text': 'ট্রাস্ট প্রিন্টিং সল্যুশন ব্যবসা প্রতিষ্ঠান, সংস্থা ও ব্যক্তিগত গ্রাহকদের জন্য পেশাদার প্রিন্টিং সেবা দিতে নিবেদিত। বিজনেস কার্ড থেকে শুরু করে ব্যানার, পোস্টার, ব্রোশিওর, ফ্লায়ার এবং আইডি কার্ড—প্রতিটি কাজে আমরা খুঁটিনাটি বিষয়ে মনোযোগ দিয়ে এবং গ্রাহকের সন্তুষ্টির কথা মাথায় রেখে মানসম্মত প্রিন্টিং দিতে চেষ্টা করি।',
      'aud.1': 'ছোট ও মাঝারি ব্যবসা', 'aud.2': 'কর্পোরেট প্রতিষ্ঠান', 'aud.3': 'শিক্ষা প্রতিষ্ঠান', 'aud.4': 'ব্যক্তিগত গ্রাহক',
      'services.label': 'আমরা যা করি', 'services.title': 'আমাদের সেবাসমূহ', 'services.sub': 'ব্যবসা, প্রতিষ্ঠান ও ব্যক্তিগত প্রয়োজনের জন্য প্রিন্টিং সেবা।',
      's1.t': 'বিজনেস কার্ড প্রিন্টিং', 's1.d': 'প্রথম দেখাতেই ভালো ছাপ ফেলে এমন পেশাদার বিজনেস কার্ড।',
      's2.t': 'ব্যানার প্রিন্টিং', 's2.d': 'দোকান, অনুষ্ঠান, প্রচারণা ও ঘোষণার জন্য দৃষ্টিনন্দন ব্যানার।',
      's3.t': 'পোস্টার প্রিন্টিং', 's3.d': 'ক্যাম্পেইন, অনুষ্ঠান ও প্রদর্শনের জন্য স্পষ্ট ও উজ্জ্বল পোস্টার।',
      's4.t': 'ব্রোশিওর প্রিন্টিং', 's4.d': 'আপনার পণ্য ও সেবা তুলে ধরার জন্য সুসংগঠিত ব্রোশিওর।',
      's5.t': 'ফ্লায়ার প্রিন্টিং', 's5.d': 'আপনার বার্তা ছড়িয়ে দিতে সহজ ও কার্যকর ফ্লায়ার।',
      's6.t': 'আইডি কার্ড প্রিন্টিং', 's6.d': 'প্রতিষ্ঠান, শিক্ষাপ্রতিষ্ঠান ও দলের জন্য আইডি কার্ড।',
      'btn.inquire': 'জানতে চাই',
      'why.label': 'কেন ট্রাস্ট প্রিন্টিং সল্যুশন', 'why.title': 'কেন আমাদের বেছে নেবেন',
      'why.1t': 'পেশাদার প্রিন্টিং সল্যুশন', 'why.1d': 'ব্যবসা প্রতিষ্ঠান ও ব্যক্তির প্রয়োজন অনুযায়ী সাজানো প্রিন্টিং সেবা।',
      'why.2t': 'খুঁটিনাটির প্রতি মনোযোগ', 'why.2d': 'আপনার প্রিন্ট সঠিক দেখাতে ছোট ছোট বিষয়েও আমরা যত্ন নিই।',
      'why.3t': 'একাধিক প্রিন্টিং সেবা', 'why.3d': 'বিজনেস কার্ড থেকে ব্যানার ও আইডি কার্ড—আপনার প্রিন্টিং প্রয়োজন এক জায়গায়।',
      'why.4t': 'গ্রাহকবান্ধব দৃষ্টিভঙ্গি', 'why.4d': 'আমরা আপনার চাহিদা মনোযোগ দিয়ে শুনি এবং তা পূরণে কাজ করি।',
      'why.5t': 'সহজ যোগাযোগ', 'why.5d': 'হোয়াটসঅ্যাপ বা ইমেইলে সহজেই আমাদের সঙ্গে যোগাযোগ করুন।',
      'pf.label': 'গ্যালারি', 'pf.title': 'আমাদের পোর্টফোলিও', 'pf.sub': 'নিচে নমুনা ছবি দেখানো হয়েছে। পরে এগুলো আমাদের প্রকৃত কাজ দিয়ে প্রতিস্থাপন করা হবে।',
      'f.all': 'সব', 'f.card': 'বিজনেস কার্ড', 'f.poster': 'পোস্টার', 'f.banner': 'ব্যানার', 'f.brochure': 'ব্রোশিওর', 'f.flyer': 'ফ্লায়ার', 'f.id': 'আইডি কার্ড',
      'f.card1': 'বিজনেস কার্ড · নমুনা', 'f.card2': 'বিজনেস কার্ড · নমুনা', 'f.poster1': 'পোস্টার · নমুনা', 'f.poster2': 'পোস্টার · নমুনা',
      'f.banner1': 'ব্যানার · নমুনা', 'f.banner2': 'ব্যানার · নমুনা', 'f.brochure1': 'ব্রোশিওর · নমুনা', 'f.brochure2': 'ব্রোশিওর · নমুনা',
      'f.flyer1': 'ফ্লায়ার · নমুনা', 'f.flyer2': 'ফ্লায়ার · নমুনা', 'f.id1': 'আইডি কার্ড · নমুনা', 'f.id2': 'আইডি কার্ড · নমুনা',
      'alt.card': 'বিজনেস কার্ডের নমুনা মকআপ', 'alt.banner': 'ব্যানারের নমুনা মকআপ', 'alt.poster': 'পোস্টারের নমুনা মকআপ',
      'alt.brochure': 'ব্রোশিওরের নমুনা মকআপ', 'alt.flyer': 'ফ্লায়ারের নমুনা মকআপ', 'alt.id': 'আইডি কার্ডের নমুনা মকআপ',
      'pr.label': 'কীভাবে কাজ হয়', 'pr.title': 'আমাদের কাজের ধাপ',
      'pr.1t': 'আপনার চাহিদা জানান', 'pr.1d': 'কী প্রিন্ট করাতে চান, তার সাইজ ও পরিমাণসহ আমাদের জানান।',
      'pr.2t': 'ডিজাইন নিয়ে আলোচনা করুন', 'pr.2d': 'আপনার ডিজাইন বা আইডিয়া শেয়ার করুন এবং বিস্তারিত আমাদের সঙ্গে আলোচনা করুন।',
      'pr.3t': 'অর্ডার নিশ্চিত করুন', 'pr.3d': 'বিস্তারিত দেখে নিয়ে আমাদের কাছে আপনার অর্ডার নিশ্চিত করুন।',
      'pr.4t': 'প্রিন্টিং ও ডেলিভারি', 'pr.4d': 'আমরা আপনার অর্ডার প্রিন্ট করি। ডেলিভারির বিকল্প সম্পর্কে আমাদের জিজ্ঞাসা করুন।',
      'rv.label': 'মতামত', 'rv.title': 'আপনার মতামত জানান',
      'rv.text': 'আপনি কি ট্রাস্ট প্রিন্টিং সল্যুশনের সঙ্গে কাজ করেছেন? আপনার অভিজ্ঞতা শুনতে আমরা আগ্রহী। হোয়াটসঅ্যাপ বা ইমেইলে আপনার মতামত পাঠান।',
      'rv.wa': 'হোয়াটসঅ্যাপে মতামত পাঠান', 'rv.mail': 'ইমেইলে মতামত পাঠান',
      'faq.label': 'সাধারণ জিজ্ঞাসা', 'faq.title': 'প্রায়শ জিজ্ঞাসিত প্রশ্ন',
      'faq.1q': 'আপনারা কী কী প্রিন্টিং সেবা দেন?', 'faq.1a': 'আমরা বিজনেস কার্ড, ব্যানার, পোস্টার, ব্রোশিওর, ফ্লায়ার ও আইডি কার্ড প্রিন্টিং সেবা দিই। অন্য কিছুর প্রয়োজন হলে আমাদের মেসেজ করে জিজ্ঞাসা করুন।',
      'faq.2q': 'কোটেশন পেতে কী করতে হবে?', 'faq.2a': 'হোয়াটসঅ্যাপ বা ইমেইলে আপনার চাহিদা (আইটেম, সাইজ ও পরিমাণ) পাঠান, আমরা আপনার সঙ্গে যোগাযোগ করব।',
      'faq.3q': 'আমি কি নিজের ডিজাইন দিতে পারি?', 'faq.3a': 'আপনি হোয়াটসঅ্যাপ বা ইমেইলে নিজের ডিজাইন বা আইডিয়া আমাদের সঙ্গে শেয়ার করতে পারেন, আমরা আপনার সঙ্গে তা নিয়ে আলোচনা করব।',
      'faq.4q': 'কীভাবে অর্ডার করব?', 'faq.4a': 'হোয়াটসঅ্যাপ বা ইমেইলে আপনার চাহিদা জানিয়ে আমাদের সঙ্গে যোগাযোগ করুন। বিস্তারিত আলোচনার পর আপনি অর্ডার নিশ্চিত করতে পারবেন।',
      'faq.5q': 'ট্রাস্ট প্রিন্টিং সল্যুশনের সঙ্গে কীভাবে যোগাযোগ করব?', 'faq.5a': 'আপনি হোয়াটসঅ্যাপে +8801938-986723 নম্বরে অথবা trustprintingsolution.bd@gmail.com ঠিকানায় ইমেইল করে আমাদের সঙ্গে যোগাযোগ করতে পারেন।',
      'ct.label': 'যোগাযোগ করুন', 'ct.title': 'যোগাযোগ', 'ct.sub': 'হোয়াটসঅ্যাপে মেসেজ করুন অথবা আপনার প্রিন্টিং চাহিদা জানিয়ে ইমেইল পাঠান।',
      'ct.wa': 'হোয়াটসঅ্যাপে চ্যাট করুন', 'ct.mail': 'ইমেইল পাঠান', 'ct.dir': 'ম্যাপে দেখুন',
      'ct.name': 'প্রতিষ্ঠানের নাম', 'ct.email': 'ইমেইল', 'ct.addr': 'ঠিকানা', 'ct.addrv': '২২৫, লোহার বিল্ডিং, ঢাকা, বাংলাদেশ, ১০০০।',
      'ft.links': 'দ্রুত লিংক', 'ft.rights': 'সর্বস্বত্ব সংরক্ষিত।',
      'wa.float': 'হোয়াটসঅ্যাপে চ্যাট করুন', 'totop': 'উপরে যান',
      'lb.label': 'ছবির প্রিভিউ', 'lb.close': 'বন্ধ করুন', 'lb.prev': 'আগের ছবি', 'lb.next': 'পরের ছবি',
      'wa.msg.general': 'হ্যালো ট্রাস্ট প্রিন্টিং সল্যুশন, আমি আপনাদের প্রিন্টিং সেবা সম্পর্কে আরও জানতে চাই।',
      'wa.msg.quote': 'হ্যালো ট্রাস্ট প্রিন্টিং সল্যুশন, আমি প্রিন্টিংয়ের জন্য একটি কোটেশন চাই।',
      'wa.msg.feedback': 'হ্যালো ট্রাস্ট প্রিন্টিং সল্যুশন, আমি আমার মতামত জানাতে চাই।',
      'wa.msg.service': 'হ্যালো ট্রাস্ট প্রিন্টিং সল্যুশন, আমি {service} সম্পর্কে জানতে চাই।'
    }
  };

  var META = {
    en: {
      title: 'Trust Printing Solution | Printing Services in Dhaka, Bangladesh',
      desc: 'Trust Printing Solution is a printing company in Dhaka, Bangladesh offering business card, banner, poster, brochure, flyer and ID card printing. Request a quote on WhatsApp.'
    },
    bn: {
      title: 'ট্রাস্ট প্রিন্টিং সল্যুশন | ঢাকা, বাংলাদেশে প্রিন্টিং সেবা',
      desc: 'ট্রাস্ট প্রিন্টিং সল্যুশন ঢাকা, বাংলাদেশে বিজনেস কার্ড, ব্যানার, পোস্টার, ব্রোশিওর, ফ্লায়ার ও আইডি কার্ড প্রিন্টিং সেবা দেয়। হোয়াটসঅ্যাপে কোটেশন চান।'
    }
  };

  var currentLang = 'en';

  /* ===== Helpers ===== */
  function t(key) {
    var d = I18N[currentLang];
    return (d && d[key] !== undefined) ? d[key] : (I18N.en[key] || '');
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ===== WhatsApp links ===== */
  function buildWaLinks() {
    $all('[data-wa]').forEach(function (a) {
      var type = a.getAttribute('data-wa');
      var msg;
      if (type === 'service') {
        var name = t(a.getAttribute('data-service'));
        msg = t('wa.msg.service').replace('{service}', name);
      } else {
        msg = t('wa.msg.' + type) || t('wa.msg.general');
      }
      a.href = 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(msg);
    });
  }

  /* ===== Language ===== */
  function applyLang(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    $all('[data-i18n]').forEach(function (el) {
      var v = I18N[lang][el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });
    $all('[data-i18n-alt]').forEach(function (el) {
      var v = I18N[lang][el.getAttribute('data-i18n-alt')];
      if (v !== undefined) el.setAttribute('alt', v);
    });
    $all('[data-i18n-aria]').forEach(function (el) {
      var v = I18N[lang][el.getAttribute('data-i18n-aria')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    $all('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });

    document.title = META[lang].title;
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', META[lang].desc);
    var ogt = $('meta[property="og:title"]');
    if (ogt) ogt.setAttribute('content', META[lang].title);
    var ogd = $('meta[property="og:description"]');
    if (ogd) ogd.setAttribute('content', META[lang].desc);

    buildWaLinks();
    updateLightboxCaption();
    safeSet(STORAGE_KEY, lang);
  }

  /* ===== Site URL (canonical, OG, JSON-LD) ===== */
  function applySiteUrl() {
    var url = CONFIG.siteUrl;
    if (!url || url.indexOf('YOUR-USERNAME') !== -1) return; // leave placeholders until configured
    var base = url.replace(/\/?$/, '/');
    var c = $('link[rel="canonical"]'); if (c) c.href = base;
    var og = $('meta[property="og:url"]'); if (og) og.setAttribute('content', base);
    var ogi = $('meta[property="og:image"]'); if (ogi) ogi.setAttribute('content', base + 'assets/logo/logo.png');
    var ld = $('#ld-json');
    if (ld) {
      try {
        var data = JSON.parse(ld.textContent);
        data.url = base; data.logo = base + 'assets/logo/logo.png'; data.image = base + 'assets/logo/logo.png';
        ld.textContent = JSON.stringify(data, null, 2);
      } catch (e) { /* ignore */ }
    }
  }

  /* ===== Mobile menu ===== */
  function initMenu() {
    var toggle = $('#menu-toggle'), nav = $('#main-nav');
    if (!toggle || !nav) return;
    function set(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    toggle.addEventListener('click', function () { set(toggle.getAttribute('aria-expanded') !== 'true'); });
    $all('a', nav).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { set(false); toggle.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) set(false);
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) set(false); });
  }

  /* ===== Header, back-to-top, active link ===== */
  function initScrollUi() {
    var header = $('.site-header'), top = $('#to-top');
    function onScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      if (header) header.classList.toggle('is-scrolled', y > 8);
      if (top) top.hidden = y < 600;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (top) top.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      var h = $('#home'); if (h) { /* keep focus order sensible */ $('.brand').focus(); }
    });

    var links = $all('.main-nav ul a');
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && map[en.target.id]) {
            links.forEach(function (l) { l.classList.remove('is-active'); l.removeAttribute('aria-current'); });
            map[en.target.id].classList.add('is-active');
            map[en.target.id].setAttribute('aria-current', 'true');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ===== Reveal on scroll ===== */
  function initReveal() {
    var els = $all('.reveal');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach(function (e) { e.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ===== Portfolio filters ===== */
  function initFilters() {
    var buttons = $all('.filter'), items = $all('.g-item');
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.getAttribute('data-filter');
        buttons.forEach(function (x) {
          var on = x === b;
          x.classList.toggle('is-active', on);
          x.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        items.forEach(function (it) {
          it.hidden = !(f === 'all' || it.getAttribute('data-cat') === f);
        });
      });
    });
  }

  /* ===== Lightbox ===== */
  var lb, lbImg, lbCap, lbIndex = 0, lbLast = null;
  function visibleButtons() {
    return $all('.g-item:not([hidden]) .g-btn');
  }
  function showLb(i) {
    var list = visibleButtons();
    if (!list.length) return;
    lbIndex = (i + list.length) % list.length;
    var btn = list[lbIndex], img = $('img', btn);
    lbImg.src = img.getAttribute('src');
    lbImg.alt = img.getAttribute('alt') || '';
    lbCap.setAttribute('data-key', btn.getAttribute('data-cap'));
    updateLightboxCaption();
  }
  function updateLightboxCaption() {
    if (!lbCap) return;
    var key = lbCap.getAttribute('data-key');
    if (key) lbCap.textContent = t(key);
    var list = visibleButtons();
    if (lbImg && list[lbIndex] && lb && lb.open) lbImg.alt = $('img', list[lbIndex]).getAttribute('alt') || '';
  }
  function initLightbox() {
    lb = $('#lightbox'); lbImg = $('#lb-img'); lbCap = $('#lb-cap');
    if (!lb) return;
    var supportsDialog = typeof lb.showModal === 'function';
    $all('.g-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var list = visibleButtons();
        lbLast = btn;
        showLb(list.indexOf(btn));
        if (supportsDialog) lb.showModal(); else lb.setAttribute('open', '');
        $('#lb-close').focus();
      });
    });
    function close() {
      if (supportsDialog) lb.close(); else lb.removeAttribute('open');
      if (lbLast) lbLast.focus();
    }
    $('#lb-close').addEventListener('click', close);
    $('#lb-prev').addEventListener('click', function () { showLb(lbIndex - 1); });
    $('#lb-next').addEventListener('click', function () { showLb(lbIndex + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); showLb(lbIndex - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); showLb(lbIndex + 1); }
      else if (e.key === 'Escape' && !supportsDialog) close();
    });
    lb.addEventListener('close', function () { if (lbLast) lbLast.focus(); });
  }

  /* ===== Init ===== */
  function init() {
    var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
    applySiteUrl();

    $all('[data-set-lang]').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-set-lang')); });
    });

    var saved = safeGet(STORAGE_KEY);
    applyLang(saved === 'bn' ? 'bn' : 'en');

    initMenu();
    initScrollUi();
    initReveal();
    initFilters();
    initLightbox();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
