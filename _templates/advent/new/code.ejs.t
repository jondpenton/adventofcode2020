---
to: src/challenges/<%= name %>/<%= name %>.ts
---
import { readLines } from "../../utils/read-lines"

async function <%= h.changeCase.camelCase(name) %>() {
  const lines = await readLines('<%= name %>')

  for (const line of lines) {
    
  }
}

<%= h.changeCase.camelCase(name) %>()
