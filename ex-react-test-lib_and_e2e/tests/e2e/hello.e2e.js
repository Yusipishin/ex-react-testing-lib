const HelloPage = require('../pages/hello.page')

describe('My Hello World Page', () => {
    it('should toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })

    it('should not toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('asdasdasdasd')
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
})

