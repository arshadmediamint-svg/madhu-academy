import { Database, Workflow, Cloud, LineChart, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const technologies = [
    {
      icon: <Workflow size={40} />,
      title: 'Azure Data Factory',
      description: 'ADF Pipelines & Triggers'
    },
    {
      icon: <Database size={40} />,
      title: 'Azure Databricks',
      description: 'Spark, Delta Lake'
    },
    {
      icon: <Cloud size={40} />,
      title: 'ADLS Gen2',
      description: 'Data Lake Storage'
    },
    {
      icon: <LineChart size={40} />,
      title: 'Synapse Analytics',
      description: 'Data Warehousing'
    }
  ];

  const whyChoose = [
    {
      icon: <Award size={32} />,
      title: 'Hands-on Real World Projects',
      description: 'Work on industry-relevant projects that mirror real data engineering scenarios'
    },
    {
      icon: <Users size={32} />,
      title: 'Industry Level Training',
      description: 'Learn from experienced professionals with real-world Azure experience'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Interview Focused Preparation',
      description: 'Comprehensive interview preparation with common questions and scenarios'
    },
    {
      icon: <ArrowRight size={32} />,
      title: 'Beginner to Advanced',
      description: 'Structured learning path from basics to advanced data engineering concepts'
    }
  ];

  const learningOutcomes = [
    'Build scalable data pipelines',
    'Process big data using Spark',
    'Design cloud data architectures',
    'Implement Medallion Architecture',
    'Work with Azure cloud ecosystem',
    'Prepare for Data Engineering interviews'
  ];

  const projects = [
    {
      title: 'End-to-End Data Pipeline',
      description: 'Build complete data pipelines using Azure Data Factory with automated scheduling and monitoring'
    },
    {
      title: 'Real-time Data Processing',
      description: 'Process streaming data using Databricks with Spark Structured Streaming'
    },
    {
      title: 'Data Lake Architecture',
      description: 'Design and implement a scalable data lake using ADLS Gen2 with proper governance'
    },
    {
      title: 'Enterprise Data Warehouse',
      description: 'Create enterprise-grade data warehouses using Azure Synapse Analytics'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-[#38BDF8]/10 to-[#F8FAFC]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNFQiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent leading-tight">
              Become a Job-Ready<br />Azure Data Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Learn real-time Azure Data Engineering with hands-on projects, industry scenarios, and interview-focused guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => onNavigate('course')}>
                Explore Course
              </Button>
              <Button variant="outline" onClick={() => onNavigate('contact')}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Why Choose This Course
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Industry-focused training designed to make you job-ready
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <GlassCard key={index}>
                <div className="text-[#2563EB] mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Technologies Covered
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Master the essential Azure data engineering tools and platforms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <GlassCard key={index}>
                <div className="text-[#38BDF8] mb-4">{tech.icon}</div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 text-center">
            <GlassCard className="inline-block" hover={false}>
              <p className="text-gray-700 font-medium">
                Plus: Medallion Architecture & Real-time Data Engineering Workflows
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Learning Outcomes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            What you'll master by the end of this course
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <GlassCard key={index}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{outcome}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
            Real-World Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Build your portfolio with industry-relevant projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <GlassCard key={index}>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard hover={false}>
            <Users className="text-[#2563EB] mx-auto mb-4" size={60} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              1100+ Professionals Trained
            </h2>
            <p className="text-xl text-gray-700">
              Join hundreds of successful data engineers who started their journey with us
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2563EB] to-[#38BDF8]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Data Engineering Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Transform your career with industry-focused Azure Data Engineering training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white text-[#2563EB] hover:bg-white/90 border-0"
              onClick={() => onNavigate('course')}
            >
              Explore Course Details
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
