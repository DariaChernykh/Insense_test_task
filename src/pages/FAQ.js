import React, {useState} from "react";
import {Answers} from "../components/Answers";
import {Tabs} from "../components/Tabs";

const MOCK_ANSWERS = {
    'issues': {
        titles: ['What moderation means?', 'How to register and start working with the app?', 'What moderation means?'],
        content: 'If you don’t have a social profile, make sure that your profile section is filled out with your best work. Not having a social profile will limit your campaign offers, but it’s still possible to get projects on Insense without an active social presence.\n' +
            'If you don’t have a social profile, make sure that your.'
    },
    'steps': {
        titles: ['What moderation means?', 'How to register and start working with the app?', 'Who can become an Insense user?'],
        content: 'is ideal for Instagram or YouTube creators. If you do not have an account on these platforms, you are still welcome to join Insense - the main thing we’re after is the ability to create high quality content. is ideal for Instagram or YouTube creators. If you do not have an accountnt.'
    },
    'payment': {
        titles: ['How can I be sure that I will be paid?', 'What’s the payment process?', 'Is my income at Insense being taxed?'],
        content: 'All brands working on Insense have pre-paid for creator content. When a brand approves you for working on a campaign, the agreed-upon payment amount is immediately frozen on the brand’s account. As soon as you complete your project with the brand, your payment'
    },
}

export default () => {
    const [active, setActive] = useState('issues')
    const TABS = [
        {
            name: 'Authorization Issues',
            active: active === 'issues',
            onClick: () => setActive('issues')
        },
        {
            name: 'The first steps',
            active: active === 'steps',
            onClick: () => setActive('steps')
        },
        {
            name: 'Payment',
            active: active === 'payment',
            onClick: () => setActive('payment')
        }
    ]
    return (
        <>
            <Tabs tabs={TABS}/>
            <Answers answers={MOCK_ANSWERS[active]}/>
        </>
    );
}
