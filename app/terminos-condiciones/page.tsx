import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Términos y Condiciones | LYFTZ',
  description: 'Términos y condiciones de uso de LYFTZ - Coaching online de fitness y nutrición',
}

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] mb-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de LYFTZ, aceptas quedar vinculado por estos 
              términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, 
              no podrás acceder a nuestros servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Descripción de los Servicios</h2>
            <p>
              LYFTZ ofrece servicios de coaching online personalizado que incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Planes de entrenamiento personalizados.</li>
              <li>Pautas nutricionales adaptadas a tus objetivos.</li>
              <li>Seguimiento y ajustes periódicos.</li>
              <li>Comunicación directa con tu coach.</li>
              <li>Acceso a materiales y recursos formativos.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Requisitos del Usuario</h2>
            <p>Para utilizar nuestros servicios, debes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ser mayor de 18 años o contar con autorización de un tutor legal.</li>
              <li>Proporcionar información veraz y actualizada.</li>
              <li>Informar de cualquier condición médica relevante.</li>
              <li>Consultar con un profesional médico antes de iniciar cualquier programa 
                de ejercicio o cambio nutricional.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Compromiso Mínimo</h2>
            <p>
              El compromiso mínimo para nuestros servicios de coaching es de 3 meses. Este período 
              es necesario para poder implementar cambios significativos y obtener resultados 
              medibles en tu transformación física.
            </p>
          </section>

          <section className="space-y-4 p-6 rounded-xl border border-primary/30 bg-primary/5">
            <h2 className="text-xl font-semibold text-foreground">5. Política de No Devoluciones</h2>
            <p className="text-foreground">
              <strong>NO SE ACEPTAN DEVOLUCIONES.</strong>
            </p>
            <p>
              Debido a la naturaleza personalizada de nuestros servicios, una vez iniciado el 
              programa de coaching y entregado el material personalizado (plan de entrenamiento, 
              pautas nutricionales, etc.), no se realizarán devoluciones del importe abonado.
            </p>
            <p>
              Al contratar nuestros servicios, aceptas expresamente esta política de no 
              devolución. Te recomendamos que, antes de contratar, utilices la llamada de 
              valoración gratuita para resolver todas tus dudas y asegurarte de que nuestros 
              servicios se ajustan a tus necesidades.
            </p>
            <p>
              Esta política se aplica independientemente de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El tiempo transcurrido desde la contratación.</li>
              <li>El grado de utilización de los servicios.</li>
              <li>Los resultados obtenidos, que dependen del compromiso y adherencia del cliente.</li>
              <li>Cambios en las circunstancias personales del cliente.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Obligaciones del Cliente</h2>
            <p>Como cliente, te comprometes a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seguir las indicaciones del programa con compromiso y constancia.</li>
              <li>Comunicar cualquier problema de salud que surja durante el programa.</li>
              <li>Proporcionar feedback honesto sobre tu progreso.</li>
              <li>Respetar los horarios de comunicación establecidos.</li>
              <li>No compartir el material recibido con terceros.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Limitación de Responsabilidad</h2>
            <p>
              LYFTZ proporciona servicios de coaching y asesoramiento, pero no somos responsables de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lesiones derivadas de la práctica incorrecta de ejercicios.</li>
              <li>Resultados que dependan del cumplimiento del programa por parte del cliente.</li>
              <li>Condiciones médicas preexistentes no comunicadas.</li>
              <li>El uso inadecuado de la información proporcionada.</li>
            </ul>
            <p>
              Nuestros servicios no sustituyen el consejo médico profesional. Siempre 
              recomendamos consultar con un médico antes de iniciar cualquier programa de 
              ejercicio o cambio en la alimentación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Propiedad Intelectual</h2>
            <p>
              Todo el contenido proporcionado (planes de entrenamiento, guías nutricionales, 
              vídeos, materiales educativos) es propiedad exclusiva de LYFTZ y está protegido 
              por derechos de autor. Queda prohibida su reproducción, distribución o 
              comunicación pública sin autorización expresa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Modificaciones del Servicio</h2>
            <p>
              Nos reservamos el derecho de modificar, suspender o discontinuar cualquier 
              aspecto del servicio en cualquier momento. Los cambios sustanciales serán 
              comunicados a los clientes activos con antelación razonable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Comunicaciones</h2>
            <p>
              Al contratar nuestros servicios, aceptas recibir comunicaciones relacionadas 
              con el servicio a través de los medios proporcionados (email, WhatsApp, etc.). 
              Puedes optar por no recibir comunicaciones promocionales en cualquier momento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">11. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos términos se rigen por la legislación española. Para cualquier controversia 
              derivada de estos términos, las partes se someten a los juzgados y tribunales 
              de la ciudad correspondiente al domicilio del prestador del servicio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">12. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con estos términos y condiciones, puedes 
              contactarnos a través del formulario de contacto en nuestra web o mediante 
              los canales de comunicación habilitados.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
