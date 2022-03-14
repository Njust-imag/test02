

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.js'
      
const t_1 = universal(import('__react_static_root__/src/pages/conference.js'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/conference.js'
      
const t_2 = universal(import('__react_static_root__/src/pages/contact.js'), universalOptions)
      t_2.template = '__react_static_root__/src/pages/contact.js'
      
const t_3 = universal(import('__react_static_root__/src/pages/grants.js'), universalOptions)
      t_3.template = '__react_static_root__/src/pages/grants.js'
      
const t_4 = universal(import('__react_static_root__/src/pages/index.js'), universalOptions)
      t_4.template = '__react_static_root__/src/pages/index.js'
      
const t_5 = universal(import('__react_static_root__/src/pages/journal.js'), universalOptions)
      t_5.template = '__react_static_root__/src/pages/journal.js'
      
const t_6 = universal(import('__react_static_root__/src/pages/monograph.js'), universalOptions)
      t_6.template = '__react_static_root__/src/pages/monograph.js'
      
const t_7 = universal(import('__react_static_root__/src/pages/news.js'), universalOptions)
      t_7.template = '__react_static_root__/src/pages/news.js'
      
const t_8 = universal(import('__react_static_root__/src/pages/patent.js'), universalOptions)
      t_8.template = '__react_static_root__/src/pages/patent.js'
      
const t_9 = universal(import('__react_static_root__/src/pages/people.js'), universalOptions)
      t_9.template = '__react_static_root__/src/pages/people.js'
      
const t_10 = universal(import('__react_static_root__/src/pages/resource.js'), universalOptions)
      t_10.template = '__react_static_root__/src/pages/resource.js'
      
const t_11 = universal(import('__react_static_root__/src/pages/software.js'), universalOptions)
      t_11.template = '__react_static_root__/src/pages/software.js'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.js': t_0,
'__react_static_root__/src/pages/conference.js': t_1,
'__react_static_root__/src/pages/contact.js': t_2,
'__react_static_root__/src/pages/grants.js': t_3,
'__react_static_root__/src/pages/index.js': t_4,
'__react_static_root__/src/pages/journal.js': t_5,
'__react_static_root__/src/pages/monograph.js': t_6,
'__react_static_root__/src/pages/news.js': t_7,
'__react_static_root__/src/pages/patent.js': t_8,
'__react_static_root__/src/pages/people.js': t_9,
'__react_static_root__/src/pages/resource.js': t_10,
'__react_static_root__/src/pages/software.js': t_11
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.js"

