import Link from 'next/link';
import Image from 'next/image';

function custom404() {
    return (
        <div id="custom404">
            <Image src="/images/404.webp"
                width={500} height={500} layout="intrinsic"
                alt="404" title="404">

            </Image>


            <h1>صفحه مورد نظر یافت نشد!</h1>

            <button>
                <Link href="/" title="صفحه اصلی">
                    <a> صفحه اصلی </a>
                </Link>
            </button>


        </div>
    )
}
export default custom404;