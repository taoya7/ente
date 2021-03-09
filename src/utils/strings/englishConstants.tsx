import { template } from './vernacularStrings';

/**
 * Global English constants.
 */
const englishConstants = {
    COMPANY_NAME: 'ente',
    LOGIN: 'login',
    SIGN_UP: 'sign up',
    NAME: 'name',
    ENTER_NAME: 'your name',
    EMAIL: 'email',
    ENTER_EMAIL: 'email',
    DATA_DISCLAIMER: `we'll never share your data with anyone else.`,
    SUBMIT: 'submit',
    EMAIL_ERROR: 'enter a valid email',
    REQUIRED: 'required',
    VERIFY_EMAIL: 'verify email',
    EMAIL_SENT: ({ email }) => (
        <p>
            we have sent a mail to <b>{email}</b>
        </p>
    ),
    CHECK_INBOX: 'please check your inbox (and spam) to complete verification',
    ENTER_OTT: 'verification code',
    RESEND_MAIL: 'did not get email?',
    VERIFY: 'verify',
    UNKNOWN_ERROR: 'something went wrong, please try again',
    INVALID_CODE: 'invalid verification code',
    SENDING: 'sending...',
    SENT: 'sent!',
    ENTER_PASSPHRASE: 'enter your password',
    RETURN_PASSPHRASE_HINT: 'password',
    SET_PASSPHRASE: 'set password',
    VERIFY_PASSPHRASE: 'sign in',
    INCORRECT_PASSPHRASE: 'incorrect password',
    ENTER_ENC_PASSPHRASE:
        'please enter a password that we can use to encrypt your data',
    PASSPHRASE_DISCLAIMER: () => (
        <p>
            we don't store your password, so if you forget,
            <strong> we will not be able to help you</strong> recover your data.
        </p>
    ),
    PASSPHRASE_HINT: 'password',
    PASSPHRASE_CONFIRM: 'password again',
    PASSPHRASE_MATCH_ERROR: `passwords don't match`,
    CONSOLE_WARNING_STOP: 'STOP!',
    CONSOLE_WARNING_DESC: `This is a browser feature intended for developers. Please don't copy-paste unverified code here.`,
    SELECT_COLLECTION: `select an album to upload to`,
    CREATE_COLLECTION: `create album`,
    CLOSE: 'close',
    NOTHING_HERE: `nothing to see here, yet 👀`,
    UPLOAD: {
        0: 'preparing to upload',
        1: 'reading google metadata files',
        2: 'uploading your files',
        3: 'files uploaded successfully!',
    },
    OF: 'of',
    SUBSCRIPTION_EXPIRED:
        'your subscription has expired, please renew it form the mobile app',
    STORAGE_QUOTA_EXCEEDED:
        'you have exceeded your storage quota, please upgrade your plan from the mobile app',
    INITIAL_LOAD_DELAY_WARNING: 'the first load may take some time',
    USER_DOES_NOT_EXIST: 'sorry, could not find a user with that email',
    UPLOAD_BUTTON_TEXT: 'upload',
    NO_ACCOUNT: "don't have an account?",
    ALBUM_NAME: 'album name',
    CREATE: 'create',
    DOWNLOAD: 'download',
    TOGGLE_FULLSCREEN: 'toggle fullscreen',
    ZOOM_IN_OUT: 'zoom in/out',
    PREVIOUS: 'previous (arrow left)',
    NEXT: 'next (arrow right)',
    NO_INTERNET_CONNECTION:
        'please check your internet connection and try again',
    TITLE: 'ente.io | encrypted photo storage',
    WELCOME: 'welcome to ente!',
    UPLOAD_FIRST_PHOTO: 'backup your first photo',
    INSTALL_MOBILE_APP: () => (
        <div>
            install our{' '}
            <a href="https://play.google.com/store/apps/details?id=io.ente.photos">
                android
            </a>{' '}
            or{' '}
            <a href="https://apps.apple.com/in/app/ente-photos/id1542026904">
                ios app{' '}
            </a>
            to automatically backup all your photos and videos
        </div>
    ),
    LOGOUT: 'logout',
    LOGOUT_WARNING: 'sure you want to logout?',
    CANCEL: 'cancel',
};

export default englishConstants;
