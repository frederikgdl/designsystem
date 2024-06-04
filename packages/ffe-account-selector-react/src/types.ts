export type Locale = 'nb' | 'nn' | 'en';

export interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: string;
    balance?: number;
}
