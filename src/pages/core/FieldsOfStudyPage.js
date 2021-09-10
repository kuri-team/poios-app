import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import { GlobalState } from "../../GlobalState";
import Layout from "../../components/Layout";
import SubjectBoxes from "../../components/FieldsOfStudy/SubjectBoxes";
import MajorSelectMenu from "../../components/FieldsOfStudy/MajorSelectMenu";
import * as style from "./FieldsOfStudyPage.module.css";

const FieldsOfStudyPage = () => {
  //manage state(logged, role) in all websites
  const state = useContext(GlobalState);
  const token = state.token[0];
  const [isTutor, setIsTutor] = state.userApi.isTuTor;
  const [subjects, setSubjects] = useState([]);
  const [majors, setMajors] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState(undefined);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const getFields = () =>
    axios.get("/core/fields-of-study").then(res => {
      setMajors(res.data[0]);
      setSubjects(res.data[1]);
    });

  const setSubject = async () => {
    try {
      const subjectCodeList = [];
      selectedSubjects.map((subject, key) => {
        subjectCodeList.push(subject.code);
      });

      await axios.patch(
        "/profile/my-profile/update",
        {
          subjects: subjectCodeList,
        },
        {
          headers: { Authorization: token },
        },
      );

      alert("Update Subjects Successfully!");
      if (isTutor) {
        window.location.href = "/core/chat";
      } else {
        window.location.href = "/core/tutors";
      }
    } catch (err) {
      alert("Update Failed.");
    }
  };

  const sendData = () => {
    if (!selectedMajor) {
      alert("Please select a major.");
    } else {
      setSubject();
    }
  };

  useEffect(() => {
    getFields();
  }, []);

  return (
    <Layout header footer className={style["container"]}>
      {subjects.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h1 className={style["h1"]}>Choose a major</h1>
          <MajorSelectMenu majors={majors} callback={setSelectedMajor} />
          <p className={style["subheading"]}>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
          <SubjectBoxes subjects={subjects} callback={setSelectedSubjects} selected={selectedSubjects} />
          <button
            className={style["btn"]}
            onClick={() => {
              sendData();
            }}
          >
            SET
          </button>
        </>
      )}
    </Layout>
  );
};

export default FieldsOfStudyPage;
