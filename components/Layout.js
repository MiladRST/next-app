
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import { data } from '../data'

function Layout({ children }) {
    return (
        <div>
            <section id="MainWrapper">
                <AppHeader />
                <main>{children}</main>
            </section>

            <AppFooter social={data.social} copyRight="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" />
        </div>
    )
}

export default Layout;