import ServicesLandingHero from "@/components/services-page-components/services-landing-hero/ServicesLandingHero";
import ServicesSection from "@/components/services-page-components/services-section/ServicesSection";
import ServicesBenefits from "@/components/services-page-components/service-benefits/ServiceBenefits";
import ServicesHowItWorks from "@/components/services-page-components/service-how-it-works/ServicesHowItWorks";
import HomeTestimonial from "@/components/homepage-components/HomeTestimonial/HomeTestimonial";
import HomeAdvert from "@/components/homepage-components/HomeAdvert/HomeAdvert";
import LatestPosts from "@/components/blog/latest-posts/LatestPosts";
import {_testimonials, _blogCoursePosts, _caseStudies} from '@/_mock'
import MainLayout from "@/layouts/main/MainLayout";
Services.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>
export default function Services() {
    return (
        <>
            <ServicesLandingHero/>
            <ServicesSection/>
            <ServicesBenefits/>
            <ServicesHowItWorks/>
            <HomeTestimonial testimonials={_testimonials}/>
            <LatestPosts/>
            <HomeAdvert/>
        </>
    )
}