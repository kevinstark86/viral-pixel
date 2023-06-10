import { Divider } from '@mui/material';
import MainLayout from "@/layouts/main";
import AboutUsHero from "@/components/about-us/about-us-hero/AboutUsHero";
import AboutMission from "@/components/about-us/about-mission/AboutMission";
import AboutVision from "@/components/about-us/about-vision/AboutVision";
import HomeTestimonial from "@/components/homepage-components/HomeTestimonial/HomeTestimonial";
import AboutClients from "@/components/about-us/about-clients/AboutClients";
import HomeFaq from "@/components/homepage-components/HomeFaq/HomeFaq";
import {_testimonials, _brandsColor} from "@/_mock";

About.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default function About() {
    return (
        <>
            <AboutUsHero/>
            <AboutVision/>
            <Divider orientation="vertical" sx={{ height: 80, width: 2, mx: 'auto', marginBottom:10  }} />
            <HomeTestimonial testimonials={_testimonials}/>
            <AboutClients brands={_brandsColor}/>

            <HomeFaq/>




        </>
    )
}