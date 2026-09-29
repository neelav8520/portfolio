'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Brush,
  ChartNoAxesCombined,
  Check,
  Code2,
  FileSearch,
  Globe,
  Instagram,
  Layers3,
  Megaphone,
  Search,
  ShoppingBag,
  Sparkles,
  WandSparkles,
  Workflow,
} from 'lucide-react';

import { Counter } from '@/components/Counter';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  const hero = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = hero.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = gsap.timeline({
          defaults: { ease: 'power4.out' },
        });

        intro
          .fromTo(
            '.hero-eyebrow',
            { y: 14, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
            { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.65 }
          )
          .fromTo(
            '.hero-art-layer',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 1.15, stagger: 0.12 },
            '-=0.2'
          )
          .fromTo(
            '.hero-name-char',
            { yPercent: 115, rotateX: -78, opacity: 0 },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              duration: 1.05,
              stagger: 0.055,
            },
            '-=0.8'
          )
          .fromTo(
            '.hero-role-word',
            { y: 32, opacity: 0, rotateX: -30 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.72, stagger: 0.1 },
            '-=0.45'
          )
          .fromTo(
            '.hero-service',
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.48, stagger: 0.09 },
            '-=0.28'
          )
          .fromTo(
            '.hero-supporting-copy,.hero-actions,.hero-scroll-cue',
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, stagger: 0.1 },
            '-=0.2'
          );

        gsap.to('.hero-art-core', {
          y: -10,
          duration: 5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        gsap.to('.hero-art-orbit', {
          rotation: 360,
          duration: 52,
          ease: 'none',
          repeat: -1,
        });

        gsap.to('.hero-stage', {
          yPercent: -4,
          scale: 0.96,
          rotateX: -4,
          opacity: 0.76,
          ease: 'none',
          transformOrigin: '50% 24%',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        const finePointer = window.matchMedia(
          '(hover: hover) and (pointer: fine)'
        ).matches;
        const targets = Array.from(
          section.querySelectorAll<HTMLElement>('.hero-parallax')
        ).map((element) => ({
          element,
          depth: Number(element.dataset.depth || 1),
          xTo: gsap.quickTo(element, 'x', {
            duration: 0.9,
            ease: 'power3.out',
          }),
          yTo: gsap.quickTo(element, 'y', {
            duration: 0.9,
            ease: 'power3.out',
          }),
        }));

        const moveWithPointer = (event: PointerEvent) => {
          const bounds = section.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;

          targets.forEach(({ depth, xTo, yTo }) => {
            xTo(x * depth);
            yTo(y * depth);
          });
        };

        const resetPointer = () => {
          targets.forEach(({ xTo, yTo }) => {
            xTo(0);
            yTo(0);
          });
        };

        if (finePointer) {
          section.addEventListener('pointermove', moveWithPointer);
          section.addEventListener('pointerleave', resetPointer);
        }

        return () => {
          section.removeEventListener('pointermove', moveWithPointer);
          section.removeEventListener('pointerleave', resetPointer);
        };
      });

      return () => media.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  const skills: [string, string, any][] = [
    ['SEO', 'On-page • Technical', Search],
    ['Keyword Research', 'Intent & Planning', FileSearch],
    ['On-Page SEO', 'Products & Pages', Layers3],
    ['Technical SEO', 'Site Health', Globe],
    ['Google Ads', 'Search & Campaigns', Megaphone],
    ['Meta Ads', 'Leads & Retargeting', ChartNoAxesCombined],
    ['Social Media Marketing', 'Strategy & Management', Instagram],
    ['Content Strategy', 'Planning & Copy', Workflow],
    ['Canva Design', 'Posters • Carousels', Brush],
    ['Google Analytics', 'Measurement', BarChart3],
    ['Search Console', 'GSC', Search],
    ['WordPress', 'No-code workflow', Code2],
    ['Shopify', 'Product Management', ShoppingBag],
    ['Analytics & Reporting', 'Performance', BarChart3],
    ['Creative Thinking', 'Visual ideas', Sparkles],
    ['Problem Solving', 'Practical solutions', WandSparkles],
  ];

  const works = [
    {
      title: 'SOCIAL MEDIA',
      description: 'Selected client work and campaign content.',
      href: '/work/social-media',
      icon: Instagram,
    },
    {
      title: 'SEO',
      description: 'Selected client work and search optimization.',
      href: '/work/seo',
      icon: Search,
    },
    {
      title: 'META ADS',
      description: 'Verified campaign case studies.',
      href: '/work/meta-ads',
      icon: Megaphone,
    },
    {
      title: 'CREATIVES',
      description: 'Selected creative client work.',
      href: '/work/creatives',
      icon: Brush,
    },
  ];

  return (
      <main>
      {/* HERO */}
      <section
        ref={hero}
        id="home"
        className="cinematic-hero relative min-h-[100svh] w-full px-5 md:px-10 pt-32 pb-24 flex items-center overflow-hidden"
      >
        <div className="gridbg" />
        <div className="hero-vignette" aria-hidden="true" />

        <div className="hero-art" aria-hidden="true">
          <div
            className="hero-art-layer hero-parallax hero-art-orbit hero-art-orbit-outer"
            data-depth="18"
          >
            <span />
          </div>
          <div
            className="hero-art-layer hero-parallax hero-art-orbit hero-art-orbit-inner"
            data-depth="12"
          />
          <div
            className="hero-art-layer hero-parallax hero-art-card hero-art-card-search"
            data-depth="28"
          >
            <span>01 / DISCOVERY</span>
            <b>SEARCH</b>
            <i>INTENT / VISIBILITY</i>
          </div>
          <div
            className="hero-art-layer hero-parallax hero-art-card hero-art-card-social"
            data-depth="-22"
          >
            <span>02 / CULTURE</span>
            <b>SOCIAL</b>
            <i>STORY / COMMUNITY</i>
          </div>
          <div
            className="hero-art-layer hero-parallax hero-art-core"
            data-depth="8"
          >
            <span className="hero-core-ring" />
            <span className="hero-core-light" />
            <span className="hero-core-crosshair" />
          </div>
          <div className="hero-art-grain" />
        </div>

        <div className="hero-stage relative z-10 mx-auto w-full max-w-[1380px]">
          <div className="hero-content relative z-10 max-w-5xl">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-mark" />
              INDEPENDENT DIGITAL STRATEGY / CHENNAI, INDIA
            </div>

            <h1 className="hero-name mt-5" aria-label="NEELA V">
              {'NEELA'.split('').map((letter, index) => (
                <span className="hero-name-char" aria-hidden="true" key={index}>
                  {letter}
                </span>
              ))}
              <span className="hero-name-space" aria-hidden="true"> </span>
              <span className="hero-name-char hero-name-accent" aria-hidden="true">
                V
              </span>
            </h1>

            <h2 className="hero-role" aria-label="Digital Marketer">
              <span className="hero-role-word">DIGITAL</span>
              <span className="hero-role-word hero-role-accent">MARKETER</span>
            </h2>

            <div className="hero-services" aria-label="Areas of expertise">
              {['SEO', 'META ADS', 'GOOGLE ADS', 'SOCIAL MEDIA'].map(
                (service, index) => (
                  <span className="hero-service" key={service}>
                    {index > 0 && <i aria-hidden="true" />}
                    {service}
                  </span>
                )
              )}
            </div>

            <p className="hero-supporting-copy mt-6 max-w-xl text-sm leading-7 text-[#b9b2c1]">
              I build digital strategies that help brands get discovered,
              connect with their audience, and grow.
            </p>

            <div className="hero-actions mt-8 flex gap-3 flex-wrap">
              <a
                href="#work"
                className="hero-primary-action px-6 py-3 text-black text-[10px] font-bold tracking-[.13em]"
              >
                VIEW MY WORK
                <ArrowRight size={13} className="inline ml-2" />
              </a>

              <a
                href="/portfolio/resume.pdf"
                className="hero-secondary-action px-6 py-3 text-[10px] font-bold tracking-[.13em]"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>

        <a href="#about" className="hero-scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-scroll-line" aria-hidden="true">
            <span />
          </span>
          <ArrowDown size={13} aria-hidden="true" />
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative max-w-7xl mx-auto px-5 md:px-10 py-28"
      >
        <Reveal>
          <div className="text-[10px] tracking-[.28em] text-[#777080]">
            02 / ABOUT
          </div>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-[-.06em]">
            ABOUT <span className="text-[#c69cff]">ME</span>
          </h2>
        </Reveal>

        <div className="mt-14 max-w-5xl">
          <Reveal>
            <h3 className="text-3xl md:text-4xl">
              Digital marketing with a{' '}
              <span className="text-[#c69cff]">creative edge.</span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#a9a5b2]">
              I'm a Digital Marketing Executive with a BCA background and
              hands-on experience across SEO, social media marketing, paid
              advertising, content strategy, and creative design. I enjoy
              combining strategy, creativity, and data to help brands build a
              stronger digital presence and reach the right audience.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3 text-xs text-[#d1c9d9]">
              {[
                'BCA Graduate',
                '1+ Year Digital Marketing Experience',
                'SEO & Product Optimization',
                'Meta Ads & Google Ads',
                'Social Media Strategy & Management',
                'Content Creation & Creative Design',
                'WordPress & Shopify',
                'Analytics & Performance Reporting',
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <Check size={14} className="text-[#c69cff]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <Counter value="1+" label="Years Experience" />
              <Counter value="10+" label="Clients / Projects" />
              <Counter value="1000+" label="Products Optimized" />
              <Counter value="500+" label="Leads Generated" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-5 md:px-10 py-28"
      >
        <Reveal>
          <div className="text-[10px] tracking-[.28em] text-[#777080]">
            03 / SKILLS
          </div>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-[-.06em]">
            MY SKILLS & <span className="text-[#c69cff]">EXPERTISE</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-14">
          {skills.map(([name, description, Icon], index) => (
            <Reveal key={name} delay={index * 0.025}>
              <div className="group relative min-h-32 rounded-xl border border-[#c69cff]/15 bg-[#0b0a10] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#c69cff]/40 hover:bg-[#120d1b]">
                <Icon
                  size={24}
                  strokeWidth={1.3}
                  className="text-[#c69cff] mb-6"
                />

                <div className="text-xs font-semibold">{name}</div>

                <div className="mt-1 text-[9px] text-[#777080]">
                  {description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MY WORK */}
      <section
        id="work"
        className="max-w-7xl mx-auto px-5 md:px-10 py-28"
      >
        <Reveal>
          <div className="text-[10px] tracking-[.28em] text-[#777080]">
            04 / MY WORK
          </div>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-[-.06em]">
            MY <span className="text-[#c69cff]">WORK</span>
          </h2>

          <p className="mt-5 text-sm text-[#a9a5b2]">
            Explore my work across different areas of digital marketing.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {works.map((work, index) => {
            const Icon = work.icon;
            const content = (
              <div className="group relative min-h-[350px] rounded-2xl border border-[#c69cff]/20 overflow-hidden p-8 flex flex-col justify-between bg-gradient-to-br from-[#21122e] to-[#08050d] transition-all duration-700 hover:border-[#c69cff]/70 hover:shadow-[0_0_70px_rgba(169,112,255,.15)]">
                <div className="flex items-start justify-between gap-5">
                  <div className="w-14 h-14 rounded-xl border border-[#c69cff]/30 grid place-items-center text-[#c69cff] group-hover:bg-[#a970ff]/15 transition">
                    <Icon size={25} />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-[-.05em]">
                    {work.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#aaa1b1]">
                    {work.description}
                  </p>

                  <div className="mt-7 w-11 h-11 rounded-full border border-[#c69cff]/40 grid place-items-center group-hover:bg-[#c69cff] group-hover:text-black transition">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            );

            return (
              <Reveal key={work.title} delay={index * 0.08}>
                {work.href ? (
                  <a href={work.href} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div aria-disabled="true">{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-5 md:px-10 py-28"
      >
        <Reveal>
          <div className="text-[10px] tracking-[.28em] text-[#777080]">
            05 / CONTACT
          </div>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-[-.06em]">
            LET'S WORK <span className="text-[#c69cff]">TOGETHER</span>
          </h2>

          <p className="mt-5 text-sm text-[#a9a5b2]">
            Have a project in mind? Let's discuss how I can help your brand
            grow digitally.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 mt-14">
          <Reveal>
            <div className="space-y-5 text-sm text-[#c4bccd]">
              <a href="mailto:itsneela55@gmail.com">✉ itsneela55@gmail.com</a>

              <a href="tel:+919361683414" className="block">
                ◉ +91 93616 83414
              </a>

              <div>⌖ Chennai, India</div>

              <a href="#">in LinkedIn</a>

              <a href="#">◎ Instagram</a>
            </div>

            <a
              href="/portfolio/resume.pdf"
              className="inline-block mt-9 text-xs tracking-[.14em] text-[#c69cff]"
            >
              DOWNLOAD CV ↓
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  'Connect this form to your email service before publishing.'
                );
              }}
              className="rounded-2xl border border-[#c69cff]/20 p-6 bg-white/[.015]"
            >
              <input
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#c69cff] text-xs"
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#c69cff] text-xs"
              />

              <input
                required
                placeholder="Subject"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#c69cff] text-xs"
              />

              <textarea
                required
                placeholder="Your Message"
                rows={5}
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#c69cff] text-xs resize-none"
              />

              <button className="w-full mt-5 py-4 bg-[#c69cff] text-black text-[10px] tracking-[.16em] font-bold">
                SEND MESSAGE
                <ArrowRight size={13} className="inline ml-2" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-[9px] tracking-[.18em] text-[#635c6c]">
        © 2026 NEELA V — DIGITAL MARKETER
      </footer>
    </main>
  );
}