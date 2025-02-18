import Image from "next/image";

const galleryImages = [
  "/wjw-sunset.jpg",
  "/wjw-background-1.jpg",
  "/wjw-background-2.jpg",
  "/wjw-jericho-palestine.jpg",
  "/wjw-sea-of-galilee.jpg",
  "/wjw-jerusalem-gates.jpg",
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 bg-secondary text-secondary-foreground"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <Image
              key={img}
              src={img}
              alt={`Gallery image ${img}`}
              width={600}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
