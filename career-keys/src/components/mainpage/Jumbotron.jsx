export default function Jumbotron() {
    return <>

<section className="bg-cover bg-no-repeat bg-[url('././images/jumbotron.jpg')] bg-gray-500 bg-blend-multiply">
    <div className="px-10 mx-auto max-w-screen-md text-center py-24 md:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Make Every Word Count!</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"> Elevate Your Resume with Precision-Selected Keywords! </p>
        <div className="flex flex-col space-y-4 sm:flex-row px-10 sm:justify-center sm:space-y-0">
            <a href="#searchForm" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-rose-950 rounded-lg bg-rose-400 hover:bg-rose-500 focus:ring-4 focus:ring-rose-300">
                Search now!
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>
    </>
}