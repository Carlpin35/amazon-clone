import Head from "next/head";
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';



export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon </title>
        <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" />
      </Head>
        
        <Header />
       
       <main className="max-w-screen-xl mx-auto">
         <Banner />

         <ProductFeed products={products} />
       </main>
      
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
    );
  
  return { props: {
    products,
   },
  };
}


