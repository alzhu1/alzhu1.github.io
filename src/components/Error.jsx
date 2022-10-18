import Header from "./Header";

import "../stylesheets/App.css";
import "../stylesheets/Home.css";

export default function Error() {
    return (
        <div className="App">
          <Header></Header>

          <div className="body-content">
            <div className="home">
                <h2 className="home-title">Uh-oh!</h2>

                    <div className="home-body">
                        <p>
                        The page you attempted to access does not exist! You can navigate
                        back to the home page via the header.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}