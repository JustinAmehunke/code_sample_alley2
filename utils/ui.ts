
export const formatNumber = (num: number) => {
    return num.toLocaleString();
};

export const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}


type TelegramWindow = Window & typeof globalThis & {
    Telegram?: {
        WebApp?: {
            HapticFeedback: {
                impactOccurred: (style: 'light' | 'medium' | 'heavy') => void;
            };
        };
    };
};

export function triggerHapticFeedback(
    telegramWebApp: TelegramWindow | Window = window,
    style: 'light' | 'medium' | 'heavy' = 'medium'
) {
    if (!telegramWebApp) return;

    const vibrationEnabled = localStorage.getItem('vibrationEnabled') !== 'false';
    if (!vibrationEnabled) return;

    const hapticFeedback = (telegramWebApp as TelegramWindow).Telegram?.WebApp?.HapticFeedback;
    if (hapticFeedback?.impactOccurred) {
        hapticFeedback.impactOccurred(style);
    }
}
