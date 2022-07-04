import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    // dispatch(fetchCategoriesSuccess(categoriesArray));
    // "put" is generator's version of dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch(error) {
    yield put(fetchCategoriesFailed(error));
    // dispatch(fetchCategoriesFailed(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

// Generator function
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}