import { useQuery } from '@tanstack/react-query'

import { LetterBeneficiaryData, LetterBeneficiaryDataPayload, LetterMilitaryService } from 'api/types'
import { get } from 'store/api'
import { sortByDate } from 'utils/common'
import { getSubstringBeforeChar } from 'utils/formattingUtils'

import { lettersKeys } from './queryKeys'

/**
 * Fetch user letter beneficiary data
 */
const getLetterBeneficiaryData = async (): Promise<LetterBeneficiaryData | undefined> => {
  const response = await get<LetterBeneficiaryDataPayload>('/v0/letters/beneficiary')
  if (response) {
    const attributes = response.data.attributes
    let mostRecentServices: Array<LetterMilitaryService> = [...(attributes?.militaryService || [])]
    sortByDate(mostRecentServices, 'enteredDate')
    mostRecentServices = mostRecentServices.map((periodOfService) => {
      periodOfService.enteredDate = getSubstringBeforeChar(periodOfService.enteredDate, 'T')
      periodOfService.releasedDate = getSubstringBeforeChar(periodOfService.releasedDate, 'T')
      return periodOfService
    })
    return {
      ...attributes,
      benefitInformation: {
        ...attributes.benefitInformation,
        awardEffectiveDate: getSubstringBeforeChar(attributes.benefitInformation?.awardEffectiveDate || '', 'T'),
      },
      mostRecentServices: mostRecentServices,
    }
  }
}

/**
 * Returns a query for user letter beneficiary data
 */
export const useLetterBeneficiaryData = (options?: { enabled?: boolean }) => {
  return useQuery({
    ...options,
    queryKey: lettersKeys.beneficiaryData,
    queryFn: () => getLetterBeneficiaryData(),
    meta: {
      errorName: 'getLetterBeneficiaryData: Service error',
    },
  })
}
