import React, { RefObject, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'

import { ClaimAttributesData } from 'api/types'
import { AccordionCollapsible, Box, LabelTag, LabelTagTypeConstants, TextView, VAIcon } from 'components'
import { Events } from 'constants/analytics'
import { NAMESPACE } from 'constants/namespaces'
import { a11yLabelVA } from 'utils/a11yLabel'
import { logAnalyticsEvent } from 'utils/analytics'
import { isDisabilityCompensationClaim } from 'utils/claims'
import { useAutoScrollToElement, useTheme } from 'utils/hooks'

/**
 * props for ClaimPhase components
 */
export type ClaimPhaseProps = {
  /** phase number of the current indicator */
  phase: number
  /** phase that the current claim is on */
  current: number
  /** attributes object from ClaimData */
  attributes: ClaimAttributesData
  /** given claims ID */
  claimID: string
  /** ref to parent scrollView, used for auto scroll */
  scrollViewRef: RefObject<ScrollView>
}

/**
 * Component for rendering each phase of a claim's lifetime.
 */
function ClaimPhase({ phase, current, attributes, claimID, scrollViewRef }: ClaimPhaseProps) {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const [scrollRef, viewRef, scrollToCurrentPhase] = useAutoScrollToElement()
  const theme = useTheme()
  const { condensedMarginBetween, standardMarginBetween } = theme.dimensions

  const isCompletedPhase = phase < current
  const isCurrentPhase = phase === current
  const isIncompletePhase = phase > current

  const isDisabilityClaim = isDisabilityCompensationClaim(attributes.claimTypeCode)
  const translationStepString = isDisabilityClaim ? '8step' : '5step'
  const heading = t(`claimPhase.${translationStepString}.heading.phase${phase}`)

  useEffect(() => {
    if (phase > 1 && isCurrentPhase && scrollViewRef?.current) {
      scrollRef.current = scrollViewRef.current
      scrollToCurrentPhase(-standardMarginBetween)
    }
  }, [phase, isCurrentPhase, scrollToCurrentPhase, scrollRef, scrollViewRef, standardMarginBetween])

  const phaseHeader = (
    <Box flexDirection="column">
      <Box flexDirection="row" alignItems="center" mb={condensedMarginBetween}>
        {isCompletedPhase && <VAIcon name="CircleCheckMark" fill={theme.colors.icon.success} width={24} height={24} />}
        <TextView
          variant="MobileBodyBold"
          ml={isCompletedPhase ? condensedMarginBetween : 0}>{`Step ${phase}`}</TextView>
      </Box>
      <TextView>{heading}</TextView>
      {isCurrentPhase && (
        <Box mt={7}>
          <LabelTag text={t('currentStep')} labelType={LabelTagTypeConstants.tagGreen} />
        </Box>
      )}
    </Box>
  )

  const detailsText = t(`claimPhase.${translationStepString}.details.phase${phase}`)
  const phaseExpandedContent = (
    <TextView mt={standardMarginBetween} accessibilityLabel={a11yLabelVA(detailsText)}>
      {detailsText}
    </TextView>
  )

  let currentStatus = ''
  if (isIncompletePhase) {
    currentStatus = t('incomplete')
  } else if (isCurrentPhase) {
    currentStatus = t('currentStep')
  } else if (isCompletedPhase) {
    currentStatus = t('complete')
  }

  let completedSteps = ''
  if (phase === 2 && isCurrentPhase) {
    completedSteps = t('claimPhase.heading.a11y.step1Complete')
  } else if (phase > 2 && isCurrentPhase) {
    completedSteps = t('claimPhase.heading.a11y.stepCompleteRange', { lastStep: current - 1 })
  }
  const testID = `${t('claimPhase.heading.a11y.step', { step: phase })} ${heading}. ${currentStatus}. ${completedSteps}.`

  const accordionPress = (isExpanded: boolean | undefined) => {
    logAnalyticsEvent(
      Events.vama_claim_details_exp(
        claimID,
        attributes.claimType,
        phase,
        isExpanded || false,
        attributes.phaseChangeDate || '',
        attributes.dateFiled,
      ),
    )
  }

  return (
    <AccordionCollapsible
      noBorder={true}
      header={phaseHeader}
      expandedContent={phaseExpandedContent}
      expandedInitialValue={isCurrentPhase}
      customOnPress={accordionPress}
      headerRef={viewRef}
      testID={testID}
    />
  )
}

export default ClaimPhase
