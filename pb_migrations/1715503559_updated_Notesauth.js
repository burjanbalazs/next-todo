/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6myscd4wvz83sr6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypvtfpfr",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "masbym30",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6myscd4wvz83sr6")

  // remove
  collection.schema.removeField("ypvtfpfr")

  // remove
  collection.schema.removeField("masbym30")

  return dao.saveCollection(collection)
})
