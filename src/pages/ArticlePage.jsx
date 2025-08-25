import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Clock, Eye, MessageCircle, Share2, BookOpen } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ArticlePage = () => {
  const { id } = useParams();

  const handleInteraction = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! 🚀",
      duration: 4000,
    });
  };

  // Mock article data - in a real app, this would be fetched based on the ID
  const article = {
    id: id,
    title: 'Understanding Your Voting Rights: A Complete Guide for Young Citizens',
    subtitle: 'Everything you need to know about exercising your democratic power, from registration to ballot casting',
    author: {
      name: 'Maya Chen',
      age: 22,
      school: 'Georgetown University',
      major: 'Political Science & Government',
      bio: 'Maya is a senior at Georgetown University studying political science with a focus on democratic institutions. She has worked on voter registration drives in three states and interns at the Brennan Center for Justice.',
      image: 'Young Asian woman with professional attire and confident expression, holding voting materials'
    },
    publishDate: 'March 15, 2024',
    readTime: '12 min read',
    views: '15.2K',
    comments: 89,
    category: 'Civic Literacy',
    tags: ['Voting Rights', 'Democracy', 'Civic Education', 'Youth Engagement'],
    content: `
      <div class="chapter-number mb-4">Introduction</div>
      
      <p class="text-lg leading-relaxed mb-6">
        <span class="highlight-term font-semibold">Voting</span> is both a fundamental right and a civic responsibility, yet many young people feel uncertain about the process, their rights, or how to navigate potential barriers. This comprehensive guide breaks down everything you need to know about voting in the United States, from the constitutional foundations of suffrage to practical steps for casting your ballot.
      </p>

      <div class="pull-quote">
        "The right to vote is the crown jewel of American liberties, and we will not see its luster diminished." — Ronald Reagan
      </div>

      <h2 class="text-3xl font-bold serif text-[var(--navy)] mb-6 mt-8">Chapter 1: The Foundation of Voting Rights</h2>

      <p class="text-lg leading-relaxed mb-6">
        The right to vote in America has evolved significantly since the founding of the republic. Originally limited to white male property owners, suffrage has expanded through constitutional amendments, legislation, and court decisions to include all citizens aged 18 and older.
      </p>

      <div class="sidebar-box">
        <h3 class="font-bold serif text-[var(--navy)] mb-3">Key Constitutional Amendments</h3>
        <ul class="space-y-2 text-sm">
          <li>• <strong>15th Amendment (1870):</strong> Prohibited racial discrimination in voting</li>
          <li>• <strong>19th Amendment (1920):</strong> Extended voting rights to women</li>
          <li>• <strong>24th Amendment (1964):</strong> Eliminated poll taxes</li>
          <li>• <strong>26th Amendment (1971):</strong> Lowered voting age to 18</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold serif text-[var(--navy)] mb-6 mt-8">Chapter 2: Voter Registration</h2>

      <p class="text-lg leading-relaxed mb-6">
        Before you can vote, you must register. Registration requirements vary by state, but the process has become increasingly accessible through online registration, automatic registration, and same-day registration in many jurisdictions.
      </p>

      <h3 class="text-xl font-bold serif text-[var(--navy)] mb-4">Registration Requirements</h3>

      <ul class="space-y-3 mb-6">
        <li class="flex items-start space-x-3">
          <span class="text-[var(--red)] font-bold">•</span>
          <span><strong>Age:</strong> Must be 18 years old by Election Day (some states allow 17-year-olds to register if they'll turn 18 by the general election)</span>
        </li>
        <li class="flex items-start space-x-3">
          <span class="text-[var(--red)] font-bold">•</span>
          <span><strong>Citizenship:</strong> Must be a U.S. citizen</span>
        </li>
        <li class="flex items-start space-x-3">
          <span class="text-[var(--red)] font-bold">•</span>
          <span><strong>Residency:</strong> Must be a resident of the state and precinct where you plan to vote</span>
        </li>
        <li class="flex items-start space-x-3">
          <span class="text-[var(--red)] font-bold">•</span>
          <span><strong>Mental Competency:</strong> Must be mentally competent (definitions vary by state)</span>
        </li>
        <li class="flex items-start space-x-3">
          <span class="text-[var(--red)] font-bold">•</span>
          <span><strong>Felony Status:</strong> Requirements vary significantly by state for those with felony convictions</span>
        </li>
      </ul>

      <h2 class="text-3xl font-bold serif text-[var(--navy)] mb-6 mt-8">Chapter 3: Understanding Your Ballot</h2>

      <p class="text-lg leading-relaxed mb-6">
        Modern ballots can be complex, featuring multiple races, ballot measures, and voting methods. Understanding how to navigate your ballot ensures your vote is counted and reflects your preferences.
      </p>

      <div class="sidebar-box">
        <h3 class="font-bold serif text-[var(--navy)] mb-3">Types of Elections You'll Encounter</h3>
        <ul class="space-y-2 text-sm">
          <li>• <strong>Federal:</strong> President, U.S. Senate, U.S. House of Representatives</li>
          <li>• <strong>State:</strong> Governor, State Legislature, State Supreme Court</li>
          <li>• <strong>Local:</strong> Mayor, City Council, School Board, Sheriff</li>
          <li>• <strong>Ballot Measures:</strong> Constitutional amendments, local ordinances, bond issues</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold serif text-[var(--navy)] mb-6 mt-8">Chapter 4: Voting Methods and Accessibility</h2>

      <p class="text-lg leading-relaxed mb-6">
        States offer various voting methods to accommodate different needs and circumstances. Understanding your options helps ensure you can participate regardless of your situation.
      </p>

      <h3 class="text-xl font-bold serif text-[var(--navy)] mb-4">Voting Options</h3>

      <ul class="space-y-4 mb-6">
        <li>
          <strong class="text-[var(--navy)]">In-Person Early Voting:</strong> Available in most states, allows you to vote before Election Day at designated locations.
        </li>
        <li>
          <strong class="text-[var(--navy)]">Absentee/Mail-in Voting:</strong> Allows you to vote by mail, either with or without an excuse depending on your state.
        </li>
        <li>
          <strong class="text-[var(--navy)]">Election Day Voting:</strong> Traditional voting at your assigned polling place on Election Day.
        </li>
        <li>
          <strong class="text-[var(--navy)]">Curbside Voting:</strong> Available in some states for voters with disabilities or mobility issues.
        </li>
      </ul>

      <div class="footnote">
        <h4 class="font-bold mb-2">Further Reading</h4>
        <ul class="space-y-1 text-sm">
          <li>• Brennan Center for Justice: "Voting Rights and Election Administration"</li>
          <li>• National Conference of State Legislatures: "Voter Registration"</li>
          <li>• U.S. Election Assistance Commission: "Voter's Guide"</li>
          <li>• American Civil Liberties Union: "Know Your Voting Rights"</li>
        </ul>
      </div>
    `
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - Gen Uprising</title>
        <meta name="description" content={article.subtitle} />
        <meta property="og:title" content={`${article.title} - Gen Uprising`} />
        <meta property="og:description" content={article.subtitle} />
      </Helmet>

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Article Header */}
        <section className="bg-white py-16 border-b border-gray-200">
          <div className="max-w-4xl mx-auto textbook-margin">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-[var(--text-muted)]">{article.publishDate}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold serif text-[var(--navy)] mb-4 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
                {article.subtitle}
              </p>

              {/* Article Stats */}
              <div className="flex items-center space-x-6 text-sm text-[var(--text-muted)] mb-8">
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
                <button
                  onClick={handleInteraction}
                  className="flex items-center space-x-1 text-[var(--red)] hover:text-red-700 transition-colors"
                >
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>

              {/* Author Profile Box */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 flex-shrink-0">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={`Portrait of ${article.author.name}`}
                     src="https://images.unsplash.com/photo-1686643184179-e4b65e15022e" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold serif text-[var(--navy)] mb-1">{article.author.name}</h3>
                    <p className="text-sm text-[var(--text-muted)] mb-2">
                      Age {article.author.age} • {article.author.school}
                    </p>
                    <p className="text-sm text-blue-600 mb-3">{article.author.major}</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="textbook-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Table of Contents */}
              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3 flex items-center">
                  <BookOpen size={20} className="mr-2" />
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">Introduction</button></li>
                  <li><button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">Chapter 1: Foundation of Voting Rights</button></li>
                  <li><button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">Chapter 2: Voter Registration</button></li>
                  <li><button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">Chapter 3: Understanding Your Ballot</button></li>
                  <li><button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">Chapter 4: Voting Methods</button></li>
                </ul>
              </div>

              {/* Tags */}
              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors"
                      onClick={handleInteraction}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="sidebar-box">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Related Reading</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">
                      "How to Research Candidates and Ballot Measures"
                    </button>
                  </li>
                  <li>
                    <button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">
                      "Understanding the Electoral College"
                    </button>
                  </li>
                  <li>
                    <button onClick={handleInteraction} className="text-blue-600 hover:text-blue-800 underline-animation text-left">
                      "Voter Suppression: Recognizing and Combating Barriers"
                    </button>
                  </li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="sidebar-box bg-blue-50 border-blue-200">
                <h3 className="font-bold serif text-[var(--navy)] mb-3">Take Action</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleInteraction}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    Check Registration Status
                  </button>
                  <button
                    onClick={handleInteraction}
                    className="w-full bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded font-medium hover:bg-blue-50 transition-colors text-sm"
                  >
                    Find Polling Location
                  </button>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto textbook-margin">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold serif text-[var(--navy)] mb-8">Discussion</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-6">
                  <MessageCircle size={24} className="text-blue-600" />
                  <span className="text-lg font-medium text-[var(--charcoal)]">
                    {article.comments} comments
                  </span>
                </div>
                
                <div className="text-center py-12">
                  <p className="text-[var(--text-muted)] mb-4">
                    Join the conversation about voting rights and civic engagement.
                  </p>
                  <button
                    onClick={handleInteraction}
                    className="activist-button bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300"
                  >
                    VIEW COMMENTS
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticlePage;
