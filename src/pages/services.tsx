import ServicesLandingHero from "@/components/services-page-components/services-landing-hero/ServicesLandingHero";
import MainLayout from "@/layouts/main/MainLayout";
Services.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>
export default function Services() {
    return (
        <>
            <ServicesLandingHero/>
        </>
    )
}