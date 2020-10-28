import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { FC, useEffect } from 'react'

import { Box, ButtonList, ButtonListItemObj, ClickForActionLink, TextView, textIDObj } from 'components'
import { DirectDepositState, PersonalInformationState, StoreState } from 'store/reducers'
import { NAMESPACE } from 'constants/namespaces'
import { a11yHintProp, testIdProps } from 'utils/accessibility'
import { generateTestID } from 'utils/common'
import { getBankData } from 'store/actions'
import { useTranslation } from 'utils/hooks'
import ProfileBanner from '../ProfileBanner'

/**
 * Screen for displaying direct deposit information and help numbers
 */
const DirectDepositScreen: FC = () => {
  const { profile } = useSelector<StoreState, PersonalInformationState>((state) => state.personalInformation)
  const { bankData } = useSelector<StoreState, DirectDepositState>((state) => state.directDeposit)
  const dispatch = useDispatch()
  const t = useTranslation(NAMESPACE.PROFILE)

  useEffect(() => {
    // TODO: update this call to get real bank data once service is integrated, remove this function and the action/reducer for this if need be
    dispatch(getBankData())
  }, [dispatch])

  const onBankAccountInformation = (): void => {}

  const getButtonTextList = (): Array<ButtonListItemObj> => {
    const textIDs: Array<textIDObj> = [{ textID: 'directDeposit.account' }]
    if (bankData) {
      if (bankData.bank_name) {
        textIDs.push({ textID: 'directDeposit.dynamicField', fieldObj: { field: bankData.bank_name } })
      }

      if (bankData.bank_account_number) {
        textIDs.push({ textID: 'directDeposit.dynamicField', fieldObj: { field: `******${bankData.bank_account_number}` } })
      }

      if (bankData.bank_account_type) {
        textIDs.push({ textID: 'directDeposit.dynamicField', fieldObj: { field: bankData.bank_account_type } })
      }

      if ([bankData.bank_name, bankData.bank_account_number, bankData.bank_account_type].filter(Boolean).length === 0) {
        textIDs.push({ textID: 'directDeposit.addBankAccountInformation' })
      }
    } else {
      textIDs.push({ textID: 'directDeposit.addBankAccountInformation' })
    }

    return [{ textIDs, a11yHintID: 'directDeposit.addBankAccountInformationHint', onPress: onBankAccountInformation, decoratorProps: { accessibilityRole: 'button' } }]
  }

  return (
    <ScrollView {...testIdProps('Direct-deposit-screen')}>
      <ProfileBanner name={profile ? profile.full_name : ''} mostRecentBranch={profile ? profile.most_recent_branch : ''} />
      <Box m={20}>
        <TextView variant="MobileBody">{t('directDeposit.viewAndEditText')}</TextView>
      </Box>
      <Box ml={20} mt={2}>
        <TextView variant="TableHeaderBold" {...testIdProps(generateTestID(t('directDeposit.information'), ''))}>
          {t('directDeposit.information')}
        </TextView>
      </Box>
      <Box mt={4}>
        <ButtonList items={getButtonTextList()} translationNameSpace="profile" />
      </Box>
      <Box mx={20} mt={9}>
        <TextView>{t('directDeposit.bankFraudNote')}</TextView>
      </Box>
      <Box ml={20} mt={15}>
        <ClickForActionLink
          displayedText={t('directDeposit.bankFraudHelpNumberDisplayed')}
          numberOrUrlLink={t('directDeposit.bankFraudHelpNumber')}
          linkType="call"
          {...a11yHintProp(t('directDeposit.clickToCallA11yHint'))}
        />
      </Box>
      <Box ml={20} mt={8}>
        <TextView variant="MobileBody">{t('directDeposit.hearingLoss')}</TextView>
      </Box>
      <Box ml={20} mt={6}>
        <ClickForActionLink
          displayedText={t('directDeposit.hearingLossNumber')}
          numberOrUrlLink={t('directDeposit.hearingLossNumber')}
          linkType="call"
          {...a11yHintProp(t('directDeposit.clickToCallA11yHint'))}
        />
      </Box>
    </ScrollView>
  )
}

export default DirectDepositScreen
