import Link from 'next/link';

export default function Terminos() {
  return (
    <main className="bg-black min-h-screen text-gray-300 p-8 md:p-20 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:text-white transition mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="text-4xl font-bold text-white mb-8">Términos y Condiciones</h1>
        
        <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. El Servicio</h2>
        <p>Servin Systems provee agentes de IA entrenados para atención al cliente. La configuración inicial se realiza en un plazo de 48 a 72 horas hábiles tras la contratación.</p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Pagos y Suscripción</h2>
        <p>El plan "Business Core" tiene un costo de Gs. 350.000 mensuales. La suscripción se factura por adelantado. Si decides cancelar, el servicio permanecerá activo hasta el final del ciclo de facturación pagado.</p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Limitación de Responsabilidad</h2>
        <p>Servin Systems es un proyecto enfocado en el crecimiento de comercios locales en Paraguay. No nos hacemos responsables por fallas externas ajenas a nuestra infraestructura, como caídas globales de los servicios de Meta (WhatsApp).</p>
      </div>
    </main>
  );
}