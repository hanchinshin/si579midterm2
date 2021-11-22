import { useState} from 'react';

export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';



export function Problem() {

    const KEY = 'count';
    let initCount = 0;
    const storagedCount = localStorage.getItem(KEY);
    if(storagedCount) {
        initCount = JSON.parse(storagedCount);
    }

    const [count, setCount] = useState(initCount);

    function addCount() {
        const new_c = count + 1;
        setCount(new_c);
        localStorage.setItem(KEY, (new_c).toString());
    }

    function reset() {
        setCount(0);
        localStorage.setItem(KEY, '0');
    }

    return <div className="btn-group">
            <button onClick={addCount} className="btn btn-primary">Clicked {count} time{count > 1 && 's'} </button>
            <button onClick={reset} className="btn btn-secondary">Reset</button>
        </div>;
    ;
}
