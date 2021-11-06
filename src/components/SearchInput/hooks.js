import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'update-keyword',
  UPDATE_RATING: 'update-rating',
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: payload,
      }

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: payload,
      }

    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

export default function useForm(initialKeyword, initialRating) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    rating: initialRating,
  })

  const { keyword, rating } = state

  return {
    keyword,
    rating,
    changeKeyword: (newKeyword) =>
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: newKeyword }),
    changeRating: (newRating) =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: newRating }),
  }
}
