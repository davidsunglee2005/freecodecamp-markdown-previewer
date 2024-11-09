import React, {useState} from 'react';
import './App.css';
import { marked } from 'marked';

function App() {

  /* User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea. */

  /* User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents
     at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block,
     a list item, a blockquote, an image, and bolded text.
  */
  const [markdown, setMarkdown] = useState("# H1 Heading\n## H2 Heading\n[Duck Duck Go](https://duckduckgo.com)\n\n`nano`");

  function handleTextAreaOnChange(e) {
    setMarkdown(e.target.value);
  }
  
  return (
    <div className="App">
      <div className="editor-wrapper">
        {/* User Story #1:  I can see a textarea element with a corresponding id="editor". */}
        <textarea value={markdown} onChange={handleTextAreaOnChange} id="editor" />
      </div>
      <div className="preview-wrapper">
        {/* User Story #2: I can see an element with a corresponding id="preview". */}
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        >
        </div>
      </div>
    </div>
  );
}

export default App;
