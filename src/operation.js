var keys = []
var progress
chrome.storage.sync.get(['keys', 'switchKey'], function (result) {
    keys = result.keys
    if (result.switchKey) {
        progress = setInterval(operation, 1000)
    } else {
        clearInterval(progress)
    }
})
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.keys) {
            keys = request.keys
        }
        if (request.switchKey) {
            progress = setInterval(operation, 1000)
        } else {
            clearInterval(progress)
        }
        sendResponse({finished: true})
    })

function operation() {
    var container = document.body.getElementsByClassName('m-itemlist').item(0)
    var items = container.getElementsByClassName('item')
    var itemIndex = 0
    for (itemIndex; itemIndex < items.length; itemIndex++) {
        let keyIndex = 0
        for (keyIndex; keyIndex < keys.length; keyIndex++) {
            if (items.item(itemIndex).innerText.indexOf(keys[keyIndex]) !== -1) {
                items.item(itemIndex).remove()
                itemIndex--
            }
        }
    }
}
