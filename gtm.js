import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
};

export const initGTM = () => {
    TagManager.initialize(tagManagerArgs);
};
