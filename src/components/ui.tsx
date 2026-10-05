import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
export function Arrow(){return <span aria-hidden="true" className="arrow">↗</span>}
export function Button({href,children,secondary=false,className=''}:{href:string;children:ReactNode;secondary?:boolean;className?:string}){return <Link className={`button ${secondary?'secondary':''} ${className}`} href={href}>{children}<Arrow/></Link>}
export function TextLink({href,children}:{href:string;children:ReactNode}){return <Link className="text-link" href={href}>{children}<Arrow/></Link>}
export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow"><span aria-hidden="true"/>{children}</p>}
export function Photo({src,alt,className='',priority=false,sizes='(max-width: 700px) 100vw, 50vw'}:{src:string;alt:string;className?:string;priority?:boolean;sizes?:string}){return <div className={`photo ${className}`}><Image src={`/images/${src}`} alt={alt} fill sizes={sizes} priority={priority}/></div>}
export function PageHero({label,title,description,children}:{label:string;title:ReactNode;description:string;children?:ReactNode}){return <section className="page-hero wrap"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><div className="page-hero-bottom"><p className="lead">{description}</p>{children}</div></section>}
export function SourceNote({slug,children}:{slug:string;children?:ReactNode}){return <p className="source-note">{children||'Based on America On Track’s published program information.'} <a href={`https://americaontrack.org/${slug}/`}>View original source ↗</a></p>}
export function Closing({title='A brighter future needs you.',text='Give your time. Share your skills. Help open the next door.',href='/get-involved',cta='Find your way to help'}:{title?:string;text?:string;href?:string;cta?:string}){return <section className="closing"><div className="wrap closing-inner"><div><Eyebrow>Let’s move forward, together</Eyebrow><h2>{title}</h2><p>{text}</p></div><Button href={href}>{cta}</Button><span className="closing-star" aria-hidden="true">✳</span></div></section>}
