import React from "react";
import { Button } from "./component/Button";
import "./App.css";

const App = () => {
    return (
        <React.Fragment>
            <button content="Add" />
            <button content="Download" />
            <button content="Sign up" />
            <button content="Delete" />
            <button content="Close" />
        </React.Fragment>
    );
};

export default App;
