import MarketingLandingHero from "@/components/MarketingLandingHero/MarketingLandingHero";
import OurClientsMarketing from "@/components/OurClients/OurClientsMarketing";
import MarketingLandingAbout from "@/components/MarketingLandingAbout/MarketingLandingAbout";
import {_brands} from '@/_mock'

export default function Home() {
  return (
    <>
      <MarketingLandingHero/>
        <OurClientsMarketing brands={_brands}/>
        <MarketingLandingAbout/>

    </>
  )
}
