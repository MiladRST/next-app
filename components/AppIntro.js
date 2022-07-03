import Image from 'next/image';

function AppIntro() {

    return (
        <div id="AppIntro">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-lg-1 order-2 intro_img-wrapper">
                        <Image layout="intrinsic" src="/images/intro.svg" alt="معرفی و توضیح مسابقه" title="معرفی و توضیح مسابقه"
                            width={479} height={379} className="intro_img" ></Image>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-2 order-1">
                        <h2 className="intro_title">معرفی و توضیح مسابقه</h2>
                        <p className="intro_description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می
                            طلبد</p>
                        <div>
                            <button className="btn play_btn">
                                <Image layout="intrinsic" src="/images/play.svg"
                                    alt="مشاهده ویدیو" title="مشاهده ویدیو"
                                    width={34} height={34}></Image>
                                <span>مشاهده ویدیو</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppIntro;