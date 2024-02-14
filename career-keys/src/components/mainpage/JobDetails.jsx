
export default function JobDetails ({job, words}) {
    return (
        <div id="description" className="col-span-1 pr-10">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-rose-950 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-rose-950" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                <li className="me-2">
                    <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-rose-950 dark:hover:bg-gray-700 dark:text-blue-500">Description</button>
                </li>
                <li className="me-2">
                    <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Keywords</button>
                </li>
            </ul>
            <div id="defaultTabContent">
                <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-rose-950" id="about" role="tabpanel" aria-labelledby="desc-tab">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Test title</h2>
                    <h3 className="mb-3 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">test name</h3>
                    <p className="mb-3 text-gray-900 dark:text-white">
                        description
                    </p>
                </div>
                <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-rose-950" id="services" role="tabpanel" aria-labelledby="key-tab">
                    <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Keywords</h2>
                    <p className="text-white">words wordz</p>
                </div>
            </div>
    </div> 
    </div>
    )
}
