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
          <Highlight className="language-html">{beautify.html('<!DOCTYPE html> <html lang="en"> <head> \n<!--This website was created with HyperEdit by AblazeMuffin35--> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>HyperEdit Website</title> <link rel="stylesheet" href="data:text/css;base64,Ym9keSB7DQogICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7DQogICAgZm9udC1zaXplOiAxNnB4Ow0KfQ0KDQoucWwtZm9udC1oZWx2ZXRpY2Egew0KICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7DQp9DQoucWwtZm9udC10aW1lcy1uZXctcm9tYW4gew0KICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7DQp9DQoucWwtZm9udC1jb3VyaWVyLW5ldyB7DQogICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTsNCn0NCi5xbC1mb250LWN1cnNpdmUgew0KICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlOw0KfQ0KDQoucWwtc2l6ZS04cHggew0KICAgIGZvbnQtc2l6ZTogOHB4Ow0KfQ0KLnFsLXNpemUtMTJweCB7DQogICAgZm9udC1zaXplOiAxMnB4Ow0KfQ0KLnFsLXNpemUtMTZweCB7DQogICAgZm9udC1zaXplOiAxNnB4Ow0KfQ0KLnFsLXNpemUtMjBweCB7DQogICAgZm9udC1zaXplOiAyMHB4Ow0KfQ0KLnFsLXNpemUtMjRweCB7DQogICAgZm9udC1zaXplOiAyNHB4Ow0KfQ0KLnFsLXNpemUtMzJweCB7DQogICAgZm9udC1zaXplOiAzMnB4Ow0KfQ0KDQoucWwtYWxpZ24tY2VudGVyIHsNCiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7DQp9DQoucWwtYWxpZ24tcmlnaHQgew0KICAgIHRleHQtYWxpZ246IHJpZ2h0Ow0KfQ0KLnFsLWFsaWduLWp1c3RpZnkgew0KICAgIHRleHQtYWxpZ246IGp1c3RpZnk7DQp9DQoucWwtYWxpZ24tbGVmdCB7DQogICAgdGV4dC1hbGlnbjogbGVmdDsNCn0NCg0KLnFsLWluZGVudC0xIHsNCiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7DQp9DQoucWwtaW5kZW50LTIgew0KICAgIHBhZGRpbmctbGVmdDogODBweDsNCn0NCi5xbC1pbmRlbnQtMyB7DQogICAgcGFkZGluZy1sZWZ0OiAxMjBweDsNCn0NCi5xbC1pbmRlbnQtNCB7DQogICAgcGFkZGluZy1sZWZ0OiAxNjBweDsNCn0NCi5xbC1pbmRlbnQtNSB7DQogICAgcGFkZGluZy1sZWZ0OiAyMDBweDsNCn0NCi5xbC1pbmRlbnQtNiB7DQogICAgcGFkZGluZy1sZWZ0OiAyNDBweDsNCn0NCi5xbC1pbmRlbnQtNyB7DQogICAgcGFkZGluZy1sZWZ0OiAyODBweDsNCn0NCi5xbC1pbmRlbnQtOCB7DQogICAgcGFkZGluZy1sZWZ0OiAzMjBweDsNCn0NCg0KYSB7DQogICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7DQogICAgY29sb3I6ICMwMDY2Y2M7DQp9"> </head> <body>' + props.textValue + '</body> </html>', {indent_size: 3, wrap_line_length: 75})}</Highlight>
        </div>
        )
      case 'plain_text':
        return (
          <div id="display" style={{lineHeight: '1.5', paddingTop: '13px', height: '451px'}} dangerouslySetInnerHTML={{ __html: htmlToText(props.textValue).replace('\n', '<br>') }}></div>
        )
    }
};

export default OutputDisplay;