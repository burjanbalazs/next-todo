/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6myscd4wvz83sr6")

  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 8,
    "onlyEmailDomains": [],
    "onlyVerified": false,
    "requireEmail": true
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6myscd4wvz83sr6")

  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": [],
    "manageRule": null,
    "minPasswordLength": 8,
    "onlyEmailDomains": [],
    "onlyVerified": true,
    "requireEmail": true
  }

  return dao.saveCollection(collection)
})
