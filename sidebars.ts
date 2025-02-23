import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: ['rhino/documentation', {
    type: 'category',
    label: '基础',
    collapsed: false,
    items: [{
      type: 'autogenerated',
      dirName: 'rhino/base',
    }]
  }, {
      type: 'category',
      label: '高级',
      collapsed: false,
      items: [{
        type: 'autogenerated',
        dirName: 'rhino/advanced',
      }]
    }, {
      type: 'category',
      label: 'npm模块',
      collapsed: true,
      items: [{
        type: 'autogenerated',
        dirName: 'rhino/npm',
      }]
    }, 'rhino/qa', 'rhino/workWithJava',

  ],
  nodejs: [
    "nodejs/intro",
    "nodejs/vscode",
    {
      type: 'category',
      label: '模块列表',
      link: { type: 'doc', id: 'nodejs/docs/README' },
      collapsed: false,
      items: [{
        type: 'autogenerated',
        dirName: 'nodejs/docs',
      }]
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
