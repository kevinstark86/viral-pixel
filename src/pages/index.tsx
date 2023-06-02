import MarketingLandingHero from "@/components/MarketingLandingHero/MarketingLandingHero";
import OurClientsMarketing from "@/components/OurClients/OurClientsMarketing";
import MarketingLandingAbout from "@/components/MarketingLandingAbout/MarketingLandingAbout";
import MarketingLandingServices from "@/components/MarketingLandingServices/MarketingLandingServices";
import MarketingLandingProcess from "@/components/MarketingLandingProcess/MarketingLandingProcess";
import MarketingLandingCaseStudies from "@/components/MarketingLandingCaseStudies/MarketingLandingCaseStudies";
import MarketingLandingFaqs from "@/components/MarketingLandingFaqs/MarketingLandingFaqs";
import MainLayout from "@/layouts/main/MainLayout";
import TestimonialMarketing from "@/components/LandingTestimonial/TestimonialMarketing";
import {_brands, _caseStudies, _testimonials} from '@/_mock'

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
        <MarketingLandingFaqs/>
        <TestimonialMarketing testimonials={_testimonials}/>


    </>
  )
}
