export default {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$ref": "#/definitions/Welcome",
  "definitions": {
      "Welcome": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "cart": {
                  "type": "array",
                  "items": {
                      "$ref": "#/definitions/Cart"
                  }
              },
              "products": {
                  "$ref": "#/definitions/Products"
              }
          },
          "required": [
              "cart"
          ],
          "title": "Welcome"
      },
      "Cart": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "Id": {
                  "type": "string",
                  "format": "integer"
              },
              "Title": {
                  "type": "string"
              },
              "Price": {
                  "type": "integer"
              },
              "quantity": {
                  "type": "integer"
              }
          },
          "required": [
              "Id",
              "Price",
              "Title",
              "quantity"
          ],
          "title": "Cart"
      },
      "Products": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "allProducts": {
                  "type": "array",
                  "items": {
                      "$ref": "#/definitions/ProductDetails"
                  }
              },
              "productDetails": {
                  "$ref": "#/definitions/ProductDetails"
              }
          },
          "required": [
          ],
          "title": "Products"
      },
      "ProductDetails": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
              "Id": {
                  "type": "string",
                  "format": "integer"
              },
              "Title": {
                  "type": "string"
              },
              "Category": {
                  "type": "string"
              },
              "SubCategory": {
                  "type": "string"
              },
              "Manufacturer": {
                  "type": "string"
              },
              "Contents": {
                  "type": "string"
              },
              "Description": {
                  "type": "string"
              },
              "Organic": {
                  "type": "boolean"
              },
              "ImageUrl": {
                  "type": "string",
                  "format": "uri",
                  "qt-uri-protocols": [
                      "http"
                  ],
                  "qt-uri-extensions": [
                      ".jpg"
                  ]
              },
              "OrgPrice": {
                  "type": "integer"
              },
              "Price": {
                  "type": "integer"
              },
              "Campaigns": {
                  "type": "array",
                  "items": {
                      "type": "string"
                  }
              },
              "IsNew": {
                  "type": "boolean"
              }
          },
          "required": [
              "Id",
              "ImageUrl",
              "Manufacturer",
              "OrgPrice",
              "Organic",
              "Price",
              "SubCategory",
              "Title"
          ],
          "title": "ProductDetails"
      }
  }
}
