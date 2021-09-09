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
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isTutor, setIsTutor] = state.userApi.isTuTor;
  const [subjects, setSubjects] = useState([]);

  const getFields = () => axios.get("/core/fields-of-study").then(res => console.log(res.data));

  useEffect(() => {
    getFields();
    console.log(subjects);
  }, []);

  const tutorRouter = () => {
    return (
      <Link to="/core/chat">
        <button className={style["btn"]}>SET</button>
      </Link>
    );
  };
  return (
    <Layout header footer className={style["container"]}>
      <h1 className={style["h1"]}>Choose a major</h1>
      <MajorSelectMenu />

      <p className={style["subheading"]}>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes subjects={subjects} />
      {isTutor ? tutorRouter() : <button className={style["btn"]}>SET</button>}
    </Layout>
  );
};

export default FieldsOfStudyPage;
