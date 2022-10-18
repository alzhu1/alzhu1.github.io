import { Outlet } from 'react-router-dom';
import Header from './Header';

import '../stylesheets/App.css';

// class App extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <div className="App">
//           <Header></Header>

//           <div className="body-content">
//             <Route exact path="/" component={Home} />
//             <Route path="/projects" component={ProjectList} />
//             <Route path="/history" component={History} />
//           </div>
//         </div>
//       </HashRouter>
//     );
//   }
// }

// export default App;
export default function App() {
    return (
        <div className="App">
          <Header></Header>

          <div className="body-content">
            {/* <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectList} />
            <Route path="/history" component={History} /> */}
            <Outlet />
          </div>
        </div>
    );
}