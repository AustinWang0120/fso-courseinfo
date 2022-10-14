const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} part={part} />
            ))}
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((prev, curr) => prev + curr.exercises, 0)
    return <p>Number of exercises {total}</p>
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course
