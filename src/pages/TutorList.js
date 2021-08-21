import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import TutorListElement from "../components/TutorListElement";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as style from "../styles/TutorList.module.css";

const dummyTutors = [
  { id: 1, name: "Eula" },
  { id: 2, name: "Mona" },
  { id: 3, name: "Jean" },
];

const TutorList = () => {
  //Search functions
  const { search } = window.location;
  const query = new URLSearchParams(search).get("search-result");

  const filterTutors = (dummyTutors, query) => {
    if (!query) {
      return dummyTutors;
    }

    return dummyTutors.filter(tutor => {
      const tutorName = tutor.name.toLowerCase();
      return tutorName.includes(query);
    });
  };

  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredTutors = filterTutors(dummyTutors, searchQuery);

  return (
    <Layout className={style["container"]} header footer>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul>
        {filteredTutors.map(tutor => (
          <li key={tutor.id}>{tutor.name}</li>
        ))}
      </ul>
      <TutorListElement />
    </Layout>
  );
};

export default TutorList;
