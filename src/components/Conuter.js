import React, { 
  useState,
  useEffect,
} from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  // componentDidMount, componentDidUpdate와 유사.
  // useEffect의 2번째 인자에 Array형태의 값을 설정해주면 해당 값이 변할때만 useEffect가 발동한다.
  // 즉 useEffect의 2번째 인자가 설정되어 있지 않으면, 해당 컴포넌트가 리렌더링될때마다 발생한다.
  useEffect(() => {
    // 이 함수는 render 가 마치고 난 다음에 실행됩니다!
    console.log(`useEffect rendered: ${value}`);
  }, [value]);

  console.log(`rendering: ${value}`);
  return (
    <div>
      <span>
        `${value}번 누르셨습니다.`
      </span>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  )
}

export default Counter;