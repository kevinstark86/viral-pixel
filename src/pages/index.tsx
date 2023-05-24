import MarketingLandingHero from "@/components/MarketingLandingHero/MarketingLandingHero";
import OurClientsMarketing from "@/components/OurClients/OurClientsMarketing";
import {_brands} from '@/_mock'

export default function Home() {
    console.log(_brands)
  return (
    <>
      <MarketingLandingHero/>
        <OurClientsMarketing brands={_brands}/>

    </>
  )
}
