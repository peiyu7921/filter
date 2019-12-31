<template>
    <div class="popup">
        <input type="text"
               v-for="(key, index) in keys"
               v-model="keys[index]">
        <div class="button-container">
            <button @click="onAddKey">添加</button>
            <button @click="onDeleteKey">删除</button>
            <button v-if="!switchKey" @click="onsubmit">确定</button>
            <button v-if="switchKey" @click="onPause">暂停</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keys: [],
                switchKey: false,
                tabs: []
            }
        },
        mounted() {
            var that = this
            chrome.storage.sync.get(['keys', 'switchKey'], function (result) {
                that.keys = result.keys
                that.switchKey = result.switchKey
            })
        },
        methods: {
            onPause() {
                this.switchKey = false
                this.setDataTostorage()
                this.sendSettings()
            },
            onAddKey() {
                this.keys.push('')
            },
            onDeleteKey() {
                this.keys.splice(this.keys.length - 1, 1)
                this.setDataTostorage()
            },
            onsubmit() {
                this.switchKey = true
                this.setDataTostorage()
                this.sendSettings()
            },
            sendSettings() {
                var that = this
                chrome.tabs.query({}, function (tabs) {
                    tabs.filter((tab) => {
                        return /https:\/\/s.taobao.com\/search\?/.test(tab.url)
                    }).forEach((tab) => {
                        chrome.tabs.sendMessage(tab.id, {
                            keys: that.keys,
                            switchKey: that.switchKey
                        }, function (response) {
                        })
                    })
                })
            },
            setDataTostorage() {
                chrome.storage.sync.set({keys: this.keys, switchKey: this.switchKey}, function () {
                })
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 5px;
        background-color: rgba(86, 168, 226, 0.45);
    }

    .popup {
        input {
            display: block;
            border-radius: 5px;
            border: 1px solid;
            padding: 0 0 0 5px;
        }

        button {
            cursor: pointer;
            background-color: rgb(239, 99, 99);
            border-radius: 3px;
            padding: 4px;
            border: 1px solid;
            margin: 5px;
            transition: background-color 0.5s;
        }

        button:hover {
            transition: background-color 0.5s;
            background-color: rgb(236, 20, 10);
        }

        .button-container {
            display: flex;
            text-align: center;
            justify-content: center;
        }
    }
</style>
