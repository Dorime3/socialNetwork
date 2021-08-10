import React from 'react';
import style from './FormsControls.module.css'

const FormControl = (Element) => (props) => {
    const formError = props.meta.touched && props.meta.error
    return (
        <div className={style.formControl + ' ' + (formError ? style.error : '')}>
            <div>
                <Element {...props.input} {...props} />
            </div>
            {formError && <span>{props.meta.error}</span>}
        </div>
    )

}



export const Textarea = FormControl('textarea');

export const Input = FormControl('input');



