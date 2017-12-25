import AuthorApi from "../api/mockAuthorApi";
import * as CreateActions from "./actionTypes";
import * as AjaxStatusActions from "./ajaxStatusActions";

const getAuthorsSuccess = (authors) => {
    return { type: CreateActions.LOAD_AUTHORS_SUCCESS, authors: authors };
};

export function loadAuthors() {
    return dispatch => {

        dispatch(AjaxStatusActions.beginAsynCall());

        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(getAuthorsSuccess(authors));
            })
            .catch(error => { throw (error); });
    };
}
