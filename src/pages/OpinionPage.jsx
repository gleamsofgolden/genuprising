import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { PenTool, Clock, Eye, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const OpinionPage = () => {
  const handleArticleClick = () => {
    toast({
      title: "🚧 This article isn't implemented yet—but don't worry!  🚀",
      duration: 4000,
    });
  };

  const handleSubmitClick = () => {
    toast({
      title: "🚧 Article submission isn't implemented yet—but don't worry! 🚀",
      duration: 4000,
    });
  };

  const featuredArticles = [
    {
      id: 1,
      title: 'Why Student Debt Forgiveness is a Generational Justice Issue',
      excerpt: 'The current student debt crisis isn\'t just an economic problem—it\'s a fundamental question of intergenerational equity and the promise of higher education.',
      author: {
        name: 'Marcus Johnson',
        age: 20,
        school: 'Howard University',
        major: 'Economics & Political Science',
        image: 'Young Black man with glasses wearing a college sweatshirt, looking thoughtful while writing'
      },
      readTime: '8 min read',
      views: '12.4K',
      comments: 89,
      publishDate: '3 days ago',
      category: 'Economic Policy'
    },
    {
      id: 2,
      title: 'Climate Action Can\'t Wait for Perfect Politics',
      excerpt: 'While politicians debate the details, our generation faces the reality of climate change. It\'s time for pragmatic environmentalism over ideological purity.',
      author: {
        name: 'Sofia Rodriguez',
        age: 19,
        school: 'UC Berkeley',
        major: 'Environmental Science',
        image: 'Young Latina woman with curly hair wearing sustainable fashion, standing outdoors with protest signs'
      },
      readTime: '6 min read',
      views: '8.7K',
      comments: 156,
      publishDate: '1 week ago',
      category: 'Environment'
    },
    {
      id: 3,
      title: 'The Case for Lowering the Voting Age to 16',
      excerpt: 'If 16-year-olds can work, pay taxes, and drive, why can\'t they vote? It\'s time to expand democratic participation to those most affected by long-term policy decisions.',
      author: {
        name: 'Alex Chen',
        age: 17,
        school: 'Stuyvesant High School',
        major: 'High School Senior',
        image: 'Young Asian teenager with short hair wearing casual clothes, holding voter registration materials'
      },
      readTime: '10 min read',
      views: '15.2K',
      comments: 203,
      publishDate: '2 weeks ago',
      category: 'Voting Rights'
    }
  ];

  const recentOpinions = [
    {
      title: 'Social Media Regulation: Protecting Democracy or Limiting Free Speech?',
      author: 'Emma Thompson',
      school: 'Yale University',
      readTime: '7 min read',
      category: 'Digital Rights'
    },
    {
      title: 'Why Universal Basic Income is the Future of Work',
      author: 'David Kim',
      school: 'MIT',
      readTime: '9 min read',
      category: 'Economic Policy'
    },
    {
      title: 'Immigration Policy Through the Eyes of First-Generation Americans',
      author: 'Maria Santos',
      school: 'University of Texas',
      readTime: '11 min read',
      category: 'Immigration'
    },
    {
      title: 'The Mental Health Crisis on College Campuses: A Policy Response',
      author: 'Jordan Lee',
      school: 'Stanford University',
      readTime: '8 min read',
      category: 'Health Policy'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Opinion & Editorials - Gen Uprising</title>
        <meta name="description" content="Read thoughtful political commentary and analysis from young voices across the globe, bringing fresh perspectives to today's most pressing issues." />
        <meta property="og:title" content="Opinion & Editorials - Gen Uprising" />
        <meta property="og:description" content="Read thoughtful political commentary and analysis from young voices across the globe, bringing fresh perspectives to today's most pressing issues." />
      </Helmet>

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 to-[var(--navy)] text-white py-20">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="chapter-number mb-4 text-green-200">Chapter 2</div>
              <h1 className="text-5xl md:text-6xl font-bold serif mb-6">Opinion & Editorials</h1>
              <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8">
                Fresh perspectives on politics from the generation that will inherit the consequences
              </p>
              <div className="max-w-2xl mx-auto">
                <img  
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-2xl" 
                  alt="Young diverse writers working on laptops and notebooks in a modern newsroom setting"
                 src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" />
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
              <div className="chapter-number mb-4">Editorial Statement</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-8">Why Youth Voices Matter</h2>

              <div className="pull-quote">
                The most important political conversations are happening in dorm rooms, high school cafeterias, and group chats—not just in traditional media.
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <span className="highlight-term font-semibold">Young people</span> bring unique perspectives to political discourse—perspectives shaped by growing up with social media, climate change, school shootings, and economic uncertainty. We don't just have different opinions; we have different lived experiences that inform how we see policy challenges and democratic institutions.
              </p>

              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Our Editorial Standards</h3>
                <ul className="space-y-2 text-sm">
                  <li>• All opinions must be backed by credible sources and evidence</li>
                  <li>• Authors must disclose any potential conflicts of interest</li>
                  <li>• We welcome diverse viewpoints across the political spectrum</li>
                  <li>• Personal attacks and hate speech are strictly prohibited</li>
                  <li>• Each piece undergoes peer review by student editors</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                This section features essays, op-eds, and commentary from students and young professionals worldwide. Each piece includes an author profile highlighting their background, expertise, and perspective—because context matters in political discourse.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Featured Essays</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">Latest Perspectives</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                In-depth analysis and commentary on the issues shaping our political landscape
              </p>
            </motion.div>

            <div className="space-y-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={handleArticleClick}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">{article.publishDate}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold serif text-[var(--navy)] mb-4 hover:text-green-600 transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-lg text-[var(--text-muted)] mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      {/* Author Profile Box */}
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-200">
                          <img  
                            className="w-full h-full object-cover" 
                            alt={`Portrait of ${article.author.name}`}
                           src="https://images.unsplash.com/photo-1686643184179-e4b65e15022e" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[var(--charcoal)]">{article.author.name}</h3>
                          <p className="text-sm text-[var(--text-muted)]">Age {article.author.age} • {article.author.school}</p>
                          <p className="text-sm text-green-600">{article.author.major}</p>
                        </div>
                      </div>

                      {/* Article Stats */}
                      <div className="flex items-center space-x-6 text-sm text-[var(--text-muted)]">
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye size={16} />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={16} />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Opinions */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="chapter-number mb-4">Recent Commentary</div>
              <h2 className="text-4xl font-bold serif text-[var(--navy)] mb-4">More Voices</h2>
              <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                Additional perspectives from our growing community of student writers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentOpinions.map((opinion, index) => (
                <motion.div
                  key={opinion.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-green-500"
                  onClick={handleArticleClick}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {opinion.category}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">{opinion.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold serif text-[var(--navy)] mb-3 hover:text-green-600 transition-colors">
                    {opinion.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[var(--charcoal)]">{opinion.author}</p>
                      <p className="text-sm text-[var(--text-muted)]">{opinion.school}</p>
                    </div>
                    <PenTool size={16} className="text-green-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Your Voice */}
        <section className="py-16 bg-green-900 text-white">
          <div className="max-w-4xl mx-auto textbook-margin text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold serif mb-6">Have Something to Say?</h2>
              <p className="text-xl mb-8 text-green-100">
                We're always looking for fresh perspectives from young voices worldwide.
              </p>
              
              <div className="bg-green-800 p-8 rounded-lg mb-8 text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-bold serif mb-4">Submission Guidelines</h3>
                <ul className="space-y-2 text-green-100">
                  <li>• 800-1500 words</li>
                  <li>• Original, unpublished content</li>
                  <li>• Include 3-5 credible sources</li>
                  <li>• Author bio and headshot required</li>
                  <li>• Must be currently enrolled student or recent graduate (under 25)</li>
                </ul>
              </div>

              <button
                onClick={handleSubmitClick}
                className="activist-button bg-[var(--red)] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300"
              >
                SUBMIT YOUR PIECE
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OpinionPage;
