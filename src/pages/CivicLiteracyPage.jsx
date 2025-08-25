import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BookOpen, Vote, Scale, Users, FileText, Globe } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CivicLiteracyPage = () => {
  const handleLessonClick = () => {
    toast({
      title: "🚧 This lesson isn't implemented yet—but don't worry! 🚀",
      duration: 4000,
    });
  };

  const lessons = [
    {
      icon: Vote,
      title: 'How Democracy Works',
      description: 'Understanding the fundamental principles of democratic governance, from ancient Athens to modern republics.',
      level: 'Beginner',
      duration: '15 min read',
      topics: ['Democratic Principles', 'Types of Democracy', 'Checks and Balances']
    },
    {
      icon: FileText,
      title: 'Your Voting Rights',
      description: 'A comprehensive guide to voter registration, ballot access, and protecting your democratic voice.',
      level: 'Essential',
      duration: '12 min read',
      topics: ['Registration Process', 'Voting Methods', 'Voter Protection']
    },
    {
      icon: Scale,
      title: 'Understanding the Constitution',
      description: 'Breaking down the foundational document that shapes American democracy and your rights as a citizen.',
      level: 'Intermediate',
      duration: '20 min read',
      topics: ['Bill of Rights', 'Amendments', 'Constitutional Interpretation']
    },
    {
      icon: Users,
      title: 'Branches of Government',
      description: 'How the executive, legislative, and judicial branches work together—and sometimes against each other.',
      level: 'Beginner',
      duration: '18 min read',
      topics: ['Executive Power', 'Legislative Process', 'Judicial Review']
    },
    {
      icon: Globe,
      title: 'Local Government Impact',
      description: 'Why city councils and school boards might matter more to your daily life than federal politics.',
      level: 'Practical',
      duration: '10 min read',
      topics: ['Municipal Government', 'School Boards', 'Local Elections']
    },
    {
      icon: BookOpen,
      title: 'Political Parties & Elections',
      description: 'Understanding the role of political parties, primary elections, and the electoral process.',
      level: 'Intermediate',
      duration: '16 min read',
      topics: ['Party Systems', 'Primary Elections', 'Electoral College']
    }
  ];

  const infographics = [
    {
      title: 'The Path of a Bill to Law',
      description: 'Visual breakdown of how legislation moves through Congress',
      image: 'Detailed infographic showing the legislative process from bill introduction to presidential signature'
    },
    {
      title: 'Your Rights at a Glance',
      description: 'Quick reference guide to constitutional rights and freedoms',
      image: 'Colorful infographic displaying the Bill of Rights with modern examples and explanations'
    },
    {
      title: 'Election Timeline 2024',
      description: 'Key dates and deadlines for the upcoming election cycle',
      image: 'Timeline infographic showing important election dates, registration deadlines, and voting periods'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Civic Literacy - Gen Uprising</title>
        <meta name="description" content="Learn about government, voting rights, and civic responsibility through structured lessons designed for young citizens." />
        <meta property="og:title" content="Civic Literacy - Gen Uprising" />
        <meta property="og:description" content="Learn about government, voting rights, and civic responsibility through structured lessons designed for young citizens." />
      </Helmet>

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-[var(--navy)] text-white py-20">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="chapter-number mb-4 text-blue-200">Chapter 1</div>
              <h1 className="text-5xl md:text-6xl font-bold serif mb-6">Civic Literacy</h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                Your comprehensive guide to understanding government, rights, and civic responsibility
              </p>
              <div className="max-w-2xl mx-auto">
                <img  
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-2xl" 
                  alt="Students studying civics with textbooks, constitution, and voting materials"
                 src="https://images.unsplash.com/photo-1698993081947-8a3654303904" />
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
              <div className="chapter-number mb-4">Introduction</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-8">Why Civic Literacy Matters</h2>

              <div className="pull-quote">
                Democracy is not a spectator sport. It requires informed, engaged citizens who understand both their rights and their responsibilities.
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <span className="highlight-term font-semibold">Civic literacy</span> is more than just knowing how government works—it's understanding your role as a citizen in shaping the society you want to live in. In an era of rapid information flow and complex global challenges, young citizens need more than basic civics knowledge; they need the tools to critically analyze political information, engage constructively in democratic processes, and advocate effectively for their values.
              </p>

              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Learning Objectives</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Understand the structure and function of democratic institutions</li>
                  <li>• Learn your rights and responsibilities as a citizen</li>
                  <li>• Develop skills for civic engagement and advocacy</li>
                  <li>• Analyze current political issues through a civic lens</li>
                  <li>• Build confidence in participating in democratic processes</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Each lesson in this section is designed like a textbook chapter, with clear learning objectives, key concepts, and practical applications. We believe that civic education should be rigorous without being intimidating, comprehensive without being overwhelming.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Curriculum</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Core Lessons</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                Structured learning modules covering essential civic knowledge and skills
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessons.map((lesson, index) => {
                const Icon = lesson.icon;
                return (
                  <motion.div
                    key={lesson.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 cursor-pointer group"
                    onClick={handleLessonClick}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                        <Icon size={24} />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {lesson.level}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold serif text-[var(--navy)] mb-3 group-hover:text-blue-600 transition-colors">
                      {lesson.title}
                    </h3>

                    <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                      {lesson.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm text-[var(--text-muted)] mb-2">{lesson.duration}</p>
                      <div className="flex flex-wrap gap-1">
                        {lesson.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      <span className="underline-animation">Start Lesson</span>
                      <BookOpen size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infographics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Visual Learning</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Interactive Infographics</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                Complex civic concepts made clear through visual storytelling
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {infographics.map((infographic, index) => (
                <motion.div
                  key={infographic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={handleLessonClick}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={infographic.title}
                     src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold serif text-[var(--navy)] mb-2">
                      {infographic.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm">
                      {infographic.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold serif mb-6">Ready to Become a Civic Leader?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Knowledge is power, but applied knowledge is change.
              </p>
              <button
                onClick={handleLessonClick}
                className="activist-button bg-[var(--red)] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300"
              >
                START YOUR CIVIC JOURNEY
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CivicLiteracyPage;
