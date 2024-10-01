import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'
import _ from 'lodash'
import { sortBy } from 'underscore'

import { LettersData, LettersList } from 'api/types'
import { get } from 'store/api'

import { lettersKeys } from './queryKeys'

const sortByName = (letters?: LettersList): LettersList => {
  const newLetters = letters || []
  return sortBy(newLetters, (letter) => {
    return letter.name
  })
}

/**
 * Fetch user letters
 */
const getLetters = async (queryClient: QueryClient): Promise<LettersList | undefined> => {
  const response = await get<LettersData>('/v0/letters', undefined, lettersKeys.letters, queryClient)
  if (response) {
    return sortByName(response.data.attributes.letters)
  }
}

/**
 * Returns a query for user letters
 */
export const useLetters = (options?: { enabled?: boolean }) => {
  const queryClient = useQueryClient()

  return useQuery({
    ...options,
    queryKey: lettersKeys.letters,
    queryFn: () => getLetters(queryClient),
    meta: {
      errorName: 'getLetters: Service error',
    },
  })
}
