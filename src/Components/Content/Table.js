import "./styles.css";

const Table = () => {
  return (
    <>
      <div>
        <table id="student-list">
          <thead>
            <tr>
              <th colSpan="2">Students</th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <button
          onClick={() => {
            // console.log("button Clicked");
            // fetch("http://localhost:8080/getStudent")
            //   .then((response) => response.json())
            //   .then((json) => {
            //     json.map((element, index) => {
            //       console.log(element);
            //     });
            //   });`

            fetch("http://localhost:8080/getStudent")
              .then((response) => response.json())
              .then((json) => {
                let studentTable = document.getElementById("student-list");
                let tableRow = undefined;

                json.map((element, index) => {
                  tableRow += `<tr>
                    <td>${element.firstName}</td>
                    <td>${element.lastName}</td>
                  </tr>`;
                });
                studentTable.innerHTML = tableRow;
              });
          }}
        >
          Retrive Students
        </button>
      </div>
    </>
  );
};

export default Table;
