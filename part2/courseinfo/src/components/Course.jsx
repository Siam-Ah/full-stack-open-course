const Course = ({ course }) => {
    const exercises = course.parts.map(part => part.exercises)
    const initialValue = 0
    const total = exercises.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )
    // course.parts.map(part => sum += part.exercises)
  
    return (
      <div>
        <h1>{course.name}</h1>
        {course.parts.map(part => 
          <p key={`${course.id} - ${part.id}`}>
            {part.name} {part.exercises}
          </p>
        )}
        <p><b>total of {total} exercises</b></p>
      </div>
    )
  }

  export default Course
  