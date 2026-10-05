import type { Metadata } from 'next';
import { PageHero, Closing } from '@/components/ui';
import { ProgramFilter } from '@/components/explorer';
export const metadata:Metadata={title:'Our programs',description:'Find leadership, mentoring, nutrition, fitness, prevention, and community health programs for Orange County youth, families, and schools.'};
export default function Programs(){return <><PageHero label="Our work" title={<>Different starting points.<br/><em>Shared possibility.</em></>} description="From one young person finding their voice to a whole community building healthier spaces, our programs connect learning with real life."/><section className="wrap"><ProgramFilter/></section><Closing title="Let’s find your starting point." text="Our team can help you explore current programs and partnerships." href="/contact" cta="Talk with our team"/></>}
