import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilterType } from '../../redux/users-reducer';
import { getUsersFilter } from './UsersSelectors';

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
};
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FriendFormType = 'null' | 'true' | 'false';

type FormType = {
    term: string,
    friend: FriendFormType
}

export const UserSearchForm: React.FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getUsersFilter);

    const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "false" ? false : true
        }
        props.onFilterChanged(filter);
        setSubmitting(false)
    };
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType }}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
});
