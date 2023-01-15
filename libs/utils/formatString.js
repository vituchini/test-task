const formatString = (string) => {
	return string
		.replace(/_/g, ' ')
		.replace(/(^\w|\s\w)/g, (firstCharOfWord) => firstCharOfWord.toUpperCase())
}

export default formatString
