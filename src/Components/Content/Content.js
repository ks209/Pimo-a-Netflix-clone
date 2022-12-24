import './content.css';
import RowData from '../Constants/URLS';
import Row from '../Row/Row';

export default function Content() {
  return (
    <div className='content-wrapper'>

      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}

      
    </div>
  );
}

