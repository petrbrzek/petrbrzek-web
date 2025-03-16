
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Petr Brzek. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="https://macaly.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/80 to-primary/40 text-primary-foreground hover:from-primary/90 hover:to-primary/50 transition-all duration-300 shadow-sm hover:shadow font-medium"
            >
              Created with Macaly
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
