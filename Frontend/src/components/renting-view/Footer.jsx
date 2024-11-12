import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* About Us Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p>
            We provide a convenient platform for renting high-quality sports equipment. Our mission is to make sports accessible and affordable for everyone.
          </p>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p>Email: <a href="mailto:support@sportsrentals.com" className="hover:text-white">support@sportsrentals.com</a></p>
          <p>Phone: <a href="tel:+11234567890" className="hover:text-white">+1 (123) 456-7890</a></p>
          <div className="mt-4 flex space-x-4">
            {/* Social Media Icons */}
            <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">Facebook</a>
            <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">Twitter</a>
            <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">Instagram</a>
          </div>
        </div>

      </div>
      <div className="text-center mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} Sports Rentals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer