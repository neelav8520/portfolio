'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
    if (!hero.current) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: 'power4.out' },
        })
        .from('.kicker', {
          y: 25,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          '.letter',
          {
            y: 100,
            opacity: 0,
            rotateX: -70,
            stagger: 0.06,
            duration: 1,
          },
          '-.3'
        )
        .from(
          '.hero-copy,.hero-buttons',
          {
            y: 20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.65,
          },
          '-.5'
        )
        .from(
          '.orbit',
          {
            scale: 0.7,
            opacity: 0,
            rotate: -20,
            duration: 1.2,
          },
          '-.9'
        );

      gsap.to('.orbit', {
        y: -15,
        rotation: 5,
        duration: 6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, hero);

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
      description: 'Strategy • Content • Management • Growth',
      href: '/work/social-media',
      icon: Instagram,
    },
    {
      title: 'SEO',
      description: 'Keyword Research • Optimization • Organic Growth',
      href: '/work/seo',
      icon: Search,
    },
    {
      title: 'META ADS',
      description: 'Campaigns • Lead Generation • Optimization',
      href: '/work/meta-ads',
      icon: Megaphone,
    },
    {
      title: 'CREATIVES',
      description: 'Posters • Reels • Carousels • Ad Creatives',
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
        className="relative min-h-screen max-w-7xl mx-auto px-5 md:px-10 pt-36 pb-20 flex items-center overflow-hidden"
      >
        <div className="gridbg" />

        <div className="absolute right-[-18%] top-[10%] w-[650px] h-[650px] rounded-full border border-[#c69cff]/20 shadow-[0_0_120px_rgba(169,112,255,.13)] orbit">
          <div className="absolute inset-12 rounded-full border border-[#c69cff]/10" />
          <div className="absolute inset-28 rounded-full border border-[#c69cff]/10" />
          <span className="absolute w-3 h-3 rounded-full bg-[#c69cff] shadow-[0_0_25px_8px_rgba(198,156,255,.5)] top-[17%] left-[53%]" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="kicker text-[#c69cff] italic font-serif text-xl">
            Digital Marketer
          </div>

          <h1 className="mt-3 text-[18vw] md:text-[10rem] leading-[.82] font-black tracking-[-.09em]">
            {'NEELA'.split('').map((letter, index) => (
              <span className="letter inline-block" key={index}>
                {letter}
              </span>
            ))}{' '}
            <span className="letter text-[#c69cff] inline-block">V</span>
          </h1>

          <div className="hero-copy mt-8 text-[11px] md:text-sm uppercase tracking-[.12em]">
            SEO
            <i className="text-[#a970ff] not-italic mx-2">•</i>
            Social Media
            <i className="text-[#a970ff] not-italic mx-2">•</i>
            Meta Ads
            <i className="text-[#a970ff] not-italic mx-2">•</i>
            Google Ads
          </div>

          <p className="hero-copy mt-6 max-w-xl text-sm leading-7 text-[#a9a5b2]">
            I build digital strategies that help brands get discovered,
            connect with their audience, and grow.
          </p>

          <div className="hero-buttons mt-8 flex gap-3 flex-wrap">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-[#c69cff] text-black text-[10px] font-bold tracking-[.13em]"
            >
              VIEW MY WORK
              <ArrowRight size={13} className="inline ml-2" />
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-full border border-[#c69cff]/35 text-[10px] font-bold tracking-[.13em]"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[9px] tracking-[.24em] text-[#82798b]">
          SCROLL TO EXPLORE
          <ArrowDown size={13} className="animate-bounce" />
        </div>
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

        <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 items-center mt-14">
          <Reveal>
            <div className="h-[430px] relative border border-[#c69cff]/15 overflow-hidden bg-[#0b0a10]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(169,112,255,.25),transparent_30%)]" />

              <div className="absolute w-[300px] h-[300px] rounded-full border border-[#c69cff]/35 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              <div className="absolute inset-0 grid place-items-center text-[9rem] font-black text-white/[.035]">
                NV
              </div>

              <span className="absolute bottom-5 left-5 text-[9px] tracking-[.2em] text-[#7d7485]">
                PORTRAIT / REPLACE LATER
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
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
              <Counter value="100+" label="Creatives Designed" />
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#c69cff]/10 mt-14">
          {skills.map(([name, description, Icon], index) => (
            <Reveal key={name} delay={index * 0.025}>
              <div className="group relative min-h-32 bg-[#0b0a10] p-5 hover:bg-[#120d1b] transition">
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

            return (
              <Reveal key={work.title} delay={index * 0.08}>
                <a
                  href={work.href}
                  className="group relative min-h-[350px] border border-[#c69cff]/20 overflow-hidden p-8 flex flex-col justify-between bg-gradient-to-br from-[#21122e] to-[#08050d] hover:border-[#c69cff]/70 hover:shadow-[0_0_70px_rgba(169,112,255,.15)] transition-all duration-700"
                >
                  <div className="w-14 h-14 border border-[#c69cff]/30 grid place-items-center text-[#c69cff] group-hover:bg-[#a970ff]/15 transition">
                    <Icon size={25} />
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
                </a>
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
              <a href="mailto:your@email.com">✉ your@email.com</a>

              <a href="tel:+910000000000" className="block">
                ◉ +91 XXXXX XXXXX
              </a>

              <div>⌖ Chennai, India</div>

              <a href="#">in LinkedIn</a>

              <a href="#">◎ Instagram</a>
            </div>

            <a
              href="/resume.pdf"
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
              className="border border-[#c69cff]/20 p-6 bg-white/[.015]"
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