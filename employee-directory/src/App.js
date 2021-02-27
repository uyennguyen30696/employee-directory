import React from 'react';
// import Card from './components/Card';
// import Col from './components/Col';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
// import Row from './components/Row';
// import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Wrapper from './components/Wrapper';

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
