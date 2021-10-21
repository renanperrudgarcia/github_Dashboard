import { GoStar, GoRepoForked } from "react-icons/go";
import "./Card.css";

export default function RepositoryCard({repo, onClick, isSelected }) {
  return (
    <li
    onClick={onClick}
    className={`RepositoryCard ${isSelected && "RepositoryCard--selected"}`}
    >
        <h3>{repo.name}</h3>
         
      <div className="RepositoryCard__additional-info">
        <span>
          <GoStar /> {repo.stargazerCount || 0}
        </span>
        <span>
          <GoRepoForked /> {repo.forkCount || 0}
        </span>
        {repo.primaryLanguage && <span>{repo.primaryLanguage.name}</span>}
      </div>
     
      </li>
  );
}
