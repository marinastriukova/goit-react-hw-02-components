import { Component } from 'react';
import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        }
        total= 0;
        positivePercentage= 0;
        notification= false;


    countTotalFeedback() {
        this.setState(state => ({
            total: state.good + state.neutral + state.bad
        }))
    }

    countPositiveFeedbackPercentage() {
        this.setState(state => ({
            positivePercentage: Math.round((state.good * 100) / state.total)
        }))
    }

    onLeaveFeedback = options => {
        this.setState(state => ({
            [options]: state[options] + 1,
            notification: true
        }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage();
    }

    render() {
        return (
            <>
                <Section title='Please leave feedback'>
                    <FeedbackOptions
                        options='button'
                        onButtonClick={this.onLeaveFeedback}
                    ></FeedbackOptions>
                </Section>
                <Section title='Statistics'>
                    {this.state.notification ?
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.state.total}
                            positivePercentage={this.state.positivePercentage}
                        >
                        </Statistics>
                        :
                        <Notification message="No feedback given"></Notification>}
                </Section>
            </>
        )
    }
}

