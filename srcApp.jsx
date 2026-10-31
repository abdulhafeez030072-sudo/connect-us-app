import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trophy, 
  Award, 
  Star, 
  Search, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Filter, 
  X, 
  Heart, 
  Eye, 
  Layers, 
  Zap, 
  ChevronRight, 
  Upload, 
  Globe, 
  Compass, 
  ArrowUpRight,
  Bookmark,
  MessageSquare,
  Send,
  SlidersHorizontal,
  CheckCircle,
  Share2,
  Calendar,
  User,
  ShieldCheck,
  Flame,
  LayoutGrid,
  Maximize2
} from 'lucide-react';

// Extended initial mock data for Awwwards platform
const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Aetheria Quantum OS',
    designer: 'Studio Lumos',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80'
    ],
    heroBadge: 'SITE OF THE DAY',
    awardDate: 'OCT 31, 2026',
    category: '3D/WebGL',
    country: 'United States',
    overallScore: 8.94,
    scores: { design: 9.2, usability: 8.7, creativity: 9.4, content: 8.5 },
    tags: ['Three.js', 'WebGPU', 'Cyberpunk', 'Interactive'],
    views: 42800,
    likes: 3420,
    url: 'https://example.com/aetheria',
    description: 'A revolutionary WebGL exploration of quantum computing concepts embedded within a fluid spatial UI experience.',
    details: 'Aetheria pushes the boundary of modern in-browser rendering with real-time ray-traced lighting models, post-processing shaders, and spatial audio synth integration.',
    comments: [
      { id: 101, user: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', text: 'The shader performance on mobile is unbelievable!', date: '2 hours ago' },
      { id: 102, user: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', text: 'Top tier typography choices and color depth.', date: '5 hours ago' }
    ]
  },
  {
    id: 2,
    title: 'Chronos Timepieces',
    designer: 'Atelier Noir',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80'
    ],
    heroBadge: 'DEVELOPER OF THE MONTH',
    awardDate: 'OCT 28, 2026',
    category: 'E-Commerce',
    country: 'France',
    overallScore: 8.78,
    scores: { design: 9.0, usability: 8.9, creativity: 8.6, content: 8.6 },
    tags: ['Luxury', 'Minimalist', 'GSAP', 'Next.js'],
    views: 31200,
    likes: 2840,
    url: 'https://example.com/chronos',
    description: 'Bespoke micro-interactions paired with high-precision 3D watch customization tools for luxury horology collectors.',
    details: 'Features effortless 60fps rotational physics, dynamic AR try-on features, and zero-layout-shift kinetic typography transitions.',
    comments: [
      { id: 103, user: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', text: 'Smooth scroll integration is so crisp!', date: '1 day ago' }
    ]
  },
  {
    id: 3,
    title: 'Neural Synthesizer 9',
    designer: 'Kinetix Labs',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80'
    ],
    heroBadge: 'SITE OF THE MONTH',
    awardDate: 'OCT 25, 2026',
    category: 'AI & Innovation',
    country: 'Germany',
    overallScore: 9.12,
    scores: { design: 9.4, usability: 8.8, creativity: 9.6, content: 8.7 },
    tags: ['WebAudio API', 'Dark Mode', 'AI', 'Canvas'],
    views: 58900,
    likes: 5120,
    url: 'https://example.com/neuralsynth',
    description: 'Browser-native generative music environment powered by real-time neural weight manipulation visualizers.',
    details: 'Built entirely on dynamic Canvas node graphs, enabling sound design collaboration in hyper-responsive WebSockets rooms.',
    comments: []
  },
  {
    id: 4,
    title: 'Vanguard Architecture',
    designer: 'Forma & Function',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80'
    ],
    heroBadge: 'HONORABLE MENTION',
    awardDate: 'OCT 20, 2026',
    category: 'Minimalist',
    country: 'Sweden',
    overallScore: 8.35,
    scores: { design: 8.8, usability: 8.2, creativity: 8.1, content: 8.3 },
    tags: ['Monochrome', 'Typography', 'Architectural'],
    views: 18400,
    likes: 1290,
    url: 'https://example.com/vanguard',
    description: 'Brutalist geometric aesthetic showcasing sustainable urban architectural developments across Scandinavian capitals.',
    details: 'Presents ultra-crisp typography paired with seamless inertia-scrolling layouts and high-contrast photographic light studies.',
    comments: []
  },
  {
    id: 5,
    title: 'HyperDrive Kinetic',
    designer: 'MotionCraft',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80'
    ],
    heroBadge: 'SITE OF THE DAY',
    awardDate: 'OCT 18, 2026',
    category: '3D/WebGL',
    country: 'Japan',
    overallScore: 8.89,
    scores: { design: 9.1, usability: 8.5, creativity: 9.3, content: 8.6 },
    tags: ['Shader', 'WebGL', 'Automotive'],
    views: 39100,
    likes: 3100,
    url: 'https://example.com/hyperdrive',
    description: 'An interactive electric hypercar configurator featuring customizable particle physics wind tunnel simulations.',
    details: 'Custom glTF asset loaders with raymarched volumetric fog and custom physical shader material parameters.',
    comments: []
  },
  {
    id: 6,
    title: 'Solstice Botanical',
    designer: 'Studio Organic',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&auto=format&fit=crop&q=80'
    ],
    heroBadge: 'SITE OF THE DAY',
    awardDate: 'OCT 12, 2026',
    category: 'Portfolio',
    country: 'United Kingdom',
    overallScore: 8.64,
    scores: { design: 8.9, usability: 8.7, creativity: 8.4, content: 8.5 },
    tags: ['Bio-Design', 'Minimal', 'Smooth Scroll'],
    views: 22700,
    likes: 1950,
    url: 'https://example.com/solstice',
    description: 'Ethereal digital catalog for rare heirloom botanical specimens with organic scroll morphing animations.',
    details: 'Completely accessible UI built with headless eCommerce engine backend and fluid SVG mask path animations.',
    comments: []
  }
];

const CATEGORIES = ['All', '3D/WebGL', 'E-Commerce', 'Portfolio', 'Mobile', 'AI & Innovation', 'Minimalist'];
const NAV_LINKS = ['Winners', 'Site of the Day', 'Nominees', 'Collections', 'Courses'];

export default function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest'); // 'latest', 'highest', 'popular'
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set([1, 3]));
  const [likedIds, setLikedIds] = useState(new Set([1]));
  const [scrolled, setScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [newCommentText, setNewCommentText] = useState('');

  // Submit Site Form State
  const [submitStep, setSubmitStep] = useState(1);
  const [newProject, setNewProject] = useState({
    title: '',
    designer: '',
    country: 'United States',
    category: '3D/WebGL',
    url: '',
    coverImage: '',
    description: '',
    tags: ''
  });

  // Handle Toast Notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Header Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter & Sort Logic
  const filteredProjects = useMemo(() => {
    let result = projects.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.designer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'highest') {
      result.sort((a, b) => b.overallScore - a.overallScore);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.likes - a.likes);
    } else {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [projects, selectedCategory, searchQuery, sortBy]);

  const sotd = projects[0];

  // Actions
  const toggleBookmark = (id, e) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Removed from Bookmarks');
      } else {
        next.add(id);
        showToast('Saved to Bookmarks');
      }
      return next;
    });
  };

  const toggleLike = (id, e) => {
    if (e) e.stopPropagation();
    setLikedIds(prev => {
      const next = new Set(prev);
      const isLiked = next.has(id);
      if (isLiked) {
        next.delete(id);
      } else {
        next.add(id);
        showToast('Upvoted Project!');
      }
      
      // Update count in state
      setProjects(prevProjects => prevProjects.map(p => {
        if (p.id === id) {
          return { ...p, likes: isLiked ? p.likes - 1 : p.likes + 1 };
        }
        return p;
      }));

      return next;
    });
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim() || !selectedProject) return;

    const newCommentObj = {
      id: Date.now(),
      user: 'You (Jury Guest)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      text: newCommentText.trim(),
      date: 'Just now'
    };

    const updatedProjects = projects.map(p => {
      if (p.id === selectedProject.id) {
        return {
          ...p,
          comments: [newCommentObj, ...p.comments]
        };
      }
      return p;
    });

    setProjects(updatedProjects);
    setSelectedProject(prev => ({ ...prev, comments: [newCommentObj, ...prev.comments] }));
    setNewCommentText('');
    showToast('Feedback posted successfully!');
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.url) return;
    
    const created = {
      id: Date.now(),
      title: newProject.title,
      designer: newProject.designer || 'Creative Studio',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      coverImage: newProject.coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      gallery: [
        newProject.coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80'
      ],
      heroBadge: 'NOMINEE',
      awardDate: 'JUST NOW',
      category: newProject.category,
      country: newProject.country,
      overallScore: 8.50,
      scores: { design: 8.6, usability: 8.4, creativity: 8.7, content: 8.3 },
      tags: newProject.tags ? newProject.tags.split(',').map(t => t.trim()) : ['New', 'Showcase'],
      views: 12,
      likes: 1,
      url: newProject.url,
      description: newProject.description || 'Newly submitted project undergoing public jury review.',
      details: 'Submitted via community portal. Currently gathering feedback and score votes.',
      comments: []
    };

    setProjects([created, ...projects]);
    setIsSubmitModalOpen(false);
    setSubmitStep(1);
    setNewProject({ title: '', designer: '', country: 'United States', category: '3D/WebGL', url: '', coverImage: '', description: '', tags: '' });
    showToast('🚀 Project submitted to Awwwards gallery!');
  };

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* Toast Notification Floating */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-cyan-500 text-black font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-2xl shadow-cyan-500/30 flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 fill-black" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Atmospheric Neon Lights */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="fixed top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[200px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 left-10 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* NAVIGATION HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#0d0d0f]/90 backdrop-blur-xl border-white/10 py-3 shadow-2xl shadow-black/80' 
          : 'bg-transparent border-white/5 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-black font-black tracking-tighter text-xl shadow-lg shadow-cyan-500/20">
              W
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                AWWWARDS<span className="text-cyan-400 font-light">.PRO</span>
              </span>
              <p className="text-[9px] uppercase tracking-widest text-cyan-400/80 font-mono -mt-1 hidden sm:block">
                Digital Excellence Directory
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {NAV_LINKS.map((link, idx) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`hover:text-cyan-400 transition-colors ${idx === 0 ? 'text-white font-bold' : ''}`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block w-48 lg:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search web design..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            <button 
              onClick={() => setIsSubmitModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:opacity-90 text-black font-bold text-xs sm:text-sm transition-all transform hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
            >
              <Upload className="w-4 h-4" />
              <span>Submit Website</span>
            </button>

            <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/15 overflow-hidden cursor-pointer hover:border-cyan-400 transition-colors">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Jury User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN BODY CONTENT */}
      <main className="pt-24 pb-20">
        
        {/* HERO SECTION: SITE OF THE DAY (SOTD) */}
        {sotd && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900/40 backdrop-blur-2xl group shadow-2xl transition-all duration-500 hover:border-cyan-500/40">
              
              <div className="relative h-[480px] sm:h-[580px] w-full overflow-hidden">
                <img 
                  src={sotd.coverImage} 
                  alt={sotd.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0f]/90 via-transparent to-transparent" />

                {/* SOTD Top Badges */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400 text-black font-black text-xs uppercase tracking-widest backdrop-blur-md shadow-lg shadow-cyan-400/30">
                    <Trophy className="w-4 h-4 fill-black" />
                    <span>{sotd.heroBadge}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                    {sotd.awardDate}
                  </span>
                </div>

                {/* Big Score Rating Card */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-black/70 border border-white/15 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-2xl">
                  <div className="text-3xl font-black text-cyan-400 font-mono tracking-tighter">
                    {sotd.overallScore.toFixed(2)}
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">
                    JURY OVERALL
                  </div>
                </div>

                {/* Hero Information */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-2xl space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={sotd.avatar} alt={sotd.designer} className="w-8 h-8 rounded-full border border-cyan-400/50 object-cover" />
                      <span className="text-sm font-medium text-cyan-300">By {sotd.designer} • {sotd.country}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                      {sotd.title}
                    </h1>

                    <p className="text-sm sm:text-base text-slate-300 line-clamp-2 max-w-xl font-light">
                      {sotd.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {sotd.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-white/10 border border-white/10 text-slate-300 px-3 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions for Hero */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setSelectedProject(sotd)}
                      className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>Explore Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <a 
                      href={sotd.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all flex items-center justify-center"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SEARCH, CATEGORIES & SORTING CONTROL BAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5" /> Filters:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                    selectedCategory === cat
                      ? 'bg-cyan-400 text-black border-cyan-400 font-bold shadow-md shadow-cyan-400/20'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sorting Dropdown & Mobile Search */}
            <div className="flex items-center justify-between lg:justify-end gap-4">
              <div className="md:hidden flex-1 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-xs text-slate-200"
                />
              </div>

              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-400">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs text-cyan-300 font-bold focus:outline-none cursor-pointer"
                >
                  <option value="latest" className="bg-slate-900 text-white">Latest Submissions</option>
                  <option value="highest" className="bg-slate-900 text-white">Highest Jury Score</option>
                  <option value="popular" className="bg-slate-900 text-white">Most Liked</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE GALLERY GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-white/5">
              <Compass className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-spin-slow" />
              <h3 className="text-lg font-bold text-slate-300">No Web Projects Found</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting your category filter or search keywords.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const isBookmarked = bookmarkedIds.has(project.id);
                const isLiked = likedIds.has(project.id);

                return (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative bg-slate-900/40 border border-white/10 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img 
                        src={project.coverImage} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 opacity-80 group-hover:opacity-40 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                          {project.category}
                        </span>

                        <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                          <span className="text-xs font-bold font-mono text-white">
                            {project.overallScore.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Quick Hover Action Floating Bar */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between gap-2">
                        <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 flex items-center gap-1">
                          View Study <ChevronRight className="w-3.5 h-3.5" />
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => toggleLike(project.id, e)}
                            className={`p-2 rounded-xl backdrop-blur-md border transition-all ${
                              isLiked ? 'bg-cyan-500 border-cyan-400 text-black' : 'bg-black/70 border-white/20 text-white hover:bg-white/20'
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-black' : ''}`} />
                          </button>
                          <button
                            onClick={(e) => toggleBookmark(project.id, e)}
                            className={`p-2 rounded-xl backdrop-blur-md border transition-all ${
                              isBookmarked ? 'bg-purple-500 border-purple-400 text-white' : 'bg-black/70 border-white/20 text-white hover:bg-white/20'
                            }`}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-white' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Footer Meta */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-1">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={project.avatar} alt={project.designer} className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-xs font-medium text-slate-300 truncate max-w-[110px]">
                            {project.designer}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3 text-slate-500" /> {project.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className={`w-3 h-3 ${isLiked ? 'text-red-400 fill-red-400' : 'text-slate-500'}`} /> {project.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* DEVELOPER OF THE MONTH & COLLECTIONS */}
        <section id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl bg-gradient-to-r from-purple-900/30 via-slate-900 to-cyan-900/30 border border-white/10 p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest">
                  <Flame className="w-3.5 h-3.5 text-purple-400" /> Featured Agency Collection
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white">Top WebGL Studios of 2026</h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Curated selection of spatial design studios pushing real-time browser shaders, WebGPU pipelines, and hyper-fluid kinetic typography.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <button 
                    onClick={() => showToast('Collection added to your library!')}
                    className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all"
                  >
                    Bookmark Collection
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-md">
                  <div className="text-2xl font-black text-cyan-400 font-mono">140+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono mt-1">Awarded Studios</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-md">
                  <div className="text-2xl font-black text-purple-400 font-mono">9.4/10</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono mt-1">Avg Jury Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* DETAILED CASE STUDY OVERLAY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#11131c] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto">
            
            {/* Modal Navigation */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <img src={selectedProject.avatar} alt={selectedProject.designer} className="w-10 h-10 rounded-full object-cover border border-cyan-400/50" />
                <div>
                  <h2 className="text-xl font-bold text-white leading-tight">{selectedProject.title}</h2>
                  <p className="text-xs text-slate-400">Designed by <span className="text-cyan-400">{selectedProject.designer}</span> • {selectedProject.country}</p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8 scrollbar-thin">
              
              {/* Main Cover Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group">
                <img src={selectedProject.coverImage} alt={selectedProject.title} className="w-full h-full object-cover" />
                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="absolute bottom-4 right-4 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs rounded-xl shadow-xl flex items-center gap-2 transition-all"
                >
                  Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Jury Scoring Grid Metrics */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" /> Official Jury Rating Breakdown
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(selectedProject.scores).map(([metric, val]) => (
                    <div key={metric} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <span className="text-[11px] text-slate-400 uppercase font-mono block mb-1">{metric}</span>
                      <span className="text-2xl font-black text-cyan-400 font-mono">{val.toFixed(1)}</span>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full"
                          style={{ width: `${(val / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Description & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Project Overview</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Technical Execution</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedProject.details}</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Category</span>
                    <span className="text-sm font-semibold text-slate-200">{selectedProject.category}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Tech Stack Tags</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-white/10 text-cyan-300 px-2.5 py-1 rounded-md">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* COMMENTS & FEEDBACK SECTION */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" /> Community Jury Feedback ({selectedProject.comments.length})
                </h3>

                <form onSubmit={handleAddComment} className="flex gap-3 mb-6">
                  <input
                    type="text"
                    placeholder="Leave feedback on design & usability..."
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-xl text-xs flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Post
                  </button>
                </form>

                <div className="space-y-3">
                  {selectedProject.comments.length === 0 ? (
                    <p className="text-xs text-slate-500 italic">No feedback comments yet. Be the first to review!</p>
                  ) : (
                    selectedProject.comments.map(c => (
                      <div key={c.id} className="bg-white/5 border border-white/5 rounded-2xl p-3.5 flex gap-3">
                        <img src={c.avatar} alt={c.user} className="w-7 h-7 rounded-full object-cover" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{c.user}</span>
                            <span className="text-[10px] text-slate-500">{c.date}</span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1">{c.text}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MULTI-STEP SUBMIT YOUR SITE MODAL */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg bg-[#11131c] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button 
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                Step {submitStep} of 2
              </div>
              <h2 className="text-2xl font-bold text-white">Submit Site to Awwwards</h2>
              <p className="text-xs text-slate-400 mt-1">Submit your website for evaluation by our international jury panel.</p>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              {submitStep === 1 ? (
                <>
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-400 mb-1">Website Title *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Cyberpunk Nexus OS"
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-400 mb-1">Live URL *</label>
                    <input 
                      type="url" 
                      required
                      placeholder="https://..."
                      value={newProject.url}
                      onChange={(e) => setNewProject({...newProject, url: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-400 mb-1">Designer / Agency</label>
                      <input 
                        type="text" 
                        placeholder="Studio Name"
                        value={newProject.designer}
                        onChange={(e) => setNewProject({...newProject, designer: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-400 mb-1">Category</label>
                      <select
                        value={newProject.category}
                        onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                        className="w-full bg-[#181a26] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        {CATEGORIES.filter(c => c !== 'All').map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button 
                    type="button"
                    onClick={() => {
                      if (newProject.title && newProject.url) setSubmitStep(2);
                      else showToast('Please fill in Title and URL');
                    }}
                    className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm transition-colors mt-2"
                  >
                    Next Step: Media & Tags
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-400 mb-1">Cover Image Screenshot URL</label>
                    <input 
                      type="url" 
                      placeholder="https://images.unsplash.com/..."
                      value={newProject.coverImage}
                      onChange={(e) => setNewProject({...newProject, coverImage: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-400 mb-1">Tech Stack Tags (Comma Separated)</label>
                    <input 
                      type="text" 
                      placeholder="Three.js, WebGL, React"
                      value={newProject.tags}
                      onChange={(e) => setNewProject({...newProject, tags: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-400 mb-1">Short Description</label>
                    <textarea 
                      rows="3"
                      placeholder="Highlight core features..."
                      value={newProject.description}
                      onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      type="button"
                      onClick={() => setSubmitStep(1)}
                      className="w-1/3 py-3 rounded-xl bg-white/10 text-white font-bold text-xs"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="w-2/3 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm transition-colors shadow-lg shadow-cyan-400/20"
                    >
                      Publish Project
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#08090d] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center text-black font-black text-sm">
                W
              </div>
              <span className="font-bold text-sm tracking-wide text-slate-300">
                AWWWARDS<span className="text-cyan-400 font-light">.PRO</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-semibold">
              <a href="#" className="hover:text-cyan-400">Judges Panel</a>
              <a href="#" className="hover:text-cyan-400">Directory</a>
              <a href="#" className="hover:text-cyan-400">Conferences</a>
              <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 Awwwards Showcase Platform. Engineered for web design excellence.</p>
            <div className="flex items-center gap-4">
              <span>SOTD</span>
              <span>•</span>
              <span>SOTM</span>
              <span>•</span>
              <span>DEVELOPER OF THE YEAR</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
