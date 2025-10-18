"use client";

import { Badge } from "@/components/Badge";
import { Footer, Menu } from "@/devlink";
import { Section } from "@/devlink/_Builtin";

export default function Home() {
  return (
    <Section
      tag="section"
      className="flex flex-col items-center justify-center min-h-full"
    >
      <Menu />
      <div className="h-[1000px] flex items-center justify-center">
        <Badge text="Luiz Eduardo" variant="dark" />
      </div>
      <Footer />
    </Section>
  );
}
