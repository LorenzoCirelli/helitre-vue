# Helithre-vue

**TL;DR 😉**: Helithre allows you to create pages and forms in Vue using JSON configuration.

Helithre is a Vue.js-based framework that lets you build entire pages and forms declaratively using just JSON. You can define fields and page structures without writing markup code, making the development of dynamic interfaces much faster.

Helithre is also built to make it easier to receive information about which fields or page blocks to show from a server and render them dynamically.

## How It Works

Understanding how Helithre works is essential to creating your first page.

### Wrapper

A wrapper is the starting point of every form or page.

To create a wrapper, you need to pass the JSON via prop to the `helithreLoad` component using `:helithreJson`. Here's an example:

```vue
<helithreLoad
  :helithreJson="{
    name: 'demoForm',
    wrapper: 'form',
    childrens: [
      {
        text: 'Name',
        id: 'user_name',
        type: 'text'
      },
      {
        text: 'Surname',
        id: 'user_surname',
        type: 'text'
      }
    ]
  }">
</helithreLoad>
```

`HelithreLoad` will decide what wrapper to use (page or form) based on what is provided via the `wrapper` property in the JSON.

The accepted values are:
- `form`
- `page` (coming soon)

Based on the wrapper and blocks/fields requested to be rendered, you will receive a callback from Helithre. The callback is declared via `@helithreEvent`. Here's an example based on the previous one:

```vue
<helithreLoad
  :helithreJson="{
    name: 'demoForm',
    wrapper: 'form',
    childrens: [
      {
        text: 'Name',
        id: 'user_name',
        type: 'text'
      },
      {
        text: 'Surname',
        id: 'user_surname',
        type: 'text'
      }
    ]
  }" 
  @helithreEvent="(event: object) => { console.log(event) }">
</helithreLoad>
```

In this example, the result is written to the console.

## The JSON Structure

The JSON to provide need to be created with the following structure:

```json
{
  "name": "demoForm",
  "wrapper": "form",
  "childrens": [
    {
      "text": "Name",
      "id": "user_name",
      "type": "text"
    },
    {
      "text": "Surname",
      "id": "user_surname",
      "type": "text"
    }
  ],
  "responses": [
    {
      "id": "user_name",
      "value": "Lorenzo"
    },
    {
      "id": "user_surname",
      "value": "Hello world"
    }
  ]
}
```

### JSON Properties

- **name**: Describes the wrapper; you can see it returned by the callback
- **wrapper**: Describes the wrapper type (`form` or `page` are accepted)
- **childrens**: The array that contains all the fields or blocks of the page
- **responses**: The array that contains all the responses to load for the fields, connected to the questions by Id

### Field Structure

To create a field, you need to follow this specific structure:

```json
{
  "text": "Surname",
  "id": "user_surname",
  "type": "text"
}
```

- **text**: The label for the field
- **id**: The identifier of the field; it also connects the question to the answer to load
- **type**: Defines the type of the field

### Supported Field Types

Here's a list of all supported types:
- `text`
- `number`
- `date`
- `color`
- `datetimeLocal`
- `email`
- `file`
- `hidden`
- `image`
- `month`
- `password`
- `range`
- `reset`
- `search`
- `tel`
- `time`
- `url`
- `week`
- `select`
- `checkbox`

## Callback Structure

The callback provides an object with the following structure:

```javascript
{
  "name": "RegisterForm",
  "type": "form",
  "results": {
    "save": [
      ["user_favorite_color", "#000000"]
    ],
    "edit": {},
    "delete": {}
  }
}
```

The `save`, `edit`, and `delete` properties provide a map with all the changes to the fields, based on the last submit/first load.

## Development

### Running the Project

To run the project, you will need pnpm.
If you haven't installed pnpm yet, please follow the instructions here: https://pnpm.io

Once inside the project folder, install all required dependencies by running:
```bash
pnpm i
```

Then run it:
```bash
pnpm dev
```

You can now test it with an example configuration or use your own JSON to test it.

### Building the Project

To use the project, it's recommended to build it first.

**Note**: The build process (for now) is only possible on Windows.

The command to run it is:
```bash
pnpm build
```

### Running Tests

To test the library, there are some unit tests. To execute them, run:
```bash
pnpm test
```
