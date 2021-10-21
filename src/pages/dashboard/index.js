import { useState } from "react";
import UserList from "../../components/User/List/List";
import UserCard from "../../components/User/Card/Card";
import RepositoryList from "../../components/Repository/List/List";
import RepositoryCard from "../../components/Repository/Card/Card";
import IssueList from "../../components/Issue/List/List";
import IssueCard from "../../components/Issue/Card/Card";
import FollowersQ from "./graphql/FollowersQ";
import FollowingQ from "./graphql/FollowingQ";
import RepositoryQ from "./graphql/RepositoryQ";
import IssueQ from "./graphql/IssueQ";
import { useQuery } from "@apollo/client";
import "./dashboard.css";

// http://dontpad.com/alfa-aula-react-3

export default function PagesDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRepository, setSelectedRepository] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [username] = useState(
    () => window.localStorage.getItem("github_username") || ""
  );
  

  const { data: followers, error: followerError, loading: followerLoading } = useQuery(FollowersQ, {
    variables: {
      username,
    },
  });

  const { data: following, error: followingError, loading: followingLoading } = useQuery(FollowingQ, {
    variables: {
      username,
    },
  });

  const { data: repository, loading:repositoryLoading  } = useQuery(RepositoryQ, {
    variables: {
      selectedUser,
    },
  });

  const { data: Issue, loading:IssueLoading  } = useQuery(IssueQ, {
    variables: {
      selectedRepository,
      selectedUser,
    },
  });

  const error = followerError || followingError  ;

  return (
    <div>
      <header className="PagesDashboard__topbar">{username}</header>
      {error ? (
        <div>Algo de errado</div>
      ) : (
        <section className="PagesDashboard__content">
          <UserList title="Followers" loading={followerLoading}>
            {followers?.user.followers.nodes.map((follower) => (
              <UserCard
                key={follower.id}
                user={follower}
                isSelected={selectedUser === follower.login}
                setSelectedUser={setSelectedUser}
                onClick={() => setSelectedUser(follower.login)}
              />
            ))}
          </UserList>
          <UserList title="Following" loading={followingLoading}>
            {following?.user.following.nodes.map((following) => (
              <UserCard
                key={following.id}
                user={following}
                isSelected={selectedUser === following.login}
                onClick={() => setSelectedUser(following.login)}
              />
            ))}
          </UserList>
            <RepositoryList title="Repositories" loading={repositoryLoading}>
              {repository?.user.repositories.nodes.map((repository) => (
                <RepositoryCard
                  key={repository.id}
                  repo={repository}
                  isSelected={selectedRepository === repository.name}
                  onClick={() =>  setSelectedRepository(repository.name) }
                />
              ))}

            </RepositoryList>

            <IssueList  title="Issue" loading={IssueLoading}>
              {Issue?.repository.issues.nodes.map((issue) => (
                <IssueCard
                  key={issue.id}
                  issue={issue}
                  isSelected={selectedIssue === issue.title}
                  onClick={() =>  setSelectedIssue(issue.title) }
                />
              ))}

            </IssueList>
        </section>
      )}
    </div>
  );
}
