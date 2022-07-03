import Image from 'next/image';
function AppRefs(props) {
    return (
        <div id="AppRefs">
            <div className="container">
                <h2 className="refs_title">{props.title}</h2>
                <ul className="refs_list">
                    {
                        props.data.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="refs_list-box">
                                        <Image layout="intrinsic" src={`/images/${item.img}.svg`}
                                            width={70} height={70}
                                            alt={item.name} title={item.name} ></Image>

                                        <div className="refs_list-name">
                                            {item.name}
                                        </div>
                                        <div className="refs_list-title">
                                            {item.title}
                                        </div>
                                        <div className="ref_box-hover">
                                            <a href="https://twitter.com" title="توییتر" target="_blank" rel="noreferrer">
                                                <Image layout="intrinsic" src="/images/twitter.svg"
                                                    width={24} height={24}
                                                    alt="توییتر"
                                                    title="توییتر" ></Image>
                                            </a>
                                            <a href="https://facebook.com" title="دیسکورد" target="_blank" rel="noreferrer">
                                                <Image layout="intrinsic" src="/images/discord.svg"
                                                    width={24} height={24}
                                                    alt="دیسکورد"
                                                    title="دیسکورد" ></Image>
                                            </a>
                                            <a href="https://facebook.com" title="فیسبوک" target="_blank" rel="noreferrer">
                                                <Image layout="intrinsic" src="/images/facebook.svg"
                                                    width={24} height={24}
                                                    alt="فیسبوک"
                                                    title="فیسبوک" ></Image>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default AppRefs;

