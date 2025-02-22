import HeroSection from '@/components/HeroSection';
import StoreSection from '@/components/StoreSection';
import RashiSection from '@/components/RashiSection';
import ConsultingSection from '@/components/ConsultingSection';
import StatsBar from '@/components/StatsBar';
import BlogSection from '@/components/BlogSection';
import AppDownload from '@/components/AppDownload';
import WhyConsult from '@/components/WhyConsult';

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