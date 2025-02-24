import HeroSection from '@/app/components/HeroSection';
import StoreSection from '@/app/components/StoreSection';
import RashiSection from '@/app/components/RashiSection';
import ConsultingSection from '@/app/components/ConsultingSection';
import StatsBar from '@/app/components/StatsBar';
import BlogSection from '@/app/components/BlogSection';
import AppDownload from '@/app/components/AppDownload';
import WhyConsult from '@/app/components/WhyConsult';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <StoreSection />
      <RashiSection />
      <ConsultingSection />
      <StatsBar />
      <BlogSection />
      <AppDownload />
      <WhyConsult />
     
     
    </main>
    
  );
}