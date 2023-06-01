import MarketingLandingHero from "@/components/MarketingLandingHero/MarketingLandingHero";
import OurClientsMarketing from "@/components/OurClients/OurClientsMarketing";
import MarketingLandingAbout from "@/components/MarketingLandingAbout/MarketingLandingAbout";
import MainLayout from "@/layouts/main/MainLayout";
import {_brands} from '@/_mock'

Home.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default function Home() {
  return (
    <>
      <MarketingLandingHero/>
        <OurClientsMarketing brands={_brands}/>
        <MarketingLandingAbout/>

    </>
  )
}
