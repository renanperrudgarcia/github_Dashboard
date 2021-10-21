import { GoPerson,GoLink } from "react-icons/go";
import "./Card.css";

export default function IssueCard({ issue, onClick, isSelected }) {
  
  return (
    <li
    onClick={onClick}
    className={`IssueCard ${isSelected && "IssueCard--selected"}`}
    >
       <h3> {issue.title} </h3>
    
      <span className="IssueCard__headline">
        {issue.body}
      </span>
      
      <span className="IssueCard__headline">
      <GoPerson /> {issue.author.login}
      </span>

      <span className="IssueCard__headline">
        <GoLink /> <a target="_blank" href={`${issue.url}`} >  {issue.url} </a>
      </span>
           
     
      </li>
  );
}
