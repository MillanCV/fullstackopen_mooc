const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((accumulator, part) => {
        return accumulator + part.exercises;
    }, 0);

    return (<p>Number of exercises {totalExercises}</p>)
}
const Part = ({ name, exercises }) => {
    return (<li>
        {name} {exercises}
    </li>)
}

const Content = ({ parts }) => {
    return (<ul>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </ul>)
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