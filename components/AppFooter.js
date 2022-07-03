import Image from 'next/image';

function AppFooter(props) {
    return (
        <div id="AppFooter">
            <ul>
                {
                    props.social.map((item) => {
                        return (
                            <li key={item.title}>
                                <a href={`https://www.${item.title}.com/`} title={item.name} target="_blank" rel="noreferrer">
                                    <Image layout="intrinsic" src={`/images/${item.title}.svg`} alt={item.name} title={item.name} width={20} height={20}></Image>

                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                {props.copyRight}
            </p>
        </div>
    )
}

export default AppFooter;