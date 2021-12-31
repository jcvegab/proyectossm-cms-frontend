import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { EMPTY_DIALOG } from '../../constants/dialogs'
import { EMPTY_PAGE } from '../../constants/pages'
import { EMPTY_TAB } from '../../constants/tabs'
import { Dialog, CommonStore, Page, Tab } from '../../interfaces/common'
import { AppDispatch, AppThunk } from '../index'
import { RootState } from '../rootReducer'

const initialState: CommonStore = {
  modal: { ...EMPTY_DIALOG },
  drawer: { ...EMPTY_DIALOG },
  page: { ...EMPTY_PAGE },
  tab: { ...EMPTY_TAB },
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<Dialog>) => {
      state.modal = action.payload
    },
    setOpenDrawer: (state, action: PayloadAction<Dialog>) => {
      state.drawer = action.payload
    },
    setSelectedPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload
    },
    setSelectedTab: (state, action: PayloadAction<Tab>) => {
      state.tab = action.payload
    },
  },
})

export const openModal =
  (modal: Dialog): AppThunk =>
  (dispatch: AppDispatch) => {
    const { actions } = commonSlice
    dispatch(actions.setOpenModal(modal))
  }

export const closeModal = (): AppThunk => (dispatch: AppDispatch) => {
  const { actions } = commonSlice
  dispatch(actions.setOpenModal({ ...EMPTY_DIALOG }))
}

export const openDrawer =
  (drawer: Dialog): AppThunk =>
  (dispatch: AppDispatch) => {
    const { actions } = commonSlice
    dispatch(actions.setOpenDrawer(drawer))
  }

export const closeDrawer = (): AppThunk => (dispatch: AppDispatch) => {
  const { actions } = commonSlice
  dispatch(actions.setOpenDrawer({ ...EMPTY_DIALOG }))
}

export const setPage =
  (page: Page): AppThunk =>
  (dispatch: AppDispatch) => {
    const { actions } = commonSlice
    dispatch(actions.setSelectedPage(page))
  }

export const setTab =
  (tab: Tab): AppThunk =>
  (dispatch: AppDispatch) => {
    const { actions } = commonSlice
    dispatch(actions.setSelectedTab(tab))
  }

const selectState = (state: RootState) => state['common']

export const getCommonModal = createSelector(
  selectState,
  (state) => state.modal
)
export const getCommonDrawer = createSelector(
  selectState,
  (state) => state.drawer
)
export const getCommonPage = createSelector(selectState, (state) => state.page)
export const getCommonTab = createSelector(selectState, (state) => state.tab)

export const useCommonStore = (): CommonStore => {
  return {
    modal: useSelector(getCommonModal),
    drawer: useSelector(getCommonDrawer),
    page: useSelector(getCommonPage),
    tab: useSelector(getCommonTab),
  }
}

export default commonSlice.reducer
