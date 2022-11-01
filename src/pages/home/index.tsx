import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store/index'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Chart } from '@antv/g2';
import { Progress } from 'antd';
import styles from './index.module.less'

const Home = () => {
  const { configStore } = useStore()
  const [collapsed, setCollapsed] = useState(configStore.collapsed);

  // 监听侧边栏变化
  useEffect(() => {
    setTimeout(() => {
      setCollapsed(configStore.collapsed);
    }, 300)
  }, [configStore.collapsed])

  // chart1
  useEffect(() => {
    const data = [
      { year: '1991', value: 354 },
      { year: '1992', value: 291 },
      { year: '1993', value: 259 },
      { year: '1994', value: 334 },
      { year: '1995', value: 270 },
      { year: '1996', value: 230 },
      { year: '1997', value: 319 },
      { year: '1998', value: 360 },
      { year: '1999', value: 332 },
    ];
    const tempNode = document.getElementById('chart1')
    const child = tempNode?.lastElementChild
    if (child) {
      tempNode.removeChild(child)
    }
    const chart = new Chart({
      container: 'chart1',
      autoFit: true,
    });

    chart.data(data);
    chart.scale({
      value: {
        min: 10000,
        nice: true,
      },
      year: {
        range: [0, 1],
      },
    });
    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis(false);

    chart.area().position('year*value');
    chart.line().position('year*value').shape('smooth');;

    chart.theme({ "styleSheet": { "brandColor": "#FF4500", "paletteQualitative10": ["#FF4500", "#1AAF8B", "#406C85", "#F6BD16", "#B40F0F", "#2FB8FC", "#4435FF", "#FF5CA2", "#BBE800", "#FE8A26"], "paletteQualitative20": ["#FF4500", "#1AAF8B", "#406C85", "#F6BD16", "#B40F0F", "#2FB8FC", "#4435FF", "#FF5CA2", "#BBE800", "#FE8A26", "#946DFF", "#6C3E00", "#6193FF", "#FF988E", "#36BCCB", "#004988", "#FFCF9D", "#CCDC8A", "#8D00A1", "#1CC25E"] } });
    chart.render();
  }, [collapsed])

  // chart2
  useEffect(() => {
    const data = [
      { type: '1', value: 2400, },
      { type: '2', value: 654 },
      { type: '3', value: 3400 },
      { type: '4', value: 5300 },
      { type: '5', value: 3200 },
      { type: '6', value: 5300 },
      { type: '7', value: 3500 },
      { type: '8', value: 6500 },
      { type: '9', value: 1500 },
      { type: '10', value: 4500 },
      { type: '11', value: 5500 },
      { type: '12', value: 2500 },
      { type: '13', value: 4500 },
      { type: '14', value: 5500 },
      { type: '15', value: 2500 },
    ];

    const tempNode = document.getElementById('chart2')
    const child = tempNode?.lastElementChild
    if (child) {
      tempNode.removeChild(child)
    }
    const chart = new Chart({
      container: 'chart2',
      autoFit: true,
      padding: [5],
    });
    chart.data(data);
    chart.scale('value', {
      alias: '销售额(万)',
    });

    chart.axis(false);

    chart.tooltip({
      showMarkers: false,
    });
    chart.interval().position('type*value');
    chart.interaction('element-active');

    // 添加文本标注
    data.forEach(() => {
      chart
        .annotation();
    });
    chart.render();
  }, [collapsed])

  // chart3
  useEffect(() => {
    const data = [
      { type: '1月', value: 2400, },
      { type: '2月', value: 654 },
      { type: '3月', value: 3400 },
      { type: '4月', value: 5300 },
      { type: '5月', value: 3200 },
      { type: '6月', value: 5300 },
      { type: '7月', value: 3500 },
      { type: '8月', value: 6500 },
      { type: '9月', value: 1500 },
      { type: '10月', value: 4500 },
      { type: '11月', value: 5500 },
      { type: '12月', value: 2500 },
    ];

    const tempNode = document.getElementById('chart3')
    const child = tempNode?.lastElementChild
    if (child) {
      tempNode.removeChild(child)
    }
    const chart = new Chart({
      container: 'chart3',
      autoFit: true,
      height: 480,
      // padding: [5],
    });
    chart.data(data);
    chart.scale('value', {
      nice: true,
    });

    chart.tooltip({
      showMarkers: false
    });
    chart.interaction('active-region');
    chart.interval().position('type*value');
    chart.render();
  }, [collapsed])

  return (
    <div className="w-full h-full">
      <div className={styles.analysis_header}>
        <div className={styles.analysis_item + ' cs-card'}>
          <p className="flex justify-between items-center text-sm text-zinc-500">
            <span>总销售额</span>
            <InfoCircleOutlined />
          </p>
          <h1 className='text-3xl'>¥ 216,427</h1>
          <div className={styles.items_chart}>
            <p className={styles.items_decrease}>
              <span className='mr-8'>周同比 12%</span>
              <span>日同比 11%</span>
            </p>
          </div>
          <div className='text-sm mt-3 text-black'>日销售额 ¥ 23,126</div>
        </div>

        <div className={styles.analysis_item + ' cs-card'}>
          <p className="flex justify-between items-center text-sm text-zinc-500">
            <span>访问量</span>
            <InfoCircleOutlined />
          </p>
          <h1 className='text-3xl'>7,698</h1>
          <div className={styles.items_chart + ' pb-6'} id="chart1"></div>
          <div className='text-sm mt-3 text-black'>日访问量 1,126</div>
        </div>

        <div className={styles.analysis_item + ' cs-card'}>
          <p className="flex justify-between items-center text-sm text-zinc-500">
            <span>支付笔数</span>
            <InfoCircleOutlined />
          </p>
          <h1 className='text-3xl'>6,427</h1>
          <div className={styles.items_chart + ' pb-2'} id="chart2"></div>
          <div className='text-sm mt-3 text-black'>转换率 66%</div>
        </div>

        <div className={styles.analysis_item + ' cs-card'}>
          <p className="flex justify-between items-center text-sm text-zinc-500">
            <span>运营活动效果</span>
            <InfoCircleOutlined />
          </p>
          <h1 className='text-3xl'>78%</h1>
          <div className={styles.items_chart + ' pb-6'}>
            <Progress percent={66} steps={10} showInfo={false} />
          </div>
          <div className='text-sm mt-3 text-black'>
            <div className={styles.items_decrease}>
              <span className='mr-8'>周同比 12%</span>
              <span>日同比 11%</span>
            </div>
          </div>
        </div>
      </div>
      <div className='cs-card'>
        <div className={styles.sales_header + ' pb-2 mb-3'}>销售量</div>
        <div id="chart3"></div>
      </div>
    </div>
  )
}

export default observer(Home)
