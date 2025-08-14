export const data = {
  "fields": [
    {
      "name": "accountType",
      "type": "select",
      "label": "Account Type",
      "options": ["Personal", "Business"],
      "required": true
    },
    {
      "name": "companyName",
      "type": "text",
      "label": "Company Name",
      "required": true,
      "showWhen": { "field": "accountType", "equals": "Business" }
    },
    {
      "name": "personalHobby",
      "type": "text",
      "label": "Favorite Hobby",
      "showWhen": { "field": "accountType", "equals": "Personal" }
    }
  ],
  "validation": {
    "accountType": { "required": true },
    "companyName": { "required": true },
    "personalHobby": { "required": false }
  }
}