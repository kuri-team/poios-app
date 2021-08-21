const SubjectBoxes = () => {
  const subjects = [
    "Introduction to Programming",
    "Prices and Markets",
    "Asian Cinemas",
    "History and Theory of Design 1",
    "Japanese 1",
    "Organisational Analysis",
    "International Business",
    "Machine Learning",
    "Engineering Computing 1",
    "Photography 101",
    "Introduction to Language",
    "Introduction to Fashion Enterprise",
  ];

  return subjects.map((subject, id) => <div key={id}>{subject}</div>);
};

export default SubjectBoxes;
