import React, { useState } from "react";

const ListeCourses = () => {
  const [articles, setArticles] = useState([]);
  const [nouvelArticle, setNouvelArticle] = useState("");

  const ajouterArticle = () => {
    if (nouvelArticle.trim() !== "") {
      setArticles([...articles, nouvelArticle]);
      setNouvelArticle(""); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      ajouterArticle();
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Ma liste de courses</h2>
      <input
        type="text"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ajouter un article"
        style={{ padding: "5px", width: "70%", marginRight: "5px" }}
      />
      <button onClick={ajouterArticle} style={{ padding: "5px 10px" }}>
        Ajouter
      </button>

      <ul style={{ marginTop: "20px" }}>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListeCourses;
