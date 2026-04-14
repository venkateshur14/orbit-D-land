import { createFileRoute } from "@tanstack/react-router";
import { VideoBackground } from "@/components/VideoBackground";
import { ScrollSection } from "@/components/ScrollSection";
import { Button } from "@/components/ui/button";
import { ChevronDown, Rocket, Brain, Globe } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Orbital Learn — The Future of Education" },
      { name: "description", content: "Orbital Learn is redefining education with immersive, future-forward learning experiences." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen text-white">
      <VideoBackground />

      {/* Hero */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold tracking-tight md:text-8xl" style={{ fontFamily: "'SF Pro Display', system-ui, sans-serif" }}>
          ORBITAL
          <span className="block text-white/60">LEARN</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-white/50">
          The future of education is here.
        </p>
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="mt-16 animate-bounce text-white/40 transition-colors hover:text-white"
          aria-label="Scroll down"
        >
          <ChevronDown className="!h-8 !w-8" />
        </button>
      </div>

      {/* Mission */}
      <ScrollSection className="px-6 py-32 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">Our Mission</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            We believe learning should be{" "}
            <span className="text-white/60">boundless</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/50">
            Orbital Learn combines cutting-edge technology with world-class pedagogy to create
            learning experiences that transcend traditional boundaries. We empower curious minds
            to explore, create, and grow — anytime, anywhere.
          </p>
        </div>
      </ScrollSection>

      {/* Features */}
      <ScrollSection className="px-6 py-32 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-white/40">
            Why Orbital
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <FeatureCard
              icon={<Rocket className="!h-6 !w-6" />}
              title="Accelerated Learning"
              description="AI-driven pathways that adapt to your pace, ensuring you master concepts faster than ever."
            />
            <FeatureCard
              icon={<Brain className="!h-6 !w-6" />}
              title="Deep Understanding"
              description="Interactive simulations and hands-on projects that build true comprehension, not just memorization."
            />
            <FeatureCard
              icon={<Globe className="!h-6 !w-6" />}
              title="Global Community"
              description="Learn alongside thousands of students worldwide. Collaborate, share, and grow together."
            />
          </div>
        </div>
      </ScrollSection>

      {/* CTA */}
      <ScrollSection className="px-6 py-32 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Ready to orbit?
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Join thousands of learners already on the platform.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-white px-10 text-black hover:bg-white/90"
          >
            Get Started
          </Button>
        </div>
      </ScrollSection>

      {/* Footer */}
      <ScrollSection className="border-t border-white/10 px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-white/30 md:flex-row">
          <p>© 2026 Orbital Learn. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/60">Privacy</a>
            <a href="#" className="transition-colors hover:text-white/60">Terms</a>
            <a href="#" className="transition-colors hover:text-white/60">Contact</a>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20">
      <div className="mb-4 text-white/70">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  );
}
