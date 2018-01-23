import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import { outputFiles } from '../../../../webpack/output-files';

const ServerHTML = ({ appHtml, dehydratedState }) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <title>grid test</title>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Racing+Sans+One|Roboto:100,300,400'
        type='text/css'
      />
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.0.4/css/all.css'
        type='text/css'
      />
      <link
        rel='stylesheet'
        href={ `/${ outputFiles.css }` }
        type='text/css'
      />
    </head>
    <body>
      <div
        id='root'
        dangerouslySetInnerHTML={ { __html: appHtml } } // eslint-disable-line
      />
      <script
        dangerouslySetInnerHTML={ { __html: `var __MARVIN_DEHYDRATED_STATE = ${ dehydratedState };` } } // eslint-disable-line
      />
      <script type='text/javascript' src={ `/${ outputFiles.vendor }` } />
      <script type='text/javascript' src={ `/${ outputFiles.client }` } />
    </body>
  </html>
);

ServerHTML.propTypes = {
  appHtml: PropTypes.string,
  dehydratedState: PropTypes.string,
};

const getServerHTML = (appHtml, dehydratedState = null) => {
  return `<!doctype html>${ ReactDOMServer.renderToString(
    <ServerHTML appHtml={ appHtml } dehydratedState={ dehydratedState } />
  ) }`;
};

export default getServerHTML;
