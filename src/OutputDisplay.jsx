import Highlight from 'react-highlight'
import beautify from 'js-beautify';
import 'react-quill/dist/quill.snow.css';
import './style.css';

function OutputDisplay(props) {
    const htmlToText = (html) => {
      html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
      html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
      html = html.replace(/<\/div>/ig, '\n');
      html = html.replace(/<\/li>/ig, '\n');
      html = html.replace(/<li>/ig, '  *  ');
      html = html.replace(/<\/ul>/ig, '\n');
      html = html.replace(/<\/p>/ig, '\n');
      html = html.replace(/<br\s*[\/]?>/gi, "\n");
      html = html.replace(/<[^>]+>/ig, '');
      return html;
    }

    switch(props.displayMode){
      case 'html':
        return (
          <div id="display" dangerouslySetInnerHTML={{ __html: props.textValue }}></div>
        )
      case 'html_code':
        return (
        <div id="code-display">
          <Highlight className="language-html">{beautify.html('<!DOCTYPE html> <html lang="en"> <head> \n<!--This website was created with HyperEdit by AblazeMuffin35--> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>HyperEdit Website</title> </head> <body>' + props.textValue + '</body> </html>', {indent_size: 3, wrap_line_length: 75})}</Highlight>
        </div>
        )
      case 'plain_text':
        return (
          <div id="display" style={{lineHeight: '1.5', paddingTop: '13px', height: '451px'}} dangerouslySetInnerHTML={{ __html: htmlToText(props.textValue).replace('\n', '<br>') }}></div>
        )
    }
};

export default OutputDisplay;