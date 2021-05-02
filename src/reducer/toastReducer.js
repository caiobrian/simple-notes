import { toast } from 'react-toastify'

export const toastReducer = (_, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return toast.success('🚀 Aeee, nota salva!')
    case 'ERROR':
      return toast.error('😔 Alguma coisa deu errado!')
    default:
      break
  }
}
