"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const whatsappNumber = "5491123456789"
  const whatsappMessage = "Hola, me gustaría consultar sobre servicios legales."

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  )
}
