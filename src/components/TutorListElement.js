import * as style from "../styles/TutorListElement.module.css";

const TutorListElement = () => {
  return (
    <>
      <div className={style["tutor-element"]}>
        <div className={style["avatar"]}>
          <img src={"media/venti.jpg"} alt="Tutor" />
        </div>

        <div className={style["avatar-name"]}>
          <h3>Venti</h3>
        </div>
        <div className={style["avatar-subject"]}>Tone-Deaf Bard</div>
      </div>
    </>
  );
};

export default TutorListElement;
