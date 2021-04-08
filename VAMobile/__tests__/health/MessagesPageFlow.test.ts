import {goBackToPreviousScreen, tabTo, waitForIsShown} from '../utils'
import HealthScreen from '../screenObjects/health.screen'
import MessagesScreen from '../screenObjects/messages.screen'
import ViewMessageScreen from '../screenObjects/viewMessage.screen'
import FolderMessagesScreen from '../screenObjects/folderMessages.screen'
import ComposeMessageScreen from '../screenObjects/composeMessage.screen'

export default () => {
  before(async () => {
    await tabTo('Health')
    await HealthScreen.waitForIsShown()
  })

  describe('on click of the message button', () => {
    before(async () => {
      const messagesButton = await HealthScreen.messagesButton
      await messagesButton.click()
    })

    after(async () => {
      await goBackToPreviousScreen()
      await HealthScreen.waitForIsShown()
    })

    it('should render the messages screen content', async () => {
      await MessagesScreen.waitForIsShown()
    })

    describe('on click of the compose a message footer', () => {
      before(async () => {
        await MessagesScreen.waitForIsShown()
        const messagesComposeAMessageButton = await MessagesScreen.messagesComposeAMessageButton
        await messagesComposeAMessageButton.click()
      })

      after(async () => {
        await goBackToPreviousScreen()
        await MessagesScreen.waitForIsShown()
      })

      it('should render the compose message screen', async () => {
        await ComposeMessageScreen.waitForIsShown()
      })
    })

    describe('Inbox', () => {
      before(async () => {
        await MessagesScreen.waitForIsShown()
        const messagesInboxTab = await MessagesScreen.messagesInboxTab
        await messagesInboxTab.click()
      })

      xit('should show the no messages screen if no messages', async () => {
        await waitForIsShown(MessagesScreen.messagesNoMessages)
      })

      it('should render the inbox section', async () => {
        await waitForIsShown(MessagesScreen.messagesInboxSection)
      })

      describe('on click of a inbox message', () => {
        before(async () => {
          const messagesSingleMessage = await MessagesScreen.messagesSingleMessage('~VINOGRAD, PATRICK  A Subject: Test Results 03 Mar 2021 @ 1340 PST')
          await messagesSingleMessage.click()
        })

        after(async () => {
          await goBackToPreviousScreen()
          await MessagesScreen.waitForIsShown()
        })

        it('should render the view message page', async () => {
          await ViewMessageScreen.waitForIsShown()
        })
      })
    })

    describe('Folders', () => {
      before(async () => {
        await MessagesScreen.waitForIsShown()
        const messagesFoldersTab = await MessagesScreen.messagesFoldersTab
        await messagesFoldersTab.click()
      })

      it('should render the folders section', async () => {
        await waitForIsShown(MessagesScreen.messagesFolderSection)
      })

      describe('on click of a folder', () => {
        before(async () => {
          const messagesSentFolder = await MessagesScreen.messagesSentFolder
          messagesSentFolder.click()
        })

        after(async () => {
          await goBackToPreviousScreen()
          await MessagesScreen.waitForIsShown()
        })

        it('will render the folder messages screen', async () => {
          await FolderMessagesScreen.waitForIsShown()
        })

        describe('on click of a message in the folder messages screen', () => {
          before(async () => {
            await FolderMessagesScreen.waitForIsShown()
            const folderMessagesSingleMessage = await FolderMessagesScreen.folderMessagesSingleMessage('~VA Flagship mobile applications interface_SLC10 Subject: Test Results 03 Mar 2021 @ 1335 PST')
            folderMessagesSingleMessage.click()
          })

          after(async () => {
            await goBackToPreviousScreen()
            await FolderMessagesScreen.waitForIsShown()
          })

          it('will render the view message screen', async () => {
            await ViewMessageScreen.waitForIsShown()
          })
        })
      })
    })
  })
}
