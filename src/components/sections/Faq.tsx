import Link from "next/link";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { homeFaqs } from "@/lib/content";
import { pages } from "@/lib/pages";

export function Faq() {
  return (
    <section id="faq" className="max-lg:scroll-mt-0 max-lg:py-0 lg:scroll-mt-24 lg:py-20 sm:py-28">
      <Container className="flex h-full min-h-0 flex-col justify-center">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about the photo, offline use and price."
            description="Straight answers about how the numbers are worked out, where your meals live, and what it costs."
          />
        </Reveal>
        <Reveal delay={80} className="mx-auto mt-4 w-full max-w-3xl lg:mt-12">
          <FaqAccordion items={homeFaqs} />
          <p className="mt-4 text-center text-sm text-muted">
            More help on the{" "}
            <Link href={pages.support.path} className="font-semibold text-primary transition hover:text-white">
              support page
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
