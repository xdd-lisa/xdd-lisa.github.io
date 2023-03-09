import React, { useState } from 'react'
import { Graph } from '@antv/x6'
import { Modal } from 'antd'
import '@antv/x6-react-shape'
import './index.less'
import { contentItem } from './mockData';

const NodeComponent = ({ title = '', headContent = '', isAdd = false, content = [] }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  }

  return (
    <div className="react-node">
      <div className='header'>
        {headContent}
      </div>
      <div className='container' onDoubleClick={toggleVisible}>
        <div>{title}</div>
        {
          isAdd ? (
            <div className='add-icon'>+</div>
          ) : null
        }
      </div>

      <Modal
        visible={visible}
        onCancel={toggleVisible}
        footer={null}
      >
        <div>
          {
            content?.map((item: { key: string; text: string; }) => (
              <div>
                {`${item.key || ''}: ${item.text || ''}`}
              </div>
            ))
          }
        </div>
      </Modal>
    </div>
  )
}


export default class Example extends React.Component {
  private container: HTMLDivElement | undefined

  refContainer = (container: HTMLDivElement) => {
    this.container = container
  }

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      background: {
        color: '#F2F7FA',
      },
    })

    graph.addNode({
      shape: 'react-shape',
      x: 60,
      y: 100,
      // width: 180,
      // height: 40,
      component: <NodeComponent title='借款第一步' headContent="1000人（100%）" isAdd content={contentItem} />,
    })
  }

  render() {
    return (
      <div className="react-basic-app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    )
  }
}