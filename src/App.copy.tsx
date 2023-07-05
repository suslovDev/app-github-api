import { useState, useEffect } from "react";
import RepoItem from "./components/RepoItem/RepoItem";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchRepos from "./components/SearchRepos/SearchRepos";

const CLIENT_ID = "bdab59be87aa69a37d64";

const App = () => {
  const [rerender, setRerender] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  /*   useEffect(() => {
    console.log(repos);
  }, [repos]); */

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam && localStorage.getItem("accessToken") === null) {
      const getAccessToken = async () => { 
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
            }
          });
      };
      getAccessToken();
    }
  }, []);

  useEffect(() => {
    handleConsole();
  }, [searchInput]);
 
  const handleLoginWhithGithub = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  };

  const handleConsole = async () => {
    await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        query: `{
          search(type: REPOSITORY, query: "${searchInput}", first: 5) {
            edges {
              node {
                ... on Repository {
                  id
                  primaryLanguage {
                    name
                  }
                  name
                }
              }
            }
          }
        }`,
      }),
    })
      .then((response) => response.json())
      .then(({ data }) =>
        setRepos(data?.search?.edges.map((repo: any) => repo.node))
      );
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {localStorage.getItem("accessToken") ? (
        <div>
          <h1>User is Logged in</h1>
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              setRerender(!rerender);
            }}
          >
            LogOut
          </button>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleConsole}>To console login</button>
        </div>
      ) : (
        <div>
          <h1>User is NOT Logged in</h1>
          <button onClick={handleLoginWhithGithub}>Login with Github</button>
        </div>
      )}
      <SearchRepos />
    </div>
  );
};

export default App;