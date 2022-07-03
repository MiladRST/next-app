import Image from 'next/image';
import AppCountdown from "./AppCoundown";

function AppDate(props) {
    return (
        <div id="AppDate">
            <div className="container">
                <div className="date_wrapper">
                    <div className="row">
                        {
                            props.data.map((item) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                                        <div className="date_wrapper-box">
                                            <span className="date_icon">
                                                <Image layout="intrinsic" src={`/images/${item.icon}.svg`} alt={item.title} title={item.title} width={24} height={24} ></Image>
                                            </span>
                                            <div className="date_details">
                                                <span className="date_details-title">{item.title}</span>
                                                <span className="date_details-detail">{item.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="col-12 col-md-6 col-lg-3">
                            <AppCountdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDate;