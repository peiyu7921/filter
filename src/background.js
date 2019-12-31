global.browser = require('webextension-polyfill')


chrome.contextMenus.create({
    title: "开启筛选",
    onclick: function () {
        chrome.tabs.query({}, function (tabs) {
            tabs.filter((tab) => {
                return /https:\/\/s.taobao.com\/search\?/.test(tab.url)
            }).map((tab) => {
                chrome.tabs.sendMessage(tab.id, {
                    keys: null,
                    switchKey: true
                }, function (response) {
                    chrome.storage.sync.set({switchKey: true}, function () {
                    })
                })
            })
        })
    }
})
chrome.contextMenus.create({
    title: "关闭筛选",
    onclick: function () {
        chrome.tabs.query({}, function (tabs) {
            tabs.filter((tab) => {
                return /https:\/\/s.taobao.com\/search\?/.test(tab.url)
            }).forEach((tab) => {
                chrome.tabs.sendMessage(tab.id, {
                    keys: null,
                    switchKey: false
                }, function (response) {
                    chrome.storage.sync.set({switchKey: false}, function () {
                    })
                })
            })
        })
    }
})
