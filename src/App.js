
import './App.css';
import  {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import streamDelete from './component/stream/streamDelete'
import StreamList from './component/stream/streamList';
import StreamCreate from './component/stream/streamCreate';
import StreamEdit from './component/stream/streamEdit';
import StreamShow from './component/stream/streamShow';
import Header from './component/header';

function App() {
  return (
    <div className='ui container'>
    
      <Router>
        <Header />
       <Switch>
         <Route path='/' exact component={StreamList} />
         <Route path='/stream/new' exact component={StreamCreate} />
         <Route path='/stream/edit' exact component={StreamEdit} />
         <Route path='/stream/show' exact component={StreamShow} />
         <Route path='/stream/delete' exact component={streamDelete} />
       </Switch>
    </Router>
    </div>
  );
}

export default App;
