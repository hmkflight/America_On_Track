import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
const display=localFont({src:'../../public/fonts/barlow-800.ttf',variable:'--font-display',display:'swap',weight:'800'});
const body=localFont({src:[{path:'../../public/fonts/manrope-400.ttf',weight:'400'},{path:'../../public/fonts/manrope-700.ttf',weight:'700'}],variable:'--font-body',display:'swap'});
export const metadata:Metadata={metadataBase:new URL('http://localhost:3000'),title:{default:'America On Track — Brighter futures. Together.',template:'%s | America On Track'},description:'Building youth leaders, supporting families, and strengthening Orange County communities since 1995. Explore America On Track’s programs and ways to help.',robots:{index:false,follow:false},openGraph:{title:'America On Track — Brighter futures. Together.',description:'One person. A stronger family. A brighter community.',images:[{url:'/images/camp.jpg',width:2310,height:883}]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
