import React from 'react';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import style from './FormsControls.module.css'


type FormControlParamsType = {
    // meta: {
    //     touched: boolean,
    //     error: string
    // }
    meta: WrappedFieldMetaProps,
    input: string
}

type FormControlPropsType = (params: FormControlParamsType) => React.ReactNode;

const FormControl = (Element: any): FormControlPropsType => (props) => {
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



