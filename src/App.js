import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const MarkdownPreviewer=()=>{
  const [markdownText, setMarkdownText] = useState(`
  # Welcome to Markdown Previewer!
  
  ## This is a sub-heading...
  
  ### You can type markdown code, and then you can see what will be in HTML!
  
  [link](https://www.google.com/)

  ![Image](https://i.imgur.com/6bkjwbM.jpg)

  Inline code: \`<div></div>\`
  
  \`\`\`
  // Code block:
  function add(a, b) {
      return a + b;
  }
  \`\`\`
  
  - List item.
  
  > Blockquote.
  
  **Bold text**
  
  *Italic text*
  
  ***or...BOTH!***
  `
  );
  
  const handleInputChange = (e) => {
      setMarkdownText(e.target.value);
  };

  return (
    <div className="container">
      <div id="left-box">
        <h2 className="box-title">　Editor</h2>
        <textarea id="editor" value={markdownText} onChange={handleInputChange}></textarea>
      </div>
      <div id="middle-line"></div>
      <div id="right-box">
        <h2 className="box-title">　Previewer</h2>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdownText, { breaks: true }) }}></div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;