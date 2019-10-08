import React, { Component } from 'react';

class TextFormField  extends Component {
    state = {
        fieldId: `f${(~~(Math.random()*1e8)).toString(16)}`
    }

    get inputClass(){
        const {error} = this.props;
        return `form-input${error ? ` form-error-input` : ''}`;
    }

    render(){
        const {
            title,
            onChange,
            error,
            ...rest
        } = this.props;
        
        const {
            fieldId
        } = this.state;

        return (
            <div>
                <label className="form-title" htmlFor={fieldId}>{title}</label>
                <input
                    className={this.inputClass} 
                    onChange={(e)=>onChange(e.target.value)} 
                    {...rest}
                />
                <span className="form-error-text">{error}</span>
            </div>
        )
    }
}

export default TextFormField;

