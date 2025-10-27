export interface LinksType {
	label?: string;
	url?: string;
}
export interface ButtonType {
	label?: string;
	variant?: ButtonVariant;
	customCls?: string;
	getClickAction?: () => void;
}
type ButtonVariant = 'primary' | 'secondary';

export interface FeatureCardType {
	icon?: string;
	head?: string;
	desc?: string;
}
export interface LinkBtnType {
	label?: string;
	icon?: string;
}
export interface TestimonialCardType {
	reviewText: string;
	userImg?: string;
	userName: string;
	roleName: string;
	companyName: string;
}
export interface AccessCardType {
	head?: string;
	desc?: string;
}
export interface InputType {
	label?: string;
	placeholder?: string;
	type?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	disabled?: boolean;
	className?: string;
}
export interface ProductivityType {
	productiveImg?: string;
	head?: string;
	desc?: string;
	btnLabel?: string;
	linkBtnArr?: string;
}
export interface HeroType {
	heroBg?: string;
	heroImg?: string;
	head?: string;
	desc?: string;
}
export interface FooterItemType {
	icon?: string;
	desc?: string;
}
export interface RoundButtonType {
	getActionFn?: () => void;
	icon?: string;
}
