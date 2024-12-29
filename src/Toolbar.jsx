import React from "react";
import { Quill } from "react-quill";

const Size = Quill.import("formats/size");
Size.whitelist = ["8px", "12px", "16px", "20px", "24px", "32px"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "helvetica",
  "times-new-roman",
  "courier-new",
  "cursive"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block"
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="helvetica">
        <option value="helvetica">Helvetica</option>
        <option value="times-new-roman">Serif</option>
        <option value="courier-new">Courier New</option>
        <option value="cursive">Cursive</option>
      </select>
      <select className="ql-size" defaultValue="16px">
        <option value="8px">8px</option>
        <option value="12px">12px</option>
        <option value="16px">16px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="32px">32px</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
      <select className="ql-align" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
    </span>
    <span className="ql-formats">


    </span>
    <span className="ql-formats">
      <button className="ql-code-block" />
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">

      <button className="ql-clean" />
    </span>
  </div>
);

export default QuillToolbar;