"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../Common/SectionHeading';
import iit from '@/public/images/iit.png'
import hackhaven from '@/public/images/hackhaven.jpg'
import webd from '@/public/images/webD.png'
import Image from 'next/image';

interface VideoType {
  id: string;
  title: string;
  thumbnail: any;
  description: string;
  url: string;
}


// Sample videos - replace with your actual YouTube videos
const featuredVideos: VideoType[] = [
  {
    id: '1',
    title: 'Web Development Complete Roadmap',
    thumbnail: webd,
    description: 'A comprehensive guide to web development where I explained the roadmap to become a Web Developer',
    url: 'https://youtu.be/7VkE5wr6XuA?si=NfgA3AYBOOZJKngV',
  },
  {
    id: '2',
    title: 'Winning IIT Delhi Hackathons',
    thumbnail: iit,
    description: 'My experience participating in and winning hackathon at IIT Delhi',
    url: 'https://youtu.be/qS_fP12CFw0?si=z0SViGYVLYho-hux',
  },
  {
    id: '3',
    title: 'Finalist in HackHaven 2.0 Hackathon',
    thumbnail: hackhaven,
    description: 'An increadible 24 hour hackathon journey where we ended up among Top 12 Finalists',
    url: 'https://youtu.be/jETWLkn_lBQ?si=Ymw0pEtF4UMt00bs',
  },
];

const YouTubePreview = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <SectionHeading 
          title="My YouTube Channel" 
          subtitle="Sharing my coding journey and campus life through videos"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative aspect-video overflow-hidden">
              <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/90 text-white p-4 rounded-full hover:bg-primary transition-colors"
                  >
                    <Play className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  Watch Video <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="https://www.youtube.com/@TeamSynapse3/videos" target="_blank" rel="noopener noreferrer" className="flex items-center">
              View all videos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubePreview;