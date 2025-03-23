import { MacalyBadge } from "./macaly-badge";

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
            <MacalyBadge />
          </div>
        </div>
      </div>
    </footer>
  );
}