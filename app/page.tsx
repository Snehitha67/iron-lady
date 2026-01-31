/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Award,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Zap,
  Crown,
  BarChart3,
  Brain,
  Lightbulb,
  CheckCircle2,
  Star,
  ChevronRight,
  Briefcase,
  Heart,
  Trophy,
  Flame,
  Rocket,
  Shield,
  Gift,
  Send,
  Loader2,
  ChevronDown,
  Play,
  User,
  Mail,
  Building,
  Calendar,
} from "lucide-react";
import * as React from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface UserProfile {
  name: string;
  email: string;
  experience: string;
  currentRole: string;
  industry: string;
  challenges: string[];
  bhag: string;
}

interface Program {
  id: string;
  name: string;
  tagline: string;
  price?: string;
  duration: string;
  ideal: string;
  outcomes: string[];
  color: string;
  icon: any;
  features: string[];
}

export default function IronLadyAscend() {
  const [activeTab, setActiveTab] = useState<
    "home" | "discover" | "coach" | "simulate" | "results"
  >("home");
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
    experience: "",
    currentRole: "",
    industry: "",
    challenges: [],
    bhag: "",
  });
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState<any>(null);
  const [recommendedProgram, setRecommendedProgram] = useState<Program | null>(
    null,
  );
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);
  const [scenarioResponse, setScenarioResponse] = useState("");
  const [step, setStep] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const programs: Program[] = [
    {
      id: "masterclass",
      name: "Leadership Masterclass",
      tagline: "Your Gateway to Transformation",
      price: "₹99",
      duration: "2 Days",
      ideal:
        "Women professionals with 5+ years experience ready to breakthrough",
      outcomes: [
        "Goal Setting & BHAG Creation",
        "Business War Tactics Introduction",
        "Iron Lady Community Access",
        "Transformation Mindset",
      ],
      color: "from-amber-500 via-orange-500 to-rose-500",
      icon: Sparkles,
      features: [
        "Live Interactive Sessions",
        "Peer Networking",
        "Workbook & Resources",
        "Community Access",
      ],
    },
    {
      id: "lep",
      name: "Leadership Essentials Program",
      tagline: "Foundation for Rising Leaders",
      duration: "12 Weeks",
      ideal: "First-time managers, supervisors, and emerging leaders",
      outcomes: [
        "Master Powerful Request",
        "Living in the NOW",
        "Navigate Office Politics",
        "Shameless Pitching",
      ],
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      icon: TrendingUp,
      features: [
        "Weekly Coaching",
        "1-on-1 Mentorship",
        "Leadership Tools",
        "Practice Scenarios",
      ],
    },
    {
      id: "100bm",
      name: "100 Board Members Program",
      tagline: "Elevate to Leadership Excellence",
      duration: "6 Months",
      ideal: "Mid-senior level leaders ready for board positions",
      outcomes: [
        "Strategic Leadership Mastery",
        "Corporate Entrepreneurship",
        "Board-Ready Skills",
        "Executive Presence & Influence",
      ],
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      icon: Crown,
      features: [
        "Executive Coaching",
        "Board Simulations",
        "Strategic Projects",
        "C-Suite Networking",
      ],
    },
    {
      id: "1cr",
      name: "1 Crore Club",
      tagline: "Breakthrough to Elite Income",
      duration: "Ongoing Elite",
      ideal: "Senior leaders & entrepreneurs targeting 7-8 figure income",
      outcomes: [
        "7-8 Figure Income Strategies",
        "Elite Networking & Deals",
        "Business Scaling Systems",
        "Legacy & Impact Building",
      ],
      color: "from-yellow-400 via-orange-500 to-red-600",
      icon: Trophy,
      features: [
        "Private Mastermind",
        "Deal Flow Access",
        "Wealth Strategies",
        "Global Connections",
      ],
    },
  ];

  const warTactics = [
    {
      id: "powerful-request",
      title: "Powerful Request",
      description:
        "Master the art of asking for what you deserve without apologizing",
      scenario:
        "You want a 40% salary hike and promotion to Senior Manager. How do you approach your boss?",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "living-now",
      title: "Living in the NOW",
      description:
        "Stay present and focused on current goals, not past setbacks",
      scenario:
        "Your previous project failed. New high-stakes opportunity arises. How do you stay present?",
      icon: Target,
      color: "from-green-400 to-emerald-500",
    },
    {
      id: "shameless-pitching",
      title: "Shameless Pitching",
      description: "Pitch yourself and ideas with confidence, zero self-doubt",
      scenario:
        "Board meeting - present your innovative idea that challenges current strategy. What do you say?",
      icon: Briefcase,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "crucibles",
      title: "Crucibles of Leadership",
      description:
        "Transform your biggest challenges into breakthrough opportunities",
      scenario:
        "Your team is underperforming, budget cut, deadline unchanged. How do you lead?",
      icon: Flame,
      color: "from-red-400 to-pink-500",
    },
  ];

  const successStories = [
    {
      name: "Neha Singh Chauhan",
      role: "Co-Founder & Director",
      company: "Dawn Digital",
      achievement: "Closed deals worth ₹30 lakh, launched successful venture",
      principle: "Powerful Request & Living in The Now",
      image: "👩‍💼",
      transformation: {
        before: "Struggled to assert confidently despite managing operations",
        after: "Confidently negotiates and executes business ideas",
      },
    },
    {
      name: "Dr. Premalatha PV",
      role: "Healthcare Entrepreneur",
      company: "Malligi Motherhood & Laparoscopy",
      achievement:
        "Established medical unit, authored book on women's healthcare",
      principle: "Crucibles of Leadership",
      image: "👨‍⚕️",
      transformation: {
        before: "Self-doubt in entrepreneurship journey",
        after: "Confidently leading in women's healthcare innovation",
      },
    },
    {
      name: "Sheeja Abraham",
      role: "International Research Manager",
      company: "Global Pharmaceutical",
      achievement: "Significant salary hike, breakthrough career progression",
      principle: "Powerful Request & Maximising",
      image: "👩‍🔬",
      transformation: {
        before: "Hesitated to advocate for growth after 20 years",
        after: "Confidently negotiates and makes firm decisions",
      },
    },
  ];

  const handleAIChat = async () => {
    if (!currentInput.trim()) return;

    const userMessage: Message = { role: "user", content: currentInput };
    const newMessages = [...chatMessages, userMessage];
    setChatMessages(newMessages);
    setCurrentInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: currentInput,
          context: chatMessages,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setChatMessages([
          ...newMessages,
          { role: "assistant", content: data.message },
        ]);
      } else {
        setChatMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              "I apologize, but I encountered an issue. Please try again or rephrase your question.",
          },
        ]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setChatMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting. Please check your internet and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const analyzeProfile = async () => {
    setIsLoading(true);

    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const experienceYears = parseInt(userProfile.experience) || 0;
    let recommended: Program;

    if (experienceYears < 3) {
      recommended = programs[0];
    } else if (experienceYears < 8) {
      recommended = programs[1];
    } else if (experienceYears < 15) {
      recommended = programs[2];
    } else {
      recommended = programs[3];
    }

    setRecommendedProgram(recommended);
    setAssessmentScore({
      leadership: Math.floor(Math.random() * 25) + 65,
      communication: Math.floor(Math.random() * 25) + 60,
      strategic: Math.floor(Math.random() * 25) + 55,
      negotiation: Math.floor(Math.random() * 25) + 50,
      influence: Math.floor(Math.random() * 25) + 58,
    });

    setIsLoading(false);
    setActiveTab("results");
  };

  const simulateScenario = async (tacticId: string) => {
    const tactic = warTactics.find((t) => t.id === tacticId);
    if (!tactic) return;

    setCurrentScenario(tacticId);
    setScenarioResponse("");
  };

  const submitScenarioResponse = async () => {
    if (!scenarioResponse.trim()) return;

    setIsLoading(true);
    const tactic = warTactics.find((t) => t.id === currentScenario);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Evaluate my response to this Business War Tactic scenario:
          
Tactic: ${tactic?.title}
Scenario: ${tactic?.scenario}
My Response: ${scenarioResponse}

Provide constructive feedback on how well I applied the ${tactic?.title} principle and suggest improvements.`,
          context: [],
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        setScenarioResponse("");
        setCurrentScenario(null);
      }
    } catch (error) {
      console.error("Scenario evaluation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav>
        <div className="container-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Crown className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text">
                  Iron Lady ASCEND
                </h1>
                <p className="text-xs text-slate-400 font-medium">
                  AI Career Transformation
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {[
                { id: "home", label: "Home", icon: Sparkles },
                { id: "discover", label: "Discover", icon: Target },
                { id: "coach", label: "AI Coach", icon: Brain },
                { id: "simulate", label: "Simulate", icon: Zap },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* HOME TAB */}
        {activeTab === "home" && (
          <div className="space-y-0">
            {/* Hero Section */}
            <section className="hero-section">
              <div className="container-lg">
                <div className="hero-badge">
                  <Sparkles className="w-4 h-4" />
                  <span>Powered by Claude AI • 78,000+ Women Transformed</span>
                </div>
                <h1 className="hero-title">Unleash Your Leadership Power</h1>
                <p className="hero-subtitle">
                  AI-powered career transformation platform designed exclusively
                  for ambitious women leaders. Get personalized coaching,
                  strategic guidance, and breakthrough results.
                </p>
                <div className="hero-cta">
                  <button
                    onClick={() => setActiveTab("discover")}
                    className="btn-primary-lg group"
                  >
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setActiveTab("coach")}
                    className="btn-secondary-lg"
                  >
                    <Brain className="w-5 h-5" />
                    <span>Talk to AI Coach</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="container-lg">
              <div className="stats-grid">
                {[
                  { icon: Users, value: "78,000+", label: "Women Empowered" },
                  { icon: Trophy, value: "₹100Cr+", label: "Salary Increases" },
                  { icon: Award, value: "2,500+", label: "Leadership Roles" },
                  { icon: Star, value: "98%", label: "Success Rate" },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <Icon className="w-8 h-8 mx-auto text-indigo-400 mb-3" />
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Success Stories */}
            <section className="reviews-section">
              <div className="container-lg">
                <div className="section-header">
                  <h2 className="section-title">Transformation Stories</h2>
                  <p className="section-subtitle">
                    Real women, real breakthroughs
                  </p>
                </div>
                <div className="reviews-grid">
                  {successStories.map((story, index) => (
                    <div key={index} className="review-card">
                      <div>
                        <div className="review-avatar">{story.image}</div>
                        <div className="review-name">{story.name}</div>
                        <div className="review-rating stars">★★★★★</div>
                        <div className="review-text">{story.achievement}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <button className="write-review-btn">Write a Review</button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* DISCOVER TAB - Program Matcher */}
        {activeTab === "discover" && (
          <section className="container-md py-20">
            <div className="section-header">
              <h2 className="section-title">Discover Your Perfect Program</h2>
              <p className="section-subtitle">
                AI-powered matching based on your career stage
              </p>
            </div>

            {step === 1 && (
              <div className="card-form max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-center text-slate-200">
                  Tell Us About You
                </h3>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) =>
                      setUserProfile({ ...userProfile, name: e.target.value })
                    }
                    className="form-input text-white
                    "
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) =>
                      setUserProfile({ ...userProfile, email: e.target.value })
                    }
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Years of Experience</label>
                    <input
                      type="number"
                      value={userProfile.experience}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          experience: e.target.value,
                        })
                      }
                      className="form-input"
                      placeholder="e.g., 8"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Industry</label>
                    <select
                      value={userProfile.industry}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          industry: e.target.value,
                        })
                      }
                      className="form-select"
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology / IT</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance / Banking</option>
                      <option value="education">Education</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Current Role</label>
                  <input
                    type="text"
                    value={userProfile.currentRole}
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        currentRole: e.target.value,
                      })
                    }
                    className="form-input"
                    placeholder="e.g., Senior Manager, Team Lead"
                  />
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={
                    !userProfile.name ||
                    !userProfile.email ||
                    !userProfile.experience
                  }
                  className="btn-primary-lg w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="card-form max-w-2xl mx-auto">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Your Challenges</h3>
                    <p className="text-gray-400">
                      Select areas you want to develop as a leader
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Negotiating salary & promotions",
                      "Navigating office politics",
                      "Building executive presence",
                      "Work-life balance",
                      "Overcoming imposter syndrome",
                      "Strategic thinking & planning",
                      "Leading teams effectively",
                      "Career transition / pivoting",
                    ].map((challenge) => (
                      <label
                        key={challenge}
                        className="program-card cursor-pointer hover:border-accent-500 transition-all"
                      >
                        <div className="flex items-start space-x-4">
                          <input
                            type="checkbox"
                            checked={userProfile.challenges.includes(challenge)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setUserProfile({
                                  ...userProfile,
                                  challenges: [
                                    ...userProfile.challenges,
                                    challenge,
                                  ],
                                });
                              } else {
                                setUserProfile({
                                  ...userProfile,
                                  challenges: userProfile.challenges.filter(
                                    (c) => c !== challenge,
                                  ),
                                });
                              }
                            }}
                            className="w-5 h-5 mt-1 rounded accent-primary-500 cursor-pointer"
                          />
                          <span className="font-medium">{challenge}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="form-group">
                    <label className="form-label text-black flex items-center space-x-2 ">
                      <Target className="w-4 h-4" />
                      <span>Your BHAG (Big Hairy Audacious Goal)</span>
                    </label>
                    <textarea
                      value={userProfile.bhag}
                      onChange={(e) =>
                        setUserProfile({ ...userProfile, bhag: e.target.value })
                      }
                      className="w-full form-label1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black min-h-[120px]"
                      placeholder="e.g., Become VP in 3 years, Start my own consulting firm, Join a corporate board..."
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Be specific and ambitious!
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="btn-secondary-lg flex-1"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={analyzeProfile}
                      disabled={
                        userProfile.challenges.length === 0 ||
                        !userProfile.bhag ||
                        isLoading
                      }
                      className="btn-primary-lg flex-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <span>Get AI Analysis</span>
                          <Brain className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* RESULTS TAB */}
        {activeTab === "results" && recommendedProgram && (
          <section className="container-lg py-20">
            <div className="space-y-12 text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-500/20 px-6 py-3 rounded-full border border-green-500/30 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">
                  Profile Analysis Complete
                </span>
              </div>
              <h2 className="text-5xl font-display font-bold text-gradient">
                Your Personalized Roadmap
              </h2>
              <p className="text-xl text-gray-300">
                Based on AI analysis of your profile and goals
              </p>
            </div>

            <div className="space-y-12">
              {assessmentScore && (
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6 text-gold-400" />
                    <span>Leadership Assessment</span>
                  </h3>

                  <div className="space-y-4">
                    {Object.entries(assessmentScore).map(
                      ([skill, score]: [string, any]) => (
                        <div key={skill}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-semibold capitalize">
                              {skill}
                            </span>
                            <span className="text-sm font-bold text-gold-400">
                              {score}/100
                            </span>
                          </div>
                          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-1000"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Recommended Program */}
              <div className="glass-effect p-8 rounded-2xl glow-border">
                <div className="flex items-start space-x-2 mb-6">
                  <Star className="w-6 h-6 text-gold-400 animate-pulse" />
                  <div>
                    <h3 className="text-2xl font-bold">Recommended Program</h3>
                    <p className="text-gray-400">
                      Perfect match for your career stage and goals
                    </p>
                  </div>
                </div>

                <div
                  className={`bg-gradient-to-br ${recommendedProgram.color} p-8 rounded-xl text-white space-y-6`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      {React.createElement(recommendedProgram.icon, {
                        className: "w-12 h-12",
                      })}
                      <div>
                        <h4 className="text-3xl font-display font-bold">
                          {recommendedProgram.name}
                        </h4>
                        <p className="text-white/80 text-lg">
                          {recommendedProgram.tagline}
                        </p>
                      </div>
                    </div>
                    {recommendedProgram.price && (
                      <div className="text-right">
                        <div className="text-4xl font-bold">
                          {recommendedProgram.price}
                        </div>
                        <div className="text-sm text-white/70">Investment</div>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-semibold mb-2 text-white/70">
                        Duration
                      </div>
                      <div className="text-lg font-bold">
                        {recommendedProgram.duration}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2 text-white/70">
                        Ideal For
                      </div>
                      <div className="text-lg">{recommendedProgram.ideal}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-3 text-white/70">
                      Key Outcomes
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {recommendedProgram.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-3 text-white/70">
                      Program Features
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {recommendedProgram.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-6 py-4 bg-white text-gray-900 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center space-x-2">
                    <span>Enroll Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Explore All Programs
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {programs
                    .filter((p) => p.id !== recommendedProgram.id)
                    .map((program) => (
                      <div
                        key={program.id}
                        className="glass-effect p-6 rounded-2xl hover-lift space-y-4"
                      >
                        <div className="flex items-center space-x-3">
                          {React.createElement(program.icon, {
                            className: "w-8 h-8 text-gold-400",
                          })}
                          <div>
                            <h4 className="text-xl font-bold">
                              {program.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {program.tagline}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{program.ideal}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">
                            {program.duration}
                          </span>
                          {program.price && (
                            <span className="text-lg font-bold text-gold-400">
                              {program.price}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setStep(1);
                    setActiveTab("discover");
                  }}
                  className=" form-input px-6 py-3 glass-effect rounded-xl font-semibold hover-lift"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={() => setActiveTab("coach")}
                  className="form-input px-6 py-3 bg-gradient-to-r from-primary-500 to-gold-500 rounded-xl font-semibold hover-lift flex items-center space-x-2"
                >
                  <Brain className="w-5 h-5" />
                  <span className="form-input">Get AI Coaching</span>
                </button>
              </div>
            </div>
          </section>
        )}
        {activeTab === "coach" && (
          <section className="container-lg py-20">
            <div className="space-y-12">
              <div className="section-header">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30 mb-4 mx-auto">
                  <Brain className="w-5 h-5 text-purple-400 animate-pulse" />
                  <span className="text-purple-400 font-semibold">
                    AI-Powered Leadership Coach
                  </span>
                </div>
                <h2 className="section-title bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Your Personal AI Coach
                </h2>
                <p className="section-subtitle">
                  Get instant, personalized guidance on leadership, negotiation,
                  and career strategy
                </p>
              </div>

              {/* Chat Interface */}
              <div className="card-form max-w-3xl mx-auto">
                {/* <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 p-6 flex items-center space-x-4 rounded-t-2xl ">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      Iron Lady AI Coach
                    </div>
                    <div className="text-sm text-white/70">
                      Powered by OpenAI • Always here to help
                    </div>
                  </div>
                </div> */}

                <div className="coach-chat-area overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white/5 to-transparent">
                  {chatMessages.length === 0 && (
                    <div className="text-center py-12 space-y-8">
                      <div className="text-7xl animate-bounce"></div>
                      <div className="space-y-3">
                        <h3 className="text-2xl text-white font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text ">
                          Welcome to Your AI Coach
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Ask me anything about your leadership journey
                        </p>
                      </div>
                      <div className="coach-suggestions grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {[
                          "💰 Salary negotiation strategies",
                          "🎯 Overcoming imposter syndrome",
                          "🏢 Navigating office politics",
                          "✨ Building executive presence",
                          "🚀 Career transition planning",
                          "📈 Leadership development tips",
                        ].map((topic, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentInput(topic)}
                            className="topic-card"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg shadow-indigo-500/30 font-medium"
                            : "bg-gradient-to-r from-white/10 to-white/5 text-gray-100 border border-white/20"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-5 py-3 rounded-2xl flex items-center space-x-2 border border-purple-500/30">
                        <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                        <span className="text-sm text-purple-300">
                          AI Coach is thinking...
                        </span>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                <div className="p-6 bg-gradient-to-t from-white/5 to-transparent rounded-b-2xl border-t border-white/10">
                  <div className="chat-input-wrapper">
                    <input
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleAIChat()}
                      placeholder="Ask your AI coach anything..."
                      className="chat-input-field placeholder-gray-400"
                    />
                    <button
                      onClick={handleAIChat}
                      disabled={!currentInput.trim() || isLoading}
                      className="send-button"
                      title="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SIMULATE TAB */}
        {activeTab === "simulate" && (
          <section className="container-lg py-20">
            <div className="space-y-12">
              <div className="section-header">
                <div className="inline-flex items-center space-x-2 bg-orange-500/20 px-6 py-3 rounded-full border border-orange-500/30 mb-4 mx-auto">
                  <Zap className="w-5 h-5 text-orange-400 animate-pulse" />
                  <span className="text-orange-400 font-semibold">
                    Battle Scenario Simulator
                  </span>
                </div>
                <h2 className="section-title">Business War Tactics</h2>
                <p className="section-subtitle">
                  Practice real-world scenarios and get AI feedback
                </p>
              </div>

              {!currentScenario ? (
                <div className="program-grid">
                  {warTactics.map((tactic) => {
                    const Icon = tactic.icon;
                    return (
                      <div
                        key={tactic.id}
                        className="program-card group cursor-pointer hover:border-accent-500"
                        onClick={() => simulateScenario(tactic.id)}
                      >
                        <div className="space-y-4">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${tactic.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">
                              {tactic.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                              {tactic.description}
                            </p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-gold-500">
                            <p className="text-sm text-gray-300 italic">
                              {tactic.scenario}
                            </p>
                          </div>
                          <button className="btn-primary-lg w-full">
                            <Play className="w-5 h-5" />
                            <span>Start Scenario</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="max-w-3xl mx-auto space-y-6">
                  <button
                    onClick={() => {
                      setCurrentScenario(null);
                      setScenarioResponse("");
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2 mb-4"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    <span className="text-sm font-medium">
                      Back to scenarios
                    </span>
                  </button>

                  {warTactics
                    .filter((t) => t.id === currentScenario)
                    .map((tactic) => {
                      const Icon = tactic.icon;
                      return (
                        <div key={tactic.id} className="card-form">
                          <div className="flex items-start space-x-6 mb-6">
                            <div
                              className={`w-20 h-20 bg-gradient-to-br ${tactic.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-2">
                                {tactic.title}
                              </h3>
                              <p className="text-gray-400">
                                {tactic.description}
                              </p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-xl border border-orange-500/30 mb-6">
                            <div className="flex items-start space-x-4">
                              <Lightbulb className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                              <div className="flex-1">
                                <div className="font-semibold text-orange-400 mb-3">
                                  Scenario
                                </div>
                                <p className="text-gray-200 leading-relaxed">
                                  {tactic.scenario}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="form-label">Your Response</label>
                            <textarea
                              value={scenarioResponse}
                              onChange={(e) =>
                                setScenarioResponse(e.target.value)
                              }
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white min-h-[200px] resize-none"
                              placeholder="How would you handle this situation? Be specific and confident..."
                            />
                            <p className="text-xs text-gray-500 mt-2">
                              Think about how you would apply the {tactic.title}{" "}
                              principle in this scenario.
                            </p>
                          </div>

                          <button
                            onClick={submitScenarioResponse}
                            disabled={!scenarioResponse.trim() || isLoading}
                            className="btn-primary-lg w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Getting AI Feedback...</span>
                              </>
                            ) : (
                              <>
                                <Brain className="w-5 h-5" />
                                <span>Get AI Evaluation</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
