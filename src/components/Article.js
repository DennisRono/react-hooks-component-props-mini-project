const minutesToEmoji = (minutes) => {
    const coffee = '\u{2615}'
    const bento = '\u{1F371}'

    if (minutes <= 30) {
        const divideBy5 = minutes / 5
        const hasRemainder = minutes % 5
        const needsRounding = divideBy5 === hasRemainder ? divideBy5 : divideBy5 + 1
        const howMany = coffee.repeat(needsRounding)
        return howMany
    } else {
        const divideBy10 = minutes / 10
        const hasRemainder = minutes % 10
        const needsRounding = divideBy10 === hasRemainder ? divideBy10 : divideBy10 + 1
        const howMany = bento.repeat(needsRounding)
        return  howMany
}}

const Article = ({ title, date = 'January 1, 1970', preview, minutes }) => {
	return (
		<article>
			<h3>{title}</h3>
			<small>
				{date}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{minutesToEmoji(minutes)} Time to read {minutes} minutes
			</small>
			<p>{preview}</p>
		</article>
)}

export default Article