import React, { Component } from 'react';

import MediumEditor from 'medium-editor/dist/js/medium-editor.js';
require('../style/markdown.css');
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
require('font-awesome/css/font-awesome.css');
class MDInput extends Component {
  componentWillMount() {}
  componentDidMount() {
    var editor = new MediumEditor('.MD-input-inline', {
      buttonLabels: 'fontawesome'
    });
    console.log(editor);
    editor.subscribe('editableInput', function(event, editable) {
      console.info('editableInput fired!', editable);
    });
  }
  com;
  render() {
    return (
      <div className="MD-input-inline">
        <p>
          My father’s family name being{' '}
          <a href="https://en.wikipedia.org/wiki/Pip_(Great_Expectations)">
            Pirrip
          </a>, and my Christian name Philip, my infant tongue could make of
          both names nothing longer or more explicit than Pip. So, I called
          myself Pip, and came to be called Pip.
        </p>
      </div>
    );
  }
}

export default MDInput;
