/* eslint-disable no-console */

import React from 'react';

type Props = {
  name: number;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  interval = setInterval(() => {
    this.setState({ time: new Date() });
    console.log(this.state.time.toLocaleTimeString());
  }, 1000);

  componentDidUpdate(previousProps: Props) {
    const previousName = previousProps.name;

    if (previousName !== this.props.name) {
      console.log(`Clock was renamed from ${previousName} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <>
        <div>
          <h3 className="display-2 text-center">
            {`Clock №${name}`}
          </h3>
          <p className="display-2 text-primary text-center">
            {time.toLocaleTimeString()}
          </p>
        </div>
      </>
    );
  }
}
