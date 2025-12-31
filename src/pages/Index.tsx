import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Sparkles,
  Workflow,
  Code2,
  Cpu,
  Rocket,
  Box,
  Bot,
  Server,
  Gauge,
  GitBranch,
  BookOpen,
  Users,
  Calendar,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

const staggerContainer = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
});


const Index = () => {
  const { toast } = useToast();
  const [hasJoinedWaitlist, setHasJoinedWaitlist] = React.useState(false);

  const form = useForm<z.infer<typeof waitlistSchema>>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: z.infer<typeof waitlistSchema>) => {
    // Front-end only: pretend we stored the email successfully.
    setHasJoinedWaitlist(true);
    toast({
      title: "You're on the waitlist",
      description: "You'll hear from Lade Stack as new products go live.",
    });
    form.reset();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="section hero-gradient relative overflow-hidden pb-24 pt-16 text-foreground">
        <div className="pointer-events-none hero-grid absolute inset-0" aria-hidden="true" />

        {/* animated background orbits */}
        <div
          className="pointer-events-none absolute -left-24 top-[-6rem] h-64 w-64 rounded-full bg-primary/30 blur-3xl opacity-60 animate-[spin_28s_linear_infinite]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-[-6rem] h-72 w-72 rounded-full bg-accent/30 blur-3xl opacity-60 animate-[spin_32s_linear_infinite_reverse]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-1/4 top-1/3 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-70 animate-pulse"
          aria-hidden="true"
        />

        <div className="section-inner relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
          >
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Build Faster. Think Smarter. Ship Better.</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-gradient-primary sm:text-5xl md:text-6xl">
                  Build SaaS Products at Lightning Speed
                </h1>
                <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                  Lade Stack is an AI-powered ecosystem of tools built for developers, founders, and builders who want to
                  ship faster without sacrificing architecture, reliability, or UX.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("products")}
                  className="hover-scale"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection("about-founder")}
                  className="hover-scale"
                >
                  <span>Learn About Lade Stack</span>
                </Button>

                <p className="w-full text-xs text-muted-foreground sm:w-auto">
                  Built with Tailwind CSS, shadcn/ui, Radix UI &amp; modern tooling.
                </p>
              </div>
            </div>

            <div className="glass-panel max-w-md space-y-4 p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Lade Stack</p>
                  <p className="text-sm font-medium">AI-first developer stack</p>
                </div>
                <Badge variant="outline" className="border-primary/40 text-[11px] text-primary">
                  Developer-first
                </Badge>
              </div>

              <div className="grid gap-3 text-xs text-muted-foreground">
                <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2">
                  <span className="inline-flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                    <Code2 className="h-3.5 w-3.5" />
                    Python • React • Flutter
                  </span>
                  <span className="chip">Full-stack</span>
                </div>

                <div className="grid gap-1 rounded-xl bg-background/80 px-3 py-2">
                  <p className="text-[11px] font-medium text-muted-foreground">architecture.ts</p>
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-muted-foreground/90">
                    <code>
                      {"stack := { ui: 'Tailwind + shadcn', api: 'API-first', ai: 'LLM-powered', deploy: 'GitHub' }"}
                    </code>
                  </pre>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded-xl bg-secondary/70 px-3 py-2">
                    <p className="mb-1 text-xs font-medium text-foreground">Execution</p>
                    <p className="text-muted-foreground">Rapid prototyping, shipping in days not months.</p>
                  </div>
                  <div className="rounded-xl bg-secondary/70 px-3 py-2">
                    <p className="mb-1 text-xs font-medium text-foreground">Systems</p>
                    <p className="text-muted-foreground">Clean architecture built to scale with you.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST / PHILOSOPHY STRIP */}
      <section className="section">
        <div className="section-inner">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="section-label">Product philosophy</p>
              <h2 className="section-heading text-sm sm:text-base">
                A stack designed for builders, not marketing decks.
              </h2>
            </div>
            <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
              Every decision in Lade Stack starts from the command line and design file: clear APIs, predictable
              behavior, and interfaces that feel invisible.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Developer-first mindset",
              "Clean, composable architecture",
              "Real-world problem solving",
              "Built by an engineer, not marketers",
            ].map((item) => (
              <div key={item} className="card-elevated hover-scale flex flex-col gap-2 p-4">
                <div className="pill w-fit">
                  <Workflow className="h-3.5 w-3.5" />
                  <span>Principle</span>
                </div>
                <p className="text-sm font-medium">{item}</p>
                <p className="text-xs text-muted-foreground">
                  Opinionated defaults that favor clarity, maintainability, and sane trade-offs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="section-alt">
        <div className="section-inner">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3"
          >
            <span className="section-label">SaaS Products by Lade Stack</span>
            <h2 className="section-heading">An ecosystem of tools for modern builders.</h2>
            <p className="section-subtitle">
              From AI developer companions to automation pipelines, Lade Stack ships focused utilities that plug into
              your existing workflow.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "AI Developer Tools",
                icon: Cpu,
                status: "In exploration",
                copy: "Code-aware assistants, context-rich prompts, and debugging workflows tuned for real projects.",
              },
              {
                title: "Automation Utilities",
                icon: Workflow,
                status: "In development",
                copy: "Thin, composable services that wire APIs, webhooks, and internal tools together.",
              },
              {
                title: "Productivity Dashboards",
                icon: Gauge,
                status: "Coming soon",
                copy: "Single-pane dashboards for tracking metrics, incidents, and product velocity.",
              },
              {
                title: "API-first Services",
                icon: Server,
                status: "In design",
                copy: "Well-documented, rate-limited APIs with predictable contracts and strong observability.",
              },
              {
                title: "Experimental AI Agents",
                icon: Bot,
                status: "R&D",
                copy: "Task-oriented agents for triaging issues, routing support, and synthesizing product insights.",
              },
              {
                title: "Internal Tooling Kits",
                icon: Box,
                status: "Planned",
                copy: "Starter kits that combine UI primitives, workflows, and infra best practices.",
              },
            ].map((product) => (
              <motion.article
                key={product.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="card-elevated flex flex-col justify-between p-5"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <product.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{product.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{product.copy}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[11px]">
                    {product.status}
                  </Badge>
                </div>

                <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Designed for developers</span>
                  <span className="inline-flex items-center gap-1">
                    <GitBranch className="h-3 w-3" />
                    Versioned releases
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY LADE STACK */}
      <section className="section">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-inner grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start"
        >
          <div className="space-y-4">
            <span className="section-label">Why Lade Stack</span>
            <h2 className="section-heading">Built like a product you would design yourself.</h2>
            <p className="section-subtitle">
              Lade Stack is opinionated about speed, maintainability, and DX. No bloated dashboards, no noisy onboarding
              — just clear tools that respect your time.
            </p>

            <div className="grid gap-3 text-sm">
              {[
                "Built by a full-stack engineer & designer",
                "Performance and UX as first-class citizens",
                "No vanity features — only shipping-critical surfaces",
                "Fast iteration and experimentation with AI-native workflows",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl bg-secondary/60 px-3 py-2">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 text-primary" />
                  <p className="text-xs text-muted-foreground sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="card-elevated p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Flow preview</p>
                <Badge variant="outline" className="text-[11px]">
                  From idea → deploy
                </Badge>
              </div>
              <div className="space-y-2 text-xs text-muted-foreground">
                {[
                  "Design in Figma / whiteboard the flow.",
                  "Prototype UI with Tailwind + shadcn primitives.",
                  "Wire APIs with Next.js, Firebase or Supabase.",
                  "Layer automation and AI with Python & Genkit.",
                  "Push via GitHub, monitor, iterate.",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-medium text-primary">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel space-y-3 p-4 sm:p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">UI snapshot</p>
              <p className="text-sm text-muted-foreground">
                Built around modern primitives: Tailwind CSS, Radix UI, shadcn/ui, Framer Motion and Lucide icons for
                expressive yet minimal interfaces.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT THE FOUNDER */}
      <section id="about-founder" className="section-alt">
        <div className="section-inner grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <span className="section-label">Built by a modern builder</span>
            <h2 className="section-heading">Girish Lade — engineer, designer, SaaS founder.</h2>
            <p className="section-subtitle">
              Based in Solapur, Maharashtra, India, Girish works across frontend, backend, mobile, and AI systems to
              craft products where design, logic, and automation come together.
            </p>
            <p className="text-sm text-muted-foreground">
              Lade Stack started as a personal mission: remove friction from building and scaling software. Every tool,
              dashboard, and service is designed to feel like an extension of your editor — opinionated, discoverable,
              and easy to wire into real systems.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-elevated p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">Girish Lade</p>
                  <p className="text-xs text-muted-foreground">Engineer • UI/UX designer • SaaS founder</p>
                </div>
                <span className="chip">Solapur, Maharashtra</span>
              </div>
              <div className="grid gap-3 text-xs text-muted-foreground">
                <div className="grid gap-1">
                  <p className="font-medium text-foreground">What he builds</p>
                  <p>AI tools, automation systems, and developer-first SaaS products.</p>
                </div>
                <div className="grid gap-1">
                  <p className="font-medium text-foreground">How he works</p>
                  <p>Rapid execution, clean UI, robust architecture, and measurable outcomes.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 text-sm sm:grid-cols-2">
              {["Frontend", "Backend", "AI", "UI/UX", "Automation", "DevOps"].map((skill) => (
                <div key={skill} className="flex items-center justify-between rounded-xl bg-secondary/70 px-3 py-2">
                  <span className="text-xs font-medium text-foreground">{skill}</span>
                  <span className="text-[11px] text-muted-foreground">Production-grade</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <div className="section-inner space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="section-label">Ecosystem</span>
              <h2 className="section-heading">Technologies in the stack.</h2>
              <p className="section-subtitle">
                Opinionated choices around reliability and DX: React, Next.js, Flutter, Firebase, Supabase, Python,
                modern APIs and GitHub workflows.
              </p>
            </div>
            <p className="max-w-sm text-xs text-muted-foreground">
              The stack is pragmatic: boring where it should be, innovative where it unlocks leverage.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "React", icon: Code2 },
              { label: "Next.js", icon: Rocket },
              { label: "Flutter", icon: Cpu },
              { label: "Firebase", icon: Server },
              { label: "Supabase", icon: Server },
              { label: "Python", icon: Cpu },
              { label: "REST APIs", icon: Server },
              { label: "GitHub", icon: GitBranch },
            ].map((item) => (
              <div
                key={item.label}
                className="card-elevated flex items-center justify-between gap-2 p-3 text-sm sm:text-[13px]"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="h-3.5 w-3.5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="text-[11px] text-muted-foreground">Core stack</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & ROADMAP */}
      <section className="section-alt">
        <div className="section-inner space-y-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3"
          >
            <span className="section-label">Vision &amp; roadmap</span>
            <h2 className="section-heading">Where Lade Stack is headed.</h2>
            <p className="section-subtitle">
              A calm, open ecosystem for developers — from prototypes to production workloads.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid gap-4 md:grid-cols-5"
          >
            {[
              {
                title: "Open SaaS ecosystem",
                copy: "Interoperable tools that work together but remain independently useful.",
              },
              {
                title: "AI-first tooling",
                copy: "Treat AI as a core primitive, not an add-on widget.",
              },
              {
                title: "Developer community",
                copy: "A space for sharing workflows, templates, and implementation notes.",
              },
              {
                title: "Scalable products",
                copy: "Patterns that survive real-world traffic, churn, and iteration.",
              },
              {
                title: "Open documentation",
                copy: "Clear, example-driven docs and playbooks for each product.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="card-elevated flex flex-col gap-2 p-4"
              >
                <span className="text-[11px] font-medium text-muted-foreground">Step {index + 1}</span>
                <p className="text-sm font-medium">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section">
        <div className="section-inner items-center gap-8 text-center md:items-center md:text-left">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <span className="section-label">Call to action</span>
            <h2 className="section-heading">Join the next wave of developer tools.</h2>
            <p className="section-subtitle">
              Follow the journey as Lade Stack ships opinionated, AI-powered products for developers, indie hackers, and
              early-stage teams.
            </p>
          </div>

          <div className="mx-auto flex max-w-xl flex-col gap-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1 text-left">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email to get early access"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs" />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="hero" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  {hasJoinedWaitlist ? "You're on the list" : "Get Early Access"}
                </Button>
              </form>
            </Form>

            {hasJoinedWaitlist && (
              <p className="text-xs text-muted-foreground">
                You’ve joined the Lade Stack waitlist. No spam — just meaningful updates when new products ship.
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                Follow the journey and get early product drops.
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-border/70 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="space-y-1">
            <p className="text-sm font-semibold">Lade Stack</p>
            <p className="max-w-md text-xs text-muted-foreground">
              Modern, AI-powered developer tools and SaaS products crafted by Girish Lade to help builders ship better
              software.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <button className="story-link" onClick={() => scrollToSection("products")}>
              Products
            </button>
            <button className="story-link" onClick={() => scrollToSection("about-founder")}>
              About
            </button>
            <a className="story-link" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="story-link" href="mailto:hello@ladestack.dev">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
