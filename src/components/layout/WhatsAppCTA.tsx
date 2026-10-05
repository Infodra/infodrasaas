import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/constants";

export function WhatsAppCTA() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Infodra (opens in a new tab)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 sm:px-5"
    >
      <span aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-full border-2 border-green-400 motion-safe:animate-pulse" />
      <MessageCircle aria-hidden="true" className="h-6 w-6 shrink-0" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
