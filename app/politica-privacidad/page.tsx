import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidad | LYFTZ',
  description: 'Política de privacidad de LYFTZ - Coaching online de fitness y nutrición',
}

export default function PoliticaPrivacidadPage() {
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
          Política de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Responsable del Tratamiento</h2>
            <p>
              LYFTZ (en adelante, &quot;nosotros&quot; o &quot;el Responsable&quot;) es el responsable del tratamiento 
              de los datos personales que nos proporciones a través de este sitio web y nuestros 
              servicios de coaching de fitness y nutrición.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Datos que Recopilamos</h2>
            <p>En el contexto de nuestros servicios de coaching fitness, podemos recopilar:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de identificación:</strong> nombre, email, teléfono, edad.</li>
              <li><strong>Datos profesionales:</strong> ocupación y disponibilidad horaria.</li>
              <li><strong>Datos de salud:</strong> peso, altura, historial médico relevante, lesiones previas, 
                patologías, alergias alimentarias y medicación actual.</li>
              <li><strong>Datos de estilo de vida:</strong> nivel de actividad física, hábitos alimentarios, 
                horas de sueño, niveles de estrés.</li>
              <li><strong>Objetivos fitness:</strong> metas de composición corporal, rendimiento deportivo, 
                plazos deseados.</li>
              <li><strong>Fotografías de progreso:</strong> imágenes corporales para seguimiento de evolución 
                (siempre con tu consentimiento explícito).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Finalidad del Tratamiento</h2>
            <p>Utilizamos tus datos personales para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diseñar planes de entrenamiento y nutrición personalizados.</li>
              <li>Realizar seguimiento de tu progreso y ajustar los programas.</li>
              <li>Comunicarnos contigo sobre tu plan y resolver dudas.</li>
              <li>Enviarte información relevante sobre nuestros servicios.</li>
              <li>Cumplir con obligaciones legales y fiscales.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Datos de Salud y Fitness</h2>
            <p>
              Dado que nuestros servicios implican el tratamiento de datos relativos a la salud 
              (considerados datos sensibles según el RGPD), queremos que sepas que:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solo recopilamos datos de salud estrictamente necesarios para prestarte el servicio.</li>
              <li>Estos datos se tratan con la máxima confidencialidad y medidas de seguridad reforzadas.</li>
              <li>Tu consentimiento explícito es requerido antes de recopilar cualquier dato de salud.</li>
              <li>Nunca compartiremos tus datos de salud con terceros sin tu autorización expresa.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Fotografías de Progreso</h2>
            <p>
              Si decides compartir fotografías para el seguimiento de tu transformación física:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las fotografías se almacenan de forma segura y encriptada.</li>
              <li>Solo serán accesibles por ti y tu coach asignado.</li>
              <li>No se utilizarán con fines publicitarios sin tu consentimiento expreso por escrito.</li>
              <li>Puedes solicitar su eliminación en cualquier momento.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Base Legal del Tratamiento</h2>
            <p>El tratamiento de tus datos se basa en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ejecución del contrato:</strong> para prestarte los servicios de coaching contratados.</li>
              <li><strong>Consentimiento:</strong> para el tratamiento de datos de salud y fotografías.</li>
              <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y comunicaciones.</li>
              <li><strong>Obligación legal:</strong> para cumplir con requisitos fiscales y legales.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Conservación de los Datos</h2>
            <p>
              Conservaremos tus datos personales mientras dure la relación contractual y, posteriormente, 
              durante los plazos legalmente establecidos. Los datos de salud y fotografías se eliminarán 
              a tu solicitud o al finalizar el servicio, salvo obligación legal de conservación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> oponerte a determinados tratamientos.</li>
              <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
            </ul>
            <p>
              Para ejercer estos derechos, contacta con nosotros a través del email proporcionado 
              en la sección de contacto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos 
              personales contra el acceso no autorizado, la pérdida o la destrucción, incluyendo 
              encriptación, acceso restringido y copias de seguridad regulares.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad. Cualquier cambio 
              será publicado en esta página con la fecha de actualización correspondiente.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
