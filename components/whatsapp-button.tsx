"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        onClick={() => window.open("https://wa.me/33658535378", "_blank")}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
