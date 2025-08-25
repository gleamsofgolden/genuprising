import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Palette, Music, Camera, Smartphone, Megaphone, Heart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CulturePoliticsPage = () => {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry!🚀",
      duration: 4000,
    });
  };

  const caseStudies = [
    {
      id: 1,
      title: 'TikTok and Political Mobilization: The 2024 Election Cycle',
      description: 'How 15-second videos became powerful tools for voter registration and political education among Gen Z.',
      category: 'Social Media',
      icon: Smartphone,
      image: 'Young people creating political TikTok videos with voting registration materials and campaign signs',
      tags: ['Social Media', 'Voter Engagement', 'Digital Activism'],
      readTime: '12 min read',
      author: 'Digital Culture Team'
    },
    {
      id: 2,
      title: 'Protest Art in the Digital Age: From Streets to Screens',
      description: 'Analyzing how visual art and graphic design have evolved to support social movements in the Instagram era.',
      category: 'Visual Art',
      icon: Palette,
      image: 'Collage of protest art, murals, and digital graphics from recent social justice movements',
      tags: ['Visual Art', 'Protest Culture', 'Social Movements'],
      readTime: '15 min read',
      author: 'Art & Activism Collective'
    },
    {
      id: 3,
      title: 'Music as Political Resistance: Hip-Hop and Global Democracy',
      description: 'From Kendrick Lamar to international hip-hop artists, exploring music as a vehicle for political expression.',
      category: 'Music',
      icon: Music,
      image: 'Hip-hop artists performing at political rallies and social justice concerts around the world',
      tags: ['Music', 'Cultural Expression', 'Global Movements'],
      readTime: '18 min read',
      author: 'Music & Politics Lab'
    },
    {
      id: 4,
      title: 'Meme Culture and Political Discourse',
      description: 'How internet memes have become a new language of political commentary and youth engagement.',
      category: 'Internet Culture',
      icon: Camera,
      image: 'Collection of political memes and viral content that influenced recent elections and movements',
      tags: ['Memes', 'Internet Culture', 'Political Communication'],
      readTime: '10 min read',
      author: 'Digital Anthropology Team'
    }
  ];

  const culturalMovements = [
    {
      movement: 'Climate Art Activism',
      description: 'Artists using their platforms to raise awareness about environmental issues',
      examples: ['Extinction Rebellion performances', 'Climate murals', 'Eco-fashion statements'],
      impact: 'Increased youth engagement in environmental policy'
    },
    {
      movement: 'Social Justice Streaming',
      description: 'Content creators using platforms to educate about systemic issues',
      examples: ['Educational YouTube series', 'Instagram infographics', 'Podcast discussions'],
      impact: 'Democratized access to political education'
    },
    {
      movement: 'Activist Fashion',
      description: 'Clothing and style as forms of political expression and identity',
      examples: ['Protest t-shirts', 'Sustainable fashion', 'Cultural pride clothing'],
      impact: 'Normalized political expression in daily life'
    },
    {
      movement: 'Digital Storytelling',
      description: 'Personal narratives shared online to humanize political issues',
      examples: ['Twitter threads', 'TikTok testimonials', 'Instagram stories'],
      impact: 'Increased empathy and understanding across divides'
    }
  ];

  const intersectionTopics = [
    {
      title: 'Sports and Social Justice',
      description: 'Athletes using their platforms for political advocacy',
      icon: Heart,
      examples: ['Colin Kaepernick\'s protest', 'WNBA activism', 'Olympic demonstrations']
    },
    {
      title: 'Gaming and Political Engagement',
      description: 'How video games and gaming culture intersect with politics',
      icon: Smartphone,
      examples: ['Animal Crossing campaigns', 'Twitch political streams', 'Gaming for democracy']
    },
    {
      title: 'Fashion as Political Statement',
      description: 'Clothing choices as forms of political expression',
      icon: Palette,
      examples: ['Sustainable fashion activism', 'Cultural appropriation debates', 'Protest fashion']
    },
    {
      title: 'Food Politics and Culture',
      description: 'How food choices reflect and influence political values',
      icon: Heart,
      examples: ['Farm-to-table movements', 'Food justice activism', 'Cultural food preservation']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Culture & Politics - Gen Uprising</title>
        <meta name="description" content="Explore the intersection of art, social media, and activism in modern political movements and youth culture." />
        <meta property="og:title" content="Culture & Politics - Gen Uprising" />
        <meta property="og:description" content="Explore the intersection of art, social media, and activism in modern political movements and youth culture." />
      </Helmet>

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-900 to-[var(--navy)] text-white py-20">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="chapter-number mb-4 text-orange-200">Chapter 4</div>
              <h1 className="text-5xl md:text-6xl font-bold serif mb-6">Culture & Politics</h1>
              <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8">
                Where art, social media, and activism intersect to shape political discourse
              </p>
              <div className="max-w-2xl mx-auto">
                <img  
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-2xl" 
                  alt="Collage of young artists, musicians, and content creators engaged in political activism"
                 src="https://images.unsplash.com/photo-1610616936324-7e009edb03d8" />
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
              <div className="chapter-number mb-4">Cultural Analysis</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-8">Politics in the Age of Culture</h2>

              <div className="pull-quote">
                Today's political movements aren't just about policy—they're about identity, expression, and the stories we tell about who we are and who we want to become.
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <span className="highlight-term font-semibold">Culture and politics</span> have always been intertwined, but never more visibly than in the digital age. From viral TikTok videos that register voters to protest art that defines movements, from hip-hop lyrics that challenge power to memes that shape political discourse—young people are using every available medium to engage with and influence politics.
              </p>

              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Our Approach</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Analyze cultural phenomena through a political lens</li>
                  <li>• Examine how art and media influence political engagement</li>
                  <li>• Study the role of social media in modern activism</li>
                  <li>• Explore the intersection of identity and political expression</li>
                  <li>• Document emerging forms of cultural resistance</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                This section treats cultural phenomena as case studies in political engagement, examining how young people use creativity, technology, and community to participate in democracy. We explore both the opportunities and challenges of politicized culture in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Case Studies</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Cultural Politics in Action</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                In-depth analysis of how culture shapes and reflects political movements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={handleFeatureClick}
                  >
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                      <img  
                        className="w-full h-full object-cover" 
                        alt={study.title}
                       src="https://images.unsplash.com/photo-1601429675201-f66be94607bb" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon size={20} className="text-orange-600" />
                          <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                            {study.category}
                          </span>
                        </div>
                        <span className="text-sm text-[var(--text-muted)]">{study.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold serif text-[var(--navy)] mb-3 hover:text-orange-600 transition-colors">
                        {study.title}
                      </h3>

                      <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                        {study.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--text-muted)]">{study.author}</span>
                        <div className="flex items-center text-orange-600 font-medium text-sm">
                          <span className="underline-animation">Read Analysis</span>
                          <Megaphone size={16} className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cultural Movements */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Movement Analysis</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Emerging Cultural Movements</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                How young people are using culture as a vehicle for political change
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culturalMovements.map((movement, index) => (
                <motion.div
                  key={movement.movement}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500"
                >
                  <h3 className="text-xl font-bold serif text-[var(--navy)] mb-3">
                    {movement.movement}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
                    {movement.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--charcoal)] mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {movement.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-[var(--text-muted)] flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-semibold text-orange-800 mb-1">Impact:</h4>
                    <p className="text-sm text-orange-700">{movement.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Intersection Topics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Intersections</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Where Culture Meets Politics</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                Exploring unexpected connections between cultural phenomena and political engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {intersectionTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-center"
                    onClick={handleFeatureClick}
                  >
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold serif text-[var(--navy)] mb-3">
                      {topic.title}
                    </h3>
                    
                    <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                      {topic.description}
                    </p>

                    <div className="text-xs text-orange-600">
                      {topic.examples.length} case studies
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-orange-900 text-white">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold serif mb-6">Culture is Political</h2>
              <p className="text-xl mb-8 text-orange-100">
                Every creative choice, every platform, every story you share has the potential to influence political discourse.
              </p>
              
              <div className="bg-orange-800 p-8 rounded-lg mb-8 text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-bold serif mb-4">Share Your Cultural Analysis</h3>
                <ul className="space-y-2 text-orange-100">
                  <li>• Analyze a cultural phenomenon through a political lens</li>
                  <li>• Document how art or media influenced your political views</li>
                  <li>• Explore the intersection of identity and politics in your community</li>
                  <li>• Examine how social media shapes political discourse</li>
                </ul>
              </div>

              <button
                onClick={handleFeatureClick}
                className="activist-button bg-[var(--red)] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300"
              >
                SUBMIT YOUR ANALYSIS
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CulturePoliticsPage;
