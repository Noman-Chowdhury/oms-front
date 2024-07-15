export function useObfuscateEmail() {
    const obfuscateEmail = (email) => {
        const [localPart, domain] = email.split('@');
        const firstTwoChars = localPart.slice(0, 2);
        const lastChar = localPart.slice(-1);
        const obfuscatedLocalPart = `${firstTwoChars}******${lastChar}`;
        return `${obfuscatedLocalPart}@${domain}`;
    };

    return { obfuscateEmail };
}
