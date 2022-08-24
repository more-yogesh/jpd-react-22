import logo from './logo.svg';
import './App.css';
import Product from './component/product/product.compoent'
import Counter from './component/counter/couter';
import Greet from './Greet/greet.component';
import State from './component/ManageState/state';

const App = () => {

  const Pass = () => {
    return (
      <div>
        <h1>Great! You'r pass</h1>
      </div>
    )
  }

  const Fail = () => {
    return (
      <div>
        <h1>Sorry! You'r Fail</h1>
      </div>
    )
  }

  const Status = ({ marks }) => {
    // if (marks > 35) {
    //   return <Pass />
    // }
    // return <Fail />
    return marks > 35 ? <Pass /> : <Fail />
  }

  const players = ['sachin', 'kohli', 'sehwag', 'yogesh', 'more', 'darwin'];

  let oldCss = { backgroundColor: 'green', border: '10px solid' }

  return (
    <div>
      <State />
      {/* <h1 style={{ ...oldCss, margin: '10px', border: '5px solid gray' }}>
        Giant Red Heading
      </h1> */}
      {/* <h1 style={oldCss}>I am internal</h1>
      <Status marks={30} />
      <Status marks={40} />
      <ul>
        {
          players.map((player, keyIndex) => {
            return <li key={keyIndex}>{player}</li>
          })
        }
      </ul>
      <Greet /> */}
      {/* 
        <Product />
        <Counter />
      */}

    </div>
  );
}

export default App;