import { Target, Users, Award, Heart, BookOpen, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

interface AboutUsProps {
  onNavigate: (page: string) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  const values = [
    {
      icon: <Target size={40} />,
      title: 'Mission-Driven',
      description: 'Empowering individuals to achieve their career goals through quality education'
    },
    {
      icon: <Heart size={40} />,
      title: 'Student-Centric',
      description: 'Every student receives personalized attention and support throughout their journey'
    },
    {
      icon: <Award size={40} />,
      title: 'Industry-Focused',
      description: 'Curriculum designed with real-world industry requirements in mind'
    },
    {
      icon: <Zap size={40} />,
      title: 'Results-Oriented',
      description: 'Focused on outcomes with proven track record of successful career transitions'
    }
  ];

  const approach = [
    {
      title: 'Hands-On Learning',
      description: 'We believe in learning by doing. Every concept is reinforced with practical exercises and real-world projects that help you build a strong portfolio.'
    },
    {
      title: 'Industry Expertise',
      description: 'Our instructors are working professionals with extensive experience in Azure Data Engineering, bringing real-world insights to the classroom.'
    },
    {
      title: 'Flexible Learning',
      description: 'Whether you\'re a student or working professional, our flexible schedule options ensure you can learn at your own pace without disrupting your current commitments.'
    },
    {
      title: 'Career Support',
      description: 'From resume building to interview preparation, we provide comprehensive support to help you land your dream job in data engineering.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2563EB]/10 via-[#38BDF8]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              About Madhu Cloud Academy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transforming careers through industry-focused Azure Data Engineering education
            </p>
          </div>

          <GlassCard className="mb-12" hover={false}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="mb-4">
                Madhu Cloud Academy was founded with a clear vision: to bridge the gap between academic education and industry requirements in the rapidly evolving field of cloud data engineering. We recognized that while many individuals possess the aptitude and desire to excel in data engineering, they often lack access to practical, industry-relevant training.
              </p>
              <p className="mb-4">
                What started as a mission to help a handful of aspiring data engineers has grown into a thriving academy that has successfully trained over 1100 professionals. Our students come from diverse backgrounds - fresh graduates looking to start their careers, working professionals seeking career transitions, and students wanting to gain practical skills alongside their academic studies.
              </p>
              <p>
                Today, we take pride in being recognized as a trusted name in Azure Data Engineering education, with our alumni working at leading companies across the globe.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            To empower individuals with practical, industry-relevant Azure Data Engineering skills that enable them to build successful careers in the data-driven economy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index}>
                <div className="text-[#2563EB] mb-4">{value.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Our Teaching Approach
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A proven methodology that has helped 1100+ professionals launch their data engineering careers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {approach.map((item, index) => (
              <GlassCard key={index}>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Why Students Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <GlassCard>
              <BookOpen className="text-[#2563EB] mb-4" size={48} />
              <h3 className="font-semibold text-2xl mb-3 text-gray-800">Practical Curriculum</h3>
              <p className="text-gray-600">
                Every module is designed with industry scenarios in mind, ensuring you learn skills that are immediately applicable in real-world situations.
              </p>
            </GlassCard>
            <GlassCard>
              <Users className="text-[#2563EB] mb-4" size={48} />
              <h3 className="font-semibold text-2xl mb-3 text-gray-800">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from professionals who are actively working in the field, bringing current industry practices and insights to every session.
              </p>
            </GlassCard>
            <GlassCard>
              <Award className="text-[#2563EB] mb-4" size={48} />
              <h3 className="font-semibold text-2xl mb-3 text-gray-800">Proven Results</h3>
              <p className="text-gray-600">
                With over 1100 successful career transitions, our track record speaks for itself. Join a community of successful data engineers.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-4xl mx-auto">
          <GlassCard hover={false}>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Commitment</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Madhu Cloud Academy, we're committed to your success. This means:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">✓</span>
                  <span>Continuously updating our curriculum to reflect the latest industry trends and technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">✓</span>
                  <span>Providing personalized attention to ensure every student masters the concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">✓</span>
                  <span>Offering ongoing support even after course completion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">✓</span>
                  <span>Building a strong community where students can network and grow together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">✓</span>
                  <span>Maintaining the highest standards of quality in everything we do</span>
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2563EB] to-[#38BDF8]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Be part of 1100+ professionals who transformed their careers with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white text-[#2563EB] hover:bg-white/90 border-0"
              onClick={() => onNavigate('course')}
            >
              Explore Our Course
            </Button>
            <Button
              className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-[#2563EB]"
              onClick={() => onNavigate('contact')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
