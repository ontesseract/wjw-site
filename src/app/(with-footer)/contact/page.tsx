import { FormattedLocation } from "@/components/formatted-location";
import ContactForm from "@/components/contact-form/contact-form";
import { bransonTheater } from "@/lib/data";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function FAQPage() {
  return (
    <section id="contact" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <FormattedLocation
          location={bransonTheater.location}
          phone={bransonTheater.phone}
          googleMapsUrl={bransonTheater.googleMapsUrl}
          className="mb-8 text-center"
        />
        <div className="max-w-md mx-auto">
          <ContactForm tenantId="wjw" turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </section>
  );
}
