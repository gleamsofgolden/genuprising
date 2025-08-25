import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, BookOpen, Users, Globe, Palette } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const HomePage = () => {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! 🚀",
      duration: 4000,
    });
  };

  const chapters = [
    {
      icon: BookOpen,
      title: 'Civic Literacy',
      description: 'Structured explainers of government, voting, and rights, styled like textbook lessons with infographics.',
      href: '/civic-literacy',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      icon: Users,
      title: 'Opinion & Editorials',
      description: 'Youth essays with author profiles, bringing fresh perspectives to political discourse.',
      href: '/opinion',
      color: 'bg-green-50 text-green-700'
    },
    {
      icon: Globe,
      title: 'Global Democracy',
      description: 'Worldwide teen perspectives, visualized with maps and timeline graphics.',
      href: '/global-democracy',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      icon: Palette,
      title: 'Culture & Politics',
      description: 'Where art, social media, and activism intersect, styled like annotated case studies.',
      href: '/culture-politics',
      color: 'bg-orange-50 text-orange-700'
    }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'Understanding Your Voting Rights: A Complete Guide for Young Citizens',
      excerpt: 'Everything you need to know about exercising your democratic power, from registration to ballot casting.',
      author: 'Maya Chen',
      category: 'Civic Literacy',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Climate Activism in the Digital Age: How Gen Z is Reshaping Environmental Politics',
      excerpt: 'Exploring how young activists are using technology and social media to drive environmental change.',
      author: 'Jordan Williams',
      category: 'Culture & Politics',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Democracy Under Pressure: Youth Perspectives from Around the World',
      excerpt: 'Young voices from six continents share their experiences with democratic institutions and challenges.',
      author: 'Aisha Patel',
      category: 'Global Democracy',
      readTime: '15 min read'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gen Uprising - Politics by the Next Generation</title>
        <meta name="description" content="A powerful political blog educating, questioning, and empowering young citizens worldwide through civic literacy and youth perspectives." />
        <meta property="og:title" content="Gen Uprising - Politics by the Next Generation" />
        <meta property="og:description" content="A powerful political blog educating, questioning, and empowering young citizens worldwide through civic literacy and youth perspectives." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--charcoal)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold serif mb-6">
              Gen Uprising
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 text-gray-200">
              Politics, by the Next Generation
            </p>
            <div className="max-w-3xl mx-auto">
              <img  
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl" 
                alt="Young diverse group of activists holding protest signs and voting materials"
               src="https://images.unsplash.com/photo-1648254797278-991ab0f00da9" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto textbook-margin">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="chapter-number mb-4">Preface</div>
            <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-8">Our Mission</h2>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <div className="pull-quote">
              We believe that democracy thrives when young voices are heard, educated, and empowered to shape the future.
            </div>

            <p className="text-lg leading-relaxed mb-6">
              <span className="highlight-term font-semibold">Gen Uprising</span> serves as both classroom and catalyst—a digital space where the next generation learns about civic responsibility while actively participating in democratic discourse. We reject the notion that politics is too complex for young minds or that youth perspectives lack validity in serious political conversations.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Through rigorous research, thoughtful analysis, and authentic youth voices from around the globe, we aim to bridge the gap between academic political theory and real-world civic engagement. Every article, every perspective, and every call to action is designed with one goal: <span className="highlight-term font-semibold">empowering young citizens to become informed, engaged, and effective participants in democracy.</span>
            </p>

            <div className="sidebar-box">
              <h3 className="font-bold serif text-[var(--navy)] mb-3">Core Principles</h3>
              <ul className="space-y-2">
                <li>• Education through accessible, rigorous content</li>
                <li>• Amplification of diverse youth voices</li>
                <li>• Critical analysis of democratic institutions</li>
                <li>• Global perspective on local issues</li>
                <li>• Action-oriented civic engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="chapter-number mb-4">Table of Contents</div>
            <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Explore Our Chapters</h2>
            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
              Each section is designed like a chapter in a comprehensive civic guide, offering structured learning and diverse perspectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <motion.div
                  key={chapter.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={chapter.href}
                    className="block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[var(--red)] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${chapter.color}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold serif text-[var(--navy)] mb-2 group-hover:text-[var(--red)] transition-colors">
                          {chapter.title}
                        </h3>
                        <p className="text-[var(--text-muted)] mb-4">
                          {chapter.description}
                        </p>
                        <div className="flex items-center text-[var(--red)] font-medium">
                          <span className="underline-animation">Explore Chapter</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="chapter-number mb-4">Featured Reading</div>
            <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Latest Perspectives</h2>
            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
              Fresh insights and analysis from young voices shaping political discourse.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[var(--red)] bg-[var(--red-light)] px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold serif text-[var(--navy)] mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[var(--navy)] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {article.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-[var(--charcoal)]">
                        {article.author}
                      </span>
                    </div>
                    
                    <button
                      onClick={handleFeatureClick}
                      className="text-[var(--red)] font-medium text-sm underline-animation"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--red)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold serif mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Democracy needs your voice. Start your civic journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/civic-literacy"
                className="activist-button bg-white text-[var(--red)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                START LEARNING
              </Link>
              <button
                onClick={handleFeatureClick}
                className="activist-button bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[var(--red)] transition-all duration-300"
              >
                CONTRIBUTE
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
