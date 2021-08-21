const MajorSelectList = ({ className }) => {
  const majors = [
    { code: "BP162", name: "Information Technology" },
    { code: "BP251", name: "Economics and Finance" },
    { code: "BP316", name: "Design Studies" },
    { code: "BP222", name: "Professional Communication" },
    { code: "BP317", name: "Languages" },
  ];

  return (
    <select className={className} name="major" id="major">
      {majors.map(major => (
        <option key={major.code} value={major.code}>
          {major.name}
        </option>
      ))}
    </select>
  );
};

export default MajorSelectList;
