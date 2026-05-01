import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";

const platformsId = {
  macadamia: 1,
  nuez: 4,
  nintendo: 3,
  pc: 2,
};

export default function HomePage() {
  return (
    <>
      <Seo />

      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="Mani"
            limit={3}
            platformId={platformsId.macadamia}
          />
        </Container>

        <Separator height={100} />

        <BannerAd
          title="Recibe en tu primera compra un descuento del 10%"
          subtitle={`No solo tenemos los mejores precios de todo el mercado,
            tambien contamos con los mejores productos.`}
          btnTitle="Compra ahora por WhatsApp"
          btnLink="/account"
          image="/images/fts2.jpeg"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestGames
            title="Nuez"
            limit={3}
            platformId={platformsId.nuez}
          />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
