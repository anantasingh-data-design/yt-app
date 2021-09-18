import {useState} from 'react';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Route from './components/Route';
import Header from './components/Header';
const items = [
    {
        title:'What is React',
        content:'React is frontend JS framework'
    },
    {
        title:'Why use react',
        content:'react is favourite library among engineers'
    },
    {
        title:'How do you use react',
        content:'we use react by  creating pcomponent'
    }
]
const options = [
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'green'
    },
    {
        label:'The color yellow',
        value:'yellow'
    }
];



const App = () => {
   const [selected,setSelected] = useState(options[0]);
    return<div>
    <Header/>
        <Route path='/'>
            <Accordion items ={items} />
        </Route>
        <Route path='/list'>
            <Search/>   
        </Route>
        <Route path='/dropdown'>
            <DropDown
                label="Select a colour"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}

            />   
        </Route>
        <Route path='/translate'>
            <Translate/>   
        </Route>
    </div>
    
};
export default App;