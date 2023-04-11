import Head from "next/head";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fishData from "../constants/fishData.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fish Encyclopedia</title>
        <meta
          name="description"
          content="A modern UI fish encyclopedia website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dark:bg-gray-800 dark:text-white min-h-screen">
        <header className="bg-gradient-to-r from-blue-500 to-green-500 p-4 md:p-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              La Gorda Fish
            </h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/about">
                    <span className="text-white">About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-white">Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/shop">
                    <span className="text-white">Shop</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <Carousel
            className="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-4"
            showArrows
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={3000}
            transitionTime={600}
            swipeable
            centerMode
            centerSlidePercentage={33.3333}
          >
            {fishData.map((fish) => (
              <FishCard key={fish.id} {...fish} />
            ))}
          </Carousel>
        </main>
      </div>
    </div>
  );
}

function FishCard({ title, image, description }) {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md p-4 rounded-md mb-8 mx-4">
      <img
        className="w-full h-48 object-cover rounded-md"
        src={image}
        alt={title}
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
