

const Footer = () => {
    return (
      <footer className="bg-black text-white mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
           
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-400">Agentia World</h3>
              <p className="text-sm text-gray-300">
                Next-generation AI agents powering the future of enterprise intelligence.
              </p>
            </div>
  
           
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Documentation', 'API'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
          
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h4>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Legal</h4>
              <ul className="space-y-2">
                {['Privacy', 'Terms', 'Security', 'Compliance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
     
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                © {new Date().getFullYear()} Agentia World. Powered by Panaversity. All rights reserved.
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;