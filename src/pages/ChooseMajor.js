import Layout from "../components/Layout";
import SubjectBoxes from "../components/SubjectBoxes";
import MajorSelectList from "../components/MajorSelectList";

const ChooseMajor = () => {
  return (
    <Layout>
      <h1>CHOOSE A MAJOR</h1>
      <MajorSelectList />

      <p>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes />
    </Layout>
  );
};

export default ChooseMajor;
