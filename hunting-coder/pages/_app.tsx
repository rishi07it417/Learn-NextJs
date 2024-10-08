import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
  );
}
