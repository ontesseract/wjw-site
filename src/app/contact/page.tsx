import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
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
