import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white font-sans overflow-hidden selection:bg-cyan-900 selection:text-white">
      
      {/* CAPA 1: Fondo Dinámico */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/30 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      {/* CAPA 2: Contenido Principal */}
      <div className="relative z-10">
        
        {/* Barra de Navegación */}
        <nav className="w-full p-4 md:p-6 flex justify-between items-center border-b border-white/5 backdrop-blur-md bg-black/20">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative w-20 h-10 md:w-28 md:h-12 flex items-center justify-center">
              <Image src="/logotipo.png" alt="Servin Systems Logo" fill className="object-contain object-center brightness-0 invert drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              SERVIN SYSTEMS
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#arquitectura" className="text-gray-400 hover:text-white transition">Arquitectura</a>
            <a href="#despliegue" className="text-gray-400 hover:text-white transition">Planes</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-20">
          <div className="border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-8 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            INFRAESTRUCTURA DE IA PARA NEGOCIOS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
            Automatiza tus ventas con <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Inteligencia Artificial
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
            Implementamos agentes conversacionales que atienden, cotizan y procesan pedidos 24/7. Escala tu facturación sin saturar tu logística operativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#despliegue" className="bg-white text-black px-8 py-3.5 rounded-lg font-bold hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
              Ver Planes de Implementación
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a href="https://wa.me/595986760148?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20probar%20la%20demo%20de%20Servin%20Burgers" target="_blank" rel="noopener noreferrer" className="border border-gray-700 bg-black/50 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-900 transition flex items-center justify-center text-center gap-2">
              Ver Demo Operativa
            </a>
          </div>
        </section>

        {/* Sección de Arquitectura */}
        <section id="arquitectura" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition duration-300 group">
              <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Latencia Cero</h3>
              <p className="text-gray-400 text-sm leading-relaxed">El sistema procesa y responde consultas en milisegundos, eliminando la fricción de espera y asegurando la retención del cliente.</p>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition duration-300 group">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Operatividad 24/7</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Arquitectura diseñada para capturar el 100% del tráfico fuera del horario comercial. Tu negocio factura mientras duermes.</p>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-indigo-500/50 transition duration-300 group">
              <div className="bg-indigo-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Extracción de Datos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Estructuración automática de pedidos. El bot entrega variables limpias (nombre, dirección, carrito) directamente a tu equipo.</p>
            </div>
          </div>
        </section>

        {/* Sección de Precios */}
        <section id="despliegue" className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Planes y Escalabilidad</h2>
          <p className="text-gray-400 mb-12">Soluciones modulares diseñadas para crecer con el volumen de tu facturación.</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
            
            {/* Plan Esencial */}
            <div className="border border-cyan-900/50 p-8 rounded-2xl bg-black/40 flex flex-col hover:border-cyan-700 transition">
              <h3 className="text-xl font-bold text-white">Esencial</h3>
              <p className="text-3xl font-bold text-cyan-400 my-4">Gs. 290.000<span className="text-sm text-gray-500 font-normal">/mes</span></p>
              <ul className="text-gray-400 space-y-3 mb-8 flex-grow text-sm">
                <li>✓ Hasta 500 interacciones al mes</li>
                <li>✓ Atención y cotización 24/7</li>
                <li>✓ Sincronización de catálogo estático</li>
                <li>✓ Setup bonificado (Gs. 0)</li>
              </ul>
              {/* ENLACE CORREGIDO: Se añade ?plan=esencial */}
              <a href="/checkout-business?plan=esencial" className="w-full text-center border border-cyan-500/50 text-cyan-400 font-semibold py-3 rounded-lg hover:bg-cyan-900/30 transition block">
                Seleccionar Esencial
              </a>
            </div>

            {/* Plan Business */}
            <div className="border-2 border-cyan-500 p-8 rounded-2xl bg-black/60 relative flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-4 py-1 rounded-full text-xs font-bold tracking-wider w-max">MÁS ELEGIDO</div>
              <h3 className="text-xl font-bold text-white">Business</h3>
              <p className="text-3xl font-bold text-cyan-400 my-4">Gs. 390.000<span className="text-sm text-gray-500 font-normal">/mes</span></p>
              <ul className="text-gray-300 space-y-3 mb-8 flex-grow text-sm">
                <li>✓ Hasta 2.000 interacciones al mes</li>
                <li>✓ Redirección a humano según contexto</li>
                <li>✓ Autogestión de inventario (Vía Google Sheets)</li>
                <li>✓ Setup bonificado (Gs. 0)</li>
              </ul>
              {/* ENLACE CORREGIDO: Se añade ?plan=business */}
              <a href="/checkout-business?plan=business" className="w-full text-center bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg transition block">
                Iniciar Prueba de 7 Días
              </a>
            </div>

            {/* Plan Corporativo */}
            <div className="border border-cyan-900/50 p-8 rounded-2xl bg-black/40 flex flex-col hover:border-cyan-700 transition">
              <h3 className="text-xl font-bold text-white">Corporativo</h3>
              <p className="text-3xl font-bold text-cyan-400 my-4">Gs. 690.000+<span className="text-sm text-gray-500 font-normal">/mes</span></p>
              <ul className="text-gray-400 space-y-3 mb-8 flex-grow text-sm">
                <li>✓ Volumen alto/ilimitado (Bajo análisis)</li>
                <li>✓ Integración API Web (Web Scraping / E-commerce)</li>
                <li>✓ Arquitectura multi-sucursal</li>
                <li>✓ Setup sujeto a complejidad de desarrollo</li>
              </ul>
              <a href="https://wa.me/595986760148?text=Hola,%20deseo%20agendar%20una%20reuni%C3%B3n%20para%20cotizar%20el%20Plan%20Corporativo." target="_blank" rel="noopener noreferrer" className="w-full text-center border border-cyan-500/50 text-cyan-400 font-semibold py-3 rounded-lg hover:bg-cyan-900/30 transition block">
                Contactar Ventas
              </a>
            </div>
          </div>
        </section>

        {/* Sección Lead Magnet */}
        <section className="py-12 px-6 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">¿Quieres ver los detalles técnicos?</h3>
                <p className="text-gray-400 mb-6">Descarga nuestro Dossier de Infraestructura y descubre la ruta de implementación en 72 horas.</p>
                <a href="/Dossier_de_infraestructura_SS.pdf" download className="inline-block bg-black/60 border border-cyan-500 text-cyan-400 px-8 py-3.5 rounded-lg font-bold hover:bg-cyan-900/40 transition">
                    Descargar Dossier (PDF)
                </a>
            </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm mt-10 bg-black/50 backdrop-blur-sm">
          <p>© 2026 Servin Systems. Todos los derechos reservados.
            Propietario y Representante Legal: Ferreira Servin Fabricio Ezequiel. RUC: 6364832-6
            Dirección: Calle sin nombre Paralela a 8 de diciembre, Pilar, Ñeembucú, Paraguay
            Correo de contacto:
            servinsystems@gmail.com
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 px-4">
            <a href="/terminos" className="hover:text-cyan-400 transition">Términos y Condiciones</a>
            <a href="/privacidad" className="hover:text-cyan-400 transition">Política de Privacidad</a>
            <a href="/faq" className="hover:text-cyan-400 transition">Preguntas Frecuentes</a>
            <a href="mailto:contacto@servinsystems.com" className="hover:text-cyan-400 transition">Soporte Técnico</a>
          </div>
        </footer>

      </div>
    </main>
  );
}