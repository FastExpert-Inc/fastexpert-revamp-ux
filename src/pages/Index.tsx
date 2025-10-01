import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import StatesBrowser from "@/components/StatesBrowser";
import TopCompaniesList from "@/components/TopCompaniesList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCompanies />
        <StatesBrowser />
        <TopCompaniesList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
