import type { Metadata } from "next";
import { LegalDocShell } from "@/components/legal/LegalDocShell";
import { CONTACT_EMAIL, LEGAL_ENTITY_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de uso de los servicios y del sitio web de ${LEGAL_ENTITY_NAME}.`,
  robots: { index: true },
};

export default function TerminosPage() {
  return (
    <LegalDocShell
      title="Términos y Condiciones"
      lastUpdated="Última actualización: 2 de mayo de 2026"
    >
      <p>
        El acceso y uso del sitio web y de los servicios de {LEGAL_ENTITY_NAME}{" "}
        queda sujeto a los siguientes términos. El texto legal definitivo debe
        ser validado por su asesor.
      </p>

      <section>
        <h2>Condiciones del servicio</h2>
        <p>[CONDICIONES_DE_SERVICIO]</p>
      </section>

      <section>
        <h2>Propiedad intelectual</h2>
        <p>[PROPIEDAD_INTELECTUAL]</p>
      </section>

      <section>
        <h2>Limitación de responsabilidad</h2>
        <p>[LIMITACIÓN_DE_RESPONSABILIDAD]</p>
      </section>

      <section>
        <h2>Legislación aplicable</h2>
        <p>[LEGISLACIÓN_APLICABLE_Y_JURISDICCIÓN]</p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>
          Para consultas relacionadas con estos términos, puede comunicarse con{" "}
          {LEGAL_ENTITY_NAME} en{" "}
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
