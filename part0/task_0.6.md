```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves new note
    server-->>browser: { "content": "note content", "date": "2024-06-08" }
    deactivate server

    Note right of browser: Browser executes event handler to render notes.

```