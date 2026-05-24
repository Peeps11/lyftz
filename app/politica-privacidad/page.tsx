import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidad | LYFT·Z',
  description: 'Política de privacidad de LYFT·Z - Coaching online de fitness y nutrición',
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

        <h1 className="text-3xl sm:text-4xl font-bold font-display mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-foreground font-medium">
            Última actualización: mayo de 2026
          </p>

          <hr className="border-border" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Responsable del Tratamiento</h2>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, 
              de 27 de abril de 2016 (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de 
              Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le 
              informamos de que:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Responsable:</strong> LYFT·Z.LTD</li>
              <li><strong className="text-foreground">Domicilio:</strong> Ephesou, 9, Paralimni, 5280, Famagusta, Chipre</li>
              <li><strong className="text-foreground">Correo electrónico:</strong> nutritionbadia@gmail.com</li>
              <li><strong className="text-foreground">Sitio web:</strong> www.lyftz.fit</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Datos Personales que Recopilamos</h2>
            <p>En el contexto de nuestros servicios de coaching de fitness y nutrición, podemos recopilar las siguientes categorías de datos personales:</p>
            
            <h3 className="text-lg font-medium text-foreground">2.1 Datos identificativos y de contacto</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Edad y fecha de nacimiento</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground">2.2 Datos profesionales y socioeconómicos</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ocupación profesional</li>
              <li>Disponibilidad horaria</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground">2.3 Datos relativos a la salud (categoría especial)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Peso, altura y medidas corporales</li>
              <li>Historial médico relevante</li>
              <li>Lesiones previas o actuales</li>
              <li>Patologías o condiciones médicas</li>
              <li>Alergias e intolerancias alimentarias</li>
              <li>Medicación actual</li>
              <li>Nivel de actividad física</li>
              <li>Hábitos alimentarios y de sueño</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground">2.4 Datos de imagen</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fotografías de progreso (previo consentimiento explícito)</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground">2.5 Datos de objetivos y preferencias</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Objetivos de composición corporal</li>
              <li>Metas de rendimiento deportivo</li>
              <li>Preferencias alimentarias</li>
              <li>Equipamiento disponible para entrenar</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-xl border border-primary/30 bg-primary/5">
            <h2 className="text-xl font-semibold text-foreground">3. Tratamiento de Datos de Salud (Categoría Especial)</h2>
            <p>
              Los datos relativos a la salud están especialmente protegidos por el RGPD. Queremos 
              que sepas que:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Necesidad:</strong> Solo recopilamos los datos de salud estrictamente 
                necesarios para diseñar tu programa de entrenamiento y nutrición de forma segura y eficaz.</li>
              <li><strong className="text-foreground">Consentimiento explícito:</strong> Antes de recopilar cualquier dato de salud, 
                solicitaremos tu consentimiento expreso e inequívoco.</li>
              <li><strong className="text-foreground">Seguridad reforzada:</strong> Estos datos se tratan con medidas de seguridad 
                adicionales y acceso restringido.</li>
              <li><strong className="text-foreground">Confidencialidad absoluta:</strong> Nunca compartiremos tus datos de salud 
                con terceros sin tu autorización expresa, salvo obligación legal.</li>
              <li><strong className="text-foreground">Derecho de supresión:</strong> Puedes solicitar la eliminación de estos datos 
                en cualquier momento.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Finalidades del Tratamiento</h2>
            <p>Tratamos tus datos personales para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Prestación del servicio:</strong> Diseñar y ajustar planes de entrenamiento 
                y nutrición personalizados según tus características y objetivos.</li>
              <li><strong className="text-foreground">Seguimiento del progreso:</strong> Evaluar tu evolución y realizar los ajustes 
                necesarios en tu programa.</li>
              <li><strong className="text-foreground">Comunicación:</strong> Mantener contacto contigo para resolver dudas, enviar 
                tu plan y hacer seguimiento.</li>
              <li><strong className="text-foreground">Gestión administrativa:</strong> Facturación, contabilidad y cumplimiento de 
                obligaciones legales y fiscales.</li>
              <li><strong className="text-foreground">Mejora del servicio:</strong> Analizar de forma agregada y anónima la efectividad 
                de nuestros programas.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Base Legal del Tratamiento</h2>
            <p>El tratamiento de tus datos se fundamenta en las siguientes bases legales:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Ejecución del contrato (Art. 6.1.b RGPD):</strong> Para prestarte los servicios 
                de coaching contratados.</li>
              <li><strong className="text-foreground">Consentimiento explícito (Art. 9.2.a RGPD):</strong> Para el tratamiento de datos 
                de salud y fotografías de progreso.</li>
              <li><strong className="text-foreground">Interés legítimo (Art. 6.1.f RGPD):</strong> Para mejorar nuestros servicios y 
                enviarte comunicaciones comerciales sobre servicios similares.</li>
              <li><strong className="text-foreground">Obligación legal (Art. 6.1.c RGPD):</strong> Para cumplir con obligaciones 
                fiscales, contables y legales.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Tratamiento de Fotografías de Progreso</h2>
            <p>
              Si decides compartir fotografías para el seguimiento de tu transformación física:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El envío de fotografías es completamente voluntario.</li>
              <li>Las fotografías se almacenan de forma segura con encriptación.</li>
              <li>Solo serán accesibles por ti y tu coach asignado.</li>
              <li>No se utilizarán con fines publicitarios, testimoniales ni en redes sociales 
                sin tu consentimiento expreso y por escrito.</li>
              <li>Puedes solicitar su eliminación inmediata en cualquier momento.</li>
              <li>Se eliminarán automáticamente al finalizar la relación contractual, salvo 
                que solicites lo contrario.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Destinatarios de los Datos</h2>
            <p>
              Tus datos personales no serán cedidos a terceros, salvo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cuando exista obligación legal (Agencia Tributaria, jueces y tribunales, etc.).</li>
              <li>Proveedores de servicios que actúen como encargados del tratamiento (hosting, 
                herramientas de gestión) con los que tenemos firmados contratos que garantizan 
                el cumplimiento del RGPD.</li>
            </ul>
            <p>
              En ningún caso venderemos, alquilaremos ni compartiremos tus datos con terceros 
              con fines comerciales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Conservación de los Datos</h2>
            <p>
              Conservaremos tus datos personales durante los siguientes plazos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Durante la relación contractual:</strong> Mientras dure la prestación 
                del servicio de coaching.</li>
              <li><strong className="text-foreground">Tras la finalización:</strong> Durante los plazos de prescripción legalmente 
                establecidos (4 años para obligaciones fiscales, 5 años para acciones personales).</li>
              <li><strong className="text-foreground">Datos de salud:</strong> Se eliminarán a tu solicitud o al finalizar el servicio, 
                salvo obligación legal de conservación.</li>
              <li><strong className="text-foreground">Fotografías:</strong> Se eliminarán al finalizar el servicio o antes si lo solicitas.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Tus Derechos</h2>
            <p>
              De conformidad con la normativa vigente, tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Acceso:</strong> Conocer si tratamos tus datos y, en su caso, qué datos tenemos.</li>
              <li><strong className="text-foreground">Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
              <li><strong className="text-foreground">Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
              <li><strong className="text-foreground">Oposición:</strong> Oponerte a determinados tratamientos, como el envío de comunicaciones comerciales.</li>
              <li><strong className="text-foreground">Limitación:</strong> Solicitar la limitación del tratamiento en determinadas circunstancias.</li>
              <li><strong className="text-foreground">Portabilidad:</strong> Recibir tus datos en un formato estructurado y de uso común.</li>
              <li><strong className="text-foreground">Retirar el consentimiento:</strong> En cualquier momento, sin que afecte a la licitud 
                del tratamiento previo.</li>
            </ul>
            <p>
              Para ejercer estos derechos, puedes contactarnos en nutritionbadia@gmail.com, indicando el derecho 
              que deseas ejercer y acompañando copia de tu DNI o documento identificativo.
            </p>
            <p>
              Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de 
              Protección de Datos (www.aepd.es) si consideras que tus derechos han sido vulnerados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Medidas de Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos 
              personales, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encriptación de datos sensibles en tránsito y en reposo.</li>
              <li>Acceso restringido basado en el principio de mínimo privilegio.</li>
              <li>Copias de seguridad regulares.</li>
              <li>Formación del personal en protección de datos.</li>
              <li>Revisión periódica de las medidas de seguridad.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">11. Cookies y Tecnologías Similares</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías similares. Para más información, 
              consulta nuestro aviso de cookies disponible en la web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">12. Modificaciones de esta Política</h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad para adaptarla a 
              novedades legislativas o jurisprudenciales. Cualquier cambio será publicado en esta 
              página con la fecha de actualización correspondiente.
            </p>
            <p>
              Si los cambios son significativos, te lo comunicaremos por email antes de su entrada 
              en vigor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">13. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con esta política de privacidad o el tratamiento 
              de tus datos personales, puedes contactarnos en:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Email:</strong> nutritionbadia@gmail.com</li>
              <li><strong className="text-foreground">Formulario web:</strong> www.lyftz.fit/#contacto</li>
            </ul>
          </section>

          <hr className="border-border" />

          <p className="text-center text-muted-foreground italic">
            LYFT·Z — Coaching Online Personalizado
          </p>
        </div>
      </div>
    </main>
  )
}
