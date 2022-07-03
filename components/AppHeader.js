import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';


function AppHeader() {

    const [showMenu, setShowMenu] = useState(false)
    const [shadow, setShadow] = useState(false);

    function menuHandler() {
        showMenu ? setShowMenu(false) : setShowMenu(true);
        showMenu ? setShadow(false) : setShadow(true);
    }

    return (
        <header id="AppHeader">
            <nav className="main_nav">
                <ul>
                    <li>
                        <a href="#AppIntro" title="معرفی و توضیح مسابقه">معرفی و توضیح مسابقه</a>
                    </li>
                    <li>
                        <a href="#AppFields" title="حوزه های مسابقه">حوزه های مسابقه</a>
                    </li>
                    <li>
                        <Link href="/">
                            <a title="لوگو" >
                                <Image layout="intrinsic" src="/images/logo.png"
                                    width={51} height={52}
                                    alt="لوگو" title="لوگو" ></Image>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a href="#AppPrize" title="جوایز">جوایز</a>
                    </li>
                    <li>
                        <a href="#AppSponsors" title="داوران و سرمایه گذاران">
                            داوران و سرمایه گذاران
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="mobile_nav">
                <button onClick={menuHandler}>
                    <Image layout="intrinsic" src="/images/menu.svg" alt="منو" title="منو" width={28} height={28} ></Image>
                </button>
                <ul id="sidebar_menu" className={showMenu ? 'active' : ''}>
                    <li>
                        <Link href="/">
                            <a title="لوگو" >
                                <Image layout="intrinsic" src="/images/logo.png"
                                    width={51} height={52}
                                    alt="لوگو" title="لوگو" ></Image>
                            </a>
                        </Link>
                        <button className="close_sidebar" onClick={menuHandler}>
                            <Image layout="intrinsic" src="/images/close.svg"
                                width={24} height={24}
                                alt="بستن منو" title="بستن منو"></Image>
                        </button>
                    </li>


                    <li> <a href="#AppIntro" title="معرفی و توضیح مسابقه">معرفی و توضیح مسابقه</a></li>
                    <li> <a href="#AppFields" title="حوزه های مسابقه">حوزه های مسابقه</a></li>
                    <li> <a href="#AppPrize" title="جوایز">جوایز</a></li>
                    <li> <a href="#AppRefs" title="داوران و سرمایه گذاران">داوران و سرمایه گذاران</a> </li>
                </ul>

            </div>
            <div id="sidebar_backdrop" className={showMenu ? 'active' : ''} onClick={menuHandler}>

            </div>
        </header>
    )
}

export default AppHeader