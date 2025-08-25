import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Globe, MapPin, Calendar, Users } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const GlobalDemocracyPage = () => {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! 🚀",
      duration: 4000,
    });
  };

  const globalReports = [
    {
      id: 1,
      title: 'Youth Voter Turnout: A Global Analysis',
      description: 'Examining voting patterns among 18-25 year olds across 30 democracies and the factors that drive civic engagement.',
      countries: ['United States', 'Germany', 'Brazil', 'India', 'South Korea'],
      contributors: 12,
      publishDate: 'March 2024',
      type: 'Research Report',
      image: 'World map showing youth voter turnout statistics with colorful data visualization and charts'
    },
    {
      id: 2,
      title: 'Digital Democracy: How Young People Engage Online',
      description: 'A comprehensive look at how social media, online platforms, and digital tools are reshaping political participation.',
      countries: ['Estonia', 'Taiwan', 'Kenya', 'Canada', 'New Zealand'],
      contributors: 8,
      publishDate: 'February 2024',
      type: 'Case Study',
      image: 'Collage of young people using smartphones and computers for political engagement and digital voting'
    },
    {
      id: 3,
      title: 'Climate Activism Across Continents',
      description: 'Student voices from six continents share their experiences leading environmental movements and influencing policy.',
      countries: ['Sweden', 'Philippines', 'Nigeria', 'Chile', 'Australia'],
      contributors: 15,
      publishDate: 'January 2024',
      type: 'Documentary Series',
      image: 'Young climate activists from different countries holding protest signs and banners at environmental rallies'
    }
  ];

  const countrySpotlights = [
    {
      country: 'Taiwan',
      flag: '🇹🇼',
      title: 'Digital Democracy in Action',
      author: 'Lin Wei-Chen',
      age: 22,
      excerpt: 'How Taiwan\'s vTaiwan platform is revolutionizing citizen participation in policymaking through technology.',
      readTime: '6 min read'
    },
    {
      country: 'Chile',
      flag: '🇨🇱',
      title: 'Constitutional Convention: Youth at the Forefront',
      author: 'Sofia Morales',
      age: 24,
      excerpt: 'Young Chileans played a crucial role in drafting a new constitution. Here\'s what we learned about democratic participation.',
      readTime: '8 min read'
    },
    {
      country: 'Kenya',
      flag: '🇰🇪',
      title: 'Mobile Money and Political Transparency',
      author: 'James Kiprotich',
      age: 21,
      excerpt: 'How digital payment systems are creating new opportunities for political accountability in East Africa.',
      readTime: '7 min read'
    },
    {
      country: 'Estonia',
      flag: '🇪🇪',
      title: 'E-Residency and the Future of Citizenship',
      author: 'Kristina Tamm',
      age: 20,
      excerpt: 'Estonia\'s digital citizenship program offers insights into how technology might reshape democratic participation.',
      readTime: '9 min read'
    }
  ];

  const timeline = [
    {
      year: '2024',
      events: [
        'Taiwan Presidential Election - Record youth turnout',
        'European Parliament Elections - Climate focus',
        'India General Election - Digital campaigning surge'
      ]
    },
    {
      year: '2023',
      events: [
        'Turkey Presidential Election - Youth mobilization',
        'Argentina Presidential Election - Economic concerns',
        'Poland Parliamentary Election - Democracy debates'
      ]
    },
    {
      year: '2022',
      events: [
        'Brazil Presidential Election - Social media influence',
        'Philippines Presidential Election - Disinformation challenges',
        'France Presidential Election - Youth candidate support'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Global Democracy - Gen Uprising</title>
        <meta name="description" content="Explore how young people worldwide are engaging with democratic institutions, from digital participation to grassroots movements." />
        <meta property="og:title" content="Global Democracy - Gen Uprising" />
        <meta property="og:description" content="Explore how young people worldwide are engaging with democratic institutions, from digital participation to grassroots movements." />
      </Helmet>

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-[var(--navy)] text-white py-20">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="chapter-number mb-4 text-purple-200">Chapter 3</div>
              <h1 className="text-5xl md:text-6xl font-bold serif mb-6">Global Democracy</h1>
              <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8">
                Youth perspectives on democratic participation from every corner of the world
              </p>
              <div className="max-w-2xl mx-auto">
                <img  
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-2xl" 
                  alt="World map with young people from different countries connected by digital networks"
                 src="https://images.unsplash.com/photo-1601037295085-6c17aa4e40a7" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto textbook-margin">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="chapter-number mb-4">Global Perspective</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-8">Democracy Without Borders</h2>

              <div className="pull-quote">
                Democratic challenges and innovations don't respect national boundaries—and neither should our understanding of civic engagement.
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <span className="highlight-term font-semibold">Young people worldwide</span> are reimagining democratic participation, from Estonia's digital voting systems to Taiwan's participatory democracy platforms, from Chile's constitutional convention to Kenya's mobile-enabled transparency initiatives. These innovations offer lessons that transcend borders and political systems.
              </p>

              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Our Global Network</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 50+ student correspondents across 6 continents</li>
                  <li>• Partnerships with youth organizations in 25 countries</li>
                  <li>• Monthly virtual democracy forums</li>
                  <li>• Collaborative research projects on democratic innovation</li>
                  <li>• Real-time election coverage from youth perspectives</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                This section features reports, analysis, and firsthand accounts from young people navigating different democratic systems, facing unique challenges, and pioneering new forms of civic engagement. Through maps, timelines, and comparative analysis, we explore how democracy evolves in different contexts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Reports */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Research & Analysis</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Global Democracy Reports</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                Comprehensive analysis of democratic trends and youth engagement worldwide
              </p>
            </motion.div>

            <div className="space-y-8">
              {globalReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={handleFeatureClick}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <img  
                          className="w-full h-full object-cover" 
                          alt={report.title}
                         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          {report.type}
                        </span>
                        <span className="text-sm text-[var(--text-muted)]">{report.publishDate}</span>
                      </div>

                      <h3 className="text-2xl font-bold serif text-[var(--navy)] mb-4 hover:text-purple-600 transition-colors">
                        {report.title}
                      </h3>

                      <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                        {report.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-purple-500" />
                          <span className="text-sm text-[var(--text-muted)]">
                            {report.countries.slice(0, 3).join(', ')}
                            {report.countries.length > 3 && ` +${report.countries.length - 3} more`}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} className="text-purple-500" />
                          <span className="text-sm text-[var(--text-muted)]">
                            {report.contributors} contributors
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center text-purple-600 font-medium">
                        <span className="underline-animation">Read Full Report</span>
                        <Globe size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Country Spotlights */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Country Spotlights</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Voices from Around the World</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                First-hand accounts of democratic participation from our global correspondents
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {countrySpotlights.map((spotlight, index) => (
                <motion.div
                  key={spotlight.country}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-purple-500"
                  onClick={handleFeatureClick}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{spotlight.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold serif text-[var(--navy)]">{spotlight.country}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{spotlight.readTime}</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold serif text-[var(--navy)] mb-3 hover:text-purple-600 transition-colors">
                    {spotlight.title}
                  </h4>

                  <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                    {spotlight.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[var(--charcoal)]">{spotlight.author}</p>
                      <p className="text-sm text-[var(--text-muted)]">Age {spotlight.age}</p>
                    </div>
                    <Globe size={16} className="text-purple-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Democracy Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto textbook-margin">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Timeline</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Recent Democratic Milestones</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                Key elections and democratic developments where youth voices made a difference
              </p>
            </motion.div>

            <div className="space-y-8">
              {timeline.map((year, index) => (
                <motion.div
                  key={year.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      <span className="font-bold serif">{year.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="space-y-3">
                        {year.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="flex items-start space-x-3">
                            <Calendar size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                            <span className="text-[var(--charcoal)]">{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold serif mb-6">Join Our Global Network</h2>
              <p className="text-xl mb-8 text-purple-100">
                Share your perspective on democracy from wherever you are in the world.
              </p>
              
              <div className="bg-purple-800 p-8 rounded-lg mb-8 text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-bold serif mb-4">Become a Correspondent</h3>
                <ul className="space-y-2 text-purple-100">
                  <li>• Share your country's democratic developments</li>
                  <li>• Participate in global research projects</li>
                  <li>• Connect with young democrats worldwide</li>
                  <li>• Contribute to comparative democracy studies</li>
                </ul>
              </div>

              <button
                onClick={handleFeatureClick}
                className="activist-button bg-[var(--red)] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300"
              >
                APPLY TO CONTRIBUTE
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GlobalDemocracyPage;
