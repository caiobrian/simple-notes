import { atom } from 'recoil'

export const noteTitleState = atom({
  key: 'noteTitleState',
  default: ''
})

export const noteBodyState = atom({
  key: 'noteBodyState',
  default: ''
})
