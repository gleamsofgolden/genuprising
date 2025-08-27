import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Target, Globe, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const founders = [
    {
      name: 'Roopkatha Dey',
      role: 'Founder',
      bio: 'Hi, I’m Roopkatha Dey, the voice behind Gen Uprising. When I’m not dissecting politics and writing fiery essays, you’ll probably catch me with a Maisie Peters song stuck in my head, rereading Jane Austen for the hundredth time, or battling it out at the table tennis table. I write, I play piano, and yes — I am a chronic Twitter user (don’t ask how many hours my screen time says). I started Gen Uprising because I believe politics shouldn’t just belong to textbooks and headlines — it should belong to us. This blog is my way of mixing civic curiosity with a teenager’s voice, proving that young people don’t just watch history happen; we make it.',
      image:
        'https://media.discordapp.net/attachments/1095026684165627914/1409203413278916702/1790f0ca21d98b1bef40e14d95ecd10d.webp?ex=68ac8673&is=68ab34f3&hm=7fb7a1627d36261185ce1cb2ca4889375a41ed22df352697aa41fd1e166bef96&=&format=webp&width=741&height=844',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Accuracy & Integrity',
      description: 'We commit to rigorous fact-checking and transparent sourcing in all our content.',
    },
    {
      icon: Users,
      title: 'Inclusive Voices',
      description: 'We amplify diverse perspectives from young people across all backgrounds and communities.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We believe local issues are connected to global movements and democratic principles.',
    },
    {
      icon: BookOpen,
      title: 'Educational Focus',
      description: 'We prioritize learning and understanding over partisan politics or sensationalism.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Gen Uprising</title>
        <meta
          name="description"
          content="Learn about Gen Uprising's mission to educate, question, and empower young citizens worldwide through civic literacy and authentic youth perspectives."
        />
        <meta property="og:title" content="About Us - Gen Uprising" />
        <meta
          property="og:description"
          content="Learn about Gen Uprising's mission to educate, question, and empower young citizens worldwide through civic literacy and authentic youth perspectives."
        />
      </Helmet>

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--charcoal)] text-white py-20">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="chapter-number mb-4 text-gray-300">Preface</div>
              <h1 className="text-5xl md:text-6xl font-bold serif mb-6">About Gen Uprising</h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                The story of how a group of young citizens decided to reclaim political discourse
              </p>
            </motion.div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto textbook-margin">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="chapter-number mb-4">Chapter 1</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-8">The Birth of an Uprising</h2>

              <div className="pull-quote">
                "We were tired of being told we were too young to understand politics, while simultaneously being told we were the future of democracy."
              </div>

              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Our Founding Moment</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  "What if we created the political education resource we wished we'd had in high
                  school? What if we proved that young people could engage with complex political
                  issues with the same rigor as any academic journal, but with the accessibility and
                  energy that our generation brings to everything we do?"
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-2 italic">
                  — From the original Gen Uprising manifesto, written collaboratively over three time
                  zones
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                The idea was simple but revolutionary: create a platform that treated young people as
                serious political actors while maintaining the educational rigor of the best civic
                textbooks. We wanted to prove that accessibility didn't mean dumbing down, and that
                youth perspectives weren't just valid—they were essential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Chapter 2</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Meet the Founder</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="mb-6">
                    <img
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[var(--red)]"
                      alt={`Portrait of ${founder.name}`}
                      src={founder.image}
                    />
                  </div>
                  <h3 className="text-xl font-bold serif text-[var(--navy)] mb-2">{founder.name}</h3>
                  <p className="text-[var(--red)] font-medium mb-4">{founder.role}</p>
                  <p className="text-[var(--text-muted)] leading-relaxed">{founder.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Chapter 3</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Our Core Values</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                The principles that guide every article, every perspective, and every call to action
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="p-3 bg-[var(--red)] text-white rounded-lg">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold serif text-[var(--navy)] mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[var(--text-muted)] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
