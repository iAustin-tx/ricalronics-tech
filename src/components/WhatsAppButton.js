export default function WhatsAppButton() {
  const message =
    "Hello Ricalronics Tech Ltd. I would like to enquire about your services.";

  const whatsappUrl = `https://wa.me/2349059630783?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ricalronics Tech Ltd. on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-110"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}
