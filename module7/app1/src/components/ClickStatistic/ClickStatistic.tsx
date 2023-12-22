import React from 'react';

interface IState {
  count: number;
}

export class ClickStatistic extends React.Component<{}, IState> {
  state: IState = {
    count: 0,
  };

  heandleClick = (value: number): void =>
    this.setState(({ count }) => ({ count: count + value }));

  render() {
    const { count } = this.state;
    return (
      <section>
        <h1>{count}</h1>
        <button
          type="button"
          onClick={() => this.heandleClick(1)}
          disabled={count === 10}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => this.heandleClick(-1)}
          disabled={count === 0}
        >
          Decrement
        </button>
      </section>
    );
  }

  // heandleIncrement = (value: number): void =>
  //   this.setState(prevState =>
  //     prevState.count === 10
  //       ? { count: 10 }
  //       : { count: prevState.count + value }
  //   );

  // heandleDecrement = (value: number): void =>
  //   this.setState(prevState =>
  //     prevState.count === 0 ? { count: 0 } : { count: prevState.count - value }
  //   );

  // render() {
  //   return (
  //     <section>
  //       <h1>{this.state.count}</h1>
  //       <button
  //         onClick={() => this.heandleIncrement(1)}
  //         type="button"
  //         disabled={this.state.count === 10}
  //       >
  //         Increment
  //       </button>

  //       <button
  //         onClick={() => this.heandleDecrement(1)}
  //         type="button"
  //         disabled={this.state.count === 0}
  //       >
  //         Decrement
  //       </button>
  //     </section>
  //   );
  // }
}
