import Link from 'next/link';

export default function Privacidad() {
  return (
    <main className="bg-black min-h-screen text-gray-300 p-8 md:p-20 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:text-white transition mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">Datos que procesamos</h2>
        <p>Tu IA procesa mensajes de WhatsApp (nombres, pedidos y consultas). <strong>Servin Systems no vende ni comparte estos datos con terceros.</strong> Los datos son procesados exclusivamente para automatizar la atención de tu negocio.</p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-3">Seguridad</h2>
        <p>Implementamos protocolos de seguridad para asegurar que la información de tus clientes esté protegida. Tu negocio es tuyo y tus datos son confidenciales.</p>
        
        <h2 className="text-xl font-semibold text-white mt-6 mb-3">Contacto</h2>
        <p>Para consultas sobre privacidad, puedes escribir a soporte técnico mediante nuestros canales oficiales.</p>
      </div>
    </main>
  );
}