import {useState} from 'react';

export const description =
'Modify the code in `src/problem_3.js` so that the greeting message updates as the user types into the `<input />`\
 element, the greeting message updates. For example, if the user types `"Jane"` then the greeting\
 message should say `"Hello, Jane!"`. The updates should happen **as** the user types into the `<input />` element.';

const explanation = `(used the code solution from problem 1 :) )`;


export function Problem () {
    const [content, setContent] = useState("");

    function contentUpdated(ev) {
        const c = ev.target.value;
        setContent(c);
    }

    return <>
        <label htmlFor="name_input">Enter your name: </label><input id="name_input" value={content} onChange={contentUpdated} type='text'/>
        <hr />
        <div>Hello, {content}!</div>
        <div>{explanation}</div>
    </>
}


// export function Problem () {
//     return <>
//         <label htmlFor="name_input">Enter your name: </label><input id="name_input" />
//         <div>Hello, ...!</div>
//     </>;
// }
