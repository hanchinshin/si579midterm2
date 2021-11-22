import { useRef, useState } from 'react';

export const description =
'The `Problem` component in `src/problem_2.js` accepts a list of attributes (`props`).\
 It expects three properties:\n\
 \
- `initial` represents the starting value\n\
- `min` represents the lowest value\n\
- `max` represents the highest value\n\
 \n\
 Write code that allows users to increment the value by clicking the "+" button or\
 decrement the value by clicking the "-" button. Although `src/index.js` passes in\
 `1` for `props.initial`, `0` for `props.min`, and `10` for `props.max`, your code\
 should work for any value of `initial`, `min`, and `max`. You can assume that\
 `props.min <= props.initial <= props.max`.\
 ';
export function Problem (props) {
    console.log('problem 2 initial:', props.initial);//props.initial = 1
    console.log('problem 2 min:', props.min); //props.initial = 0
    console.log('problem 2 max:', props.max);//props.initial = 10

    const [val, setVal] = useState(1);

    const addBtn = function() {
        if(val >= 10){
            return val;
        }
        setVal(currentVal => currentVal + 1 );
    }

    const subBtn = function() {
        if(val <= 0){
            return val;
        }
        setVal(currentVal => currentVal - 1 );
    }

    return <div className="btn-group">
            <button onClick={subBtn} type="button" className="btn btn-primary">-</button>
            <span id="num_sel">{val}</span>
            <button onClick={addBtn} type="button" className="btn btn-primary">+</button>
        </div>;
}