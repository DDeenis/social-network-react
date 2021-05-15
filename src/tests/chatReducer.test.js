import chatReducer, { createMessageCreator } from "../redux/chatReducer";

/* eslint-disable no-undef */
const state = {
    messages: [
        { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
        { name: 'Me', message: 'I am a normal pBLablabl I can have text and everything' },
        { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
        { name: 'Me', message: 'I am a normal popover and I can have text and everything' }
    ]
};

describe('add message', () => {
    const result = chatReducer(state, createMessageCreator('test'));

    it('new message should be added', () => {
        expect(result.messages.length).toBe(5);
    });

    it('new message content should be added', () => {
        const messages = [
            { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
            { name: 'Me', message: 'I am a normal pBLablabl I can have text and everything' },
            { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
            { name: 'Me', message: 'I am a normal popover and I can have text and everything' },
            { name: 'Me', message: 'test' }
        ]

        expect(result.messages).toStrictEqual(messages);
    });
});
