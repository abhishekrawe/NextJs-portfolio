import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";

export default function Home() {

  const { data: $repositories } = useSWR('/api/repos');
  const repositories = $repositories?.data;

  return <>
    <div className="h-[40rem] flex flex-col justify-center items-center mb-72">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-center">Hi there, Im <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">{clquConfig.name}</span></span>.</h1>
      <p className="mx-auto max-w-4xl font-display text-2xl text-gray-500/50 text-center">
        A full-stack developer
      </p>

      <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-24">
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Technologies</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">8+</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Years of Experience</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">3+</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Completed Projects</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">60+</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Repositories</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">{repositories?.length}+</p>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl my-24">
      <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white">My <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">repositories</span></span></h1>
      <div className="relative">
        {repositories && (
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3.5
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
              }
            }}
            containerClass="mt-12 relative "
            itemClass="lg:pr-4"
            renderButtonGroupOutside={true}
          >
            {repositories?.sort((a, b) => b.stargazers_count - a.stargazers_count).map((repo, index) => (
              <a key={index} className="py-4" href={repo.html_url} target="_blank" rel="noreferrer">
                <div className="cursor-pointer group relative bg-gray-600/5 shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-4 transition-all duration-200">
                  <div className="absolute w-full h-full top-0 right-0 transition-all duration-200">
                    <img src={`https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${repo.full_name}`} alt="repo's image" className="opacity-50 group-hover:opacity-100 transition-all duration-200 w-full h-full rounded-lg" />
                    <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-t from-white dark:from-black to-white/50 dark:to-black/90" />
                  </div>
                  <div className="relative">
                    <h2 className="font-display text-lg font-medium text-black dark:text-white">{repo.name}</h2>
                    <p className="font-display h-10 text-sm text-gray-500 font-light mt-1">{repo.description}</p>
                    <div className="flex items-center justify-between gap-4 mt-10">
                      <div className="flex items-center">
                        <i className="fal fa-code mr-2 w-5" />
                        <p>{repo.language || "Plain/Text"}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <i className="fal fa-star mr-2 w-5" />
                          <p>{repo.stargazers_count || 0}</p>
                        </div>
                        <div className="flex items-center">
                          <i className="fal fa-code-branch mr-2 w-5" />
                          <p>{repo.forks_count || 0}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </Carousel>
        )}

      </div>

      <div className="flex justify-end">
        <a href={`https://github.com/abhishekrawe`} target="_blank" rel="noreferrer">
          <Button className="mt-6 mb-12 flex items-center gap-2">
            <i className="fab fa-github" />
            View all repositories
            <i className="fal fa-arrow-right -rotate-45 text-xs" />
          </Button>
        </a>
      </div>

    </div>

    <div className="mx-auto max-w-7xl my-24">
      <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-right">My <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">skills</span></span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/office/256/react.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> React Js</h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/fluency/256/node-js.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> Node Js</h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/ios/256/express-js.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> Express Js</h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/color/256/javascript.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> Javascript </h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/color/256/java-coffee-cup-logo.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> Java </h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/color/256/mongodb.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> MongoDb </h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/color/256/angularjs.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> Angular </h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> HTML5 </h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/color/256/css3.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> CSS3 </h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/color/256/bootstrap.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> Bootstrap </h2>
            </div>
          </div>
          <div className="group flex justify-between items-center relative bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg overflow-hidden p-2.5 transition-all duration-200">
            <img src="https://img.icons8.com/color/256/typescript.png" width="32" height="32" className="bg-white/5 p-1 w-[32px] h-[32px] rounded-md " />
            <div className="relative">
              <h2 className="font-display text-xl font-medium text-black dark:text-white"> TypeScript </h2>
            </div>
          </div>
      </div>
    </div>
  </>
}
