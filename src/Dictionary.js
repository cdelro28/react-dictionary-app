import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleApiResponse(response) {
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = `ba054cd6f15a15c42o3b84c5df16bbtf`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="What word do you want to look up?"
          ></input>
        </form>
        <div className="Hint">
          suggested words: adventurous, venturesome, traverse, escapade
        </div>
      </section>
      <Result result={result} />
    </div>
  );
}
