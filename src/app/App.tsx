import { FunctionComponent } from "react";
import Card from "./Card";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {

    return (
        <>
            {[
                { name: "pickles", id: "1" },
                { name: "orange", id: "2" },
                { name: "apple", id: "3" },
            ].map((item, index) => {
                return <Card data={item} key={index}></Card>;
            })}
        </>
    );
};

export default App;
