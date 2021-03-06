define({ "api": [
  {
    "type": "post",
    "url": "/Jobs",
    "title": "",
    "version": "0.1.0",
    "group": "Jobs",
    "description": "<p>signIn Api with email and password.</p>",
    "name": "createJob",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Job title.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "CompanyId",
            "description": "<p>Company Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-create job:",
          "content": "{ \"title\": \"mytitle\",\"CompanyId\": 1 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>signIn successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: HTTP/1.1 200 OK",
          "content": "{ \"title\": \"mytitle\",\"CompanyId\": 1 }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Auithorization header (Token).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-authorization header: ",
          "content": "{\"authorization\":\"dbghddjhjdnjkbdvvcfjh\"}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/job.controller.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/signIn",
    "title": "",
    "version": "0.1.0",
    "group": "Users",
    "description": "<p>signIn Api with email and password.</p>",
    "name": "signIn",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Users unique email ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-signIn:",
          "content": " { \"email\": \"abc@google.com\",\n\"password\": \"mypsw\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>signIn successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: HTTP/1.1 200 OK",
          "content": "{\n  \"token\": \"XXXXXXXXXXXX\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signUp",
    "title": "",
    "group": "Users",
    "description": "<p>Signup Api with email and password.</p>",
    "name": "singnUp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Users unique email ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-signup:",
          "content": " { \"email\": \"abc@google.com\",\n\"password\": \"mypsw\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>Signup successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: HTTP/1.1 200 OK",
          "content": "{\n  \"msg\": \"Signup successful\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
