import Layout from "@/components/layout/Layout";
import { usePortfolioList } from "@/hooks/usePortfolio";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import LoadingSkeleton from "@/components/ui/loading-skeleton";
import { HeroContent, HeroItem, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import siteContent from "@/content/siteContent";

const Portfolio = () => {
  const { data: portfolio, isLoading, error } = usePortfolioList();
  const copy = siteContent.portfolioPage;

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="container">
          <HeroContent className="max-w-2xl">
            <HeroItem>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/60 mb-3">
                {copy.badge}
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="text-4xl md:text-5xl tracking-tight font-normal">
                {copy.title}
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-4 text-base md:text-lg text-white/70">
                {copy.description}
              </p>
            </HeroItem>
          </HeroContent>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-black text-white pb-24 md:pb-32">
        <div className="container">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <LoadingSkeleton key={i} variant="card" />)}
            </div>
          ) : error ? (
            <div className="text-center py-20 text-destructive">
              <p>{copy.errorMessage}</p>
            </div>
          ) : portfolio && portfolio.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map(project => (
                <StaggerItem key={project.id}>
                  <PortfolioCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-4">{copy.emptyTitle}</h2>
                <p className="text-white/60">
                  {copy.emptyDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

    </Layout>
  );
};

export default Portfolio;
