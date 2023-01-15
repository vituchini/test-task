import { Colors } from './colors'
import { Images } from './images'
import { Gutters } from './gutters'
import { Gifs } from './gifs'
import { hideScrollbar } from './mixins'

const colorsLight = {
	primary: Colors.primary,
	black: Colors.black,
	background: Colors.background,
	white: Colors.white,
	textSlate: Colors.textSlate,
	secondary: Colors.secondary,
	tertiary: Colors.tertiary,
	badge: Colors.badge,
	text: Colors.text,
	statusbar: Colors.statusbar,
	rating: Colors.rating,
	textBsLight: Colors.textBsLight,
}

const gutters = {
	small: Gutters.small,
	tiny: Gutters.tiny,
	medium: Gutters.medium,
	regular: Gutters.regular,
	large: Gutters.large,
	xlarge: Gutters.xlarge,
	xxlarge: Gutters.xxlarge,
	xxxlarge: Gutters.xxxlarge,
	xsmall: Gutters.xsmall,
}

export const lightTheme = {
	colors: colorsLight,
	gutters,
	images: Images,
	gifs: Gifs,
	hideScrollbar,
}
export const darkTheme = {
	colors: colorsLight,
	gutters,
	images: Images,
	gifs: Gifs,
	hideScrollbar,
}
