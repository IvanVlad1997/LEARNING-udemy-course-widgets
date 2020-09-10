import React, {useState} from 'react';
import Accordion from './components/acordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
    {
        title: 'What is React?',
        content:'React is a front end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite js library among engineers'

    },
    {   
        title: 'how?',
        content: 'adasdasdsadasdsadasda'
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
    <div>
        <Header />
        <Route path = "/">
            <Accordion items={items} />
        </Route>    
        <Route path = "/list" >
            <Search />    
        </Route> 
        <Route path ="/dropdown">
            <Dropdown
             label ="Select a color"
             options = {options}
             selected = {selected}
             onSelectedChange = {setSelected} />
        </Route>
        <Route path ="/translate">
            <Translate />
        </Route>
    </div>
    )
}