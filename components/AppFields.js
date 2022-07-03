import Image from 'next/image';


function AppFields(props) {
    return (
        <div id="AppFields">
            <div className="container">
                <h2 className="fields_title">{props.title}</h2>

                <div className="row">
                    {
                        props.data.map((item) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={item.id}>
                                    <div className="field_box">
                                        <div className="field_box-head">
                                            <span className="field_box-icon">
                                                <Image layout="intrinsic" src={`/images/${item.img}.svg`}
                                                    alt="حوزه های مسابقه" title=" حوزه های مسابقه"
                                                    width={32} height={32}
                                                ></Image>

                                            </span>
                                            <div className="field_box-title">
                                                {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                                            </div>

                                        </div>
                                        <p>{item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AppFields;
