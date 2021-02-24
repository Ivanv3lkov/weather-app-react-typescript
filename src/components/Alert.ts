import { message } from 'antd';

export const success = () => {
    message.success('This is a success message!');
};

export const error = (currentMessage: string) => {
    message.error(currentMessage);
};


