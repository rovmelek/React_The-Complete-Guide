import React from 'react';
import '../lib/HPM.css';

export const userInput = (props) => {
    console.log(props);
    return (
        <div>
            <form>
                <label
                    className="labelStyle"
                    htmlFor={props.attr.formID}
                >{props.attr.labelText}: </label>
                <textarea
                    className="textAreaInputStyle"
                    rows={props.baseTagAttr.rows}
                    cols={props.baseTagAttr.cols}
                    name={props.attr.name}
                    onChange={props.change}
                ></textarea>
            </form>
        </div>
    )
}

export const userOutput = (props) => {
    console.log(props);
    return (
        <div>
            <label
                className="labelStyle"
                htmlFor={props.attr.formID}
            >Preview: </label>
            <textarea
                className="textAreaPreviewStyle"
                rows={props.baseTagAttr.rows}
                cols={props.baseTagAttr.cols}
                value={props.attr.value}
                readOnly
            />
        </div>
    )
}
