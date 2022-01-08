import { Component, ReactNode } from "react";

interface CounterProps {
    //countDownDate: Date;
    activateMint: () => void;
}

class Counter extends Component<CounterProps> {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    timer: NodeJS.Timeout | undefined;

    componentDidMount() {
        this.updateTime();
        this.timer = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    clearTimer = () => {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    updateTime = () => {
        const now = new Date().getTime();
        //Number(new Date(date you want))
        const mintTime = new Date(parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10)).getTime();
        const distance = mintTime - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.setState({ days, hours, minutes, seconds });
        if (distance <= 0) {
            this.clearTimer();
            this.props.activateMint();
        }
    }

    render(): ReactNode {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <span>
                {days}d {hours}h {minutes}m {seconds}s
            </span>
        );
    }
}

export default Counter;
