import { Reveal } from "@/components/Reveal";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/components/Container";

export function Screenshots() {
  return (
    <section id="screenshots" className="max-lg:scroll-mt-0 max-lg:py-0 lg:scroll-mt-24 lg:py-20 sm:py-28">
      <Container className="flex h-full min-h-0 flex-col">
        <Reveal>
          <SectionHeading
            eyebrow="Screenshots"
            title="See the app: Today, photo, barcode and your plan."
            description="A calm interface with no guilt and no red numbers: what you ate, what is left, and protein first."
          />
        </Reveal>
        <Reveal delay={80} className="mt-3 flex min-h-0 flex-1 flex-col justify-center lg:mt-12 lg:flex-none">
          <div className="min-h-0 max-lg:-mx-5">
            <ScreenshotCarousel />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
