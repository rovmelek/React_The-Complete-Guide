import React from 'react';
import '../lib/HPM.css';

export const userInput = (props) =>
{
    return (
        <div>
            <form>
                <label
                    className="labelStyle"
                >User input:
                </label>
                <textarea
                    className="textAreaInputStyle"
                    rows={props.baseTagAttr.rows}
                    cols={props.baseTagAttr.cols}
                    name={'User input'}
                    onChange={props.change}
                    value={props.state.inputText}
                />
            </form>
        </div>
    )
}
