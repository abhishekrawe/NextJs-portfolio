import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Button from 'components/Global/Button'
import Link from 'next/link'
export default function Projects() {
    return <>
        <div className="max-w-3xl mx-auto">
            <div className="py-24">
                <h1 className="font-display text-5xl font-github sm:text-7xl text-black dark:text-white">My <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">Projects</span></span></h1>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                        <div>
                            <h1 className="text-4xl font-bold"> Facial-<span className="relative whitespace-nowrap text-primary">Recognition</span>-Identificatio</h1>
                            <p className="text-xl mt-1">
                                Facial Recognition & Identification based attendance system”. Attendance of students in a large classroom is hard to be handled by the traditional system, as it is time-consuming and has a high probability of error during the process of inputting data into the computer, Our project proposed automated attendance marking system using face recognition technique.
                            </p>
                        </div>
                        <div className="relative flex-shrink-0">
                            <img src="https://imageio.forbes.com/specials-images/imageserve/1139859542/Facial-Recognition-Technology/960x0.jpg?format=jpg&width=960" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />

                            <Link href="https://github.com/abhishekrawe/Facial-Recognition-Identification">
                                <a><Button className="flex items-center ms-2 px-5 gap-2 w-full"><i className="fab fa-github" />Go to Github<i className="fal fa-arrow-right -rotate-45 text-xs" /></Button></a>
                            </Link>

                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">

                        <div className="relative flex-shrink-0">
                            <img src="data:image/png;base64,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" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                            <Link href="https://github.com/abhishekrawe/Netflix-Clone">
                                <a><Button className="flex items-center ms-2 px-5 gap-2 w-full"><i className="fab fa-github" />Go to Github<i className="fal fa-arrow-right -rotate-45 text-xs" /></Button></a>
                            </Link>
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold">Netflix<span className="relative whitespace-nowrap text-primary"> clone </span> app </h1>
                            <p className="text-xl mt-1">
                                Netflix home page with react using TMDb and movie trailer API. Its a full-fledged react application that includes react features like hooks, asynchronous functional, reusable components, HTML & CSS the developed application is a look-alike of Netflix
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                        <div>
                            <h1 className="text-4xl font-bold">The  <span className="relative whitespace-nowrap text-primary">Whatsapp</span>Remainder</h1>
                            <p className="text-xl mt-1">
                                WhatsApp Reminder is a whatsapp bot built with Twilio's APIs, ReactJs, ExpressJS and MongoDB. It can send reminders through text messages in whatsapp....
                            </p>

                        </div>

                        <div className="relative flex-shrink-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpsoKUXZKnRZQsxLo-Yg02vSjJbxBxDYnFA&usqp=CAU" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                            <Link href="https://github.com/abhishekrawe/WhatsApp-Reminder">
                                <a><Button className="flex items-center ms-2 px-5 gap-2 w-full"><i className="fab fa-github" />Go to Github<i className="fal fa-arrow-right -rotate-45 text-xs" /></Button></a>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <Link href="https://github.com/abhishekrawe">
                    <a><Button className="flex items-center ms-2 px-5 gap-2"><i className="fab fa-github" />Go to Github<i className="fal fa-arrow-right -rotate-45 text-xs" /></Button></a>
                </Link>
            </div>
        </div>

    </>
}
