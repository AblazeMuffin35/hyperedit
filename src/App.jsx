import { useState } from 'react';
import Split from 'react-split';
import beautify from 'js-beautify';
import ReactQuill from 'react-quill';
import OutputDisplay from './OutputDisplay.jsx';
import Toolbar, { modules, formats } from './Toolbar.jsx';
import 'react-quill/dist/quill.snow.css';
import './style.css';

function App() {
  const downloadFile = (filename, text, format) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/' + format + ';charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const fullDownload = () => {
    if (downloadFormat == 'html') {
      downloadFile('index.html', beautify.html('<!DOCTYPE html> <html lang="en"> <head> \n<!--This website was created with HyperEdit by AblazeMuffin35--> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>HyperEdit Website</title> </head> <body>' + value + '</body> </html>', {indent_size: 3, wrap_line_length: 75}), 'html');
    }
    else if (downloadFormat == 'plain_text') {
      let text = value;
      text = text.replace(/<style([\s\S]*?)<\/style>/gi, '');
      text = text.replace(/<script([\s\S]*?)<\/script>/gi, '');
      text = text.replace(/<\/div>/ig, '\n');
      text = text.replace(/<\/li>/ig, '\n');
      text = text.replace(/<li>/ig, '  *  ');
      text = text.replace(/<\/ul>/ig, '\n');
      text = text.replace(/<\/p>/ig, '\n');
      text = text.replace(/<br\s*[\/]?>/gi, "\n");
      text = text.replace(/<[^>]+>/ig, '');
      downloadFile('text.txt', text, 'plain');
    }
  }

  const [value, setValue] = useState('<p><br></p>');
  const [displayType, setDisplayType] = useState('html');
  const [downloadFormat, setDownloadFormat] = useState('html');

  const handleChange = (content) => {
      setValue(content);
  };
  const handleTypeChange = (data) => {
    setDisplayType(data.target.value);
  };

  const handleFormatChange = (data) => {
    setDownloadFormat(data.target.value);
  };

  return (
    <>
    <a href="https://ablazemuffin35.vercel.app" target="_blank" id="info">Made by AblazeMuffin35</a>
    <h1 id="title">{"<HYPER EDIT/>"}
    <p>The easiest way to create a HTML website</p>
    <label>Output: </label><select className="dropdown" onChange={handleTypeChange}>
      <option value="html">HTML Preview</option>
      <option value="html_code">HTML Code</option>
      <option value="plain_text">Text Preview</option>
    </select>
    <label style={{marginLeft: '30px'}}>Download: </label><select className="dropdown" onChange={handleFormatChange}>
      <option value="html">HTML File</option>
      <option value="plain_text">Text File</option>
    </select><button className="dropdown" style={{padding: "6px 10px", marginLeft: "10px"}} onClick={fullDownload}>Download</button>
    </h1>
    <Split className="split" minSize={550} snapOffset={0}>
    <div className="textEditor">
      <Toolbar/>
      <ReactQuill className="quill" onChange={handleChange} theme="snow" value={value} modules={modules} formats={formats} placeholder='Type something here...'/>
    </div>
    <OutputDisplay textValue={value} displayMode={displayType}/>
    {/*<div id="code-display">
      <Highlight className="language-html">{beautify.html('<!DOCTYPE html> <html lang="en"> <head> \n<!--This website was created with HyperEdit by AblazeMuffin35--> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>HyperEdit Website</title> </head> <body>' + value + '</body> </html>', {indent_size: 3, wrap_line_length: 75})}</Highlight>
    </div>*/}
    {/*<div id="display" dangerouslySetInnerHTML={{ __html: value }}></div>*/}
    </Split>
    </>
  )
};
export default App;