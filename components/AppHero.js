import Image from 'next/image';
import Link from 'next/link'
function AppHero() {
    return (
        <div id="AppHero">
            <div className="hero_img">
                <Image layout="intrinsic" src="/images/hero.svg"
                    width={888} height={888}
                    alt="ماراتن برنامه نویسی" title="ماراتن برنامه نویسی" ></Image>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 col-xl-6">

                        <h1 className="hero_title">
                            مسابقه ماراتن <span>برنامه نویسی</span>
                            <br />
                            در سراسر کشور برگذار میکند!
                        </h1>

                        <p className="hero_description">
                            لورم اپسوم متنی است فارسی که برای پر کردن فضای خالی استفاده میشود
                        </p>

                        <div className="hero_btns">
                            <Link href="/register" >
                                <a title="ثبت نام" className="btn register_btn">
                                    <span style={{ marginLeft: '8px' }}> ثبت نام</span>
                                    <Image layout="intrinsic"
                                        width={11} height={11}
                                        src="/images/arrow.svg" alt="ثبت نام" title="ثبت نام" ></Image>
                                </a>
                            </Link>

                            <a href="mihanwebhost.com" title="اطلاعات بیشتر" className="btn details_btn">اطلاعات بیشتر</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHero;