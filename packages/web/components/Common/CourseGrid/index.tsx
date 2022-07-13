import Icon from '@/components/Primitive/Icon'
import SmartLink from '@/components/Primitive/SmartLink'
import SanityImage from '../SanityImage'

interface CourseGridProps {
  courses: any
  full?: boolean
}

const CourseGrid = ({ courses, full = false }: CourseGridProps) => {
  return (
    <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3 container-lg">
      {courses?.map((course: any, i: number) => {
        if (i < 3 || full)
          return (
            <SmartLink key={course._id} to={`/courses/${course.slug.current}`}>
              <div className="max-w-sm" key={`Course:${i}`}>
                <SanityImage src={course.mainImage} alt="" />
                <div className="flex my-5">
                  <Icon
                    type="fullPersonBlack"
                    width={20}
                    height={40}
                    a11yText="Person"
                    className="pr-10"
                  />
                  <p>Age: {course.ages}</p>
                </div>
                <div>
                  <h5 className="text-primary text-3xl mb-5">{course.title}</h5>
                  <p>{course.subtitle}</p>
                </div>
              </div>
            </SmartLink>
          )
      })}
    </div>
  )
}

export default CourseGrid
