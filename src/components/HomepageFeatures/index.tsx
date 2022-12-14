import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Row, Col, Button, Drawer, Popconfirm, Modal, message } from 'antd';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '技能森林',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        沉淀技能点，保持更新，记录正在学习与掌握的技术知识
      </>
    ),
  },
  {
    title: '算法',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        将每一次完成的算法题记录在案，包含算法的理解与最优选择
      </>
    ),
  },
  {
    title: '思考与经验',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        记录开发过程中积累的经验，与一些思考，以及对未来技术更新的思考，保持学习
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const confirm = () => {
    Modal.confirm({
      content: '呆呆是笨笨的老大嘛？',
      onOk: () => {
        showDrawer();
      },
      okText: '那可不',
      cancelText: '我拒绝',
      onCancel: () => {
        message.error('反对无效，呆呆是老大')
      }
    })
  };

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        {/* <Row>
          <Col span={24}>
          <Popconfirm placement="topLeft" title={'你真的是呆呆的笨笨嘛？'} onCancel={() => message.warning('给你两巴掌!')} onConfirm={confirm} okText="那可不" cancelText="滚滚滚">
              <Button type='primary'>如果是笨笨，请点击这里😈</Button>
          </Popconfirm>
          <Drawer title="笨笨老大正在补充" width={520} closable={false} onClose={onClose} open={open}>
            <Button type="primary" onClick={showChildrenDrawer}>
              如果是笨笨，请点击这里 😈
            </Button>
            <Drawer
              title="Two-level Drawer"
              width={320}
              closable={false}
              onClose={onChildrenDrawerClose}
              open={childrenDrawer}
            >
              以下内容正在补充
            </Drawer>
          </Drawer>
          </Col>
        </Row> */}
      </div>
    </section>
  );
}
