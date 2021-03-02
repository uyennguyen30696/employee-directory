import React from "react";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <div>
            <Jumbotron />
            <Wrapper>
                <SearchResults />
            </Wrapper>
            <Footer />
        </div>
    );
};

export default App;
