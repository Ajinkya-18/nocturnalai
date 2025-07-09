
const Footer = () => {
  return (
    <footer className="bg-noct-navy border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/1986411b-7ec1-44fb-9dbc-2443576a9446.png" 
              alt="NoctAI Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-semibold text-xl">
              Noct<span className="text-noct-electric">AI</span>
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              You dream it, we automate it
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 NoctAI. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Building the future of intelligent automation, one workflow at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
