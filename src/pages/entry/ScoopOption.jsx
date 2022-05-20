import Col from "react-bootstrap/Col";
function ScoopOption({ imagePath, name }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ texAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        alt={`${name} scoop`}
        src={`http://localhost:3030/${imagePath}`}
      ></img>
    </Col>
  );
}

export default ScoopOption;
