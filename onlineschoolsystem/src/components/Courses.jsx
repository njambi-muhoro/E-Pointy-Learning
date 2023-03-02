
import FetchCourses from "./FetchCourses";
import Time from "./Time";

function Courses({ onCourseFavorite , searchedData}) {
    

//   const filteredCourses = searchedData.filter((course) => {
//     const subtopics = course.subtopics.join(", ").toLowerCase();
//     return subtopics.includes(searchValue.toLowerCase());
//   });
 
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        backgroundColor: "rgb(242,241,249)",
        border: "9px solid black",
        borderRadius: "10px"
      }}
    >
      
      <div style={{ display: "flex", gap: "50px" }}>
        <Time />
        <h1 style={{ fontSize: "30px" }}>SUBJECTS</h1>
      </div>
      <FetchCourses onCourseFavorite={onCourseFavorite} />
    </div>
  );
}

export default Courses;
