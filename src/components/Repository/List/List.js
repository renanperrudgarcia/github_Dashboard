import SimpleBar from "simplebar-react";
import "./List.css";

export default function RepositoryList({title, children, loading }) {

  return (
    <div className="RepositoryList">
      <h3>
        {title}
        {loading && <span>Loading...</span>}
      </h3>
      <SimpleBar style={{ maxHeight: 500 }}>
        <div className="RepositoryList__content">
         {children}
        </div>
      </SimpleBar>
    </div>
  );
}
