import * as style from "../styles/TutorListElement.css";

const TutorListElement = () => {
  return (
    <>
      <div className={style["tutor-element"]}>
        <div className={style["avatar"]}>
          <img src={"../../public/media/venti.jpg"} alt="Tutor" />
        </div>

        <div className={style["avatar-details"]}>
          <h3>Venti</h3>
          <p>Tone-Deaf Bard</p>
        </div>
      </div>
    </>
  );
};

export default TutorListElement;
