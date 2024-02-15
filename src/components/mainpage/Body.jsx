import { BarsArrowUpIcon, CheckBadgeIcon, ArrowPathIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline'
{/* Features object to hold the features displayed when a user hasn't searched anything yet */}
const features = [
  {
    name: 'Keyword Extraction',
    description:
      'Extract relevant keywords and phrases from job listings to enhance your resume with the terms most sought after by employers.',
      icon: BarsArrowUpIcon,
  },
  {
    name: 'ATS Compatibility',
    description:
      'Ensure your resume passes through Applicant Tracking Systems (ATS) efficiently by integrating relevant terms and is optimised for parsing algorithms.',
      icon: CheckBadgeIcon,
  },
  {
    name: 'Refreshable Content',
    description:
      'Regularly update and refresh the extracted keywords to adapt to changing job market trends and employer preferences.',
      icon: ArrowPathIcon,
  },
  {
    name: 'Resume Enhancement',
    description:
      'We empower job seekers to tailor your resumes effectively, increasing your chances of standing out among competitors.',
      icon: CursorArrowRaysIcon,
  },
]

export default function Body() {
  return (
    <div className="bg-white sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Optimise Your Resume</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Job Application Effortlessly
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leverage the power of AI through keyword extraction! Make your resume stand out by integrating the most relevant keywords extracted directly from job listings.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                   <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
