import React, {useState} from 'react';

import Route from './components/Route';

import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

    const items = [
        {
            title: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'Why use React?',
            content: 'React is a favorite JS library among engineers'
        },
        {
            title: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ];

    const dOptions = [
        {
            label: 'The color Red',
            value: 'red'
        },
        {
            label: 'The color Green',
            value: 'green'
        },
        {
            label: 'The color Blue',
            value: 'blue'
        }
    ];


export default () => {

    const [selected, setSelected] = useState(0);

    return (
        <div className="container">
            <Header/>
            <Route path="/"> <Accordion items={items}/> </Route> 
            <Route path="/list"> <Search/> </Route>
            <Route path="/dropdown"> <Dropdown selected={selected} onSelectedChange={setSelected} options={dOptions} label="Select a Color"/> </Route>
            <Route path="/translate"> <Translate/> </Route>
        </div>    
    )
};