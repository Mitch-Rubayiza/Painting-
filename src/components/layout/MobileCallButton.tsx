import { Phone } from "lucide-react";

export function MobileCallButton() {
  return (
    <a
      href="tel:647-854-9093"
      className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-accent shadow-accent flex items-center justify-center animate-float"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 text-accent-foreground" />
    </a>
  );
}
