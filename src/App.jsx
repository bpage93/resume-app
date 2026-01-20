import "./App.css";
import "./index.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    MapPin,
    Link as LinkIcon,
    Calendar,
    Heart,
    MessageSquare,
    Share2,
    Github,
    ExternalLink,
} from "lucide-react";

function App() {
    // --- 1. USER PROFILE DATA ---
    const profile = {
        name: "Brad Page",
        handle: "@brad_dev",
        initials: "BP",
        bio: "Web Dev Student @ MTECH. Building clean apps with React & Tailwind. Turning coffee into code since 2024. ☕",
        location: "Saratoga Springs, UT",
        website: "github.com/bradpage",
        joined: "May 2024",
        skills: ["React", "JavaScript", "Tailwind", "Node.js", "Git", "UI/UX"],
    };

    // --- 2. FEED DATA (Experience & Updates) ---
    const posts = [
        {
            id: 1,
            author: "Brad Page",
            handle: "@brad_dev",
            avatar: "BP",
            time: "2h ago",
            content:
                "Just started learning shadcn/ui and it's a game changer! 🚀 fast, accessible, and looks clean out of the box. #react #webdev #learning",
            likes: 12,
            comments: 2,
        },
        {
            id: 2,
            author: "Mountainland Tech",
            handle: "@mtech_edu",
            avatar: "MT",
            time: "Sep 2024",
            content:
                "🎓 Milestone unlocked: Enrolled in the Web Development program! Diving deep into Full Stack development for the next year.",
            likes: 45,
            comments: 8,
        },
        {
            id: 3,
            author: "Amazon",
            handle: "@amazon_logistics",
            avatar: "AM",
            time: "Jan 2024",
            content:
                "📦 Work History: 4 years as a Delivery Driver. Taught me reliability, time management, and how to debug real-world logistics problems on the fly.",
            likes: 89,
            comments: 12,
        },
    ];

    // --- 3. PROJECT DATA (Portfolio) ---
    const projects = [
        {
            id: 1,
            title: "The Virtual Tavern",
            desc: "A SaaS tool for D&D players to manage campaigns. Features character sheets, dice rollers, and inventory management.",
            tags: ["React", "D&D", "SaaS"],
            link: "#",
            color: "bg-amber-100 border-amber-200",
        },
        {
            id: 2,
            title: "Local Biz SEO",
            desc: "Freelance web design project helping local businesses improve their online presence and search rankings.",
            tags: ["SEO", "HTML/CSS", "Freelance"],
            link: "#",
            color: "bg-blue-100 border-blue-200",
        },
    ];

    // Simple "Like" interaction wrapper
    const Post = ({ post }) => {
        const [likes, setLikes] = useState(post.likes);
        const [isLiked, setIsLiked] = useState(false);

        const handleLike = () => {
            if (isLiked) {
                setLikes(likes - 1);
                setIsLiked(false);
            } else {
                setLikes(likes + 1);
                setIsLiked(true);
            }
        };

        return (
            <Card className="mb-4">
                <CardHeader className="flex flex-row items-start gap-3 pb-2">
                    <Avatar>
                        <AvatarFallback className="bg-slate-200">
                            {post.avatar}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">
                                {post.author}
                            </span>
                            <span className="text-slate-500 text-xs">
                                {post.handle} · {post.time}
                            </span>
                        </div>
                        <p className="text-sm mt-1 text-slate-800">
                            {post.content}
                        </p>
                    </div>
                </CardHeader>
                <CardFooter className="py-2">
                    <div className="flex gap-6 text-slate-500 w-full">
                        <button
                            onClick={handleLike}
                            className={`flex items-center gap-2 text-sm hover:text-red-500 transition ${isLiked ? "text-red-500" : ""}`}
                        >
                            <Heart
                                size={18}
                                fill={isLiked ? "currentColor" : "none"}
                            />{" "}
                            {likes}
                        </button>
                        <button className="flex items-center gap-2 text-sm hover:text-blue-500 transition">
                            <MessageSquare size={18} /> {post.comments}
                        </button>
                        <button className="flex items-center gap-2 text-sm hover:text-green-500 transition ml-auto">
                            <Share2 size={18} />
                        </button>
                    </div>
                </CardFooter>
            </Card>
        );
    };

    return (
        <div className="min-h-screen bg-slate-100 font-sans">
            {/* BACKGROUND BANNER */}
            <div className="h-48 bg-gradient-to-r from-slate-800 to-slate-900 w-full relative">
                <div className="absolute bottom-4 right-8 flex gap-2">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="hidden md:flex"
                    >
                        Edit Profile
                    </Button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* --- LEFT COLUMN: PROFILE INFO (4 Cols) --- */}
                <div className="md:col-span-4 space-y-4">
                    <div className="relative">
                        <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                            <AvatarImage src="/your-photo.jpg" />
                            <AvatarFallback className="text-2xl bg-slate-800 text-white">
                                {profile.initials}
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="mt-2">
                        <h1 className="text-2xl font-bold text-slate-900">
                            {profile.name}
                        </h1>
                        <p className="text-slate-500">{profile.handle}</p>
                        <p className="mt-3 text-slate-700 leading-relaxed">
                            {profile.bio}
                        </p>

                        <div className="mt-4 space-y-2 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} /> {profile.location}
                            </div>
                            <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                                <LinkIcon size={16} />{" "}
                                <a
                                    href={`https://${profile.website}`}
                                    target="_blank"
                                >
                                    {profile.website}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} /> Joined {profile.joined}
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {profile.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="px-3 py-1 bg-slate-200 hover:bg-slate-300"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: TABS & FEED (8 Cols) --- */}
                <div className="md:col-span-8 mt-10 md:mt-20">
                    <Tabs defaultValue="feed" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="feed">
                                Activity Feed
                            </TabsTrigger>
                            <TabsTrigger value="projects">
                                Projects & Code
                            </TabsTrigger>
                        </TabsList>

                        {/* FEED TAB */}
                        <TabsContent value="feed">
                            {posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))}
                        </TabsContent>

                        {/* PROJECTS TAB */}
                        <TabsContent value="projects">
                            <div className="grid grid-cols-1 gap-4">
                                {projects.map((project) => (
                                    <Card
                                        key={project.id}
                                        className={`${project.color} border shadow-sm`}
                                    >
                                        <CardHeader>
                                            <CardTitle className="flex justify-between items-center">
                                                {project.title}
                                                <Github className="w-5 h-5 opacity-50" />
                                            </CardTitle>
                                            <CardDescription className="text-slate-700 opacity-90">
                                                {project.desc}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="flex justify-between items-center">
                                            <div className="flex gap-2">
                                                {project.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="outline"
                                                        className="bg-white/50"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="gap-1"
                                            >
                                                View <ExternalLink size={14} />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default App;
