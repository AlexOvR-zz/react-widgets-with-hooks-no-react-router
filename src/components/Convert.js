import React , {useState, useEffect }from 'react';
import Axios from 'axios';

const Convert = ({ language , text }) =>{
    const [translated , setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(()=> {
        const timeId = setTimeout(()=>{
            setDebouncedText(text);
        },1000);

        return () => {
            clearTimeout(timeId);
        }
    },[text]);

    useEffect(()=> {
        const doTranslation= async () => {
        
        const { data } = await Axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
        });

        setTranslated(data.data.translations[0].translatedText)

        };

        doTranslation();

    },[language, debouncedText]);

    return (
        <h1 className="ui header">
            {translated}
        </h1>
    )
}

export default Convert;