import Head from 'next/head'
//data
import {data} from '../data'
//components
import AppHero from "../components/AppHero";
import AppIntro from "../components/AppIntro";
import AppRefs from "../components/AppRefs";
import AppSponsors from "../components/AppSponsors";
import AppFields from "../components/AppFields";
import AppDate from "../components/AppDate";
import AppLocation from "../components/AppLocation";
import AppPrize from "../components/AppPrize";


export default function Home() {


  return (
    <div>
      <Head>
        <title>ماراتن برنامه نویسی</title>
        <meta name="description" content="ماراتن برنامه نویسی میهن وب هاست" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0 ,maximum-scale=5.0"/>
        <link rel="icon" href="images/logo.png" />
      </Head>

        <AppHero />
        <AppIntro />

        <AppDate data={data.date} />

        <AppLocation />

        <AppFields title="حوزه‌های مسابقه"  data={data.fields} />

        <AppPrize title="جوایز اهدایی ویژه برای نفرات اول تا سوم" data={data.prize} />

        <AppRefs title="داوران رویداد" data={data.refs} />

        <section className="sponsor_section" >

          <AppSponsors title="حامیان رویداد" data={data.sponsors} />
          <AppSponsors title="حامیان رسانه‌ای" data={data.sponsors} />

        </section>

    </div>
  )
}
