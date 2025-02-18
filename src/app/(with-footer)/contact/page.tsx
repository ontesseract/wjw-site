import { Button } from "@/components/ui/button";
import { FormattedLocation } from "@/components/formatted-location";
import { theDuttonFamilyTheaterBranson } from "@/lib/data";
export default function FAQPage() {
  return (
    <section id="contact" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <FormattedLocation
          location={theDuttonFamilyTheaterBranson.location}
          phone={theDuttonFamilyTheaterBranson.phone}
          className="mb-8 text-center"
        />
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-border rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 border border-border rounded"
            ></textarea>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
