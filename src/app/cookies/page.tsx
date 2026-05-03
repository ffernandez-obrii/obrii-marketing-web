import type { Metadata } from "next";
import { LegalDocShell } from "@/components/legal/LegalDocShell";
import { CONTACT_EMAIL, LEGAL_ENTITY_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: `Información sobre el uso de cookies en el sitio web de ${LEGAL_ENTITY_NAME}.`,
  robots: { index: true },
};

export default function CookiesPage() {
  return (
    <LegalDocShell
      title="Política de Cookies"
      lastUpdated="Última actualización: 2 de mayo de 2026"
    >
      <p>
        Esta política explica qué son las cookies, cómo las utiliza{" "}
        {LEGAL_ENTITY_NAME} en este sitio web y cómo puede gestionarlas.
        Complete los apartados marcados con corchetes tras la revisión legal.
      </p>

      <section>
        <h2>Tipos de cookies utilizadas</h2>
        <p>[TIPOS_DE_COOKIES_UTILIZADAS]</p>
        <ul>
          <li>[COOKIE_TÉCNICA_EJEMPLO]</li>
          <li>[COOKIE_ANALÍTICA_EJEMPLO]</li>
        </ul>
      </section>

      <section>
        <h2>Gestión del consentimiento</h2>
        <p>[GESTIÓN_DE_CONSENTIMIENTO]</p>
      </section>

      <section>
        <h2>Configuración del navegador</h2>
        <p>[INSTRUCCIONES_DE_NAVEGADOR]</p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>
          Para dudas sobre esta política, escriba a{" "}
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
