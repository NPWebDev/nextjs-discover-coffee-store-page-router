import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Banner from "../components/banner";
import Card from "../components/card";
import coffeeStoreData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStore: coffeeStoreData,
    },
  };
}

export default function Home(props) {
  const { coffeeStore } = props;
  const handleOnBannerClick = () => {
    console.log("Banner clicked");
  };
  return (
    <>
      <Head>
        <title>Coffee Stores</title>
        <meta name="description" content="Search Coffee Stores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby!"
          handleOnClick={handleOnBannerClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
        {coffeeStore.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStore.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
}
