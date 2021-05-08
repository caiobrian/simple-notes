import useSWR, { mutate } from 'swr'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { useNotesState } from './useNotesState'

export function useNotes() {
  const { noteTitle, noteBody } = useNotesState()
  const { data, error } = useSWR('notes', api)

  const addNote = async () => {
    try {
      const response = await api.post('/notes', {
        title: noteTitle,
        content: noteBody
      })

      if (response.status === 200) {
        toast.success('🥳 Nota Salva com sucesso!')
      }
    } catch (error) {
      toast.error('Algo de errado aconteceu, tente novamente', {
        autoClose: 3000,
        closeOnClick: true
      })
    } finally {
      mutate('notes', data, true)
    }
  }

  const deleteNote = async (id) => {
    try {
      await api.delete(`notes/${id}`)
    } catch (error) {
      toast.error('Algo de errado aconteceu, tente novamente', {
        autoClose: 3000,
        closeOnClick: true
      })
    } finally {
      mutate('notes', data, true)
    }
  }

  return {
    allNotes: data?.data,
    isLoading: !error && !data,
    isError: error,
    addNote,
    deleteNote
  }
}
