import Layout from "../components/Layout";
import SubjectBoxes from "../components/SubjectBoxes";

const ChooseMajor = () => {
  return (
    <Layout>
      <h1>CHOOSE A MAJOR</h1>
      <select name="major" id="major">
        <option value="it">Information Technology</option>
        <option value="ecofin">Economics and Finance</option>
        <option value="digital-mkt">Digital Marketing</option>
        <option value="design">Design Studies</option>
        <option value="profcom">Professional Communication</option>
        <option value="lang">Languages</option>
      </select>

      <p>WHICH SUBJECTS ARE YOU INTERESTED IN?</p>
      <SubjectBoxes />
    </Layout>
  );
};

export default ChooseMajor;
