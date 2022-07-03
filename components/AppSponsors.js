import Image from 'next/image';

function AppSponsors(props) {
    return (
        <div id="AppSponsors">
            <div className="container">
                <h2 className="sponsors_title">{props.title}</h2>

                <ul className="sponsors_list">
                    {
                        props.data.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.url} title={item.name} rel="noreferrer" target="_blank">
                                        <Image layout="intrinsic" src={`/images/${item.title}.svg`} alt={item.name} title={item.name} width={item.width} height={item.height} ></Image>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default AppSponsors;