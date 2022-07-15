import OverlayLink from '@/components/Primitive/OverlayLink'
import { CalendarIcon, UserIcon } from '@heroicons/react/outline'
import SanityImage from '../SanityImage'

interface CourseGridProps {
  courses: any
  full?: boolean
}

const CourseGrid = ({ courses, full = false }: CourseGridProps) => {
  const formattedCourses = full ? courses : courses.slice(0, 3)
  return (
    <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {formattedCourses?.map((course: any) => (
        <div
          className="group relative flex flex-col items-start bg-white rounded-lg shadow hover:shadow-md active:shadow-sm active:scale-[0.993] trns-ease child:trns-ease"
          key={course._id}
        >
          <div className="relative flex-auto aspect-video w-full">
            <SanityImage
              src={course.mainImage}
              alt={course.title}
              className="rounded-t-lg object-cover object-center"
            />
          </div>
          <div className="flex flex-col space-y-1 sm:space-y-3 p-3 z-10">
            <div className="flex self-start border divide-x -mt-6 bg-white shadow-sm rounded-lg p-2">
              <div className="flex items-center flex-shrink-0 px-2 space-x-1">
                <CalendarIcon className="h-6 w-6 text-secondary" />
                <div className="text-sm">{course.launchDate}</div>
              </div>
              <div className="flex items-center flex-shrink-0 px-2 space-x-1">
                <UserIcon className="h-6 w-6 text-secondary" />
                <div className="text-sm">{course.ages}</div>
              </div>
            </div>
            <OverlayLink to={`/courses/${course.slug.current}`} className="">
              <h3 className="text-2xl font-bold sm:text-2xl lg:text-3xl group-hover:text-secondary ">
                {course.title}
              </h3>
            </OverlayLink>
            <p className="sm:max-w-prose group-hover:text-secondary line-clamp-4">
              {course.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CourseGrid
