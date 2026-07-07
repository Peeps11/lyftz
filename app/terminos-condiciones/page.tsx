import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Términos y Condiciones | LYFT·Z',
  description: 'Términos y condiciones de uso de los servicios de LYFT·Z',
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

        <h1 className="text-3xl sm:text-4xl font-bold font-display mb-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-foreground font-medium">
            Última actualización: mayo de 2026
          </p>

          <hr className="border-border" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Identificación del Titular</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la 
              Información y de Comercio Electrónico (LSSI-CE), se informa de que el presente sitio 
              web y los servicios asociados son titularidad de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Nombre/Razón social:</strong> LYFT·Z.LTD</li>
              <li><strong className="text-foreground">Domicilio:</strong> Ephesou, 9, Paralimni, 5280, Famagusta, Chipre</li>
              <li><strong className="text-foreground">Correo electrónico de contacto:</strong> nutritionbadia@gmail.com</li>
              <li><strong className="text-foreground">Sitio web:</strong> www.lyftz.fit</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Aceptación de los Términos</h2>
            <p>
              El acceso y uso de los servicios de LYFT·Z implica la aceptación plena y sin reservas 
              de los presentes términos y condiciones. Si no estás de acuerdo con alguna parte de 
              los mismos, debes abstenerte de contratar o utilizar nuestros servicios.
            </p>
            <p>
              Estos términos pueden ser actualizados. Cualquier modificación sustancial será 
              comunicada con un mínimo de <strong className="text-foreground">30 días de antelación</strong> a 
              los clientes activos. Si el cliente no acepta los nuevos términos, podrá resolver el 
              contrato sin penalización, notificándolo por escrito antes de la fecha de entrada en 
              vigor del cambio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Descripción de los Servicios</h2>
            <p>
              LYFT·Z ofrece servicios de coaching online personalizado en las áreas de entrenamiento 
              físico y nutrición, que incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plan de entrenamiento personalizado según los objetivos y condición física del cliente.</li>
              <li>Pautas nutricionales adaptadas a los objetivos, preferencias y circunstancias del cliente.</li>
              <li>Seguimiento periódico del progreso y ajustes del programa.</li>
              <li>Comunicación directa con el coach a través de los canales establecidos.</li>
              <li>Acceso a materiales y recursos formativos exclusivos.</li>
            </ul>
            <p>
              Los servicios se prestan íntegramente de forma online y no incluyen sesiones 
              presenciales salvo pacto expreso en contrario.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Requisitos del Usuario</h2>
            <p>Para contratar y utilizar los servicios de LYFT·Z, el usuario debe:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ser mayor de 18 años. En caso de ser menor de edad, será necesaria la autorización 
                expresa de su tutor legal, quien asumirá plena responsabilidad.</li>
              <li>Proporcionar información veraz, completa y actualizada sobre su estado de salud, 
                condición física e historial médico relevante.</li>
              <li>Informar al coach de cualquier condición médica, lesión, enfermedad o limitación 
                física existente antes del inicio del programa y de cualquier novedad que surja durante el mismo.</li>
              <li>Consultar con un profesional médico antes de iniciar cualquier programa de ejercicio 
                o cambio en la alimentación, especialmente en caso de padecer enfermedades crónicas, 
                cardiovasculares, metabólicas o cualquier otra condición de salud.</li>
            </ul>
            <p>
              LYFT·Z se reserva el derecho de rechazar la prestación del servicio si considera que el 
              perfil del cliente no es adecuado para el mismo o si la información proporcionada es 
              incompleta o falsa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Proceso de Contratación y Derecho de Desistimiento</h2>
            
            <h3 className="text-lg font-medium text-foreground">5.1 Proceso de contratación</h3>
            <p>
              La contratación de los servicios de LYFT·Z se formaliza tras la videollamada de valoración 
              gratuita y la aceptación expresa por parte del cliente de la propuesta de servicio y de 
              los presentes términos y condiciones.
            </p>

            <h3 className="text-lg font-medium text-foreground">5.2 Derecho de desistimiento</h3>
            <p>
              De conformidad con el Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se 
              aprueba el Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios 
              (LGDCU), el cliente dispone de un plazo de <strong className="text-foreground">14 días naturales</strong> desde 
              la contratación para ejercer su derecho de desistimiento sin necesidad de justificación.
            </p>
            <p>
              <strong className="text-foreground">Excepción por inicio anticipado del servicio:</strong> Si el 
              cliente solicita expresamente que la prestación del servicio comience antes de que transcurra 
              el plazo de desistimiento de 14 días —por ejemplo, solicitando la entrega del plan personalizado 
              de forma inmediata— deberá manifestar su consentimiento expreso y reconocer que, una vez iniciada 
              la ejecución del servicio y entregado el material personalizado, pierde su derecho de desistimiento 
              en proporción al servicio ya prestado, de acuerdo con el artículo 103.a) de la LGDCU.
            </p>
            <p>
              En tal caso, el cliente recibirá comunicación expresa de esta renuncia y deberá confirmarla 
              antes del inicio de la prestación.
            </p>
          </section>

          <section className="space-y-4 p-6 rounded-xl border border-primary/30 bg-primary/5">
            <h2 className="text-xl font-semibold text-foreground">6. Política de Pagos y No Devoluciones</h2>
            
            <h3 className="text-lg font-medium text-foreground">6.1 Compromiso mínimo</h3>
            <p>
              El compromiso mínimo para los servicios de coaching es de <strong className="text-foreground">3 meses</strong>, 
              necesario para implementar cambios significativos y obtener resultados medibles. Al contratar, 
              el cliente acepta este período mínimo.
            </p>

            <h3 className="text-lg font-medium text-foreground">6.2 Forma de pago</h3>
            <p>
              El pago se realizará según las condiciones acordadas en la propuesta de servicio (pago único, 
              mensual u otra modalidad pactada). En caso de impago, LYFT·Z se reserva el derecho a suspender 
              la prestación del servicio hasta la regularización de la deuda, sin que ello exima al cliente 
              de sus obligaciones económicas.
            </p>

            <h3 className="text-lg font-medium text-foreground">6.3 Política de no devoluciones</h3>
            <p className="text-foreground font-medium">
              Una vez iniciada la prestación del servicio —con entrega del material personalizado (plan de 
              entrenamiento, pautas nutricionales u otros recursos)— y habiendo renunciado expresamente al 
              derecho de desistimiento conforme a lo indicado en el punto 5.2, <strong>NO SE REALIZARÁN DEVOLUCIONES</strong> del 
              importe abonado.
            </p>
            <p>Esta política aplica con independencia de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El tiempo transcurrido desde la contratación.</li>
              <li>El grado de utilización de los servicios.</li>
              <li>Los resultados obtenidos, que dependen del compromiso y adherencia del cliente.</li>
              <li>Cambios en las circunstancias personales del cliente.</li>
            </ul>
            <p>
              Se recomienda encarecidamente utilizar la videollamada de valoración gratuita para resolver 
              todas las dudas antes de contratar.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Obligaciones del Cliente</h2>
            <p>Como cliente, te comprometes a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participar activamente en el programa con compromiso y constancia.</li>
              <li>Comunicar de forma inmediata cualquier problema de salud, lesión o circunstancia 
                relevante que surja durante el programa.</li>
              <li>Proporcionar feedback honesto y regular sobre tu progreso y estado.</li>
              <li>Respetar los canales y horarios de comunicación establecidos con el coach.</li>
              <li>No compartir, reproducir ni distribuir el material recibido con terceros.</li>
              <li>Abonar las cantidades acordadas en los plazos establecidos.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Limitación de Responsabilidad</h2>
            <p>
              LYFT·Z presta servicios de coaching y asesoramiento en entrenamiento y nutrición. En 
              ningún caso seremos responsables de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lesiones o daños físicos derivados de la práctica incorrecta, negligente o 
                contraindicada de los ejercicios indicados.</li>
              <li>Resultados físicos o estéticos, que dependen directamente del cumplimiento, 
                constancia y predisposición individual del cliente.</li>
              <li>Condiciones médicas preexistentes no comunicadas al coach antes o durante la 
                prestación del servicio.</li>
              <li>El uso inadecuado, incorrecto o imprudente de la información, planes o pautas proporcionadas.</li>
              <li>Daños indirectos, lucro cesante o perjuicios de cualquier naturaleza derivados del 
                uso de los servicios.</li>
            </ul>
            <p className="text-foreground font-medium">
              Los servicios de LYFT·Z no constituyen, en ningún caso, consejo médico, diagnóstico ni 
              tratamiento de enfermedades. Se recomienda siempre la supervisión de un profesional 
              médico cualificado antes de iniciar cualquier programa de ejercicio o cambio alimentario.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Fuerza Mayor</h2>
            <p>
              LYFT·Z no será responsable por el incumplimiento o retraso en la prestación de los servicios 
              cuando se deba a causas ajenas a su voluntad y razonablemente imprevisibles, tales como 
              enfermedad grave del coach, causas de fuerza mayor, caso fortuito, desastres naturales, 
              pandemias u otras circunstancias análogas.
            </p>
            <p>
              En caso de que dichas circunstancias impidan la prestación del servicio por un período 
              superior a <strong className="text-foreground">30 días consecutivos</strong>, el cliente 
              tendrá derecho a la suspensión del programa sin coste adicional o, si lo prefiere, a la 
              resolución del contrato con devolución proporcional del importe correspondiente al período 
              no prestado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Propiedad Intelectual</h2>
            <p>
              Todo el contenido proporcionado por LYFT·Z —incluyendo planes de entrenamiento, guías 
              nutricionales, vídeos, materiales educativos, imágenes, textos y cualquier otro recurso— 
              es propiedad exclusiva de LYFT·Z y está protegido por la legislación vigente en materia 
              de propiedad intelectual.
            </p>
            <p>
              Queda expresamente prohibida su reproducción total o parcial, distribución, comunicación 
              pública, transformación o cualquier otro uso no autorizado, sin contar con la autorización 
              expresa y por escrito de LYFT·Z. El incumplimiento de esta cláusula podrá dar lugar a las 
              acciones legales correspondientes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">11. Protección de Datos Personales</h2>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección 
              de Datos Personales y garantía de los derechos digitales (LOPDGDD), informamos de que:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Responsable del tratamiento:</strong> LYFT·Z, LTD.</li>
              <li><strong className="text-foreground">Finalidad:</strong> Gestión de la relación contractual, prestación de los 
                servicios contratados, y envío de comunicaciones relacionadas con el servicio.</li>
              <li><strong className="text-foreground">Legitimación:</strong> Ejecución del contrato y consentimiento del interesado.</li>
              <li><strong className="text-foreground">Destinatarios:</strong> Los datos no serán cedidos a terceros salvo obligación legal.</li>
              <li><strong className="text-foreground">Derechos:</strong> Puedes ejercer tus derechos de acceso, rectificación, supresión, 
                oposición, limitación y portabilidad escribiendo a nutritionbadia@gmail.com.</li>
              <li><strong className="text-foreground">Información completa:</strong> Para más detalles, consulta nuestra{' '}
                <Link href="/politica-privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.</li>
            </ul>
            <p>
              Al contratar los servicios, el cliente autoriza el tratamiento de sus datos personales 
              conforme a la finalidad descrita.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">12. Comunicaciones</h2>
            <p>
              Al contratar los servicios de LYFT·Z, el cliente acepta recibir comunicaciones relacionadas 
              con el servicio a través de los medios facilitados (correo electrónico, WhatsApp u otros 
              canales acordados).
            </p>
            <p>
              El cliente podrá revocar en cualquier momento su consentimiento para recibir comunicaciones 
              de carácter promocional, sin que ello afecte a las comunicaciones necesarias para la 
              prestación del servicio contratado.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">13. Nulidad Parcial</h2>
            <p>
              Si alguna cláusula de los presentes términos fuera declarada nula o inaplicable por 
              resolución judicial firme, el resto de las cláusulas permanecerán en plena vigencia y eficacia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">14. Ley Aplicable y Jurisdicción</h2>
            <p>
              Los presentes términos y condiciones se rigen por la legislación española.
            </p>
            <p>
              Para la resolución de cualquier controversia derivada de la interpretación, cumplimiento o 
              ejecución de estos términos, las partes se someten, con renuncia expresa a cualquier otro 
              fuero que pudiera corresponderles, a los Juzgados y Tribunales de <strong className="text-foreground">Barcelona</strong>.
            </p>
            <p>
              Sin perjuicio de lo anterior, si el cliente tiene la condición de consumidor, será de 
              aplicación la normativa de protección de consumidores vigente, y el fuero será el del 
              domicilio del consumidor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">15. Contacto</h2>
            <p>
              Para cualquier consulta, reclamación o ejercicio de derechos relacionados con estos 
              términos y condiciones, puedes contactarnos a través de:
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
