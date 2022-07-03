import {useState , useEffect } from 'react'

function AppCountdown() {

        const [days , setDays] = useState(0);
        const [hours , setHours] = useState(0);
        const [minutes , setMinutes] = useState(0);
        const [seconds , setSeconds] = useState(0);

        useEffect(()=> {

            const target = new Date("08/07/2022 17:01:59")

            const interval = setInterval(()=> {
                const now = new Date()
                const difference = target.getTime() - now.getTime()

                if( difference < 1000) {
                    setDays(0);
                    setHours(0);
                    setMinutes(0);
                    setSeconds(0);
                } else {
                    const d = Math.floor(difference / (1000 * 60 * 60 * 24))
                    setDays(d);

                    const h = Math.floor(
                        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 )
                    )
                    setHours(h);

                    const m = Math.floor(
                        (difference % (1000 * 60 * 60 )) / (1000 * 60 )
                    )
                    setMinutes(m);

                    const s = Math.floor(
                        (difference % (1000 * 60)) / (1000)
                    )
                    setSeconds(s);
                }




            } , 1000)

            return ()=> clearInterval(interval)
        }, [])

        return (
            <div id="AppCountdown">
                <ul>
                    <li>
                        <div>
                            <span className="count_amount">{days}</span>
                            <span className="count_label" >روز</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="count_amount">{hours}</span>
                            <span className="count_label">ساعت</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="count_amount">{minutes}</span>
                            <span className="count_label">دقیقه</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="count_amount">{seconds}</span>
                            <span className="count_label">ثانیه</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
}

export default AppCountdown;