import React, { useState } from "react";

function XTable() {
  // Initial data
  const initialData = [
    /// an array of objects that represents the table data
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [data, setData] = useState(initialData);
  /// data is the current state containing the tale data
  // Sort by Date Function
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      /// by using a spread operator we are working with the copy of an array
      // Compare by date (descending)
      if (b.date > a.date) return 1;
      /// sort the date string in decreasing order
      if (b.date < a.date) return -1;

      // If dates are equal, compare by views (descending)
      return b.views - a.views;
    });
    setData(sortedData); /// react detects a state change
  };

  // Sort by Views Function
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      // Compare by views (descending)
      if (b.views !== a.views) {
        return b.views - a.views;
      }

      // If views are equal, compare by date (descending)
      return b.date > a.date ? 1 : -1;
    });
    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table
        border="1"
        style={{ marginTop: "10px", borderCollapse: "collapse" }}
      >
        <thead>
          {" "}
          {/* thead stands for table heading */}
          <tr>
            {" "}
            {/*tr stands for table row  */}
            {/*data present in the table */}
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default XTable;
