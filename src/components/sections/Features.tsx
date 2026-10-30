import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { features } from "@/lib/content";

/** The first three features are the three ways to log a meal (the section title); the rest support them. */
const leadFeatures = features.slice(0, 3);
const moreFeatures = features.slice(3);

export function Features() {
  return (
    <section id="features" className="max-lg:scroll-mt-0 max-lg:py-0 lg:scroll-mt-24 lg:py-20 sm:py-28">
      <Container className="flex h-full min-h-0 flex-col justify-center">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Three ways to log. One honest number."
            description="Photo, barcode or kitchen scale: pick the quickest way for each meal. Every number says whether it is exact or an estimate, and all of it works offline."
          />
        </Reveal>
        <div className="mt-4 grid gap-2 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          {leadFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <FeatureCard {...feature} variant="lead" />
            </Reveal>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-4 lg:grid-cols-3">
          {moreFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={(index + leadFeatures.length) * 70}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
