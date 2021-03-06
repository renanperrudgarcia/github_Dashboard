import SimpleBar from "simplebar-react";
import "./List.css";

export default function IssueList({title, children, loading }) {

  return (
    <div className="IssueList">
      <h3>
        {title}
        {loading && <span>Loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 500 }}>
        <div className="IssueList__content">
         {children}
        </div>
      </SimpleBar>
    </div>
  );
}
