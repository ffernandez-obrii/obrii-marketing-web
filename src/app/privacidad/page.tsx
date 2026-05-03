import type { Metadata } from "next";
import { LegalDocShell } from "@/components/legal/LegalDocShell";
import { CONTACT_EMAIL, LEGAL_ENTITY_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad y protección de datos de ${LEGAL_ENTITY_NAME}.`,
  robots: { index: true },
};

export default function PrivacidadPage() {
  return (
    <LegalDocShell
      title="Política de Privacidad"
      lastUpdated="Última actualización: 2 de mayo de 2026"
    >
      <p>
        El presente documento describe cómo {LEGAL_ENTITY_NAME} trata los datos
        personales en el marco de su sitio web y servicios profesionales. El
        texto definitivo debe ser revisado y aprobado por asesoría legal.
      </p>

      <section>
        <h2>Responsable del tratamiento</h2>
        <p>[RESPONSABLE_DEL_TRATAMIENTO]</p>
        <p>
          Mientras se completa la información legal, puede utilizarse como
          referencia la identidad de {LEGAL_ENTITY_NAME} y los canales de
          contacto indicados al final de esta página.
        </p>
      </section>

      <section>
        <h2>Finalidades del tratamiento</h2>
        <p>[FINALIDADES_LEGALES]</p>
        <ul>
          <li>[FINALIDAD_EJEMPLO_1]</li>
          <li>[FINALIDAD_EJEMPLO_2]</li>
        </ul>
      </section>

      <section>
        <h2>Base jurídica</h2>
        <p>[BASE_JURÍDICA]</p>
      </section>

      <section>
        <h2>Plazos de conservación</h2>
        <p>[PLAZOS_CONSERVACIÓN]</p>
      </section>

      <section>
        <h2>Derechos de las personas interesadas</h2>
        <p>
          [DERECHOS_ARCO_Y_OTROS] Para ejercer sus derechos o formular consultas
          sobre privacidad, puede escribir a{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalDocShell>
  );
}
