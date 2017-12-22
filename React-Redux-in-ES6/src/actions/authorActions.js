import AuthorApi from "../api/mockAuthorApi";
import * as CreateActions from "./actionTypes";

const getAuthorsSuccess = (authors) => {
    return { type: CreateActions.LOAD_AUTHORS_SUCCESS, authors: authors };
};

export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(getAuthorsSuccess(authors));
            })
            .catch(error => { throw (error); });
    };
}
