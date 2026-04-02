import { BookOpen, Code, Briefcase, TrendingUp, Database, Cloud, Workflow, LineChart } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

interface AboutCourseProps {
  onNavigate: (page: string) => void;
}

export default function AboutCourse({ onNavigate }: AboutCourseProps) {
  const modules = [
    {
      icon: <Cloud size={32} />,
      title: 'Azure Fundamentals',
      topics: ['Azure Portal & Services', 'Resource Groups', 'Storage Accounts', 'Security Basics']
    },
    {
      icon: <Database size={32} />,
      title: 'Azure Data Lake Storage',
      topics: ['ADLS Gen2 Architecture', 'Data Organization', 'Access Control', 'Performance Optimization']
    },
    {
      icon: <Workflow size={32} />,
      title: 'Azure Data Factory',
      topics: ['Pipelines & Activities', 'Data Flows', 'Triggers & Scheduling', 'Monitoring & Alerts']
    },
    {
      icon: <Code size={32} />,
      title: 'Azure Databricks',
      topics: ['Spark Fundamentals', 'Delta Lake', 'Data Processing', 'Performance Tuning']
    },
    {
      icon: <LineChart size={32} />,
      title: 'Synapse Analytics',
      topics: ['Data Warehousing', 'SQL Pools', 'Data Integration', 'Analytics Workloads']
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Advanced Concepts',
      topics: ['Medallion Architecture', 'Data Governance', 'CI/CD for Data', 'Best Practices']
    }
  ];

  const careerPaths = [
    {
      role: 'Azure Data Engineer',
      description: 'Design and build data pipelines in Azure ecosystem'
    },
    {
      role: 'Data Platform Engineer',
      description: 'Manage and optimize cloud data platforms'
    },
    {
      role: 'Big Data Engineer',
      description: 'Process large-scale data using Spark and distributed systems'
    },
    {
      role: 'Analytics Engineer',
      description: 'Build data models and analytics solutions'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2563EB]/10 via-[#38BDF8]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              Azure Data Engineering Course
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive, industry-focused program designed to transform you into a skilled Azure Data Engineer
            </p>
          </div>

          <GlassCard className="mb-12" hover={false}>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Our Azure Data Engineering course is meticulously designed to bridge the gap between academic knowledge and industry requirements. Whether you're a student, fresh graduate, or working professional looking to switch careers, this course provides you with the practical skills and hands-on experience needed to excel in the field.
              </p>
              <p className="mb-4">
                The curriculum combines theoretical concepts with real-world scenarios, ensuring you understand not just how to use Azure tools, but when and why to use them. You'll work on industry-relevant projects that mirror the challenges data engineers face daily.
              </p>
              <p>
                With a focus on modern data engineering practices including the Medallion Architecture, DataOps, and cloud-native solutions, you'll be prepared to handle enterprise-scale data challenges from day one.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Course Modules
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive curriculum covering all aspects of Azure Data Engineering
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <GlassCard key={index}>
                <div className="text-[#2563EB] mb-4">{module.icon}</div>
                <h3 className="font-semibold text-xl mb-4 text-gray-800">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-[#38BDF8] mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Technologies You'll Master
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Industry-standard tools and platforms used by leading organizations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <GlassCard>
              <h3 className="font-semibold text-xl mb-3 text-gray-800">Core Technologies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Azure Data Factory (ADF)</li>
                <li>• Azure Databricks</li>
                <li>• Azure Data Lake Storage Gen2</li>
                <li>• Azure Synapse Analytics</li>
                <li>• Apache Spark & PySpark</li>
                <li>• Delta Lake</li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="font-semibold text-xl mb-3 text-gray-800">Additional Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• SQL & Data Modeling</li>
                <li>• Python for Data Engineering</li>
                <li>• CI/CD for Data Pipelines</li>
                <li>• Data Governance & Security</li>
                <li>• Performance Optimization</li>
                <li>• Monitoring & Troubleshooting</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Career Opportunities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Launch your career in high-demand data engineering roles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {careerPaths.map((career, index) => (
              <GlassCard key={index}>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-[#2563EB] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-800">{career.role}</h3>
                    <p className="text-gray-600">{career.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          <GlassCard className="max-w-3xl mx-auto text-center" hover={false}>
            <TrendingUp className="text-[#2563EB] mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Growing Demand</h3>
            <p className="text-gray-700 mb-4">
              Data Engineering is one of the fastest-growing fields in technology, with companies increasingly moving to cloud platforms like Azure. Our graduates are well-positioned to take advantage of this growing market.
            </p>
            <p className="text-gray-600">
              Average salary for Azure Data Engineers ranges from ₹8 LPA to ₹25+ LPA depending on experience and skills.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2563EB] to-[#38BDF8]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our comprehensive Azure Data Engineering program today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-[#2563EB]"
              onClick={() => onNavigate('contact')}
            >
              Enroll Now
            </Button>
            <Button
              variant="outline"
              className="bg-white text-[#2563EB] hover:bg-white/90 border-0"
              onClick={() => onNavigate('about')}
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
