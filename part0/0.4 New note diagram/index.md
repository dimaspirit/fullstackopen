# 0.4: New note diagram

Create a similar diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the Save button.

```mermaid
  sequenceDiagram
  actor Customer as User
  participant browser as browser
  participant server as server

  browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  server -->>- browser: HTML document
  browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  server -->>- browser: the css file
  browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  server -->>- browser: the JavaScript file
  Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
  browser ->>+ server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  server -->>- browser: [{ "content": "SPA is easy", "date": "2024-12-12" }, ... ]
  Note right of browser: The browser executes the callback function that renders the notes
  Customer ->>+ browser: Input: Note
  Customer ->>+ browser: Click: Submit
  browser ->>+ server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  Note right of browser: Payload {note: aaa}
  server -->>- browser: 302 Code
  server ->> browser: Reload page
```