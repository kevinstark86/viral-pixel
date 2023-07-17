import MarketingLandingHero from "@/components/homepage-components/MarketingLandingHero/MarketingLandingHero";
import OurClientsMarketing from "@/components/homepage-components/OurClients/OurClientsMarketing";
import MarketingLandingAbout from "@/components/homepage-components/MarketingLandingAbout/MarketingLandingAbout";
import MarketingLandingServices from "@/components/homepage-components/MarketingLandingServices/MarketingLandingServices";
import MarketingLandingProcess from "@/components/homepage-components/MarketingLandingProcess/MarketingLandingProcess";
import MarketingLandingCaseStudies from "@/components/homepage-components/MarketingLandingCaseStudies/MarketingLandingCaseStudies";
import MarketingLandingFaqs from "@/components/homepage-components/MarketingLandingFaqs/MarketingLandingFaqs";
import MainLayout from "@/layouts/main/MainLayout";
import TestimonialMarketing from "@/components/homepage-components/LandingTestimonial/TestimonialMarketing";
import LatestPosts from "@/components/blog/latest-posts/LatestPosts";
import NewsLetter from "@/components/homepage-components/NewsLetter";
import HomeFaq from "@/components/homepage-components/HomeFaq/HomeFaq";
import HomeCombination from "@/components/homepage-components/HomeCombination/HomeCombination";
import HomeAdvert from "@/components/homepage-components/HomeAdvert/HomeAdvert";
import HomeTestimonial from "@/components/homepage-components/HomeTestimonial/HomeTestimonial";
import {_brands, _caseStudies, _testimonials, _blogCoursePosts} from '@/_mock'

Home.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default function Home() {
  return (
    <>
      <MarketingLandingHero/>
        <OurClientsMarketing brands={_brands}/>
        <MarketingLandingAbout/>
      <MarketingLandingServices/>
        <MarketingLandingProcess/>
        <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)}/>
        <HomeTestimonial testimonials={_testimonials}/>
      <LatestPosts/>
        <HomeFaq/>

        <HomeAdvert/>




    </>
  )
}
