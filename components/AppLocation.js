import Image from 'next/image';


function AppLocation() {
    return (
        <div id="AppLocation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <a href="https://www.google.com/maps/place/%DA%A9%D8%A7%D8%B1%D8%AE%D8%A7%D9%86%D9%87+%D9%86%D9%88%D8%A2%D9%88%D8%B1%DB%8C+%DA%AF%DB%8C%D9%84%D8%A7%D9%86%E2%80%AD/@37.2768826,49.7351469,15z/data=!4m5!3m4!1s0x0:0x4f8e39d22754cdbd!8m2!3d37.2768826!4d49.7351469"
                            id="map" title="کارخانه نوآوری گیلان" target="_blank" rel="noreferrer noopener">
                            <Image layout="intrinsic" src="/images/maploc.svg" alt=" کارخانه نوآوری گیلان" title="کارخانه نوآوری گیلان"
                                width={130} height={140}
                            ></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppLocation;